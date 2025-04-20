
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-tci-primary mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 max-w-md text-center mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <a
          href="/"
          className="btn-primary"
        >
          Return to Home
        </a>
      </div>
    </Layout>
  );
};

export default NotFound;
