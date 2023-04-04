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

const completedQuestionsString = localStorage.getItem('completedQuestions');
const savedCompletedQuestions = completedQuestionsString ? (JSON.parse(completedQuestionsString) as string[]) : [];

export const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedQuestions, setCompletedQuestions] = useState<string[]>(savedCompletedQuestions);

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
