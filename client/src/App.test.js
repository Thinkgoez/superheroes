import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'


it('rendering without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Router><App /></Router>, div)
})