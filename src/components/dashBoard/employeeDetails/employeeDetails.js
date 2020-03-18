import React from 'react';
import { connect } from 'react-redux';
import { employeeDetails } from '../../actions/employeeAction'
import './employeeDetails.css'
class Employee extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount = () => {
        this.props.employeeDetails()
    }
    logoutHandler = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>PHONE NO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.empDetails.map((item, index) => {
                                return (<tr key={index}>
                                    
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNo}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>

                        </tr>
                    </tbody>
                </table>
                <button onClick={this.logoutHandler}>LOGOUT</button>

            </div>

        )
    }
}

const mapStateToProps = state => {
   console.log("state==>",state)
    return{
        empDetails : state.employeeReducer.empdetails
    }
    
}
const mapDispatchToProps = {
    employeeDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);