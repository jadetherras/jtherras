
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import DocumentTitle from 'react-document-title';


function App() {
  
  return (
    <div className="App">
      <DocumentTitle title='J.Therras Showcase'>
          <Home/>
          </DocumentTitle>
    </div>
  );
}

export default App;