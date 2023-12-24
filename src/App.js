import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';
import AppRouter from './config/router';
// import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<div className="App">
      <AppRouter />

  </div>

  );
}


export default App;
