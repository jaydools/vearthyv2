import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Bedroom from "./pages/bedroom/Bedroom";
import Bathroom from "./pages/bathroom/Bathroom";
import Sustainability from "./pages/sustainability/Sustainability";
import Warranty from "./pages/warranty/Warranty";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/sleep-health" element={<Bedroom />} />
                    <Route path="/dental-health" element={<Bathroom />} />
                    <Route path="/sustainable-design" element={<Sustainability />} />
                    <Route path="/warranty" element={<Warranty />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
