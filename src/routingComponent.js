import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import loginPage from './components/dashBoard/loginPage/loginPage';
import employeeDetails from './components/dashBoard/employeeDetails/employeeDetails';

class Routing extends React.Component{

    render() {
        return (

            <div>
                <Router>
                    <Route exact path="/" component={loginPage} />
                    <Route exact path="/employeedetails" component={employeeDetails} />
                </Router>
            </div>
        )
    }
}
export default Routing;