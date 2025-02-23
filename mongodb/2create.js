db.inventory.insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" },
});
// run this command in mogoshell to get started
db.inventory.insertMany([
  {
    item: "canvas1",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas2",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas3",
    qty: 100,
    tags: ["a",'b','c'],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas4",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas5",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 35.5, uom: "cm" },
  },
]);
