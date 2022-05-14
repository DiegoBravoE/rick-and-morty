import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

const [location,setLocation]= useState({})
const [id, setId]= useState("")

useEffect(()=>{

  const random=Math.floor(Math.random()*126 ) + 1

           axios.get(`https://rickandmortyapi.com/api/location/${random }/`)
           .then((res)=>setLocation(res.data))

},[])


const searchId = () => {
 if(id <= 126 ){

     axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
          .then((res) => setLocation(res.data));
 }if (id <= 0) {
          alert("Debe elegir un numero entre el  1 y 126")
   }else (alert("Debe elegir un numero entre el  1 y 126"))
           }
  

  
    return (
        <div>
            <div className="image">
            <img src={`../img/Rectangle1.svg`} alt="" />
            </div>
        <div className="navbar">
                 <h2> {location.name}</h2>  
                <div className="date">
                     <p><strong>Type:{location.type}</strong></p><p><strong>Dimension: {location.dimension}</strong></p><p><strong>Population:{location.residents?.length}</strong></p>
                </div>    
                <div className="input">

                    <input type="text" placeholder='Type a location id' onChange={(e) => setId(e.target.value)} value={id} />                    
                    <button  onClick={searchId}><strong>Search</strong></button>

                </div>     
          
         </div>
                
                        <ul className="contenedor" >
                            {location.residents?.map(resident => (
                                
                                <ResidentInfo url={resident}  key={resident.id}  />
                                ))
                            }
                            
                        </ul>
        </div>
    );
};

export default Location;