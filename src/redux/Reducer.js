import { RECIEVED_DATA } from "./Action"
const initialState = {
    bitCoinData : []
}

export const BitconReducer = (state = initialState, {type,payload}) =>{

    switch(type){

        case RECIEVED_DATA:
            
            return{
                ...state,
                bitCoinData:payload
            }
    }
}