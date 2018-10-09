import React from 'react'
import ReactDOM from 'react-dom'
import { ActionCableProvider } from 'react-actioncable-provider'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { API_WS_ROOT } from './constants'

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root'))
registerServiceWorker()
