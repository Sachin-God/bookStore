import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Register from "./Components/Register.jsx";
import { useAuth } from "./Context/AuthProvider";
import About from "./Components/About.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={authUser ? <Books /> : <Navigate to='/register' />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;