import react from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat'
import SetAvtar from './pages/SetAvtar';

const App = () => {
    return (
       <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/setAvtar' element={<SetAvtar />} />
        <Route path='/' element={<Chat />}/>
       </Routes>
       </BrowserRouter>
    )
}

export default App;