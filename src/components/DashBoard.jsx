import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./styles/dashboardstyle.css";
import { useParams } from "react-router-dom";
import axios from "axios";


const DashBoard = ({ cardData }) => {
  const [userDetails, SetUserDetails] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {

  
    try {
      const response = await axios.get(
        "https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo"
      );
      SetUserDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const deleteddata = await axios.delete(
        `https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/${id}`
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Dash Board</h1>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {cardData.map((item, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div
                  className={`card card-${index}`}
                  style={{ borderLeftColor: item.lineColor }}
                >
                  <div className="card-content">
                    <div className="card-details">
                      <h5 className={`card-title card-title-${index}`}>
                        {item.title}
                      </h5>
                      <h5 className="card-text">{item.count}</h5>
                    </div>
                    <i className={`card-icon ${item.icon}`}></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

        <div className="container mt-5 text-center" id="h1-design">
          <h1>Book List</h1>
        </div>
      <div className="row row-cols-1 row-cols-md-3 g-4" id="main-box">
        {userDetails.map((item) => {
          return (
            <>
              <div key={item.id}>
                <div className="col">
                  <div className="card" id="display_card">
                    <h3 className="card-title text-center" id="font-design">
                      Book Name: {item.Book_title}
                    </h3>
                    <img src={item.image} className="card-img-top" alt="img" />
                    <div className="card-body">
                      <h6 className="card-title" id="font-design">
                        Book Author: {item.Book_Author}
                      </h6>
                      <div className="mt-2" id="font-design">
                        <p>ISBN Number: {item.ISBN_Number}</p>
                        <p>Date of Publish: {item.Publication}</p>
                        <p>Author Biography: {item.Author_Biography}</p>
                      </div>
                      <div
                        className="d-flex justify-content-around card-footer"
                        id="footer-design"
                      >
                        <button
                          className="btn btn-warning"
                          onClick={() => navigate(`/edituser/${item.id}`)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* <div class ="ms-1 mt-5"> 
               <h3>
                For Add New Book:
                  <NavLink to="/createuser" className='btn btn-success ms-2' >ADD</NavLink>
                </h3> 
            </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
