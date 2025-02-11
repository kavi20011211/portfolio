import axios from 'axios'

const API_URL = `${process.env.REACT_APP_API_URL}`;

const createQuote = async(quoteData)=>{
    const response = await axios.post(API_URL,quoteData);
    return response.data;
};

const userQuoteService = {createQuote}
export default userQuoteService;