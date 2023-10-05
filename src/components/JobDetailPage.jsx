import React, { useEffect, useState } from "react";
import styled from "styled-components";
import auth from "../assets/auth.jpg";
import { useNavigate } from "react-router-dom";

const JobDetailPage = () => {
  let [data, setData] = useState({});
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("clicked"));
    setData(data);
  }, []);
  let navigate = useNavigate();

  console.log(data);
  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <DIV>
          <img src={auth} alt="" />
          <div className="details">
            <div id="title">
              <p>{data.company}</p>
              <p>{data.location}</p>
            </div>
            <div className="url">
              <p>company_url-{data.company_url}</p>
            </div>
            <p className="title">{data.title}</p>
            <p>{data.description}</p>
            <button
              onClick={() => {
                navigate("/application-form");
              }}
            >
              Apply here
            </button>
          </div>
        </DIV>
      )}
    </>
  );
};

export default JobDetailPage;

let DIV = styled.div`
  img {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100%;
  }
  .details {
    background-color: #c3c3c35c;
    width: 50%;
    padding: 20px;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 3rem;

    #title {
      display: flex;
      justify-content: space-between;
    }
    button {
      padding: 10px 30px;
      background-color: teal;
      color: white;
      border: 0;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
