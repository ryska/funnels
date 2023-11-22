import { createContext } from 'react';
import { Funnel } from '../types/funnel';

export type FunnelContextType = {
  funnel: Funnel | null;
  isLoading?: boolean;
  updateFunnel: (funnel: Funnel | null) => void;
  updateIsLoading: (isLoading: boolean) => void;
}

const FunnelContext = createContext<FunnelContextType | null>(null);

export default FunnelContext;