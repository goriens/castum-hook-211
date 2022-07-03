import { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const FetchData = () => {
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        console.log(r);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
