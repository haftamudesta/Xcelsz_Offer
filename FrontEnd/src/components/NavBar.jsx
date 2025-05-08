import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";
import { SunIcon } from "lucide-react"

const NavBar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        Mini Property Listings Website
                </Typography>
                <Stack direction="row" spacing={2}>
                <SunIcon className="text-center"/>
                <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        6
                </Typography>
                </Stack>
        </Toolbar>
        
    </AppBar>
  )
}

export default NavBar