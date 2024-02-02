import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import TvShows from "./components/TVShows/TvShows";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper-content">
          <Route path='/home' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/tv_shows/' component={TvShows}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
