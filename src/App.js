import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogIn from './views/Log In/LogIn';
import SignIn from './views/Sign In/SignIn';
import AddItem from './views/AddItem/AddItem';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/AddItem' element={<AddItem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
