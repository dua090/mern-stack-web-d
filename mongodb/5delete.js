db.inventory.deleteMany({})
db.inventory.insertMany( [
    { _id: 1, student: "Richard", grade: "F", points: 0 },
    { _id: 2, student: "Jane", grade: "A", points: 60 },
    { _id: 3, student: "Adam", grade: "F", points:  0 },
    { _id: 4, student: "Ronan", grade: "D", points: 20 },
    { _id: 5, student: "Noah", grade: "F", points:  0 },
    { _id: 6, student: "Henry", grade: "A", points: 86 }
 ] )

// deleteremove return document || many returns boolean value