import './App.css';
import Header from './component/header'
import store from './redux/store'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Posts from './component/posts'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Router>
           <ToastContainer/>
           <Switch>
             <Route exact path='/'>
                <Header/>
             </Route>
             <Route path='/posts'>
               <Posts controll='posts'/>
             </Route>
           </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
