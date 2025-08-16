
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </footer>
    </div>
  );
}


export default App;
