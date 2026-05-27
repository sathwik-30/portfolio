const express=require("express")
const cors=require("cors")

const a=require("./routes/projects")
const b=require("./routes/contact")

const c=express()

c.use(cors())
c.use(express.json())

c.use("/projects",a)
c.use("/contact",b)

c.listen(
5000,
()=>
{
console.log("SERVER RUNNING")
}
)