import './App.css';
import Admin from './components/Admin';
import { StatsProvider } from './context/StatsContext';

function App() {
  return (
    <StatsProvider>
      <Admin />
    </StatsProvider>
  );
}

export default App;
