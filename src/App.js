import { Routes, Route} from 'react-router-dom'


import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NewProject } from './pages/NewProject';
import { EditProject } from './pages/EditProject'


function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/new-project' element={<NewProject />} /> 
          <Route path='/edit-project/:id' element={<EditProject />} /> 
        </Routes>
      </>
  );
}

export default App;
