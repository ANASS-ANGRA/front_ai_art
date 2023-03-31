import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetch_posts=createAsyncThunk("posts", async ()=>{
    const response= await axios.get("vide")
    return response
})


const initialState ={
    posts:null,
    loading:false,
    erreur:"",
}

export const Post_s = createSlice({
    name:'posts',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetch_posts.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetch_posts.fulfilled,(state,action)=>{
            state.posts=action.payload.data
            state.loading=false
        })
        builder.addCase(fetch_posts.rejected,(state,action)=>{
            state.erreur=action.payload.message
        })
    }

    
})
