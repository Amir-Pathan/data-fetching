import {SINGLEPOST} from './createAction'

export const user={
    data:{},
    loading : true,
    error : ''
}

export function UserReducer(state=user,action){
    switch(action.type){
        case SINGLEPOST:
            return{
                data : action.payLoad,
                loading : false,
                error : ''
            }
        default :
            return state
    }
}