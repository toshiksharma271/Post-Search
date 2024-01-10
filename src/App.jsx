import { useEffect, useState } from 'react'
import './App.css'
import Tost from './tost'
function App() {
  const [posts,setposts] = useState([])
  const [filteredposts,setfilteredposts] = useState([])
  const [loading,setloading] = useState(true)
  const [search,setsearch] = useState("")
 const fetchdata = async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  setposts(data)
  setfilteredposts(data)
  setloading(false)
 }
 useEffect(() => {
    const searchResult = posts.filter(post=>{
      return post.title.includes(search)
    })
    setfilteredposts(searchResult)
    
 }, [search])
 useEffect(()=>{
  fetchdata()
 },[])
 


return (
    <>
     <h1>posts</h1>
     <input value={search} onChange={e=>setsearch(e.target.value)} type='search' placeholder='Search Something...'/>
    
     <div className='post-wrapper'>
     {
      filteredposts.map(post=>{
        return <Tost post = {post} key={post.id}/>
        
      })
     }
</div>
    </>
  )
}

export default App
