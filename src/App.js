import DeveloperCard from './components/DeveloperCard';
import HowToContribute from './components/HowToContribute';
import developers from './data/developers.json';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Developer Community</h1>
      </header>
      <main>
        <section className="developer-list">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} developer={dev} />
          ))}
        </section>
        <HowToContribute />
      </main>
    </div>
  );
};

export default App;
