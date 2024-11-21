"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import auth from "./auth";
import { useRouter } from "next/navigation"; // Import the useRouter hook

const WithAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  const router = useRouter(); // Initialize useRouter hook for navigation

  // Function to handle the button click and navigate to the Add Blog page
  const handleAddBlog = () => {
    router.push("/add-blog"); // Navigate to the Add Blog page
  };

  return (
    <div>
      {!token ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />

          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default auth(WithAuth);
