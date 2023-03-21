import './App.css'; 
import SimpleContainer from './components/SimpleContainer';
import SearchQuestionPlayer from './components/SearchQuestionPlayer';

function App() {
  return (
    <div className="App">
      <SimpleContainer
        childUi={
            <SearchQuestionPlayer />
        } 
      />
    </div>
  );
}

export default App;
