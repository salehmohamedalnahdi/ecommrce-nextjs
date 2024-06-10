"use client"
//import "../style/globals.css";
import {useState} from "react"
import { useRouter } from "next/navigation";


export default function FormPoduct() {
 
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: '',
        cat: '',
        image: '',
      });
      
    const router = useRouter();
    const handleSubmit = async(e) => {;
        e.preventDefault();
        if(!formData.name || !formData.price || !formData.cat || !formData.desc || !formData.image){
          return alert("Plese All Fields Are Requiered ")
        }
        const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/create', {
          method: 'POST',
          body: JSON.stringify({
            name:formData.name,
            desc: formData.desc,
            price:formData.price,
            cat:formData.cat,
            image:formData.image,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      const result= await response.json();
      console.log(result);
      router.push('/')
      };
   
  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
    <label>
      Name:
      <input className="input-name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({  ...formData,name: e.target.value })}
      />
    </label>
    <label>
      Price:
      <input className="input-price"
        type="text"
        value={formData.price}
        onChange={(e) => setFormData({  ...formData,price: e.target.value })}
      />
    </label>
    <label>
      Categoery:
      <input className="input-cat"
        type="text"
        value={formData.cat}
        onChange={(e) => setFormData({  ...formData,cat: e.target.value })}
      />
    </label>
    <label>
      URL Of Img:
      <input className="input-img"
        type="text"
        value={formData.image}
        onChange={(e) => setFormData({  ...formData,image: e.target.value })}
      />
    </label>
    <label>
       Description:
      <textarea className="textarea"
        value={formData.desc}
        onChange={(e) => setFormData({ ...formData,desc: e.target.value })}
      />
    </label>
      <button className="submit" type="submit">Submit</button>
  </form>
    </div>
  );
}
