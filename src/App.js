import logo from './logo.svg';
import './App.css';
import DiMarkHero from './component/DiMarkHero';
import WorkProcessSection from './component/WorkProcessSection';
import ServicesFaqSection from './component/ServicesFaqSection';
import ContactFooterSection from './component/ContactFooterSection';
function App() {
  return (
    <div className="App">
    <DiMarkHero />
    <WorkProcessSection />
    <ServicesFaqSection/>
    <ContactFooterSection/>
    </div>
  );
}

export default App;
