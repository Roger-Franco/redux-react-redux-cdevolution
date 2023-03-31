import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HooksCakeContainer } from './components/HooksCakeContainer';
import { HooksIceCreamContainer } from './components/HooksIceCreamContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import { NewHooksCakeContainer } from './components/NewHooksCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
      <p>------------------------------</p>
      <ItemContainer cake />
      <ItemContainer/>
      <p>------------------------------</p>
      <HooksCakeContainer />
      <CakeContainer />
      <HooksIceCreamContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <NewHooksCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
