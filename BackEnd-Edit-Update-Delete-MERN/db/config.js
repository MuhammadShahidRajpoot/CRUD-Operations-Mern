const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors')

const dbConnection = async() =>{    
    try {        
        // let conn = await mongoose.connect("mongodb://127.0.0.1:27017/usersData")
        let conn = await mongoose.connect(process.env.DB_URL)
        console.log(`Database connected  on Host ${conn.connection.host}`.bgMagenta)
    } catch (error) {
        console.log("Error in connection")
    }
}
module.exports = dbConnection;

// mongoose.connect("mongodb://127.0.0.1:27017/usersData")


