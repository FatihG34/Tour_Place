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
      {data.map((item) => {
        const { id, title, image, desc } = item;
        return (
          <Card key={id} title={title} img={image} desc={desc} />

        )
      })}
    </div>
  );
}

export default App;
