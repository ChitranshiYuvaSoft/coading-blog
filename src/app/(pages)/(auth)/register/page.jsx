"use client";

import { getRegisterUser } from "@/app/redux/auth/authSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .max(6, "Password must not exceed 6 characters")
    .required("Password is required"),
  // userCheck: Yup.boolean().oneOf([true], "You must agree to continue"),
});

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
    if (savedToken) {
      router.push("/");
    } else {
      router.push("/register");
    }
  }, [router]);

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const result = await dispatch(getRegisterUser(values)).unwrap();
      console.log(result); // Handle the response if needed
      localStorage.setItem("token", result.token); // Save token if applicable
      router.push("/"); // Redirect after successful login
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex items-center justify-center">
      <div className="w-[60%] flex flex-col items-center justify-center h-screen">
        <div className="w-[40%] h-[auto] max-w-md bg-slate-300 rounded-lg shadow-md p-6 flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Register</h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              userCheck: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col w-full">
                <Field
                  name="name"
                  type="text"
                  className="bg-gray-100 text-sm text-gray-900 border-0 rounded-md px-2 py-1.5 mb-3 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="User Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{
                    color: "red",
                    textAlign: "start",
                    fontSize: "0.8rem",
                  }}
                />

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
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
