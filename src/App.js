import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Copywritting from './components/Copywritting';
import CTAButton from './components/CTAButton'

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Copywritting />
        <div className='button-container'>
          <CTAButton />
        </div>
      </Layout>
    </div>
  );
}

export default App;
