import { createContext } from 'react';
import { Funnel } from '../types/funnel';

export type FunnelContextType = {
  funnel: Funnel | null;
  updateFunnel: (funnel: Funnel | null) => void;
}

const FunnelContext = createContext<FunnelContextType | null>(null);

export default FunnelContext;