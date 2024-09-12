import React, { createContext, useState, ReactNode } from 'react';

// Define the context and its type
interface PollProviderProps {
  children: ReactNode;
}

interface PollContextType {
  pollData: any; // Replace 'any' with the actual type of your poll data
  setPollData: React.Dispatch<React.SetStateAction<any>>; // Adjust type as needed
}

export const PollContext = createContext<PollContextType | undefined>(undefined);

const PollProvider: React.FC<PollProviderProps> = ({ children }) => {
  const [pollData, setPollData] = useState<any>(/* initial state */);

  return (
    <PollContext.Provider value={{ pollData, setPollData }}>
      {children}
    </PollContext.Provider>
  );
};

export default PollProvider;
