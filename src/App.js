import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;
