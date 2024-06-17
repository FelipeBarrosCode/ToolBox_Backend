
const express = require('express');
const router = express.Router();

const PrismaClient = require('@prisma/client')




router.get("/exercises", async (req,res)=>{
    const prisma = new  PrismaClient.PrismaClient()
   
    console.log("Request Received")
    const content = await prisma.exercises.findMany({})

    res.json(content)

})

router.get("/projects", async (req,res)=>{
    const prisma = new PrismaClient.PrismaClient()

    

    const content = await prisma.projectCategory.findMany({
        include:{
            projects:true
        }
    })
    res.json(content)
})


module.exports = router;
