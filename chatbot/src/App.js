import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/template";
import Template2 from "./pages/template2";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content bg-gray-100 h-full">
          <Routes>
            <Route path="/positive-chat" element={<Template />} />
            <Route path="/negative-chat" element={<Template2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
