"use client"
//import "../style/globals.css";
import {useState} from "react"
import { useRouter } from "next/navigation";


export default function FormPayment({total}) {

    const [formData, setFormData] = useState({
      shipmentAddress: '',
      shipmentPhone: '',
      cardNumber: '',
      expire: '',
      securityCode: '',
      });
      
    const router = useRouter();
    const handleSubmit = async(e) => {;
       e.preventDefault();
      if(!formData.shipmentAddress || !formData.shipmentPhone || !formData.cardNumber || !formData.expire || !formData.securityCode)
          {
          return alert("Plese All Fields Are Requiered ")
        }
        /*
        const response= await fetch('https://jopsearch-backend.onrender.com/'+id, {
          method: 'POST',
          body: JSON.stringify({
            shipmentAddress:formData.shipmentAddress,
            shipmentPhone: formData.shipmentPhone,
            cardNumber:formData.cardNumber,
            expire: formData.expire,
            expire: formData.securityCode,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      const result= await response.json();
      console.log(result);*/
      console.log("your Payment is Sent")
      router.push('/')
      };
   
  return (
    <div className="content-form">
      
    <form onSubmit={handleSubmit} className="form">
    <p className="total">Total Of Amount: {total}</p>
    <label>
     Shipment Address:
      <input className="input-shipmentAddress"
        type="text"
        value={formData.shipmentAddress}
        onChange={(e) => setFormData({  ...formData,shipmentAddress: e.target.value })}
      />
    </label>
    <label>
    Shipment Phone:
      <input className="input-shipmentPhone"
        type="text"
        value={formData.shipmentPhone}
        onChange={(e) => setFormData({  ...formData,shipmentPhone: e.target.value })}
      />
    </label>
    <label>
    Card Number:
      <input className="input-cardNumber"
        type="text"
        value={formData.cardNumber}
        onChange={(e) => setFormData({  ...formData,cardNumber: e.target.value })}
      />
    </label>
    <label>
    expire:
      <input className="input-expire"
        type="text"
        value={formData.expire}
        onChange={(e) => setFormData({  ...formData,expire: e.target.value })}
      />
    </label>
    <label>
    Security Code:
      <input className="input-securityCode"
        type="text"
        value={formData.securityCode}
        onChange={(e) => setFormData({  ...formData,securityCode: e.target.value })}
      />
    </label>
      <button className="submit" type="submit">Submit</button>
  </form>
    </div>
  );
}
