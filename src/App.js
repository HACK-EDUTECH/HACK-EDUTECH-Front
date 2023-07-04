import Router from "./routes/Router";
import "./App.css";

import { RecoilRoot } from 'recoil';

export default function App() {
	return (
		<div className="App">
		    <RecoilRoot>
				<Router />
		    </RecoilRoot>
		</div>
	)
}