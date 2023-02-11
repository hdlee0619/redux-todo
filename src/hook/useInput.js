import { useState, useCallback } from 'react';

const useInput = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const setStateHandler = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = () => {
    setState(initialValue);
  };
  return [state, setStateHandler, reset];
};

export default useInput;
