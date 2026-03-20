import { createContext, useContext } from 'react';

const NetscapeContext = createContext(null);

export const useNetscape = () => useContext(NetscapeContext);

export default NetscapeContext;
