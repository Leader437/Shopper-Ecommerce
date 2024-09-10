import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

const App = () => {
  return (
    <div className="bg-slate-100 min-h-dvh">
      <Navbar/>
      <Admin />
    </div>
  );
};

export default App;
