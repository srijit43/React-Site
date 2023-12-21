import './App.css';
import TitleBar from './components/TitleBar'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <TitleBar />
      <div className="mb-above-foot-bar">
        <Outlet />
      </div>
      <div class="footer p-3 bg-dark poppin-font">
        <p>&copy; 2023 Srijit Bhattacharya</p>
      </div>
    </div>
  );
}

export default App;
