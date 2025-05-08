import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast"


const BASE_URL="http://localhost:3000";

export const usePropertyStore=create((set,get)=>({
        properties:[],
        loading:false,
        error:null,
        currentProperty:null,
        formData:{
                name:"",
                price:"",
                image:""
        },
        setFormData:(formData)=>set({formData}),
        resetFormData:()=>set({formData:{name:"",price:"",image:""}}),

        addProperty:async (e)=>{
                e.preventDefault();
                set({loading:true})
                try {
                        const {formData}=get();
                        await axios.post(`${BASE_URL}/api/properties/create_property`,formData);
                        await get.fetchProducts();
                        get.resetFormData();
                        toast.success("Product Added Successfully!") 
                } catch (error) {
                        console.log("error")
                        toast.error("Something Went Wrong!!!",error.message)
                }finally{
                        set({loading:false})
                }
        },

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
        fetchProperty:async (id)=>{
                set({loading:true})
                try {
                        const response=await axios.get(`${BASE_URL}/api/properties/${id}`);
                        set({currentProperty:response.data.data,
                                formData:response.data.data,
                                error:null,
                        })
                } catch (error) {
                        set({error:"Something want wrong!!!",
                                currentProperty:null
                        })
                        toast.error("Something want wrong!!!",error.message) 
                }finally{
                        set({loading:false})
                }
        },
        updateProperty:async (id)=>{
                set({loading:true})
                try {
                       const {formData}=get();
                       const response=await axios.put(`${BASE_URL}/api/properties/${id}`,formData);
                       set({currentProperty:response.data.data});
                       toast.success("Property Updated successfully!!!");
                } catch (error) {
                        set({error:"Something want wrong!!!",
                                currentProduct:null
                        })
                        toast.error("Something want wrong!!!",error.message)   
                }finally{
                        set({loading:false})
                }
        },
        deleteProperty:async (id)=>{
                set({loading:true})
                try {
                     await axios.delete(`${BASE_URL}/api/properties/${id}`);
                     set(prev=>({properties:prev.properties.filter(property=>property.id!==id)}))
                     toast.success("Property Deleted Successfully") 
                } catch (error) {
                        console.log(error)
                       toast.error("Something want wrong!!!") 
                }finally{
                        set({loading:false})
                }
        },
}))