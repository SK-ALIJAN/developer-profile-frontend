import React, { useEffect } from "react";
import auth from "../assets/auth.jpg";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { list } from "../data";

const JobListingsPage = () => {
  let { data } = useSelector((store) => store.reducer);
  const navigate = useNavigate();
  const [searchparam] = useSearchParams();

  let handleClick = (res) => {};

  return (
    <DIV>
      <img src={auth} alt="" />

      <div className="parent">
        <p className="length">{data.length} results found</p>

        <div className="jobs">
          {data.map((ele, index) => {
            return (
              <div key={index}>
                <div>
                  <p>{ele.company}</p>
                  <p>{ele.location}</p>
                </div>

                <p className="title">{ele.title}</p>
                <p>{ele.description}</p>
                <button
                  onClick={() => {
                    handleClick(ele);
                  }}
                >
                  View details
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </DIV>
  );
};

export default JobListingsPage;

const DIV = styled.div`
  background-color: transparent;
  img {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 110%;
  }
  .length {
    font-size: large;
    padding-left: 20px;
    font-size: 15px;
    font-weight: 600;
    color: white;
    padding-top: 20px;
  }
  .parent {
  }
  .jobs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 10px;
    color: white;
    padding: 10px;
  }

  .jobs > div {
    background-color: #0d0d0d54;
    padding: 20px;
    border-radius: 11px;
    div {
      display: flex;
      justify-content: space-between;
    }
    button {
      padding: 10px 15px;
      border-radius: 6px;
      border: 0;
      cursor: pointer;
      margin-top: 10px;
    }
  }
`;
