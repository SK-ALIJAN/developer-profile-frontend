import React from "react";
import { useSelector, useDispatch } from "react-redux";
import auth from "../assets/auth.jpg";
import styled from "styled-components";
import { fetchjobs } from "../Redux/action";
import { useNavigate, useSearchParams } from "react-router-dom";

const LandingPage = () => {
  const signupData = useSelector((store) => store.authReducer.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchparam, setSearchparam] = useSearchParams();

  function change(e) {
    let obj = {
      language: e.target.value,
    };
    setSearchparam(obj);
    dispatch(fetchjobs(e.target.value));
    navigate("/job-listings");
  }
  return (
    <>
      {!signupData ? (
        <p>please wait...</p>
      ) : (
        <DIV>
          <img src={auth} alt="" />

          <div>
            <h2>Welcome {signupData.name} , to job portal </h2>
            <p>Please set your preference</p>
            <select onChange={change}>
              <option value="">Select your programming language</option>
              <option value="javascript">Javacsript</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="node">Node</option>
              <option value="php">PHP</option>
            </select>
          </div>
        </DIV>
      )}
    </>
  );
};

export default LandingPage;

let DIV = styled.div`
  img {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    p {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    select {
      padding: 10px;
      border-radius: 7px;
    }
  }
`;
