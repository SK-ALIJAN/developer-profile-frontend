import React from "react";
import styled from "styled-components";
import { MdOutlineDownloadDone, MdOutlineRemoveDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PreviewPage = ({
  company,
  company_url,
  description,
  email,
  file,
  location,
  name,
  note,
  title,
}) => {
  let navigate = useNavigate();
  return (
    <PREVIEW>
      <h2 className="title">Application Preview</h2>
      <h3>Applied Company details</h3>

      <div className="company-title">
        <p>{company}</p>
        <p>{location}</p>
      </div>

      <div className="company-des">
        <p> {company_url}</p>
      </div>

      <div className="company-applied">
        <p>{title}</p>
        <p>{description}</p>
      </div>

      <h3>Personal details</h3>
      <div className="personal-details">
        <p>{name}</p>
        <p>{email}</p>
        <div className="cover">
          <b>Cover Letter Note</b>
          <p>{note}</p>
        </div>
        <p className="file">
          {file ? (
            <p>
              <MdOutlineDownloadDone className="icon" />
              resume uploaded successfully
            </p>
          ) : (
            <p>
              <MdOutlineRemoveDone className="icon" /> Resume not uploaded
            </p>
          )}
        </p>
      </div>

      <button
        onClick={() => {
          navigate("/success");
        }}
      >
        Apply
      </button>
    </PREVIEW>
  );
};

export default PreviewPage;

let PREVIEW = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 9px;
  padding: 20px;
  width: 50%;
  left: 50%;
  top: 7%;
  transform: translate(-50%);
  word-wrap: break-word;

  .title {
    text-align: center;
    text-decoration: underline teal wavy 2px;
    margin-bottom: 10px;
  }
  .company-title {
    display: flex;
    justify-content: space-between;
  }
  .company-applied {
    margin-bottom: 20px;
  }
  .cover {
    margin-top: 10px;
  }
  .cover > p:nth-child(2) {
    border: 2px solid teal;
    padding: 5px;
    border-radius: 7px;
  }

  button {
    margin-top: 20px;
    width: 100%;
    border: 0;
    background-color: teal;
    color: white;
    border-radius: 7px;
    padding: 10px;
    cursor: pointer;
  }
  .file {
    margin-top: 10px;
    p {
      display: flex;
      align-items: center;
    }
    .icon {
      margin-right: 10px;
      color: teal;
    }
  }
`;
