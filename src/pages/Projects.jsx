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

const images = [
  {"url": jumbofilmz, "link":"https://jumbo-filmz.vercel.app","title":"jumbofilmz"},
  {"url": outbard,"link":"https://outbard.streamlit.app","title":"OutBard"},
  {"url": pytextbin,"link":"https://pytextbin.comon.tech","title":"PyTextBin"},
  {"url": imagisha,"link":"https://imagisha.vercel.app","title":"imagisha"},
  {"url": movieAppIcon,"link":"https://github.com/c-o-m-o-n/RNmovieApp","title":"movieApp"},
  {"url": numquest,"link":"https://c-o-m-o-n.github.io/numquest","title":"NumQuest"},
  {"url": bizconnect,"link":"https://github.com/c-o-m-o-n/bizconnect","title":"bizconnect"}, 
  {"url": thriftloop,"link":"https://github.com/c-o-m-o-n/thriftloop","title":"thriftloop"},
  {"url": calculator,"link":"https://jumbo-filmz.vercel.app","title":"jumbofilmz"},
  {"url": comonStudy,"link":"https://comon-study.streamlit.app","title":"ComonStudy"},
  {"url": keyboardr,"link":"https://keyboardr.vercel.app","title":"keyboardr"}
  ]

function Projects() {
  return (
<div className="flex flex-col justify-center items-center m-4">
    <h2 className='bold text-2xl'>My Projects</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((image)=>(
          <div className='relative group'>
        <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex h-1/2 justify-center items-end text-xl bg-gray-800 text-black font-semibold'>
             <a href={image.link} className="text-white">{image.title}</a>
        </div>
        <div className="flex justify-center items-center">
        <img className="h-auto max-w-full items-center rounded-lg bg-gray-800" src={image.url} alt=""/>
        </div>
    </div>))
    }
    
</div>

 </div>)
}

export default Projects