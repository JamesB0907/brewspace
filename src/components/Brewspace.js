import { Route, Routes, Outlet } from 'react-router-dom'
import './Brewspace.css';
import { AppViews } from './views/AppViews';
import { Login } from './auth/Login';
import { Authorized } from './views/Authorized';
import { Register } from './auth/Register';

function Brewspace() {
  return (
   <Routes>
      <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            
            <Route path="*" element={
			          <Authorized>
                  <AppViews/>
                </Authorized>
            }/>
      </Route>

   </Routes>
  )
}

export default Brewspace;
