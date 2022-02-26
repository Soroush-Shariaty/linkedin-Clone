import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { data } from "../../../utils/data";
import styles from "../../../styles/homePageStyles/loginForm.module.css";
import { loginUser } from "./../../../redux/actions/userActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { users } = data;
  const router = useRouter();
  const state = useSelector((state) => state);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email is not valid").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const user = users.find((item) => item.email === values.email);
      if (!user) {
        alert("no user found with provided email!");
      } else {
        if (user.password === values.password) {
          dispatch(loginUser(user));
          alert("Successfull login!");
          console.log(state);
          router.push("/");
        } else {
          alert("wrong password!");
        }
      }
    },
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : (
          <p style={{ color: "var(--light-gray)" }}>a</p>
        )}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : (
          <p style={{ color: "var(--light-gray)" }}>a</p>
        )}
      </div>
      <input
        type="submit"
        value="Sign in"
        className={styles.loginForm__submit}
      />
    </form>
  );
};

export default LoginForm;
