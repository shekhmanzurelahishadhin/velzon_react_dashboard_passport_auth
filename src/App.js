import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
