"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const auth = (WrappedComponent) => {
  return (props) => {
    const {isSuccess} = useSelector(state => state.auth)
    const publicRoutes = ["/login", "/register", "/"];
    const router = useRouter();
    const pathname = usePathname();
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        if (!publicRoutes.includes(pathname)) {
          router.push("/login");
        }
      } else {
        if (publicRoutes.includes(pathname)) {
          router.push("/");
        } else {
          router.push(pathname);
        }
      }
    }, [token, pathname]);

    if (!token && !publicRoutes.includes(pathname)) {
      return <>Loading ....</>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default auth;
