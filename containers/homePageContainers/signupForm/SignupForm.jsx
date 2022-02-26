import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "../../../styles/homePageStyles/signupForm.module.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(15, "15 characters or less is accepted")
        .required("Required"),
      email: Yup.string().email("Email is not valid").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : (
          <p style={{ color: "var(--light-gray)" }}>a</p>
        )}
      </div>
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

export default SignupForm;
