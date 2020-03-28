import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Navigation from "../Navigation/navigation.component";
import Store from "../../pages/store.component";

class App extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Navigation />
					<Route to="/" component={Store} />
				</Switch>
			</>
		);
	}
}

export default App;
