import React, { useState } from "react";
import auth from "../assets/auth.jpg";
import styled from "styled-components";
import { useFormik } from "formik";
import { submitSchema } from "./authentication/schemas";
import PreviewPage from "./PreviewPage";

let initialValues = {
  name: "",
  email: "",
  note: "",
  file: "",
};

let PreviewInitialdata = {
  flag: false,
  details: {},
};

const ApplicationFormPage = () => {
  let [preview, setPreview] = useState(PreviewInitialdata);

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: submitSchema,
      onSubmit: (values, action) => {
        let FinalDetails = {
          ...JSON.parse(localStorage.getItem("clicked")),
          ...JSON.parse(localStorage.getItem("auth")),
        };
        FinalDetails.note = values.note;
        FinalDetails.file = values.file;

        setPreview((prev) => {
          return { ...prev, flag: true, details: FinalDetails };
        });

        action.resetForm();
      },
    });

  return (
    <DIV>
      <img src={auth} alt="" />
      <div className="form">
        <h1>kindly fill this </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.name && touched.name ? <p>{errors.name}</p> : ""}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : ""}
          </div>
          <div>
            <textarea
              id=""
              placeholder="Cover Letter Note"
              name="note"
              value={values.note}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.note && touched.note ? <p>{errors.note}</p> : ""}
          </div>
          <div>
            <label>Resume upload</label>
            <input
              type="file"
              value={values.file}
              onChange={handleChange}
              name="file"
              onBlur={handleBlur}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {preview.flag ? <PreviewPage {...preview.details} /> : ""}
    </DIV>
  );
};

export default ApplicationFormPage;

let DIV = styled.div`
  img {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100%;
  }
  .form {
    background-color: #b3b0b077;
    border-radius: 11px;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    div {
      margin-bottom: 10px;
    }
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      height: 2.5rem;
      border: 0;
      border-radius: 6px;
      padding-left: 10px;
    }
    textarea {
      width: 100%;
      height: 5rem;
      padding: 10px;
      border: 0;
    }
    button {
      width: 100%;
      border: 0;
      padding: 10px;
      color: white;
      background-color: teal;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
