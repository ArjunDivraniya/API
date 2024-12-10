const express = require("express");
const app = express();
app.use(express.json());

const cors=require("cors");


app.use(cors()) // Use this after the variable declaration


let studentsData = {
    "Rahul_Sharma": {
      email: "rahul.sharma@codinggita.com",
      websites: [
        "http://rahuls-portfolio.com",
        "http://rahulblogs.com",
        "http://rahulprojects.com"
      ]
    },
    "Anjali_Mehta": {
      email: "anjali.mehta@codinggita.com",
      websites: [
        "http://anjalisdesigns.com",
        "http://anjalitech.com",
        "http://anjalicode.com"
      ]
    }
  };


  app.get("/studentsData", (req, res) => {
    res.json(studentsData);
  });

  app.get("/studentsData/:name", (req, res) => {
    const studentData = studentsData[req.params.name];
   
    if (studentData) {
     
    res.json(studentData);
    
    } else {
      res.status(404).send("studentData not found");
    }
  });

  app.get("/studentsData/:name/email", (req, res) => {
    const studentData = studentsData[req.params.name];
   
    if (studentData) {
     
    res.json(studentData.email);
    
    } else {
      res.status(404).send("studentData not found");
    }
  });

  app.get("/studentsData/:name/websites", (req, res) => {
    const studentData = studentsData[req.params.name];
   
    if (studentData) {
     
    res.json(studentData.websites);
    
    } else {
      res.status(404).send("studentData not found");
    }
  });

  app.post("/studentsData", (req, res) => {
    const { name , email, websites} = req.body;
    console.log(req.body)
    if (studentsData[name]) {
      return res.status(400).send("studentData already exists");
    }
    studentsData[name] = { email , websites};
    res.status(201).send(`studentData ${name} created`);
  });
  


  const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});