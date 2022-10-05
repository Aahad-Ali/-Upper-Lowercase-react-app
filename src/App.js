import './App.css';
import Navbar from './components/navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Textarea heading="Enter any text here:"/>
      </div>
    </>
  );
}

export default App;
