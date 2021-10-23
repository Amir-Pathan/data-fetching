import React,{useState} from 'react'
import {TextField} from '@material-ui/core'
import {FaSearch} from 'react-icons/fa'

function Search(props){

    const [searchValue,setSearchValue] =useState('')

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

    return(
        <div className='search'>
            <TextField variant='outlined' size='small' 
            value={searchValue} onChange={value}
            label={`search ${props.controll} by ID`} style={{
                width: '60%'
            }}/>
            <FaSearch color='white' size={30}/>
        </div>
    )
}

export default Search