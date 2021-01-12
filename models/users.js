const {MongoClient} = require('mongodb')
const faker=require('faker')
const MONGO_URL =  "mongodb+srv://shubham:123456sd@cluster0.ureon.mongodb.net/dbuser"


MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const dbuser = client.db("dbuser")
  const users = dbuser.collection("users")
  const transactions=dbuser.collection("transactions")

  users.insertMany([
    {
      name: "Ram",
      Account_balance: 30000,
      Email_id: "ram@gmail.com",
      FatherName:"Ram's Dad"
      
    },
    {
        name: "Shubham",
        Account_balance: 3000,
        Email_id: "shubham@gmail.com",
      FatherName:"Shubham's Dad"
      },
      {
        name: "Raghav",
        Account_balance: 2000,
        Email_id: "raghav@gmail.com",
      FatherName:"Raghav's Dad"
      },
      {
        name: "Shyam",
        Account_balance: 35000,
        Email_id: "shyam@gmail.com",
      FatherName:"Shyam's Dad"
      },
      {
        name: "Keshav",
        Account_balance: 5300,
        Email_id: "keshav@gmail.com",
      FatherName:"Keshav's Dad"
      },
      {
        name: "Sameer",
        Account_balance: 6300,
        Email_id: "sameer@gmail.com",
      FatherName:"Sameer's Dad"
      },
      {
        name: "Nayan",
        Account_balance: 3900,
        Email_id: "nayan@gmail.com",
      FatherName:"Nayan's Dad"
      },
      {
        name: "Dhruv",
        Account_balance: 3400,
        Email_id: "druv@gmail.com",
      FatherName:"Dhruv's Dad"
      },
      {
        name: "Harsh",
        Account_balance: 4000,
        Email_id: "harsh@gmail.com",
      FatherName:"Harsh's Dad"
      },
      {
        name: "Gaurav",
        Account_balance: 3200,
        Email_id: "gaurav@gmail.com",
      FatherName:"Gaurav's Dad"
      },
  ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA INSERTED")
  })
})
