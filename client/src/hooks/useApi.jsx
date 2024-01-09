import { useState } from "react";
import API_GMAIL from "../services/api.js";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const call = async (payload, type = "") => {
    setIsLoading(true);
    setIsLoading(null);
    setError("");
    try {
      let res = await API_GMAIL(urlObject, payload, type);
      setResponse(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { call, response, error, isLoading };
};
export default useApi;
