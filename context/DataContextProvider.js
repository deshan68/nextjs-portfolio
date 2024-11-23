"use client";

import { getAllProjects } from "@services/firebaseService";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  });

  return (
    <DataContext.Provider value={{ projects, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useProject = () => useContext(DataContext);
