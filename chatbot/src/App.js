import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/template";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content bg-gray-100 h-full">
          <Routes>
            <Route path="/chat" element={<Template />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
