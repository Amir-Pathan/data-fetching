import React,{Component} from 'react'
import {connect} from 'react-redux'
import {PostData} from '../redux'
import PostItem from './postitem'
import Search from './search'

class Posts extends Component{
    constructor(){
        super()
        this.state={
            posts :{}
        }
    }
    componentDidMount(){
        console.log(this.state.posts);
        this.props.data()
        this.setState({
            posts : this.props.posts
        })
        console.log(this.state.posts);
    }
    render(){
        console.log(this.props.posts.data)
        return(
            <div>
                <Search controll={this.props.controll}/>
                {
                   this.state.posts.data?
                        <div>
                            {
                                this.state.posts.data?
                                this.props.posts.data.map((i)=>{
                                    return <PostItem key={i.id} item={i}/>
                                }):
                                <h3>something went wrong</h3>    
                            }
                        </div>:
                    <h3 style={{textAlign:'center'}}>something Went Wrong</h3>
                }
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        posts : state.data.posts
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        data : ()=>dispatch(PostData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)