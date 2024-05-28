import Component1 from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import Component2 from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import Component3 from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
	return (
		<main className="flex flex-col justify-center items-center gap-16 text-center my-auto">
			<Component1 />
			<Component2 />
			<Component3 />
		</main>
	);
}

export default App;
