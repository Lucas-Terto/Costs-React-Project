import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/company' element={<Company />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/newproject' element={<NewProject />}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
