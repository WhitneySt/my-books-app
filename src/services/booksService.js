import axios from "axios";
import endpoints from "./endpoints";

export const getBooks = async () => {
    try {
        const { data } = await axios.get(endpoints.library);
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getBookByTitle = async (title) => {
    try {
        const { data } = await axios.get(endpoints.bookByName(title));
        return data.length ? data[0] : null;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getBookByName = async(name)=>{
    try {
        const {data}=await axios.get(endpoints.library,{
            params:{
               'book.title': name 
            }
        })
        
    } catch (error) {
        console.log(error);
        return null;
    }
}