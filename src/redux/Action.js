export const RECIEVED_DATA = "RECIEVED_DATA"



export const received_data = (data) =>{
    console.log(data)
    return{
        type: RECIEVED_DATA,
        payload: data
    }
}