import {useNavigate,useParams} from "react-router-dom";
import { useEffect } from "react";
import {usePropertyStore} from "../store/usePropertyStore";

const PropertyDetailPage = () => {
        const {
                loading,
                error,
                currentProperty,
                formData,
                setFormData,
                fetchProperty,
                updateProperty,
                deleteProperty
              }=usePropertyStore()
          const navigate=useNavigate();
          const {id}=useParams();
          console.log("ID:",id)
          useEffect(()=>{
                fetchProperty(id)
            },[fetchProperty,id])
            console.log("current property",currentProperty)
            
            if(loading){
              return(
                <h1>Loading...</h1>
              )
            }
            if(error){
              return(
                <p>{error}</p>
              )
            }
  return (
        
    <div  className="container mx-auto max-w-4xl px-4 py-8">
          <button onClick={()=>navigate("/")}
          className="mb-8 bg-linear-45 from-blue-600 to-green-600 font-bold text-white px-4 py-1 rounded-xl"
            >
              Back to Home
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg bg-base-100">
                <img src={currentProperty?.image} 
                alt={currentProperty?.image} 
                className="size-full object-center"
                />
              </div>
              <div className="shadow-lg px-6 bg-linear-45 from-sky-500 to-sky-700">
                <div className="mt-8">
                        {currentProperty?.title}
                </div>
                <div className="mt-8">
                        {currentProperty?.description}
                </div>
                <div className="mt-8">
                        {currentProperty?.price}
                </div>
                <div className="mt-8">
                        {currentProperty?.location}
                </div>
              </div>
            </div>
        </div>
  )
}

export default PropertyDetailPage