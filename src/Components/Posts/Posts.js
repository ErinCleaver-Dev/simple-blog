import React, { Component } from 'react'
import Post_Summary from './Post/Post_Summary'
import Post from './Post/Post'



export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.showPost = this.showPost.bind(this)
        this.state = {
            id: '',
            author: '',
            date: '',
            section: '',
            title: '',
            summary: ``,
            post: ``,
            loadPost: false,
        }
    
    }

    

    showPost() {
      console.log("Testing click")
       this.setState({
           
           loadPost: true
       })
    }


    render() {
        return (
            <div className="posts">
                {this.state.loadPost ? <Post title={this.state.title} post={this.state.post} date={this.state.date} author={this.state.author} section={this.state.section}/> : <div>
                <Post_Summary loaded={this.showPost} key={1} title={this.state.title} summary={this.state.summary}date={this.state.date} author={this.state.author} section={this.state.section} />
                </div>}
            </div>
        )
    }
}
