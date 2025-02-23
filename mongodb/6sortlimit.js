db.inventory.find().limit(1);

db.inventory.find().skip(1);
db.inventory.find().sort({qty:1}); //ascending order
db.inventory.find().sort({qty:-1}); //descending order
// using pagination using mongodb find limit
// // page no 
// // 1 to 10
// no= 8
// db.inventory.find().skip((pageno-1)*no).limit(no)

// pageno =1 db.inventory.find().skip((pageno-1)*no).limit(no)

// mongodb+srv://duamanu2003:Manu@090@manudua.b4z45.mongodb.net/
//mongodb operator