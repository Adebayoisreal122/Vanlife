import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const VanDescript = () => {
  let { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    axios.get(`https://van-backend.onrender.com/api/vans/`)
      .then(res => {
        console.log(res.data);
        setVan(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Link to={"/vans"} className="col-sm-6 vanlink  col-md-2 p-2 text-center my-2 mx-4">Go back to all vans</Link>

      {van && (
        <div className='container-fluid p-4 gap-5 '>
          <div className="card">
            <img src={van.imageUrl} className="card-img-top" alt={van.name} />
            <div className="card-body">
              <h5 className="card-title">{van.name}</h5>
              <p className="card-text">{van.description}</p>
              <p className="card-text">Price: {van.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VanDescript;
