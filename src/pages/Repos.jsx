import { useEffect, useState } from 'react'
import { FaCodeFork, FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function Repos() {
    const [repos, setRepos] = useState([])
    const [repoTopics, setRepoTopics] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/C-o-m-o-n/repos')
        .then(res => res.json())
        .then(res => {
            setRepos(res)
            
          console.log(res)
        }
        )
      
    }, [])

  return (
    <div className='p-2'>
        <div className='flex  items-center justify-center'>
            <h2 className='bold text-2xl'>My Github Repositories</h2> 
            </div>
            <div className='grid md:grid-cols-4 gap-4 w-full place-items-center'>
                {repos && repos.map((repo) => {
                    // setRepoTopics(repo.topics)
                    return (
                      
                        <div key={repo.id} className='flex mx-3 flex-col gap-4 bold bg-[#21252d] border-3 border-red-500 w-full p-3 rounded-2xl '>
                            <div className='items-left flex flex-row gap-4'>
                            <img src={repo.owner.avatar_url} className='rounded-full border border-white-500 h-8 w-8' alt="avatar" />
                            <a className='text-white text-wrap bold' href={repo?.clone_url}>
                            <h3 className='bold'>{repo?.name}</h3>
                            </a>
                            </div>

						{/*<p>{repo?.description}</p>*/}
                            <div className='flex flex-row justify-between items-center gap-3'>
                            <div className='flex flex-row items-center gap-3'>
                                <FaCodeFork />
                            <p> {repo?.forks}</p>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                {repo?.stargazers_count > 0 ? (
                                <FaStar color="yellow"/>
                                ): <FaRegStar />}
                            <p> {repo?.stargazers_count}</p>
                            </div>

                            </div>
                        </div>

                    )
                })
                }
            </div>
        </div>
  )
}

export default Repos
