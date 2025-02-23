db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true }
    }
 )


 db.inventory.find(
    { item: "paper" },
    {
      set: { "size.uom": "cm", status: "P" },
      currentDate: { lastModified: true }
    }
 )


 db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )