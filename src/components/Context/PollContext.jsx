import React, { createContext, useState } from 'react';

// Create the context
export const PollContext = createContext(undefined);

const PollProvider = ({ children }) => {
  const [pollData, setPollData] = useState(null); // Adjust initial state as needed
 

  return (
    <PollContext.Provider value={{ pollData, setPollData }}>
      {children}
    </PollContext.Provider>
  );
};

export default PollProvider;
