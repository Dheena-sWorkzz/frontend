import './App.css'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStartedPage from './component/GetStarted'
import Login from "./component/Login"


function App() {

  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<GetStartedPage />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path /> */}
            </Routes>
        </Router>
    </>
  )
}

export default App
