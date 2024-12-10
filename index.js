

fetch("http://localhost:8000/studentsData",{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer your-token'
    },
    body: JSON.stringify({
        "name":"jeet",
        "email":"arjundivraniya8@gmail.com",
         "websites":[
            "jeet.com",
            "bcd",
            "xyz"
         ]
    })
})

.then((response) => response.json())
.then((data) =>console.log(data))
.catch((error)=>console.log(error))