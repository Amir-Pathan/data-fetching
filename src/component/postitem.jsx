import React,{useState} from 'react'
import {BiSpreadsheet} from 'react-icons/bi'
import PostDetails from './postdetails'
import Modal from 'react-modal'

Modal.setAppElement('#modal')
function PostItem(props){

    const [modalOpen,setModalOpen] = useState(false)
    console.log(props);

    const open=()=>{
        setModalOpen(true)
    }

    const close=()=>{
        setModalOpen(false)
    }


    return(
        <div className='postItem'>
            <Modal isOpen={modalOpen} onRequestClose={()=>setModalOpen(false)}>
                <PostDetails data={props} close={close}/>
            </Modal>
            <div>
               <h3>{props.item.id}</h3>
               <h3 style={{
                   marginLeft:'50px'
               }}>{props.item.title}</h3>
            </div>
            <div onClick={open}>
                 <BiSpreadsheet color='white' size={50} style={{
                    marginRight:'50px',
                    marginTop:'5px'
                }}/>
            </div>
        </div>
    )
}

export default PostItem