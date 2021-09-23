
import './App.css';
import 'bootstrap';
import ReactBootstrap, {Container, Jumbotron, Button, Row, Col, Grid, Panel,Form, FormGroup, FormLabel, FormText,FormControl} from 'react-bootstrap'
import Header from './components/Header.jsx';
import Nav from './components/nav.jsx';
import Contact from './components/contact';
import Photo from './components/photo';
import Skills from './components/skills';
import Name from './components/name';
import dev1 from './components/image/dev1.jpg';
import Actionlink from './components/Actionlink';
import PropTypes from "prop-types"; 

function App() {
  return (
    <div className="App">
      <Nav/>
      <br/>
      <br/>
      <Actionlink/>
      <Header/>
      <br/>
      <br/>
      <Photo image={dev1}/>
      <br/>
      <br/>
      <Name nom="marwen88"/>
      <br/>
      <br/>
      <Skills profession="junior web dev"/>
      <br/>
      <br/>
     <Contact/>
    </div>
  );
}

export default App;
