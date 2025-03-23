const Landlord = require("../models/Landlord");
const { createTask, waitForCompletion } = require("../utils/api");
const xlsx = require("xlsx");

async function getLandlords(req, res) {
  try {
    const { city, type, date } = req.query;
    let query = {};

    if (city) {
      query.city = { $regex: city, $options: "i" };
    }
    if (type) {
      query.type = type;
    }
    if (date) {
      query.date = {
        $gte: new Date(new Date(date).setHours(0, 0, 0, 0)),
        $lt: new Date(new Date(date).setHours(23, 59, 59, 999)),
      };
    }

    const landlords = await Landlord.find(query);
    res.json(landlords);
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ Error fetching landlords.", error: error.message });
  }
}

async function runScrape(req, res) {
  const { username, password } = req.body;

  const instructions = `
        Login: https://schoolprop.com/login/
        Username: ${username}
        Password: ${password}
        Provide details in JSON format, with each landlord or agent as a separate JSON object in an array.
        Include the following keys in each object:
        - "city": The city where the landlord or agent is located.
        - "type": The type of property (e.g., "land", "building").
        - "bts": A boolean indicating if the built-to-suit model is available (true/false).
        - "phone": The phone number of the contact.
        - "email": The email address of the contact.
        - "location": A more detailed location description.
        - "details": any other relevant information.
        Example JSON:
        [
          {
            "city": "Example City",
            "type": "land",
            "bts": true,
            "phone": "123-456-7890",
            "email": "example@email.com",
            "location": "Central Business District",
            "details": "Near main road"
          },
          {
            "city": "Another City",
            "type": "building",
            "bts": false,
            "phone": "987-654-3210",
            "email": "another@email.com",
            "location": "Residential Area",
            "details": "School Friendly"
          }
        ]
    `;

  const taskId = await createTask(instructions);
  if (!taskId) {
    return res.status(500).json({ message: "❌ Failed to create task." });
  }

  const taskDetails = await waitForCompletion(taskId);
  if (taskDetails.status === "finished" && taskDetails.output) {
    try {
      const outputJson = JSON.parse(taskDetails.output);
      await Landlord.insertMany(outputJson.map((item) => ({ ...item, date: new Date() })));
      res.json({ message: "✅ Scraping and data insertion complete." });
    } catch (error) {
      console.error("❌ Error Decoding JSON Output:", error.message);
      res
        .status(500)
        .json({ message: "❌ Error decoding JSON output.", error: error.message });
    }
  } else {
    res
      .status(500)
      .json({ message: `❌ Task failed or output is empty. Status: ${taskDetails.status}` });
  }
}

async function downloadLandlords(req, res) {
  try {
    const landlords = await Landlord.find({});
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(landlords);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Landlords");
    const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=landlords.xlsx");
    res.send(excelBuffer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ Error downloading data.", error: error.message });
  }
}

module.exports = { getLandlords, runScrape, downloadLandlords };
