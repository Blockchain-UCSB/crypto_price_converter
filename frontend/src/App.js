import logo from './logo.svg';
import './App.css';
import CategoryDropdown from './CategoryDropdown';
import ChakraBoxExample from './ChakraBoxExample';
import SimpleComponent from './title';
import WithSubnavigation from './navbar ';
function App() {
  return (
    <div className="App">
      <CategoryDropdown />
      <CategoryDropdown />
      <ChakraBoxExample />
      <SimpleComponent></SimpleComponent>
      <WithSubnavigation></WithSubnavigation>
    </div>
  );
}

export default App;
