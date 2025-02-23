db.inventory.find() //fetch all docs
db.inventory.find({item:canvas1})
db.inventory.find({tags:{$in :['cotton']}})
// and mtlb dono
db.inventory.find( { item: "canvas1", qty: 100  } )
// or mtlb dono m se koi
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } ) //lt less than
// findone for pulling document we are not going to pull any kind of Array 
db.inventory.find( { $or: [ { status: "A" }, {qty: { $in: [30,90 ]} } ] } ) //lt less than