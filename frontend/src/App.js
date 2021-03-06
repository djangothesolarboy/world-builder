import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserCharPage from "./components/UserCharPage/UserCharPage";
import CharFormPage from "./components/CharFormPage/CharFormPage";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<>
					<Switch>
						<Route path="/login" >
							<LoginFormPage />
						</Route>
						<Route path="/signup">
							<SignupFormPage />
						</Route>
						<Route path="/characters/new">
							<CharFormPage />
						</Route>
						<Route path={`/characters/21`}>
							<UserCharPage />
						</Route>
					</Switch>
				</>
			)}
			
		</>
	);
}

export default App;
