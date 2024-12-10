const express=require('express')
const app=express()
const cors = require('cors');


app.use(cors());
app.use(express.json())


const Students={
    Arjun:{
        FullName:"Divraniya Arjun" ,
        userid:"24BTCSE050",
        course:"B.TECH CSE",
        sem:"1"
    },
    Jagjeet:{
        FullName:"Dangar Jagjeet" ,
        userid:"24BTCSE051",
        course:"B.TECH CSE",
        sem:"1"
    },
   Kashyap:{
    FullName:"Dhamecha Kashyap" ,
        userid:"24BTCSE052",
        course:"B.TECH CSE",
        sem:"1"
    },
   Dhruvil:{
    FullName:"Patel Dhruvil" ,
        userid:"24BTCSE053",
        course:"B.TECH CSE",
        sem:"1"
    },
    Dhruvesh:{
        FullName:"Shyara Dhruvesh" ,
        userid:"24BTCSE054",
        course:"B.TECH CSE",
        sem:"1"
    },

}

const tum1=[
    {id:1,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",title:"Bulbuli | Coke Studio Bangala | Season one | Ritu Raj X Nandita",subtitle1:"Coke Studio Bangala",subtitle2:"1.5M views 2 days ago"},
    {id:2,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"infinic Note 12: AMOLED Hello G88 SoC",subtitle1:"ATC Android ToTo Com.",subtitle2:"4.2M views 2 days ago"},
    {id:3,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",title:"My First UX Design case study-This Got Me My first Job",subtitle1:"Saprashi prakash",subtitle2:"4.8k views 1 years ago"},
    {id:4,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",title:"My Mix",subtitle1:"Lopamudra Mitra ",subtitle2:"Anupam Roy"},
    {id:5,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",title:"UX Design -What is it? (From AJ & Smart)",subtitle1:"AJ &Smart",subtitle2:"150M views 3 years ago"},
    {id:6,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",title:"Mix -mombati|Mohan Sarif|Dhakaiya Dose| Mohib Ahsanft ",subtitle1:"mohan Sharif , Odd Signature,Shayan",subtitle2:"Chowdhury and more"},
    {id:7,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",title:"48 VISA -FREE",subtitle1:"NAdir On the go",subtitle2:"1.7 M views 1years ago"},
    {id:8,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",title:"14 Advanced Tips  to design Faster in Figma",subtitle1:"Mizko",subtitle2:"53k views 1 day ago"},
    {id:9,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Third Class Muvie Pushpa 2 || GENUINS Reviews",subtitle1:"Sunny Bhavsar",subtitle2:"1.3k views 2 hours ago"},
    {id:10,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",title:"Glass Animal |Heat Weves",subtitle1:"Taj Tracks",subtitle2:"2.2M views 1 years ago"},
    {id:11,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",title:"Jatt Mehkana By Yo Yo Honey Singh",subtitle1:"Goku Uchiha Edits",subtitle2:"50k view 2days ago"},
    {id:12,tum:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",logo:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",title:"The Weekend- Star boy (Slowed and Reverb)",subtitle1:"MeloyHub",subtitle2:"1.9M Views 1 years ago"},
]
const sec1= [
    {id:1,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true",text:"Home"},
    {id:2,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true",text:"Explore"},
    {id:3,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true",text:"Shorts"},
    {id:4,Image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true",text:"Subscription"}
]
const sec2 =[
    {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true",text:"Library"},
    {id:2,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true",text:"History"},

    {id:3,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true",text:"Your Video"},
    {id:4,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true",text:"Watch Leter"},
    {id:5,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true",text:"Liked Video"},
    {id:6,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true",text:"See More"},

]
const sec3=[
{id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",text:"Nadir On The Go"},
{id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",text:"Coke Studio Bangla"},
{id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",text:"MKBSD"},
{id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",text:"Figma"},
{id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",text:"ATC Android ToTo"},
{id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",text:"Alus.com"},
]


app.get('/tum1',(req,res) => {
  
    res.json(tum1)
})

app.get('/Sidebar/Sec1',(req,res) => {
  
    res.json(sec1)
   

})

app.get('/Sidebar/Sec2',(req,res) => {
  
    res.json(sec2)
   

})

app.get('/Sidebar/Sec3',(req,res) => {
  
    res.json(sec3)
   

})


app.get('/tum1/title',(req,res) => {
    const titles=tum1.map(item=>item.title)
    res.json(titles)
   

})
app.get('/tum1/tum',(req,res)=> {
    const tum=tum1.map(i=>i.tum)
    res.json(tum)
})

app.get('/tum1/logo',(req,res)=> {
const logos=tum1.map(Logo=>Logo.logo)
res.json(logos)

})






// app.get('/tum1/title' ,(req,res)=>{
//     const tum1=tum1[req.params.title]
//     if(tum1){
//         res.json(tum1[2].title)
//     }else{
//         res.status(404).send('student not found')
//     }
// })

// app.post('/Students', (req,res) =>{
//     const { name,FullName, userid,course,sem}=req.body


//     if(Students[name]){
//     return res.status(404).send("course alredy exist")
//     }
//     Students[name]={name , FullName ,userid ,course ,sem}
//     res.status(202).send(`Students ${name} creted`)

// })

const PORT =3000;
app.listen(PORT ,() => {
    console.log(`Server running on port ${PORT}`)
})