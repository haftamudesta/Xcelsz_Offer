import  { useEffect,useState } from 'react'
import { usePropertyStore } from "../store/usePropertyStore";
import AddPropertyModal from '../components/AddPropertyModal';
import PropertyCard from '../components/PropertyCard';
import { Link,useNavigate } from "react-router-dom"

import { PackageIcon,RefreshCwIcon,PlusCircleIcon } from 'lucide-react';


const HomePage = () => {
        const navigate=useNavigate();
        const {loading,error,currentProperty,properties,fetchProperties}=usePropertyStore();
        const [isOpen,setIsOpen]=useState(false) 
        const handleRefresh=()=>{
                fetchProperties()
        }      
        useEffect(()=>{
                fetchProperties()
        },[fetchProperties])
        const handleNavigation = (id) => {
                console.log("clicked")
                navigate(`/propertydetails/${id}`)
            }
        if(error){
          return <h1>error fetching data...</h1>
        }
  return (
   <main className='max-w-6xl mx-auto px-4 py-8'>
      <AddPropertyModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='flex justify-between items-centermb-8'>
      <div className='relative'>
                        <button className='flex gap-2 bg-green-400 text-white rounded-full px-2 py-1.5 mb-2 cursor-pointer z-50'
                        onClick={()=>setIsOpen(true)}
                        >
                                <PlusCircleIcon className='size-5 mr-2'/>
                                Add Product
                        </button>
                </div>
                <button onClick={handleRefresh}>
                        <RefreshCwIcon className='size-5' />
                </button>
      </div>
      {
        properties.length===0 &&!loading && (
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
               <div className="bg-gray-200 rounded-full p-6">
                    <PackageIcon className="size-5" />
               </div>
               <div className="text-center space-y-2">
                    <h3 className="text-2xl font-semibold">No property found</h3> 
                    <p className="max-w-sm text-gray-500">
                        Get started by adding property to the website
                     </p>
               </div>
        </div>
        )}{loading?(
          <div className='flex justify-center items-center h-64'>
                  <div>
                          Loading...
                  </div>
          </div>
  ):(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer'>
            {properties.map((property)=>(
                    <PropertyCard 
                    key={property.id} 
                    property={property}
                    onClick={()=>handleNavigation(property.id)}
                    />
            ))}
    </div>
)
        }
    
    </main>
  )
}

export default HomePage