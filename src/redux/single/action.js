import axios from 'axios'
import {SINGLEPOST} from './createAction'

let url='https://jsonplaceholder.typicode.com/posts/'

export function post(p){
    return{
        type : SINGLEPOST,
        payLoad : p
    }
}

export function singlePost(no){
    return dispatch=>{
       axios.get(url+no).then((res)=>{
           console.log(res.data);
           dispatch(post(res.data))
       })
       .catch((err)=>{
           console.log(err);
       })
    }
}