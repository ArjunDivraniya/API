//import details

// api logic

//server deatails
//frontend:3000
//backend:5000,8000,5555
//alredy tecken slote are not use

const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

let courses = {
    frontend: {
      title: "Frontend Development",
      description: "Learn HTML, CSS, JavaScript...",
      ratings: [5, 4, 4.5],
    },
    backend: {
      title: "Backend Development",
      description: "Learn Node, Express, Database",
      ratings: [5, 5, 4.9],
      marks:"35"
    },
    figma: {
        title: "ux/ui design",
        description: "maths in figma",
        ratings: [
            1,
            2,
            1
        ],
        marks: "30"
    }
    
  };

  app.get("/courses", (req, res) => {
    res.json(courses);
  });

  

  app.get("/courses/:name/marks", (req, res) => {
    const course = courses[req.params.name];
   
    if (course) {
     
    res.json(course.marks);
    
    } else {
      res.status(404).send("Course not found");
    }
  });
  app.post("/courses", (req, res) => {
    const { name, title, description,marks  } = req.body;
    
    if (courses[name]) {
      return res.status(400).send("Course already exists");
    }
    courses[name] = { title, description, ratings: [] ,marks};
    res.status(201).send(`Course ${name} created`);
  });
  app.put("/courses/:name", (req, res) => {
    const { ratings,marks } = req.body;
    if (courses[req.params.name]) {
      courses[req.params.name].ratings = ratings;
      courses[req.params.name].marks = marks;
      
      res.send("Course updated");
    } else {
      res.status(404).send("Course not found");
    }
  });

 

  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});