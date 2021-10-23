import { act } from 'react-dom/test-utils'
import 
{
    ACCESS_USERS,
    ACCESS_TODOS,
    ACCESS_POST,
    ACCESS_PHOTOS,
    ACCESS_COMMENTS,
    ACCESS_ALBUMS
} from './createaction'

const initial={
    posts:{
        data :[],
        loading : true,
        error :''
    },
    albums:{
        data :[],
        loading : true,
        error :''
    },
    photos:{
        data :[],
        loading : true,
        error :''
    },
    comments:{
        data :[],
        loading : true,
        error :''
    },
    users:{
        data :[],
        loading : true,
        error :''
    },
    todos:{
        data :[],
        loading : true,
        error :''
    },
}

export const reducer =(state=initial,action)=>{
   switch(action.type){
       case ACCESS_POST:
           return{
               ...state,
               posts:{
                   data :action.payLoad,
                   loading : false,
                   error :''
               }
           }
        case ACCESS_PHOTOS:
            return{
                ...state,
                photos :{
                    data : action.payLoad,
                    loading : false,
                    error :''
                }
            }
        case ACCESS_COMMENTS:
            return{
                ...state,
                comments:{
                    data:action.payLoad,
                    loading:false,
                    error :''
                }
            }
        case ACCESS_USERS:
            return{
                ...state,
                users:{
                    data :action.payLoad,
                    loading:false,
                    error :''
                }
            }
        case ACCESS_ALBUMS:
            return{
                ...state,
                albums :{
                    data :action.payLoad,
                    loading : false,
                    error :''
                }
            }
        case ACCESS_TODOS:
            return{
                ...state,
                todos:{
                    data :action.payLoad,
                    loading:false,
                    error :''
                }
            }
        default:
            return state
   }
}