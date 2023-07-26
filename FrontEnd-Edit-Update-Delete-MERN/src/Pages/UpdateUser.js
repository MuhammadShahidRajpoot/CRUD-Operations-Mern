import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateUser = () => {


  const navigate = useNavigate();

  const params = useParams()


  const[name, setName] = useState('')
  const[address, setAddress] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')


  const updateData = async(e) =>{
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/users/${params.id}`,{
      method: "put",
      body: JSON.stringify({name, address, email, password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json();
    console.log(result)    
    navigate('/users')
    

  }

  useEffect(()=>{
    getUserData()
  },[])


  const getUserData = async () =>{    
      let result = await fetch(`http://localhost:5000/singleuser/${params.id}`)
      result = await result.json()      
      setName(result.name)
      setAddress(result.address)
      setEmail(result.email)
      setPassword(result.password)

  } 

  



  return (
    <>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Edit Registration Form</h1>
                <p className="lead">
                  Please update / edit the values
                </p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                        onChange={(e)=>setName(e.target.value)}
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                          value={name}
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                        onChange={(e)=>setAddress(e.target.value)}
                          className="form-control form-control-lg"
                          type="text"
                          name="address"
                          value={address}
                          placeholder="Enter your address"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                        onChange={(e)=>setEmail(e.target.value)}
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                        onChange={(e)=>setPassword(e.target.value)}
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          value={password}
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <button onClick={updateData}
                        to="/register" className="btn btn-lg btn-primary">
                          Update Record
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
