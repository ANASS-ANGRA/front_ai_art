import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetch_posts=createAsyncThunk("post_tendance", async ()=>{
    const response= await axios.get("http://127.0.0.1:8000/api/tandance")
    return response
})


const initialState ={
    posts_t:null,
    loading:false,
    erreur:"",
}

export const Post_Tendance = createSlice({
    name:'posts_tendance',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetch_posts.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetch_posts.fulfilled,(state,action)=>{
            state.posts_t=action.payload.data
            state.loading=false
        })
        builder.addCase(fetch_posts.rejected,(state,action)=>{
            state.erreur=action.payload.message
        })
    }

    
})