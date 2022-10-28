import './styles/App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';

// jsx - html in js

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />

      <main className='content-wrapper'>
        {/* <Dialogs /> */}
        <Profile />
      </main>

      <Footer />
    </div>
  );
}

export default App;
