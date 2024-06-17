//import { PrismaClient } from '@prisma/client'


//    data: {
//   username: 'johndoe',
//   email: 'johndoe@example.com',
//   password: 'securepassword'
// },
// });
// const newUserTwo = await prisma.user.create({
// data: {
//   username: 'johndvdszoe',
//   email: 'johndoe@examcdscple.com',
//   password: 'securepdsvsasdszvssword'
// },
// }
// const prisma = new PrismaClient()

  const dataToCheck = require("./ContentgoToDb.json")
  console.log(dataToCheck.data.problemsetQuestionList)

// async function main() {
  // const dataForQuestions = require("./ContentgoToDb.json")
  // let specificdata = dataForQuestions.data.problemsetQuestionList.questions
  // for (let keys of specificdata) {
  //   let change = await prisma.exercises.create({
  //     data: {
  //       urlToBeUsed: "https://leetcode.com/problems/" + keys.titleSlug + "/description/",
  //       Name: keys.title,
  //       Acceptabiliy: parseInt(keys.acRate),
  //       paidOnly: keys.paidOnly,

  //     },


  //   })
  //   console.log(change)
  // }



  // const user =await  prisma.exercises.findMany({
  //   where:{
  //     paidOnly:false

  //   },
  // })

  // console.log(user)


  // const dataFromProjectToBeImported = require("./projects.json")


  
  // const user =await  prisma.projectCategory.findFirst({
  //   where:{
  //     categoryName:"Bots"

  //   },
  //   select:{
  //     projects:true,

  //   },

  // })

  // console.log(user)

  

  


//   function arrayRet(objArray:[]){
//     let arrayOfObjects: Array<any> = [];
//     for (const value of objArray) {
//       arrayOfObjects.push({projectName:value});
      
//     }
//     return arrayOfObjects
//   }
    

   
    
//     Object.keys(dataFromProjectToBeImported).forEach(async (key)=>{
//       console.log(key)
  
      

//       let createValues = await prisma.projectCategory.create({
//         data:{
//           categoryName:key,
  
//           projects:{
//             create:arrayRet(dataFromProjectToBeImported[key]),
  
//           },
//         },
//         include:{
//           projects:true
//         }
//       })
//       console.log(createValues)
      
  
      
//     })
    

    

  
  

 

// }

// main()
//   .catch(e => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

  















// main()
//   .catch(e => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
