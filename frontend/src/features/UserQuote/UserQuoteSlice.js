import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userQuoteService from './UserQuoteService';

const initialState={
    quotes: [],
    isSuccess:false,
    isError:false,
    isLoading:false,
    message:''
};

export const createQuote = createAsyncThunk('quote/createQuote',async(quoteData,thunkAPI)=>{
    try{
        return await userQuoteService.createQuote(quoteData);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})


export const UserQuoteSlice = createSlice({
    name:'quote',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createQuote.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(createQuote.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.quotes.push(action.payload)
        })
        .addCase(createQuote.rejected,(state,action)=>{
            state.isError = true
            state.isSuccess = false
            state.isLoading = false
            state.message = action.payload            
        })
    }
})

export const {reset} = UserQuoteSlice.actions
export default UserQuoteSlice.reducer;

