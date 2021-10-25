import React,{useState} from 'react'
import {TextField} from '@material-ui/core'
import {FaSearch} from 'react-icons/fa'
import Modal from 'react-modal'
import {singlePost} from '../redux'
import {useSelector,useDispatch} from 'react-redux'
import PostDetails from './postdetails'

Modal.setAppElement('#modal')
function Search(props){

    const [searchValue,setSearchValue] =useState('')
    const [open,setOpen]= useState(false)

    const dispatch= useDispatch()
    const user = useSelector((state)=>state.user.data)
    const value = (e)=>{
        const digit = /\D/g;
        if(!e.target.value){
            setSearchValue('')
        }
        if(!digit.test(e.target.value)){
            setSearchValue(e.target.value)
        }
        else{
            alert('Please Enter Id')
        }
    }

    const access=()=>{
        if(searchValue){
            dispatch(singlePost(searchValue))
            console.log(user);
            setOpen(true)
        }
    }

    const close=()=>{
        setOpen(false)
    }

    return(
        <div className='search'>
            <Modal isOpen={open}>
                <PostDetails data={user} close={close}/>
            </Modal>
            <TextField variant='outlined' size='small' 
            value={searchValue} onChange={value}
            label={`search ${props.controll} by ID`} style={{
                width: '60%'
            }}/>
            <FaSearch color='white' size={30} onClick={access}/>
        </div>
    )
}

export default Search