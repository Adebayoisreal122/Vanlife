import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const VanDescript = () => {

  let {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
    axios.get('http://localhost:5000/api/vans/')
                .then(res => {
        console.log(res.data);
            setData(res.data[id]);
        })
        .catch(err => {
            console.log(err);
        });
}, [id]);

    return (
    <>
        <Link to={"/vans"} className="col-sm-6 vanlink  col-md-2 p-2 text-center my-2 mx-4">Go back to all vans</Link>

        
  <div className='container w-80'>
    <h1>{data.name}</h1>
    <div className="card">
      <img src={data.imageUrl} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  </div>

<h1>welcome to the</h1>

<div>
    
</div>
    </>
  )
}

export default VanDescript