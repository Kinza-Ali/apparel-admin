import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others"> Other Pages</div>
      </div>
    </div>
  );
}

export default App;
