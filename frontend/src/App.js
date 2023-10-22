import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateAlert from "./pages/CreateAlert";
import ViewAlert from "./pages/ViewAlert";
import SubmitDoc from "./pages/SubmitDoc";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<CreateAlert/>}/>
          <Route path="/viewAlert" element={<ViewAlert/>}/>
          <Route path="/submitDoc" element={<SubmitDoc/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
