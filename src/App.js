import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksIceCreamContainer from './components/HooksIceCreameContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>

  );
}

export default App;
