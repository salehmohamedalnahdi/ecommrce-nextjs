"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";


const CommentButton = ({id}) => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [data, setData] = useState({comment:"",rate:0});
  
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setData({ ...data, rate: newRating });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!data.comment || !data.rate)
      {
      return alert("Plese All Field Are Not Allow Empty ")
    }
    const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/createinteraction/'+id, {
        method: 'POST',
        body: JSON.stringify({
          comment:data.comment,
          rate: parseInt(data.rate),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result= await response.json();
    console.log(result);
    window.location.reload()
    };


  return (
    <form onSubmit={handleSubmit} className='formComment'>
      <input className='inputComment'
        type="text"
        value={data.comment}
        onChange={(e) => setData({...data,comment: e.target.value})}
        placeholder="Type comment..."
      />
      <div className="inputRatingDiv">
         {/* <input className='inputRating'
           type="text"
           value={data.rate}
           onChange={(e) => setData({...data,rate: e.target.value})}
         /> */}
          {/* <div className="star-rating">
             {[1, 2, 3, 4, 5].map((value) => (
               <label key={value}>
                 <input
                   type="radio"
                   name="rating"
                   value={value}
                   checked={rating === value}
                   onChange={() => handleRatingChange(value)}
                   style={{ display: 'none' }}
                 />
                 <span className="star" role="button">
                   {value <= rating ? '★' : '☆'}
                 </span>
               </label>
             ))}
          </div> */}
          <div className="star-rating inline-block text-2xl mr-4">
             {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="inline-block cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    checked={rating === value}
                    onChange={() => handleRatingChange(value)}
                    className="hidden"
                  />
                  <span className={` ${rating >= value ? 'text-orange-500' : 'text-gray-600'}`}>
                    &#9733;
                  </span>
                </label>
              ))}
            </div>
         <button className='submit' type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CommentButton;