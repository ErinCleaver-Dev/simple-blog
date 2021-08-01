import React, { Component } from 'react'
import Post_Summary from './Post/Post_Summary'



export default class Posts extends Component {

    state = {
        author: 'author',
        date: '7/04/2021 10:00:00 AM',
        section: 'section',
        title: 'Title',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non ante id neque pellentesque rhoncus vitae ut nisl. Mauris lacinia blandit dolor, ac auctor massa auctor at. Sed lobortis vestibulum ipsum, sed placerat enim ornare ut. Nunc convallis a nisi et blandit. Donec eu lectus interdum, pharetra augue eget, dictum massa.'
    }

    render() {
        return (
            <div className="posts">
                <Post_Summary title={this.state.title} summary={this.state.summary}date={this.state.date} author={this.state.author} section={this.state.section} />
                <Post_Summary title={this.state.title} summary={this.state.summary}date={this.state.date} author={this.state.author} section={this.state.section} />
                <Post_Summary title={this.state.title} summary={this.state.summary}date={this.state.date} author={this.state.author} section={this.state.section} />
            </div>
        )
    }
}
