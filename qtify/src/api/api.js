import axios from "axios";

export const fetchTopAlbums=async()=>{
    try{
        const res= await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        return res.data;
    }
    catch(error){
        return null;
    }
    
}

export const fetchNewAlbums=async()=>{
    try{
        const res= await axios.get('https://qtify-backend-labs.crio.do/albums/new');
        console.log(res.data);
        return res.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
    
}

export const fetchSongs=async()=>{
    try{
        const res=await axios.get('https://qtify-backend-labs.crio.do/songs')
        return res.data;
    }
    catch(error){
        return null;
    }
}