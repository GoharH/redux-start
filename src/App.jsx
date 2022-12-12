import './App.css';
import UserList from './components/fill-compo';
import Header from './components/header';
import CreateBox from './components/create-boxes';
import { Routes, Route } from "react-router-dom";



function App() {
  return <>
    <Header />
    <Routes>
      <Route path={'user'} element={<UserList />} />
      <Route path={'box'} element={<CreateBox />} />
    </Routes>
  </>
}

export default App;
