import React, { Component } from 'react'
import Post_Summary from './Post/Post_Summary'
import Post from './Post/Post'



export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.showPost = this.showPost.bind(this)
        this.state = {
            author: 'Author',
            date: '7/04/2021 10:00:00 AM',
            section: 'section',
            title: 'Title',
            summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec non ante id neque pellentesque rhoncus vitae ut nisl. Mauris lacinia blandit 
            dolor, ac auctor massa auctor at. Sed lobortis vestibulum ipsum, sed placerat enim ornare ut.
            Nunc convallis a nisi et blandit. Donec eu lectus interdum, pharetra augue eget, dictum massa.`,
            post: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
            fermentum odio vel lobortis imperdiet. Ut luctus imperdiet laoreet. Praesent turpis 
            augue, pharetra ut velit ut, lacinia auctor diam. In eu massa a tortor rhoncus malesuada. 
            Pellentesque aliquam elit ut vehicula accumsan. Phasellus nisi felis, mollis eget mi blandit, 
            suscipit molestie nunc. Fusce interdum nec libero quis bibendum. Nulla facilisi. Suspendisse sit amet dui elit. Nunc sed fermentum leo, 
            in consequat lorem. Nullam vel odio tristique, eleifend magna sed, interdum metus. 
            Suspendisse porttitor a felis ac iaculis. Vestibulum ante ipsum primis in faucibus orci 
            luctus et ultrices posuere cubilia curae; Mauris vel vehicula diam, ut ultricies justo. Cras bibendum, 
            ligula et ullamcorper finibus, quam ipsum tempor urna, ut lacinia lacus ipsum tempor sapien.
    
            Vestibulum orci nibh, semper ut ultricies viverra, vestibulum ut est. 
            Nunc vel rhoncus odio. Sed sit amet iaculis velit, ac molestie turpis. 
            Donec a enim tincidunt, fringilla eros nec, pellentesque augue. 
            Proin efficitur sapien sed lacinia malesuada. Nam a varius orci, in sollicitudin nulla. 
            Fusce quis accumsan ante. In ullamcorper libero arcu, sed sollicitudin urna varius facilisis. 
            Sed id nunc sed turpis dictum egestas et quis magna. Mauris viverra leo vel libero blandit, non 
            euismod sem lobortis. Quisque vel massa turpis. Quisque purus lectus, tincidunt vel elementum et, 
            sodales ac dui. Sed pulvinar facilisis felis non aliquet. Nullam a justo quis augue iaculis condimentum at ut eros.
    
            Pellentesque eget pellentesque orci. Mauris vitae enim blandit, 
            ornare tortor sed, sodales ante. Maecenas pharetra, nibh quis 
            vestibulum commodo, orci odio malesuada felis, ac malesuada ante est nec lacus. Morbi ipsum tortor, 
            condimentum a euismod eget, sagittis sodales lectus. Mauris aliquam facilisis lorem at cursus. 
            Fusce porttitor ante ut orci condimentum varius vitae et orci. Morbi lobortis magna vitae ultrices vulputate. 
            Duis ultrices euismod nibh. Ut et massa quis nulla aliquam efficitur. Etiam ultrices justo nibh, sed vehicula ligula volutpat a. 
            Sed vestibulum ipsum nec dui elementum mollis. Suspendisse id lectus nisi. Nulla a nunc ut sapien fermentum varius quis eu erat. 
            Morbi fringilla tellus vulputate, condimentum ipsum in, egestas felis. Aenean nibh ante, placerat et sodales at, 
            posuere vitae lorem. Maecenas porttitor est sit amet molestie bibendum.
    
            Curabitur vel ligula sed ligula tempus efficitur. Nullam malesuada venenatis dolor, id euismod mi luctus et. Sed porta feugiat ornare. Quisque eget molestie lorem. In maximus nisl dui, quis vulputate augue cursus eu. Donec placerat est ut lectus tincidunt, eu ornare purus viverra. Phasellus dictum finibus dignissim. Mauris imperdiet varius odio. Proin ac vehicula justo. Sed condimentum ornare justo, a lacinia purus ullamcorper vitae. Proin porta varius dui, vitae ultricies nunc. Curabitur condimentum nibh placerat, commodo elit ut, gravida odio. Nullam at feugiat ex. Maecenas et eros enim. Curabitur hendrerit ligula in nunc scelerisque, 
            ut dignissim enim imperdiet. Morbi fringilla rutrum pellentesque.
    
            Vivamus vel ultricies ipsum. Quisque sed ante tincidunt, lacinia sapien sit amet, 
            sagittis sapien. Mauris malesuada urna at elit congue dapibus. Mauris eu tortor feugiat, 
            tincidunt augue quis, auctor nisi. Vivamus dictum scelerisque enim. Quisque libero urna, dictum eget nibh eu, 
            luctus scelerisque ligula. Integer tincidunt dui sem, cursus tempus ex molestie nec. Vivamus et tempus dolor, 
            id tincidunt mi. Cras faucibus turpis quis sem lobortis maximus. Vivamus lobortis lorem ac mattis sodales. 
            Integer porta tincidunt ultricies. Aenean blandit a nisl in finibus. Nullam aliquet nunc ac turpis dictum, 
            ut eleifend nisl semper. Proin porttitor volutpat urna. Maecenas ac ornare risus. Donec laoreet consequat ligula malesuada gravida.
            `,
            loadPost: false,
        }
    
    }

    

    showPost() {
      console.log("Testing click")
       this.setState({
           loadPost: true
       })
    }

    goBack() {
        console.log("Testing click")
         this.setState({
             loadPost: false
         })
    }
  


    render() {
        return (
            <div className="posts">
                {this.state.loadPost ? <Post back={this.goBack} title={this.state.title} post={this.state.post} date={this.state.date} author={this.state.author} section={this.state.section}/> : <div>
                <Post_Summary loaded={this.showPost} key={1} title={this.state.title} summary={this.state.summary}date={this.state.date} author={this.state.author} section={this.state.section} />
                </div>}
            </div>
        )
    }
}
