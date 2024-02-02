import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Contact, Projects }  from "./pages"

import { Navbar } from "./components"; // remember Footer



const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/" element={<About/> } />
                <Route path="/" element={<Projects/> } />
                <Route path="/" element={<Contact/> } />
            </Routes>
        </Router>
    </main>
  )
}

export default App


