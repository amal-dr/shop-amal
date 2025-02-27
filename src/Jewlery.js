import { useEffect ,useState } from "react";
import Affichage from "./Affichage"
import './Jewlery.css'


export default function Jewlery(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = []; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <> <div className="row">
    {
        props.products.filter((product)=>product.category==="jewelery").map((product,i)=>{
        return(
            <Affichage product={product} key={i} />
        )
    })
    }
   </div></>
 
  )
}
