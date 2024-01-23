import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name: "Amit",

    initialState,
    reducers: {
        inc(state,action){
            // state.cart=[...state.cart,action.payload]
            const num = state.cart.findIndex((e,i)=>{
                return(
                    e.id===action.payload.id
                )
            })
            if (num>=0) {
                return
            } else {
                state.cart=[...state.cart,action.payload]
            }
        },
        IncQty(state,action){
            // const inc = {...action.payload,qnty:51}
            // const id = state.cart.findIndex((e,i)=>{
            //     return(
            //         e.id===action.payload.id
            //     )
            // }) 

            const id = state.cart.findIndex((e,i)=>{
                return(
                    e.id===action.payload.id
                )
            })

       state.cart[id].qnty+=1;
       

        },
        DecQty(state,action){
            const id = state.cart.findIndex((e,i)=>{
                return(
                    e.id===action.payload.id
                )
            })
            if (action.payload.qnty>1) {
                state.cart[id].qnty-=1;
            } else {
                const newcart = state.cart.filter((e,i)=>{
                    return(
                        e.id!=action.payload.id
                    )
                })
    
                state.cart = newcart;
            }
       
        },
        Empty(state,action){
            state.cart = []
                    },
        Emptone(state,action){
            const newcart = state.cart.filter((e,i)=>{
                return(
                    e.id!=action.payload.id
                )
            })

            state.cart = newcart;
            // console.log(action.payload.id)
        }
    }
})

export const {inc,IncQty,Empty,Emptone,DecQty} = cartSlice.actions;

export default cartSlice.reducer;