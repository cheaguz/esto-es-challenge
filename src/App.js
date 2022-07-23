import './App.css';
import { Routes, Route} from 'react-router-dom'

import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { AddProject } from './pages/AddProject/AddProject';
import { EditProject } from './pages/EditProject/EditProject'

function App() {
  return (
    <div className='App'>
    <Header />
    <Routes>
     <Route path='/' element={ <Home /> } /> 
     <Route path='/new-project' element={ <AddProject /> } /> 
     <Route path='/edit-project/:id' element={ <EditProject /> } /> 

    </Routes>
    </div>
  );
}

export default App;
