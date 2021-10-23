import React from 'react'
import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {IoMdAlbums} from 'react-icons/io'
import {AiOutlineComment} from 'react-icons/ai'
import {ImUsers} from 'react-icons/im'
import {FcTodoList} from 'react-icons/fc'
import {IconContext} from 'react-icons'
import Home from './home'

function Header(){

    const home=[
        {
          title :'Posts',
          description :'some post access on json server',
          icon : <BsFillFileEarmarkPostFill/>
        },
        {
          title :'Photos',
          description :'Some Photos access by json server',
          icon :<MdOutlinePhotoSizeSelectActual/>
        },
        {
            title :'Albums',
            description :'Some Albums access by json server',
            icon :<IoMdAlbums/>
          },
          {
            title :'Comments',
            description :'Some Photos access by json server',
            icon :<AiOutlineComment/>
          },
          {
            title :'Todos',
            description :'some todos are access with help of axios from json server',
            icon :<FcTodoList/>
          },
          {
            title :'Users',
            description :'Some Users access by json server',
            icon :<ImUsers/>
          },
    ]

    return(
        <div>
            <div className='header'>
                <h3>Data-Fetching</h3> 
            </div>
            <IconContext.Provider value={{
                    size:25,
                    color:'white'
                }}>
                    <div className='home'>
                       {
                           home.map((i,index)=>{
                             return <Home cart={i} key={index}/>
                           })
                        }
                    </div>
                </IconContext.Provider> 
        </div>
    )
}

export default Header