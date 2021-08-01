import Sidebar from "../Sidebar/Sidebar"
import Posts from "../Posts/Posts"

const Body = () => {
    return (
        <div className="Body"> 
            <Posts/>
            <Sidebar/>
        </div>
    )
}

export default Body