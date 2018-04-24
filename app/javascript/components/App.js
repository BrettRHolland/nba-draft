import React from "react";
import { Router, browserHistory, Route, IndexRoute } from "react-router";
import Header from "./Header";
import Players from "./Players";

const App = props => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Header}>
				<IndexRoute component={Players} />
			</Route>
		</Router>
	);
};

export default App;
