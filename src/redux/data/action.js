import 
{ACCESS_ALBUMS,
ACCESS_COMMENTS,
ACCESS_PHOTOS,
ACCESS_POST,
ACCESS_TODOS,
ACCESS_USERS} from './createaction'
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const URL='https://jsonplaceholder.typicode.com/'

export function AccessAlbums(payLoad){
    return {
        type :ACCESS_ALBUMS,
        payLoad : payLoad
    }
}

export function AccessComments(payLoad){
    return{
        type : ACCESS_COMMENTS,
        payLoad :payLoad
    }
}

export function AccessPhotos(payLoad){
    return{
        type:ACCESS_PHOTOS,
        payLoad :payLoad
    }
}

export function AccessPost(payLoad){
    return{
        type :ACCESS_POST,
        payLoad:payLoad
    }
}

export function AccessToDos(payLoad){
    return{
        type :ACCESS_TODOS,
        payLoad :payLoad
    }
}

export function AccessUsers(payLoad){
    return{
        type :ACCESS_USERS,
        payLoad :payLoad
    }
}

export function PostData(){
    return dispatch=>{
        axios.get(URL+'posts')
        .then((res)=>{
            toast.success('Post Data ',{position:"top-center",
            autoClose:5000})
            dispatch(AccessPost(res.data))
        })
        .catch((err)=>{
            toast.error('something went wrong',{
                position:'top-center',
                autoClose:5000
            })
            console.log(err);
        })
    }
}

export function AlbumsData(){
    return dispatch=>{
        axios.get(URL+'albums')
        .then((res)=>{
           dispatch(AccessAlbums(res.data)) 
        })
        .catch((err)=>{
            console.log(err);
            toast.error('Something went wrong',{
                position:'top-center',
                autoClose:3000
            })
        })
    }
}

export function CommentsData(){
    return dispatch=>{
        axios.get(URL+'comments')
        .then((res)=>{
            dispatch(AccessComments(res.data))
        })
        .catch((err)=>{
            console.log(err);
            toast.error('Something went wrong',{
                position:'top-center',
                autoClose:3000
            })
        })
    }
}

export function photosData(){
    return dispatch=>{
        axios.get(URL+'photos')
        .then((res)=>{
            dispatch(AccessPhotos(res.data))
        })
        .catch((err)=>{
            console.log(err);
            toast.error('Something Went Wrong',{
                position:'top-center',
                autoClose:3000
            })
        })
    }
}

export function usersData(){
    return dispatch=>{
        axios.get(URL+'users')
        .then((res)=>{
            dispatch(AccessUsers(res.data))
        })
        .catch((err)=>{
            console.log(err);
            toast.error('Something Went Wrong',{
                position:'top-center',
                autoClose:3000
            })
        })
    }
}

export function todosData(){
    return dispatch=>{
        axios.get(URL+'todos')
        .then((res)=>[
            dispatch(AccessToDos(res.data))
        ])
        .catch((err)=>{
            console.log(err);
            toast.error('Something Went Wrong',{
                position:'top-center',
                autoClose:3000
            })
        })
    }
}