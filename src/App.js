import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BannerComponent from './components/Banner';
import FeaturesComponent from './components/Features';
import NavbarComponent from './components/Navbar';
import SecureandReliableComponent from './components/SecureandReliable';
import JoinCommunityComponent from './components/JoinCommunity';
import FooterComponent from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BannerComponent />
      <FeaturesComponent />
      <SecureandReliableComponent />
      <JoinCommunityComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
