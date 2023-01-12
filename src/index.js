import React from "react";
import ReactDOM from "react-dom/client";

//Redux
import store from "./Store/store";
import { Provider } from "react-redux";

//Imported custom component(s)
import App from "./App";

//Custom stylesheet(s)
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
