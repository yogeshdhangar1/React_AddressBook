import React ,{ Component } from 'react';
import "./HomePage.css"
import logo from "./OIP.jpg";
import {Link} from "react-router-dom";
import AddressBookService from '../../service/AddressBookService';
import './Display.css';
import AddDataLogo from './AddData.jpg';
import Display from './Display'

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          AllPersonArray: []
        };
      }

      componentDidMount() {
        console.log("Life cycle method");
        this.getAllPerson();
      }

      getAllPerson = () => {
        AddressBookService.getAllAddressBookData()
          .then((response) => {
            this.setState({
              AllPersonArray: response.data.object
            });
            console.log(response);
          })
          .catch((err) => {
            alert("Something went wrong, while getting all the records", err);
          });
      };

    render() {
        console.log("====================================");
        console.log("Render method");
        console.log("====================================");
    return(
        <div>
            <body>
          <header className="header-content header">
            <div className="logo-content">
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
              <div>
                <span className="emp-text">ADDRESS</span>
                <br />
                <span className="emp-text emp-payroll">BOOK</span>
              </div>
            </div>
          </header>
          <div className="main-content">
            <div className="header-content sub-main-content">
              <div className="emp-details-text">
                Person Details Data
                <div className="emp-count"></div>
              </div>

              <Link to="/form">
                <img src={AddDataLogo} alt="AddData.jpg" />   
              </Link>
            </div>

            <div className="table-main">
            <Display
                personArray={this.state.AllPersonArray}
                getAllPerson={this.getAllPerson}
              />
          </div>
          </div>
        </body>
        </div>
    ); }
}
export default HomePage