import React, { useState, useEffect } from 'react';
import axios from "axios";


const HostVans = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/host/vans')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

return (
  <>

  <div className='listedv'>
  <p className='ms-4 bol'>Your listed vans</p>



{data.map(van => (
          <div className='d-flex ' key={van.id}>
            <div className='vanList'>
            <div>
            <img className='vanImage' src={van.imageUrl} alt={van.name} />
            </div>
            <div>
              <p>{van.name}</p>
              <p> ${van.price}/day</p>
            </div>
            </div>
          </div>
        ))}


  </div>
  </>
)
}

export default HostVans