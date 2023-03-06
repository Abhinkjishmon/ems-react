import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Edit from './components/Edit';
import Add from './components/Add';
import View from './components/View';
import PageNotFound from './components/PageNotFound';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Admin />}/>
        <Route path='add' element={<Add />}/>
        <Route path='edit/:id' element={<Edit />}/>
        <Route path='view/:id' element={<View />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
