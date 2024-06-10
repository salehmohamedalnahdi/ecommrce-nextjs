
"use client"
import { useState,useEffect } from "react";
import { format } from 'date-fns';
import CommentButton from "./commentButton"
import AddToCart from './addToCart'
import Image from "next/image";



export default function OneProduct ({id}){
  const [data,setData]=useState()
  const [interactions,setInteractions]=useState()
  useEffect(()=>{
    fetchData(id)
  },[])
  const fetchData = async (id) => {
    const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/product/'+id, {
      next: {revalidate: 60}
  });
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result[0])
  setInteractions(result[0].interactions)
  }
  const calculateStars = () => {
    let stars = 0;
    let num = 0;
    interactions.forEach((item) => {
      num += 1;
      const star = item.rate;
      stars += star;
    });

    const averageStars = stars / num;
    const starIcons = [];

    for (let i = 0; i < 5; i++) {
      if (i < averageStars) {
        starIcons.push(<span className="rate" key={i}>&#9733;</span>);
      } else {
        starIcons.push(<span  key={i}>&#9733;</span>);
      }
    }
    return starIcons;
  };
  const numStars=(rate)=>{
    const starIcons = [];
    for (let i = 0; i < rate; i++) {
      starIcons.push(<span className="rate" key={i}>&#9733;</span>);
    }
    return starIcons;
  }
    return (
    <div className="mainDtails">  
       <div className="contentDtails">
        {data &&
         (
           <>
            <div className="pro"> 
            {data.image ?  <Image src={data.image}
                        width={400}
                        height={400}
                         alt="/imgempty.png"
                       />: 
                       <Image src="/imgempty.png"
                       width={400}
                       height={400}
                        alt=""
                      />
                       }
               <div className="details">
                  <p className="name">{data.name}</p>
                  <p className="cat">Categoery: {data.cat}</p>
                  <div className="rowPro">                 
                     <p className="price">{data.price}$</p>
                     <p >{calculateStars()}</p>
                     <AddToCart id={data.id} />                          
                  </div>
                  <p className="desc">{data.desc} </p>
               </div>
           </div>
           <CommentButton id={data.id}/>
           </>
         )
        }
          <div className="interactions">
            {interactions && (interactions).map((item,index)=>{
              return(
                  <div key={index} className="comment">
                    <p>{item.comment}</p>
                    <div className="createdAt">
                      {item.rate ?  <p className="rate">{numStars(item.rate)}</p> : ""}
                      <small>{format(new Date(item.createdAt), 'yy-MM-dd HH:mm')}</small>
                    </div>
                  </div>
                )
            })}
          </div>
       </div>
    </div>
  )}

