import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/sleep-health" element={<Bedroom />} />
                    <Route path="/dental-health" element={<Bathroom />} />
                    <Route path="/sustainable-design" element={<Bamboo />} />
                    <Route path="/warranty" element={<Bamboo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
