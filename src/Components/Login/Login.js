import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {

  const formikSignIn = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signIn = (event) => {
    event.preventDefault();
    try {
      const user = signInWithEmailAndPassword(
        auth,
        formikSignIn.values.email,
        formikSignIn.values.password
      );
      navigate("/posts");
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="container pt-5 signin">
      <div>
        <form onSubmit={formikSignIn.handleSubmit} className="app-signin mt-5">
          <div className="container header pt-4 pb-5" data-aos="fade-up" data-aos-duration="1000">
            <img
              className="app-logo text-center"
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
              value={formikSignIn.values.email}
              onBlur={formikSignIn.handleBlur}
              onChange={formikSignIn.handleChange}
            />
            {formikSignIn.touched.email && formikSignIn.errors.email ? (
              <div className="error">{formikSignIn.errors.email}</div>
            ) : null}
          </div>

          <div className="inputs" data-aos="fade-up" data-aos-duration="1200">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formikSignIn.values.password}
              onBlur={formikSignIn.handleBlur}
              onChange={formikSignIn.handleChange}
            />
            {formikSignIn.touched.password && formikSignIn.errors.password ? (
              <div className="error">{formikSignIn.errors.password}</div>
            ) : null}
          </div>

          <input data-aos="fade-up" data-aos-duration="1500"
            disabled={!formikSignIn.isValid}
            onClick={signIn}
            className="submit"
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
      <section className="dont-have-account" data-aos="fade-up" data-aos-duration="2000">
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")}> Sign up</button>{" "}
        </p>
      </section>
    </section>
  );
}

export default Login;
