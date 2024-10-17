import Qwerty from "./Components/Qwerty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./page/content";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/content" element={<Content />} />
        <Route path="/example" element={<Qwerty />} />
      </Routes>
    </Router>
  );
}

export default App;
