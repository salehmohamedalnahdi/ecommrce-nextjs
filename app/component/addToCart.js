"use client"

import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function AddToCart({id}) {
 
    const router = useRouter();
    const handleSubmit= async(e) => {;
        e.preventDefault();
        const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/createprocart/'+id, {
            method: 'Post',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
        const result= await response.json();
        console.log(result);
        //window.location.reload()
      };
   
  return (
    <div className=''>
      <button className="cart" onClick={handleSubmit}>
         +<FaShoppingCart/> 
      </button>
  </div>
  );
}
