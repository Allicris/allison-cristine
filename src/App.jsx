import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App () {
  return (
    <>
    <Header />
    <Nav />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;