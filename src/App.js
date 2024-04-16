// import './App.css';
import Navigation from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/Intro'
import Trending from './components/Trending';
function App() {
  return (
    <div className="App">
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>
      <div className="trending">
        <Trending></Trending>
      </div>
    </div>
  );
}

export default App;
