// React
import React, { FC, Dispatch, SetStateAction, useState } from 'react';

interface InitialAppContext {
  completedQuestions: string[];
  setCompletedQuestions: Dispatch<SetStateAction<string[]>>;
}

const defaultAppContext = {
  completedQuestions: [],
  setCompletedQuestions: () => {},
};

export const AppContext = React.createContext<InitialAppContext>(defaultAppContext);

export const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedQuestions, setCompletedQuestions] = useState<string[]>(defaultAppContext.completedQuestions);

  return (
    <AppContext.Provider
      value={{
        completedQuestions,
        setCompletedQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
