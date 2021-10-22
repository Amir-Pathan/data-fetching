import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'

function Home({cart}){
    console.log(cart);

    const history = useHistory()

    const direct=()=>{
        switch(cart.title){
            case 'Posts':
                return history.push('posts')
        }
    }

    return(
        <div className='item' onClick={direct}>
            <div className='flx'>
                <h3>{cart.title}</h3>
                {cart.icon}
            </div>
            <div>
                <p>{cart.description}</p>
            </div>
        </div>
    )
}

Home.Prototypes={
  cart:PropTypes.shape({
      title :PropTypes.string,
      description :PropTypes.string
  }) 
}

export default Home