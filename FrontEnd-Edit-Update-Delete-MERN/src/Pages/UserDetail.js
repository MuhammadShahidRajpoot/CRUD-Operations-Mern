import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const UserDetail = () => {

  const[userData,setUserData] = useState([]);

  // Getting user data from MongoDb
  const getUserData = async() =>{
    let result = await fetch("http://localhost:5000/users")
    result = await result.json();
    setUserData(result)
  }
  console.log(userData)

  // Deleting user on the basis of id
  const deleteUser = async(id) =>{
    let result = await fetch(`http://localhost:5000/users/${id}`,{
      method: 'delete'
    })
    result = result.json();
    if(result){
      getUserData()
    }
  }


  useEffect(()=>{
    getUserData()
  },[])



  return (
    <>
      <div className="container my-5 w-75">

      <table className="table table-striped table-hover">
        <thead>
          <tr className="bg-primary text-light">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((su,ind)=>{
              return(
                <>
                  <tr>
                        <th scope="row">{ind+1}</th>
                        <td>{su.name}</td>
                        <td>{su.address}</td>
                        <td>{su.email}</td>
                        <td>{su.password}</td>
                        <td>
                          <Link to={`/updateuser/${su._id}`} className="btn btn-success btn-sm">
                              <i class="fas fa-edit"></i>
                          </Link>
                          <a onClick={()=>deleteUser(su._id)} className="btn btn-danger btn-sm">
                              <i class="fa-solid fa-trash-can"></i>
                          </a>
                      </td>              
                  </tr>                
                </>
              )
            })
          }
          
        </tbody>
      </table>
      </div>
    </>
  );
};

export default UserDetail;
