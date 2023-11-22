import './App.css';
import Home from './Components/Home/Home';
import FunnelProvider from './context/Provider';

function App() {
  return (
    <FunnelProvider>
      <Home />
    </FunnelProvider>
  )
}

export default App;
