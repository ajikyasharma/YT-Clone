import Video from "./Video"

const List =()=>{

    const arr= [1,2,3,4,5]

    return <div>

        {
            arr.map(item => <Video/>)
        }
    </div>
}

export default List