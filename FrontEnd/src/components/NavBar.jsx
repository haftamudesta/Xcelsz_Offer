import {useEffect,useState} from "react"
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from "@mui/material";
import { SunIcon,MoonIcon } from "lucide-react"
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode,setDarkMode]=useState(()=>{
    const savedTheme=localStorage.getItem("theme")
    if(savedTheme){
            return savedTheme==="dark"
    }else{
            return window.matchMedia('(prefers-color-scheme:dark)').matches
    }
    
});
useEffect(()=>{
if(darkMode){
  document.documentElement.classList.add("dark")
  localStorage.setItem("theme","dark")
}else{
  document.documentElement.classList.remove("dark")
  localStorage.setItem("theme","light")
}
},[darkMode])
const toggleDarkMode=()=>{
setDarkMode(!darkMode)
}
  return (
    <AppBar position="static">
        <Toolbar>
                
                <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                <Link to="/">Mini Property Listings Website</Link>
                </Typography>
                <Stack direction="row" spacing={2}>
                        <Link to="snapshoots">Snap shoot images</Link>
                        <button
                        onClick={toggleDarkMode}
                        className=" w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-500 shadow-lg hover:bg-amber-600 transition-colors">
                                        {darkMode?(<SunIcon className="text-center"/>):(<MoonIcon className="text-center"/>)}
                        </button>
                        <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                                6
                       </Typography>
                </Stack>
        </Toolbar>
        
    </AppBar>
  )
}

export default NavBar