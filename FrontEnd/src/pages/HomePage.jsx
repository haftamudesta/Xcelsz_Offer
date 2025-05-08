import  { useEffect } from 'react'
import { useProductStore } from "../store/usePropertyStore";
import PropertyCard from '../components/PropertyCard';
import { PackageIcon } from 'lucide-react';

const HomePage = () => {
        const {loading,error,properties,fetchProperties}=useProductStore();       
        useEffect(()=>{
                fetchProperties()
        },[fetchProperties])
        console.log(properties)
        if(error){
          return <h1>error fetching data...</h1>
        }
  return (
    <div>
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {properties.map((property)=>(
                    <PropertyCard key={property.id} property={property}/>
            ))}
    </div>
)
        }
    </div>
  )
}

export default HomePage