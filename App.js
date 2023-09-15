import{BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import './App.css';

import Tasks from './comp/tasks';
import About from './comp/about';


function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <h1>To-do List</h1>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      </header>
      
      <main>  

        <Routes>
          <Route path="/" element={<Tasks/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>

      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
