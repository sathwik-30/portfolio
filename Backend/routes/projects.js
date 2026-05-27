const express=require("express")

const a=express.Router()

const b=require("../db")

a.get(
"/",
(c,d)=>
{
b.query(
"SELECT * FROM projects",
(e,f)=>
{
if(e)
{
d.json(e)
}
else
{
d.json(f)
}
}
)
}
)

module.exports=a