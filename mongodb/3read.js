// Fetch all documents from the inventory collection
db.inventory.find()

// Fetch documents where the item field is equal to "canvas1"
db.inventory.find({ item: "canvas1" })

// Fetch documents where the tags field contains the value "cotton"
db.inventory.find({ tags: { $in: ["cotton"] } })

// Fetch documents where both the item field is equal to "canvas1" and the qty field is equal to 100
db.inventory.find({ item: "canvas1", qty: 100 })

// Fetch documents where either the status field is equal to "A" or the qty field is less than 30
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })

// Fetch documents where either the status field is equal to "A" or the qty field is equal to 30 or 90
db.inventory.find({ $or: [{ status: "A" }, { qty: { $in: [30, 90] } }] })