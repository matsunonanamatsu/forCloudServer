const fs=require('fs')

exports.forUniApp=(req,res)=>{
  const arr=[
    {id:1,name:'tarte',relative:'son',address:'myhouse'},
    {id:2,name:'kan',relative:'daughter',address:'myhouse'},
    {id:3,name:'matsuno',relative:'me',address:'myhouse'},
    {id:4,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:5,name:'tarte',relative:'son',address:'myhouse'},
    {id:6,name:'kan',relative:'daughter',address:'myhouse'},
    {id:7,name:'matsuno',relative:'me',address:'myhouse'},
    {id:8,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:9,name:'tarte',relative:'son',address:'myhouse'},
    {id:10,name:'kan',relative:'daughter',address:'myhouse'},
    {id:11,name:'matsuno',relative:'me',address:'myhouse'},
    {id:12,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:13,name:'tarte',relative:'son',address:'myhouse'},
    {id:14,name:'kan',relative:'daughter',address:'myhouse'},
    {id:15,name:'matsuno',relative:'me',address:'myhouse'},
    {id:16,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:17,name:'tarte',relative:'son',address:'myhouse'},
    {id:18,name:'kan',relative:'daughter',address:'myhouse'},
    {id:19,name:'matsuno',relative:'me',address:'myhouse'},
    {id:20,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:21,name:'tarte',relative:'son',address:'myhouse'},
    {id:22,name:'kan',relative:'daughter',address:'myhouse'},
    {id:23,name:'matsuno',relative:'me',address:'myhouse'},
    {id:24,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:25,name:'tarte',relative:'son',address:'myhouse'},
    {id:26,name:'kan',relative:'daughter',address:'myhouse'},
    {id:27,name:'matsuno',relative:'me',address:'myhouse'},
    {id:28,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:29,name:'tarte',relative:'son',address:'myhouse'},
    {id:30,name:'kan',relative:'daughter',address:'myhouse'},
    {id:31,name:'matsuno',relative:'me',address:'myhouse'},
    {id:32,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:33,name:'tarte',relative:'son',address:'myhouse'},
    {id:34,name:'kan',relative:'daughter',address:'myhouse'},
    {id:35,name:'matsuno',relative:'me',address:'myhouse'},
    {id:36,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:37,name:'tarte',relative:'son',address:'myhouse'},
    {id:38,name:'kan',relative:'daughter',address:'myhouse'},
    {id:39,name:'matsuno',relative:'me',address:'myhouse'},
    {id:40,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:41,name:'tarte',relative:'son',address:'myhouse'},
    {id:42,name:'kan',relative:'daughter',address:'myhouse'},
    {id:43,name:'matsuno',relative:'me',address:'myhouse'},
    {id:44,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:45,name:'tarte',relative:'son',address:'myhouse'},
    {id:46,name:'kan',relative:'daughter',address:'myhouse'},
    {id:47,name:'matsuno',relative:'me',address:'myhouse'},
    {id:48,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:49,name:'tarte',relative:'son',address:'myhouse'},
    {id:50,name:'kan',relative:'daughter',address:'myhouse'},
    {id:51,name:'matsuno',relative:'me',address:'myhouse'},
    {id:52,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:53,name:'tarte',relative:'son',address:'myhouse'},
    {id:54,name:'kan',relative:'daughter',address:'myhouse'},
    {id:55,name:'matsuno',relative:'me',address:'myhouse'},
    {id:56,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:57,name:'tarte',relative:'son',address:'myhouse'},
    {id:58,name:'kan',relative:'daughter',address:'myhouse'},
    {id:59,name:'matsuno',relative:'me',address:'myhouse'},
    {id:60,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:61,name:'tarte',relative:'son',address:'myhouse'},
    {id:62,name:'kan',relative:'daughter',address:'myhouse'},
    {id:63,name:'matsuno',relative:'me',address:'myhouse'},
    {id:64,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:65,name:'tarte',relative:'son',address:'myhouse'},
    {id:66,name:'kan',relative:'daughter',address:'myhouse'},
    {id:67,name:'matsuno',relative:'me',address:'myhouse'},
    {id:68,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:69,name:'tarte',relative:'son',address:'myhouse'},
    {id:70,name:'kan',relative:'daughter',address:'myhouse'},
    {id:71,name:'matsuno',relative:'me',address:'myhouse'},
    {id:72,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:73,name:'tarte',relative:'son',address:'myhouse'},
    {id:74,name:'kan',relative:'daughter',address:'myhouse'},
    {id:75,name:'matsuno',relative:'me',address:'myhouse'},
    {id:76,name:'nanamtsu',relative:'alsome',address:'myhouse'},
    {id:77,name:'tarte',relative:'son',address:'myhouse'},
    {id:78,name:'kan',relative:'daughter',address:'myhouse'},
    {id:79,name:'matsuno',relative:'me',address:'myhouse'},
    {id:80,name:'nanamtsu',relative:'alsome',address:'myhouse'}
  ]
  let cut=(req.query.page-1)*10
  res.send(arr.slice(cut,cut+10))
}
 
exports.forLate=((req,res)=>{
  // fs.readFile('./static/lateList.txt','utf-8',(err,data)=>{
  fs.readFile('./lateList.txt','utf-8',(err,data)=>{
    if(err) return console.log(err)
    data=data.split('\r\n')
    let arr=[]
    data.forEach((item)=>{
      let project=item.split(',')[0]
      let name=item.split(',')[1]
      arr.push({project,name})
    })
    res.send(arr)
  })
})