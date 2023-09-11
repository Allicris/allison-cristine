import Header from './components/Header';
import Card from './components/Card';

function App () {
  return (
    <>
    <Header />
    {/* The About Me is displayed by default */}
    <Card text={'About Me'}/>
    </>
  );
}

export default App;