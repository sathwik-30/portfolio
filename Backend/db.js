const mysql=require("mysql2")

const a=mysql.createConnection(
{
host:"localhost",
user:"root",
password:"ch_sathwik_15",
database:"portfolio"
}
)

a.connect(
(b)=>
{
if(b)
{
console.log(b)
}
else
{
console.log("MYSQL CONNECTED")
}
}
)

module.exports=a