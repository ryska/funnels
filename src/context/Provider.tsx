import { FC, ReactNode, useState } from 'react';
import Context from './Context';
import { Funnel } from '../types/funnel';

interface Props {
  children: ReactNode;
}

const FunnelProvider: FC<Props> = ({ children }) => {
  const [funnel, setFunnel] = useState<Funnel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateFunnel = (updatedFunnel: Funnel | null) => {
    setFunnel(updatedFunnel);
  };

  const updateIsLoading = (updateIsLoading: boolean) => {
    setIsLoading(updateIsLoading);
  }

  return (
    <Context.Provider value={{ funnel, isLoading, updateFunnel, updateIsLoading }}>
      {children}
    </Context.Provider>
  );
};

export default FunnelProvider;