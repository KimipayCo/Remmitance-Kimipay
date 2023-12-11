import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/user-authentication/RegistrationPage';
import LoginPage from './components/user-authentication/LoginPage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import SupportPage from './components/Help&SupportPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/help-&-support' element={<SupportPage />} />
          <Route path='/resources' element={<ResourcesPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
