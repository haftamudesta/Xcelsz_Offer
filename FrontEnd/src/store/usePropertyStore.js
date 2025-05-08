import {create} from "zustand";
import axios from "axios";
//import toast from "react-hot-toast"


const BASE_URL="http://localhost:3000";

export const useProductStore=create((set)=>({
        properties:[],
        loading:false,
        error:null,
        currentProperty:null,

        fetchProperties:async ()=>{
                set({loading:true})
                try {
                       const response=await axios.get(`${BASE_URL}/api/properties`);
                       set({properties:response.data.data,error:null})
                } catch (error) {
                      console.log(error.message)
                      if(error.status===429) set({error:"Rate limit Exceeded!!!",properties:[]})
                        else set({error:"Something went wrong",properties:[]})  
                }finally{
                        set({loading:false})
                }
        },
}))