import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Fournit le store à l'ensemble de l'appli
import store from './store';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import UserProfile from '../pages/UserProfile';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from '../pages/Error';
import './style/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename={'/ArgentBank-Frontend'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
