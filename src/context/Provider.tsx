import { FC, ReactNode, useState } from 'react';
import Context from './Context';
import { Funnel } from '../types/funnel';

interface Props {
  children: ReactNode;
}

const FunnelProvider: FC<Props> = ({ children }) => {
  const [funnel, setFunnel] = useState<Funnel | null>(null);

  const updateFunnel = (updatedFunnel: Funnel | null) => {
    setFunnel(updatedFunnel);
  };

  return (
    <Context.Provider value={{ funnel, updateFunnel }}>
      {children}
    </Context.Provider>
  );
};

export default FunnelProvider;