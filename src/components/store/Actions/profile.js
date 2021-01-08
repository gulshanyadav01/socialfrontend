import axios from "axios"; 
import {setAlert} from "./alert"; 
import {
    GET_PROFILE,
    PROFILE_ERROR
} from "./Types";

// GET THE CURRENT USER 

export const getCurrentProfile = () => async dispatch => {
    try{
        const res = await axios.get("http://localhost:5000/api/profile/me"); 

        dispatch({
            type:GET_PROFILE,
            payload: res.data
        }); 

    }catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })

    }
}

// create or update the profile

export const createProfile = (formData, history, edit = false) => async dispatch  => {
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
    } catch (error) {
        
    }


}