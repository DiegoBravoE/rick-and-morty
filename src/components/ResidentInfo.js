import axios from 'axios'
import {useState,useEffect} from 'react';

const ResidentInfo = ({url}) => {
const[resident,setResident]=useState({})
useEffect(()=>{
    axios.get(url)
    .then (res=>setResident(res.data))


},[url])
 console.log(resident)
    return (
        <div  >
            { 
            <div className="card">
                <img src={resident.image} alt={resident.image} />     
            <li className="list" >
               <h3>Name : {resident.name} </h3>  <br />
                <h3>Status : {resident.status}  </h3><br />
                <h3>Lugar de Origen : {resident.origin?.name} </h3><br />
                <h3>Episode : {resident.episode?.length} </h3>
            </li>
          </div>  
            }
        </div>
    );
};

export default ResidentInfo;
