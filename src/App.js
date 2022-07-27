import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Card from './components/cards/Card';
import data from "./helper/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='flex_container'>
        {data.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </div>
  );
}

export default App;
