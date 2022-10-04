import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>Other pages</div>
      </div>
    </div>
  );
}

export default App;
