import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";
import { SunIcon } from "lucide-react"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
                
                <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                <Link to="/">Mini Property Listings Website</Link>
                </Typography>
                <Stack direction="row" spacing={2}>
                        <Link to="snapshoots">Snap shoot images</Link>
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