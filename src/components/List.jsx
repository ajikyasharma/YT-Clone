import Video from "./Video"

const List =({videos,onVideoChange})=>{

// console.log(videos)

if(videos.length ==0) return <h1>Loading...</h1>
return[
     
    <>
     {videos.map((video, idx)=> <Video key={idx} videoItem={video} onVideoChange={onVideoChange}/>)}
    
    </>
]
    
}

export default List