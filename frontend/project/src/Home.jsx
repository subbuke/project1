import image from "./assets/image.jpg"
import "./Home.css";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();
    
    return(
        <>
        <div className="HomePage">
            <div className="images">
              <img src={image} alt="image" className="background" /> 
          
          </div>
          
          <div className="HomeText">
<h1>Welcome to weaponweb</h1>
          <Typography variant="subtitle2" gutterBottom className="text">Discover a comprehensive collection of information about historical, modern, and technological 
            weapons from around the world.Our platform is dedicated to education, 
            awareness, and responsible knowledge sharing.</Typography>
           <Button variant="contained" className="btn" sx={{ mt: 2, ml: 7, width: 200}} onClick={() => navigate("/products")}>products</Button>
          </div>
          
        </div>
        </>
    )
}