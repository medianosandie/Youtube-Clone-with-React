
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Eksplorasi from './Eksplorasi';
import Subscription from './Subscription';
import './style/content.css';

function App() {
	return (
    	<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/eksplorasi" component={Eksplorasi}/>
					<Route path="/subscription" exact component={Subscription}/>
				</Switch>
			</Router>
    	</div>
  	);
}

export default App;
