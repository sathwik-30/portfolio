const express=require("express")

const a=express.Router()

const b=require("../db")

a.post(
"/",
(c,d)=>
{
const
{
name,
email,
message
}=c.body

b.query(
"INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
[name,email,message],
(e)=>
{
if(e)
{
d.json(e)
}
else
{
d.json(
{
message:"MESSAGE SAVED"
}
)
}
}
)
}
)

module.exports=a