import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Navigation from "./components/navigation/navigation.component";
import Store from "./pages/store/store.component";

const App = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Store} />
			</Switch>
		</>
	);
};

export default App;
