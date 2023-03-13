import './App.css'
import Notification from './components/notification'
import Delete from './components/delete'
function App() {

  return (
    <div className="App">
      <Notification purpose="Delete Account" />
      <Delete />
      Hello world
    </div>
  )
}

export default App
