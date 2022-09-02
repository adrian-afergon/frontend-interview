import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Layout} from './components/Layout';
import {CreateBus} from "./pages/Dashboard/CreateBus";
import {BusList} from "./pages/Dashboard/BuslList";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Login} from "./pages/Login";
import {AuthProvider} from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<ProtectedRoute redirect="/dashboard"><Dashboard/></ProtectedRoute>}>
              <Route path="create" element={<CreateBus/>}/>
              <Route path="" element={<BusList/>}/>
              <Route path="view" element={<BusList/>}/>
            </Route>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
      </div>
    </AuthProvider>
  );
}

export default App;
