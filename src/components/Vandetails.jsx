// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Vandetails = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/vans')
//         .then(res => {
//             console.log(res.data);
//             setData(res.data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }, []);

//   return (
//     <>
//     <div className='explore'>
//     <h1> <br /><br />Explore our van options</h1>
//     </div>
//     <div className='container'>
//       <div className='row'>
//       <div className="col-sm-6 vanbutt col-md-2 p-2 text-center my-2 mx-4">Simple</div>
//       <div className="col-sm-6 vanbutt col-md-2 p-2 text-center my-2 mx-4">Luxury</div>
//       <div className="col-sm-6 vanbutt col-md-2 p-2 text-center my-2 mx-4">Rugged</div>
//       <Link to={"/vans"} className="col-sm-6 vanlink  col-md-2 p-2 text-center my-2 mx-4">Clear Filters</Link>
//       </div>
//     </div>
//     <div>


// </>
// )
// }

// export default Vandetails

















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vandetails = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/vans')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleFilter = (type) => {
    console.log(type);
    const filteredItems = data.filter(item => item.type === type);
    setFilteredData(filteredItems);
  };

  return (
    <>
      <div className='explore'>
        <h1> <br /><br />Explore our van options</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className="col-sm-6 vanbutt col-md-2 btn btn-outline-warning p-2 text-center my-2 mx-4" onClick={() => handleFilter('Simple')}>Simple</div>
          <div className="col-sm-6 vanbutt col-md-2 btn btn-outline-warning p-2 text-center my-2 mx-4" onClick={() => handleFilter('Luxury')}>Luxury</div>
          <div className="col-sm-6 vanbutt col-md-2 btn btn-outline-warning p-2 text-center my-2 mx-4" onClick={() => handleFilter('Rugged')}>Rugged</div>
          <Link to={"/vans"} className="col-sm-6 vanlink  col-md-2 p-2 text-center my-2 mx-4">Clear Filters</Link>
        </div>
      </div>
      <div>
        <div className='container'>
          <div className='row'>
            {(filteredData.length ? filteredData : data).map((item, i) => (
              <div className='my-5 col-sm-6 col-md-5 border-none' key={i}>
                <div className="card">
                  <img src={item.imageUrl} className="card-img-top" alt="" />
                  <div className="card-body d-flex">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="end card-text">$ {item.price}</p>
                  </div>
                  <Link key={item.id} to={`/vans/${item.id}`} className="btn btn-primary m-3 p-3 w-50" onClick={() => handleItemClick(i)}>{item.type}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Vandetails;
