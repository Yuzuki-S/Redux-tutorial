import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux' //{one variable} = you can use this as a function
import allReducers from './reducers'

import App from './components/App'

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//createStore is all my application states/data. This is going to be changed by not by coding

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}> 
      <App />
    </Provider>,
    document.getElementById('app')
  )
})



//The data that gets saved in store is determined by reducers (a function that says what data supposed to save in our store)
//Provider - new root components (Makes store available to all containers/components )
//Store is a bunch of data (Object)