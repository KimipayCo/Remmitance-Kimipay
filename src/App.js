import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import RegistrationPage from './components/user-authentication/RegistrationPage';
import LoginPage from './components/user-authentication/LoginPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about-us' />
          <Route path='/help-&-support' />
          <Route path='/resources' />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
