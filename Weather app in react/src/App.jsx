import Button from '@mui/material/Button';
import './App.css'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {

  let handleClick = () => {
    console.log('button was clicked');
  };
  
  return (
   <>
   {/* <SearchBox/> */}
   {/* <InfoBox/> */}
   <WeatherApp />
   </>
  )
}

export default App
