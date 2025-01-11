import './App.css';
import ButtonComponent from './pages/overboarding/components/button';
import HeroComponent from './pages/overboarding/components/hero';
import PrhaseComponent from './pages/overboarding/components/phrase';

function App() {
  return (
    <div className='preview'>


      <div className='app'>
        <HeroComponent />
        <PrhaseComponent />
        <ButtonComponent />
      </div>
    </div>

  );
}

export default App;
