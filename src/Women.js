import { useState } from "react";
import Affichage from "./Affichage"
import './Women.css'
import { useEffect } from "react";

export default function Men(props) {

    return (<>
  
        <div className="row">
         {
             props.products.filter((product)=>product.category==="women's clothing").map((product,i)=>{
             return(
                 <Affichage product={product} key={i} />
             )
         })
         }
        </div>
      </> )
}
