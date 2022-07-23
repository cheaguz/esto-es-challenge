import './App.css';
import { Routes, Route} from 'react-router-dom'

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { AddProject } from './pages/AddProject/AddProject';

function App() {
  return (
    <div className='App'>
    <Header />
    <Routes>
     <Route path='/' element={ <Home /> } /> 
     <Route path='/new-project' element={ <AddProject /> } /> 

    </Routes>
    </div>
  );
}

export default App;
