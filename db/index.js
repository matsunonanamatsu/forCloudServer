const mysql=require('mysql2')
const db=mysql.createPool({
  host:'10.0.4.13',
  user:'root',
  password:'QinSMoonzc013',
  database:'matsunonanamatsu'
})

module.exports=db