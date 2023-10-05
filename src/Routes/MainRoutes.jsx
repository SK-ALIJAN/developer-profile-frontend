import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../components/LandingPage";
import JobListingsPage from "../components/JobListingsPage";
import JobDetailPage from "../components/JobDetailPage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import SuccessPage from "../components/SuccessPage";
import Authentication from "../components/authentication/Authentication";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <LandingPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/job-listings"
        element={
          <PrivateRoute>
            <JobListingsPage />
          </PrivateRoute>
        }
      />
      <Route path="/Authentication" element={<Authentication />} />
      <Route
        path="/job-detail/:jobId"
        element={
          <PrivateRoute>
            <JobDetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/application-form/:jobId"
        element={
          <PrivateRoute>
            <ApplicationFormPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/success"
        element={
          <PrivateRoute>
            <SuccessPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
