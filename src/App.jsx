import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<>
			<NavBar></NavBar>
			<Banner></Banner>
			<Skills></Skills>
			<Projects></Projects>
			<Contact></Contact>
		</>
	);
}

export default App;
