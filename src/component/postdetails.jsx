import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function PostDetails({data,close}){

    const {id,userId,title,body} = data;
    console.log(data);

    return(
       <div>
           <AiOutlineCloseCircle color='white' size={50} 
           cursor='pointer' style={{marginLeft:'95%'}}
           onClick={close}/>
           <div style={{
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-around'
           }}>
               <h3> Id : {id}</h3>
               <h3>User Id : {userId}</h3>
           </div>
           <div style={{
               marginLeft:'80px',
               marginRight:'80px'
           }}>
              <div>
               <h3> Title : {title} </h3>
              </div>
              <div>
               <h3>Description : {body}</h3>
              </div>
           </div>
       </div>
    )
}

export default PostDetails