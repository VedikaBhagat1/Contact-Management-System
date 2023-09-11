const express = require("express");
const con = require("./conn");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/addcontact", (req, res) => {
  sql = "INSERT INTO `contacts` (`Name`, `Phone`, `Email`) VALUES (?);";
  const data = [req.body.name, req.body.number, req.body.email];

  con.query(sql, [data], (result, err) => {
    if (err) {
      console.log(err);
      res.json(err);
    } 
  });
});

app.get("/table", (req, res) => {
  sql = "SELECT `Id`, `Name`, `Phone`, `Email` FROM `contacts`;";
  con.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/delContact", (req, res) => {
  let email = req.body.email;
  sql = "DELETE FROM `contacts` WHERE `email`= ? ;";

  con.query(sql, email, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: "success" });
    }
  });
});

app.post("/updateContact", (req, res)=>{

    sql="UPDATE `contacts` SET `Name`=?,`Phone`=?,`Email`=? WHERE `Id`=? ;";
    data =[
         req.body.name, req.body.number, req.body.email,req.body.id
    ];

    con.query(sql, data, (result, err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({status: 'success'})
        }
    })
})

app.listen(8080);
