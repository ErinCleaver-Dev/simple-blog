const Post_Summary = (props) => {
    return (
        <section className="post_summary">
            <div className="post_information"><a>{props.author}</a><p>{props.date}</p><a>{props.section}</a></div>
            <div><h2>{props.title}</h2></div>
            <div><p>{props.summary}</p></div>
        </section>
    )
}

export default Post_Summary