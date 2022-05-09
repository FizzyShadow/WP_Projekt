import NavigationBar from './components/NavigationBar';
import Home from './pages/HomePage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <div className="Iris">
      <AuthContextProvider>
        <NavigationBar/>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

        </Routes>
      </AuthContextProvider>
        
     
       
      
    </div>
  );
}

export default App;
