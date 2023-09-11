const mysql= require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    Password: "",
    database: "contacts",
});

/************CONNECTION CHECKING****************** */
//     con.connect((err)=>{
//     if(err)
//     {
//         console.log("connection failed")
//     }
//     else{
//         console.warn("connection successfull")
//     }
// });



  module.exports = con;