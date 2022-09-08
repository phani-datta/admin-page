import './App.css';
import Admin from './components/Admin';
import { StatsProvider } from './context/StatsContext';
import { MdDashboard } from 'react-icons/md';
import { FaUserAlt, FaVideo, FaUserPlus } from 'react-icons/fa';
import { IoIosWarning, IoMdInformationCircle, IoMdNotifications } from 'react-icons/io';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';

function App() {
  return (
    <StatsProvider>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <-- Page content --> */}
          <Admin />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <-- Sidebar content --> */}
            <li><a className="text-white active"><MdDashboard />Dashboard</a></li>
            <li><a><FaUserAlt />WOW Users</a></li>
            <li><a><FaVideo />Video Clips</a></li>
            <li><a><IoIosWarning />Reported Content</a></li>
            <li><a><FiLayers />Category</a></li>
            <li><a><IoMdInformationCircle />Info Page</a></li>
            <li><a><AiFillQuestionCircle />FAQ</a></li>
            <li><a><IoMdNotifications />Push Notifications</a></li>
            <li><a><FaUserPlus />Internal User</a></li>
          </ul>
        </div>
      </div>
    </StatsProvider>
  );
}

export default App;
