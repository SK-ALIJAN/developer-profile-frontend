import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../Redux/actionType";
import { useFormik } from "formik";
import { signupSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Authentication = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const [moveto, setMoveTo] = useState(false);
  const dispatch = useDispatch();

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        dispatch({ type: userSignup, payload: values });
        setMoveTo(true);
        action.resetForm();
      },
    });



  return (
    <>
      {!isAuth && moveto === false ? (
        <div>
          <h1>Sign up</h1>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />

              {errors.name && touched.name ? <p>{errors.name}</p> : ""}
            </div>

            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : ""}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : (
                ""
              )}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Sign in</h1>
          <form action="">
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Authentication;
