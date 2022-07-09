const express = require('express')
const root = express()

root.use(express.json())



let data =
    [{
          "name" : "Indian History",
          "pages" : 320,
          "Author": "Rama Krisnan",
          "categories" : "History"

      },
      {
          "name" : "Indian Politics",
          "pages" : 320,
          "Author": "Netaji Subhas Chandra bos",
          "categories" : "Politics"

      },
      {
          "name" : "Indian Economy",
          "pages" : 320,
          "Author": "lal bahadur Sastri",
          "categories" : "Economy"

      },
      {
          "name" : "Physics",
          "pages" : 320,
          "Author": "Abdual Kalam",
          "categories" : "Science"

      },
   
    ]




root.use("/books",allbooks) // Middleaware for all books

root.use("/book/:name",singlebook) // middleaware for single book 

root.get("/",(req,res)=>{   // Home page 
    res.send("Hello")
})


root.get("/book/:name",(req,res)=>{       // single book
   console.log(req.params.name)

   let  singledata = data.filter((ele,tar)=>{
    return ele.name == req.params.name
})
res.send(singledata)
})

//root.listen(3000)
function allbooks(req,res,next)        // Middleaware function  for all books
{
    console.log("Feteching All Books")
    next()
}

function singlebook(req,res,next) // Middleaware function  for single book

{

    
  console.log(req.params.name)
  next()
}

//const book = express()
root.get("/books",(req,res)=>{    // get all books data
    res.send(data)
})
root.listen(3001)