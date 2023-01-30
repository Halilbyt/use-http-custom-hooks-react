import React, { useState } from "react";

const useHTTP = (requestConfig, dataHandler) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sandRequest = async () => {
    try {
      setLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Some connection error!");
      }

      const data = await response.json();
      dataHandler(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    sandRequest,
  };
};

export default useHTTP;
