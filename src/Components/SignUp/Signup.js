import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./sign-up.css";
import { auth } from "../../Firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";


// initialValues for all inputs
const initialValues = {
  name: "",
  email: "",
  password: "",
};


/* const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
}; */


// here validationSchema for handle user signup
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(5).max(10),
})

function Signup() {

  // useNavigate for navigate to another page
  const navigate = useNavigate();
  const [user, setUser] = useState({});


 // usefromik we used for handle form for us
  const formik = useFormik({
    initialValues,
    onSubmit : (values) => {
        console.log(values)
    }, 
    validationSchema,
  });


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // to handle user Sign up with email and password and username

  const signUp = (event) => {
    event.preventDefault();
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      );
      navigate("/posts");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="container pt-3 signup">
      <div>
        <form onSubmit={formik.handleSubmit} className="app-signup mt-5">
          <div className="container header pt-4 pb-5" data-aos="fade-up" data-aos-duration="1000">
            <img
              className="app-logo"
              src="/images/instagran-log.png"
              alt="instagram-logo"
            />
          </div>
          <div className="inputs" data-aos="fade-up" data-aos-duration="1200">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onBlur ={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="inputs" data-aos="fade-up" data-aos-duration="1200">
            <input
              type="text"
              name="name"
              placeholder="Useranme"
              value={formik.values.name}
              onBlur ={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="inputs" data-aos="fade-up" data-aos-duration="1200"> 
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onBlur ={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <input data-aos="fade-up" data-aos-duration="1500"
            disabled = {!(formik.dirty && formik.isValid)}
            onClick={signUp}
            className="submited"
            type="submit"
            value="Sign up"
          />
        </form>
        
      </div>
      <section className="have-account" >
        <p>
          Have an account?{" "}
          <button onClick={() => navigate("/login")}> Log in</button>{" "}
        </p>
      </section>
    </section>
  );
}

export default Signup;
