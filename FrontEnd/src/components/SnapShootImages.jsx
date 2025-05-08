import { Stack, ImageList,ImageListItem } from "@mui/material"
import data from ".././data/Data.json"

const SnapShootImages = () => {
  return (
    <Stack spacing={20}>
        <ImageList  >
               {
                        data.postmanSnapshoots.map((item)=>(
                                <div className="flex flex-col border-2 border-sky-500 mt-4 bg-teal-100">
                                <ImageListItem key={item.id}>
                                        <img src={`${item.src}?w=164&h=164&fit=crop&auto=format&drop=2`} alt={item.title} 
                                        loading="lazy"
                                        className="bg-teal-200"
                                        />
                                </ImageListItem>
                                <p className="text-center">{item.title}</p>
                                </div>
                        ))
                }
        </ImageList>
    </Stack>
  )
}

export default SnapShootImages