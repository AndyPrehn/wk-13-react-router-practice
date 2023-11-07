import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <h1 className="App-title">GitHub Student List</h1>
                </header>
                <br />
                <nav>
                    <ul>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/StudentForm">Student Form</Link></li>
                        <li><Link to="/StudentList">Student List</Link></li>
                    </ul>
                </nav>
                <Route exact path="/About">
                    <About />
                </Route>

                <Route exact path="/StudentForm">
                    <StudentForm />
                </Route>

                <Route exact path="/StudentList">
                    <p>Student list:</p>
                    <StudentList />
                </Route>




            </Router>
        </div>
    );
}

export default App;
