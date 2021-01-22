import { Route, Switch } from 'react-router-dom'

import Home from './pages/HomePage/HomePage'
import HeroInfo from './pages/HeroInfoPage/HeroInfoPage'
import Heroes from './pages/HeroesPage/HeroesPageContainer'
import Header from './components/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <main className='main'>
                <Switch>
                    <Route exact path='/heroes' component={Heroes} />
                    <Route exact path='/hero/:id' component={HeroInfo} />
                    <Route path='/' component={Home} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
