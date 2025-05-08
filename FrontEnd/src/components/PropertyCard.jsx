import {Card,CardContent,Typography} from "@mui/material"

const PropertyCard = ({property}) => {
  return (
    <main className="shadow-xlhover:shadow-2xl transition-shadow duration-300 rounded-3xl mb-6 bg-blue-500/50 gap-20 mr-6 p-4 mt-4">
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
                </CardContent>
        </Card>
    </main>
  )
}

export default PropertyCard