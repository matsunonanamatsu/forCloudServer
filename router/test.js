const express=require('express')
const router=express.Router()

const testHandler=require('../router_handler/test')

router.get('/test',testHandler.forUniApp)
router.get('/cloud',testHandler.forCloud)

module.exports=router
