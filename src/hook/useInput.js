import { useState, useCallback } from 'react';

const useInput = (intivalValue) => {
  const [state, setState] = useState({ title: '', comment: '' });
  const setStateHandler = useCallback((event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);
  const reset = useCallback(() => setState(intivalValue), [intivalValue]);
  return [state, setStateHandler, reset];
};

export default useInput;
