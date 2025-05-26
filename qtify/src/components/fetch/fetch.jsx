import axios from 'axios';

export const fetchAlbums = async ()=> {
    try {
        const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        return res.data;
    }catch(error){
        console.error('There was a problem fetching albums:', error)
    }
}

export const fetchSongs = async ()=> {
    try {
        const res = await axios.get('https://qtify-backend-labs.crio.do/songs');
        return res.data;
    }catch(error){
        console.error('There was a problem fetching songs:', error)
    }
}