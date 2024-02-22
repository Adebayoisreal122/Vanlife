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

        
  <div className='container-fluid p-4 d-flex gap-5 '>
    <div className="card">
      <img src={data.imageUrl} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
      </div>
    </div>
    <div className=' p-5 justify-content-center'>
        <p className="p-5 ">{data.description} 
        <button className=' justify-content-center d-flex btn btn-outline-info'> rent your van</button>
        </p>
    </div>
  </div>


<div>
    
</div>
    </>
  )
}

export default VanDescript