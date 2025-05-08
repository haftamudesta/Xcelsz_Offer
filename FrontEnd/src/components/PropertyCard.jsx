import {Card,CardContent,Typography} from "@mui/material"
import { usePropertyStore } from "../store/usePropertyStore";
import { Link } from "react-router-dom"
import { Edit2Icon, Trash2Icon } from "lucide-react"

const PropertyCard = ({property,onClick}) => {
        const {deleteProduct}=usePropertyStore()
        const handleDeleteproduct=async()=>{
                if(window.confirm("Are You sure you want to delete the product")){
                  await deleteProperty(id);
                  navigate("/")
                }
              }
  return (
    <main onClick={onClick} className="shadow-xlhover:shadow-2xl transition-shadow duration-300 rounded-3xl mb-6 bg-blue-500/50 gap-20 mr-6 p-4 mt-4">
        <Card>
                <CardContent>
                        <div className="">
                                <img src={property?.image} alt={property?.name}className="object-cover w-[250px] h-[250px]"
                                />
                                </div>
                                <div className="md:mt-6 flex flex-col">
                                        <Typography variant="h4" className="text-3xl font-semibold">{property?.title}</Typography>
                                        <Typography variant="p" className="text-2xl font-semibold text-sky-600">{property?.location}</Typography>
                                        <Typography variant="p" className="text-2xl font-semibold text-sky-600">${Number(property?.price).toFixed(2)}</Typography>
                                        </div>

                                        <div className="flex gap-4 mt-2">
                                          <Link to={`/editproperty/${property?.id}`} className="text-green-400 inset-shadow-sm inset-shadow-amber-500 inst-ring-4 inset-ring-amber-500 bg-sky-700 px-4 py-1 flex justify-center items-center rounded-full">
                                                <Edit2Icon className="size-4 mr-2"/> Edit
                                        </Link>
                                         <button
                                         className="flex justify-center items-center rounded-full text-red-500 outline-amber-200 bg-pink-300 px-4 py-1"
                                        onClick={()=>handleDeleteproduct(property?.id)}
                                         >
                                           <Trash2Icon className="size-4 mr-2"/>Delete
                                        </button>
                </div>
                </CardContent>
        </Card>
    </main>
  )
}

export default PropertyCard