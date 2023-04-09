import '../styles/Home.css'
import MainContent from '../components/MainContent';
import { useContext } from 'react';
import { DisplayContext } from '../utils/context';

function Home() {

  return (
    <div className="Home">
      <MainContent showButton={true} />
    </div>
  );
}

export default Home;
