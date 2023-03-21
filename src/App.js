import './App.css'; 
import SimpleContainer from './components/SimpleContainer';
import SearchQuestion from './components/Search';

function App() {
  return (
    <div className="App">
      <SimpleContainer
        childUi={
            <SearchQuestion />
        } 
      />
    </div>
  );
}

export default App;
