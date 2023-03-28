import '../styles/Home.css'
import MainContent from '../components/MainContent';

function Home() {
  return (
    <div className="Home">
      <div className="Home-section">
        <MainContent showButton={true} />
      </div>
    </div>
  );
}

export default Home;
