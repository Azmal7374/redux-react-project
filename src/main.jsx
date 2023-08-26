import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import todoStore from './todosStore.js'
// import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  <Provider store={todoStore}>
    <App />
  </Provider>,

)
