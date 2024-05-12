import React from 'react'
import StudentLeader from "/src/assets/awards/studentLeader.png"
import CollinsOmondi from "/src/assets/awards/CollinsOmondi.png"
import clcCompletion from "/src/assets/awards/clc-completion.png"
import EdgeHacks_Certificate from "/src/assets/awards/EdgeHacks_Certificate.png"
import GSI9225 from "/src/assets/awards/GSI-9225.JPG"
import postmanprojectbasedlearning from "/src/assets/awards/postman-project-based-learning.png"
import mlCrowdsource from "/src/assets/awards/ml-with-crowdsource.png"
import PostmanStudentExpert  from "/src/assets/awards/PostmanStudentExpert.png"
import Hourofcode  from "/src/assets/awards/Hour-of-code-cert.jpg"
import codeweek  from "/src/assets/awards/code-week.png"
import cs50x from "/src/assets/awards/cs50x.jpeg"
const images = [
  {"url": cs50x,"title":"Introduction to computer science course  completion"},
  {"url": StudentLeader,"title":"Postman Student Leader"},
  {"url": postmanprojectbasedlearning  ,"title":"Postman Project based learning"},
  {"url": PostmanStudentExpert,"title":"Postman Student Expert"},
  {"url": CollinsOmondi,"title":"Click4Teck STEM competiton"},
  {"url": clcCompletion ,"title":"Crowdsource perticipation"},
  {"url": EdgeHacks_Certificate,"title":"EdgeHacks Winner Certificate"},
  {"url": GSI9225,"title":"IOT in Agriculture hackathon winner"},
  {"url": mlCrowdsource,"title": "machine learning with crowdsource"},
  {"url": Hourofcode,"title": "Hour of code perticipation"},
  {"url": codeweek,"title": "code week Kenya  perticipation"},
  ]

function Projects() {
  return (
<div className="flex flex-col justify-center items-center m-4">
    <h2 className='bold text-2xl'>My Awards</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((image)=>(
          <div className='relative group h-[100px] md:h-[200px] rounded-2xl'>
        <div className='opacity-0 group-hover:opacity-50 duration-300 absolute inset-x-0 bottom-0 flex h-full justify-center items-end text-xl bg-gray-800 text-black font-semibold'>
             <p className="text-center text-white">{image.title}</p>
        </div>
        <div className="flex justify-center items-center">
        <img className="h-[100px] md:h-[200px] w-[600px] items-center rounded-lg bg-gray-800" src={image.url} alt=""/>

        </div>
    </div>))
    }
    
</div>

 </div>)
}

export default Projects
