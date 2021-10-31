import React, { useCallback, useContext, useState } from "react";
import { createContext } from "react";

interface Flip {
  front: boolean;
  setFront(): void;
}

const FlipContext = createContext<Flip>({} as Flip);

export const FlipProvider: React.FC = ({ children }) => {
  const [front, setFront] = useState(true);

  const handleFront = useCallback(() => setFront((old) => !old), []);

  return (
    <FlipContext.Provider value={{ front, setFront: handleFront }}>
      {children}
    </FlipContext.Provider>
  );
};

export const useFlip = () => {
  const context = useContext(FlipContext);
  if (!context) {
    throw new Error("useFlip is being used outside of FlipContext");
  }
  return context;
};
