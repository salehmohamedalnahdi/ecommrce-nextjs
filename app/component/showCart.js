"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonDeleteCart from "./deleteCart";



export default function ShowCart (){
  const [data,setData]=useState()
  const [load,setLoad]=useState(false)
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async () => {
    setLoad(true)
    const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/procarts', {
      next: {revalidate: 60}
  });
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setLoad(false)
  setData(result)
  }
  const handleQuantityChange =async ( quantity,id) => {
    const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/updateprocart/'+id, {
      method: 'PATCH',
      body: JSON.stringify({
        qu: quantity,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const result= await response.json();
  await fetchData()
  //window.location.reload()
  };
  const calculateTotal = () => {
    let totalPrice = 0;

    data.forEach((item) => {
      const product = item.products[0];
      totalPrice += product.price * item.qu;
    });

    return totalPrice;
     };
  return (
    <div className="mainCart">  
      <div className="contentCart">
                <h4 className="titleCart">Welcome To Your Cart</h4>
                 {load && <h2 className="load">Loading....</h2>}
                 {data && 
                   <div className="rowCart">
                    <h4 >Total: {calculateTotal()}$</h4>
                    {/* <Link href={{ pathname: "/payment", query: { total: calculateTotal() } }}>
                      <p className="linkPay">Pay Now</p>
                    </Link> */}
                    <Link href={`/payment/${calculateTotal()} `}>
                      <p className="linkPay">Pay Now</p>
                    </Link>
                   </div> 
                  }
                 {data && data.map((item,index)=>{
                  const product=item.products[0]
                   return(
                           <div key={index} className="proCart">
                             {product.image ?
                               <Image src={product.image}
                                 width={100}
                                 height={100}
                                 alt="/imgempty.png"
                                /> : 
                               <Image src="/imgempty.png"
                                 width={100}
                                 height={100}
                                 alt=""
                               />
                              }
                              <p className="name">{product.name} </p>                         
                              <p className="price">{product.price}$</p>
                               <input
                                  className="qu"
                                  min={1} 
                                  type="number"
                                  value={item.qu}
                                  onChange={(e) => handleQuantityChange( e.target.value,item.id)}
                                />
                               <ButtonDeleteCart id={item.id} />
                           </div>
                         )
                 })}
      </div>
    </div>
  )}


  