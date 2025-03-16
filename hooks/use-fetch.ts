import { useCallback, useEffect, useState } from "react";

export default function useFetch<T>(
  fetchFunction: () => Promise<T>,
  autoFetch = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchFunction();
      setData(response);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("an error occurred"));
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      fetch();
    }
  }, [autoFetch, fetch]);

  return { data, loading, error, refetch: fetch, reset };
}
