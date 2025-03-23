const axios = require("axios");

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const HEADERS = { Authorization: `Bearer ${API_KEY}` };

async function createTask(instructions) {
  try {
    const response = await axios.post(
      `${BASE_URL}/run-task`,
      { task: instructions },
      { headers: HEADERS }
    );
    return response.data.id;
  } catch (error) {
    console.error("❌ API Request Error:", error.message);
    return null;
  }
}

async function getTaskDetails(taskId) {
  try {
    const response = await axios.get(`${BASE_URL}/task/${taskId}`, {
      headers: HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error Fetching Task Details:", error.message);
    return {};
  }
}

async function waitForCompletion(taskId, timeout = 300000, pollInterval = 5000) {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    const details = await getTaskDetails(taskId);
    if (!details) {
      console.log("❌ Failed to fetch task details.");
      return {};
    }

    console.log(`⏳ Task Status: ${details.status}`);

    if (["finished", "failed", "stopped"].includes(details.status)) {
      return details;
    }
    await new Promise((resolve) => setTimeout(resolve, pollInterval));
  }

  console.log("❌ Task Timed Out.");
  return {};
}

module.exports = { createTask, getTaskDetails, waitForCompletion };