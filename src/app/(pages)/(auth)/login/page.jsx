"use client";
import { getLoginUser } from "@/app/redux/auth/authSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .max(6, "Password cannot exceed 6 characters") // Fixed validation message
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = localStorage.getItem("token");

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      console.log(values);
      dispatch(getLoginUser(values));
      setSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token]);

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex items-center justify-center">
      <div className="w-[60%] flex flex-col items-center justify-center h-screen">
        <div className="w-[40%] h-[auto] max-w-md bg-slate-300 rounded-lg shadow-md p-6 flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col w-full">
                <Field
                  name="email"
                  type="email"
                  className="bg-gray-100 text-sm text-gray-900 border-0 rounded-md px-2 py-1.5 mb-3 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{
                    color: "red",
                    textAlign: "start",
                    fontSize: "0.8rem",
                  }}
                />

                <Field
                  name="password"
                  type="password"
                  className="bg-gray-100 text-sm text-gray-900 border-0 rounded-md px-2 py-1.5 mb-3 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{
                    color: "red",
                    textAlign: "start",
                    fontSize: "0.8rem",
                  }}
                />

                <p className="text-gray-900 text-xs">
                  You have already account?{" "}
                  <Link
                    href={"/login"}
                    className="text-blue-500 hover:underline text-xs font-bold"
                  >
                    SignIn
                  </Link>
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r text-sm from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-3 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  {isSubmitting ? "Submitting..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
