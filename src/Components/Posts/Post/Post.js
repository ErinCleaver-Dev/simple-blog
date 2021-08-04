import Parser from 'html-react-parser';

const Post = (props) => {
    return (
        <div>
            <div className="post_information"><p>author: {props.author}</p><p>{props.data}</p><p>{props.section}</p></div>
            <div className="post_title">{props.title}</div>
            <div className="post">{Parser(props.post)}</div>
        </div>
    )
}



export default Post