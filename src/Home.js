import { useEffect, useState } from 'react';
import Affichage from './Affichage';
import './Home.css';
import Slide from './Slide';

export default function Home(props) {

  return (
    <>
    <div><Slide /></div>  
<div>





  <p>




    <p>




      
    </p>
  </p>
</div>
      <div className="row">
        {props.products.map(function (product, i) {
          return <Affichage product={product} key={i} />;
        })}
      </div>
    </>
  );
}
