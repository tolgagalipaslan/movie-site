import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingModal from "../../../components/LoadingModal";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/auth";
import axios from "axios";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please do not leave any spaces in the form."),
      password: Yup.string()
        .min(8, "Minimun be 8 characters")
        .required("Please do not leave any spaces in the form."),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:5000/auth/login", {
          password: values.password,
          email: values.email,
        });
        await dispatch(login(res.data));
      } catch (error) {
        errorEmail("This email is already in use !");
        console.log(error.message);
      }
    },
  });
  const errorEmail = (message) => toast.error(message);

  return (
    <div className="w-[1180px]  h-screen bg-[#212529] mx-auto flex items-center justify-center">
      {/* TOASTIFT */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full  h h-full flex items-center justify-center  ">
        <form
          className="flex flex-col border border-emerald-400 shadow-md shadow-emerald-500 w-4/12  h-5/12 mx-auto rounded-md p-4 bg-[#191d20] text-white"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="rounded-md p-2 text-white font-semibold outline-none  bg-[#212529]"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-400">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="rounded-md p-2 outline-none  text-white font-semibold bg-[#212529]"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-400">{formik.errors.password}</div>
          ) : null}

          {/* AUTH */}

          {/* AUTH */}
          <button type="submit" className=" btn  mt-4 w-full bg-emerald-600 ">
            Submit
          </button>
        </form>
      </div>
      {/* <LoadingModal /> */}
    </div>
  );
};

export default Login;
