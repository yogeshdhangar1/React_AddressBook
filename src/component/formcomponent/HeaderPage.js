import logo from './AddressBook.png';
import './FormPage.css';

function HeaderPage(){
    return ( 
        <div>
            <header className="headerContent">
                <div className="logoContent">
                    <img src={logo} alt="AddressBookLogo"/>
                <div>
                    <span className="employee">ADDRESS</span>
                    <br/>
                    <span className="emp-text-nextline">BOOK</span>
                </div>
                <div className="Head-name">
                    Add Person Address Book UI/UX Design
                </div>
                </div>
            </header>
        </div>
    )
}
export default HeaderPage