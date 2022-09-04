import './App.css';
//import SelectCity from './COMPONENTS/SelectCity';
import WeatherDisplayArea from './COMPONENTS/WeatherDisplayArea/';
import SelectCity from './COMPONENTS/SelectCity/';
import { CityProvider } from './CONTEXTS/CityContext';



function App() {
 
  return (
    <CityProvider>
      <SelectCity/>
      <WeatherDisplayArea/>
    </CityProvider>
  );
}

export default App;
