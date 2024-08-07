import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import MobileNavComponent from './MobileNavComponent';
import SpriteComponent from './SpriteComponent';


function App() {
  return (
    <>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <MobileNavComponent/>
      <div className="mobileControl">
        <span></span>
      </div>
      <SpriteComponent/>
    </>
  );
}

export default App;
