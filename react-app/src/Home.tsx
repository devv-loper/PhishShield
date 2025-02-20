import React from 'react';
import { Shield } from 'lucide-react';
import EmailAnalyzer from './components/EmailAnalyzer';
import URLScanner from './components/URLScanner';
import ThreatMap from './components/ThreatMap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Navbar from './components/Navbar';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';

function Home(){
    return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      {/* <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/dashboard' element={<Dashboard/>}>
        </Route>
      
      </Routes> */}
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EmailAnalyzer />
          <URLScanner />
        </div>

        {/* <div className="mt-8">
          <ThreatMap />
        </div> */}
      </main>
    </div>
  );
}

export default Home;