import './App.css'
import Location from './components/Location/Location'
import Time from './components/Time/Time'
import Map from './components/Map/Map'
import Crew from './components/Crew/Crew'


function App() {

  return (
    <div className="app">
      <Location />
      <Time />
      <Map />
      <Crew />
    </div>
  )
}

export default App
