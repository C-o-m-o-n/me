import React from 'react'
import jumbofilmz from "/src/assets/jumbofilmz.jpeg"
import outbard from "/src/assets/outbard.png"
import pytextbin from "/src/assets/pytextbin.png"
import imagisha from "/src/assets/imagisha.png"
import movieAppIcon from "/src/assets/movieAppIcon.png"
import numquest from "/src/assets/numquest.png"
import bizconnect from "/src/assets/bizconnect.png"
import thriftloop from "/src/assets/thriftloop.png"
import calculator from "/src/assets/calculator.png"
import comonStudy from "/src/assets/comon-study.png"
import keyboardr from "/src/assets/keyboardr.png"

function Projects() {
  return (
<div className="flex flex-col justify-center items-center m-4">
    <h2 className='bold text-2xl'>My Projects</h2>



    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div className='relative group'>
        <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold'>
            <a href='jumbo-filmz.vercel.app'>jumbofilmz</a>
        </div>
        <img className="h-auto max-w-full rounded-lg" src={jumbofilmz} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={outbard} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={pytextbin} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={imagisha} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg bg-white" src={bizconnect} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={numquest} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg bg-white" src={movieAppIcon} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={calculator} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg bg-white" src={thriftloop} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={comonStudy} alt=""/>
    </div>
     <div>
        <img className="h-auto max-w-full rounded-lg" src={keyboardr} alt=""/>
    </div>
    {/*<div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div> */}
</div>

 </div>)
}

export default Projects