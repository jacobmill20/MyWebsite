import MyHeader from "./MyHeader"
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Games from "./Pages/Games";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    	<MyHeader />
    	<div className="container">
    		<Routes>
    			<Route path="/" element={ <Home />} />
    			<Route path="/about" element={ <About />} />
    			<Route path="/projects" element={ <Projects />} />
    			<Route path="/games" element={ <Games />} />
    		</Routes>
    	</div>
    </>
  );
}

export default App;

