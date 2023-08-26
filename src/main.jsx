import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
// import todoStore from './todosStore.js'
import store from './app/store.js'
import CounterView from './app/features/counter/CounterView.jsx'
// import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  // <Provider store={todoStore}>
  //   <App />
  // </Provider>,
  <Provider store={store}>
  <h2>Counter App</h2>
   <CounterView></CounterView>
</Provider>,

)
