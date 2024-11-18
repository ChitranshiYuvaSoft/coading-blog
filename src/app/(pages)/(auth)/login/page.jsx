"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getLoginUser } from "npm-redux-toolkit-package";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .max(6, "Password cannot exceed 6 characters") // Fixed validation message
    .required("Password is required"),
  userCheck: Yup.string().required("User check is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = localStorage.getItem("token");
  const [initialValue, setInitialValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
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
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-[80%] xl:h-[auto]  max-w-md bg-slate-300 rounded-lg shadow-md p-6 flex items-start justify-around flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>

          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                <Field
                  name="email" // Added name attribute
                  type="email"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red", textAlign: "start" }}
                />
                <Field
                  name="password" // Added name attribute
                  type="password"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red", textAlign: "start" }}
                />
                <div className="flex items-center justify-between flex-wrap">
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-900 cursor-pointer"
                  >
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    Remember me
                  </label>
                  <ErrorMessage
                    name="userCheck"
                    component="div"
                    style={{ color: "red", textAlign: "start" }}
                  />
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline mb-0.5"
                  >
                    Forgot password?
                  </a>
                  <p className="text-gray-900 mt-4">
                    Don't have an account?{" "}
                    <Link
                      href={"/register"}
                      className="text-sm text-blue-500 -200 hover:underline mt-4"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  {isSubmitting ? "Submitting..." : "Login"}
                </button>
                <button
                  type="button"
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  Google
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
