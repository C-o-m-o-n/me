import React from 'react'
import jumbofilmz from "/src/assets/jumbofilmz.jpeg"
import outbard from "/src/assets/outbard.png"
import pytextbin from "/src/assets/pytextbin.png"
import imagisha from "/src/assets/imagisha.png"
import movieAppIcon from "/src/assets/movieAppIcon.png"
import numquest from "/src/assets/numquest.png"
import bizconnect from "/src/assets/bizconnect.png"
import thriftloop from "/src/assets/thriftloop.png"
import LeadersHub from "/src/assets/leaders-hub.png"
import comonStudy from "/src/assets/comon-study.png"
import keyboardr from "/src/assets/keyboardr.png"
import hippoRiders from "/src/assets/hippo-riders.jpeg"
const images = [
  {"url": jumbofilmz, "link":"https://jumbo-filmz.vercel.app","title":"jumbofilmz"},
  {"url": outbard,"link":"https://outbard.streamlit.app","title":"OutBard"},
  {"url": pytextbin,"link":"https://pytextbin.comon.tech","title":"PyTextBin"},
  {"url": imagisha,"link":"https://imagisha.vercel.app","title":"imagisha"},
  {"url": LeadersHub,"link":"https://leaders-hub.vercel.app","title":"LeadersHub"},
  {"url": hippoRiders,"link":"https://hippo-riders.vercel.app","title":"HippoRidders"},
  {"url": numquest,"link":"https://c-o-m-o-n.github.io/numquest","title":"NumQuest"},
  {"url": movieAppIcon,"link":"https://github.com/c-o-m-o-n/RNmovieApp","title":"movieApp"},
  {"url": bizconnect,"link":"https://github.com/c-o-m-o-n/bizconnect","title":"bizconnect"}, 
  {"url": thriftloop,"link":"https://github.com/c-o-m-o-n/thriftloop","title":"thriftloop"},
  {"url": comonStudy,"link":"https://comon-study.streamlit.app","title":"ComonStudy"},
  {"url": keyboardr,"link":"https://keyboardr.vercel.app","title":"keyboardr"}
  ]

function Projects() {
  return (
<div className="flex flex-col justify-center items-center m-4">
    <h2 className='bold text-2xl'>My Projects</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((image)=>(
          <div className='relative group h-[100px] md:h-[200px] rounded-2xl'>
        <div className='opacity-0 group-hover:opacity-50 duration-300 absolute inset-x-0 bottom-0 flex h-full justify-center items-end text-xl bg-gray-800 text-black font-semibold'>
             <a href={image.link} className="text-center text-white">{image.title}</a>
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
