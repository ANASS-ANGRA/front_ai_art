import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const new_post=createAsyncThunk("new_post", async ()=>{
    const response= await axios.post("vide")
    return response
})


const initialState ={
    new_post:null,
    loading:false,
    erreur:"",
}

export const Post_s = createSlice({
    name:'post',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(new_post.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(new_post.fulfilled,(state,action)=>{
            state.post=action.payload.data
            state.loading=false
        })
        builder.addCase(new_post.rejected,(state,action)=>{
            state.erreur=action.payload.message
        })
    }

    
})