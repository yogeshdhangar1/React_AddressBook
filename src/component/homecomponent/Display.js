import "./Display.css"
import CreateLogo from './update.jpg';
import DeleteLogo from './delete.jpg';
import { useNavigate } from "react-router-dom"
import AddressBookService from "../../service/AddressBookService";

const Display = (props) => {
    let navigate = useNavigate();
    
    const update = (personId) => {
        navigate(`Personform/${personId}`)
    }
    
    const remove = (personId) => {
        console.log(personId);
        var answer = window.confirm(
            "Data once deleted cannot be restored!! Do you wish to continue ?"
            );
        if (answer === true){
            AddressBookService.deleteById(personId)
            .then((data) => {
              alert("Person deleted successfully!!");
              window.location.reload();
              props.getAllPerson();
            })
            .catch((error) => {
              console.log("Something Went Wrong!");
            });
        } else {
          alert("Person Not Deleted");
        }
      };


    return(
        <div>
            <table id="display" className="display">
                <thead>
                    <tr>
                        <th>fullName</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>PinCode</th>
                        <th>PhoneNum</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
               </thead>
               <tbody>
                {props.personArray && 
                props.personArray.map((person, index) => (
                    <tr key={`${index}`}>
                        
                        <td>{person.fullName}</td>
                        <td>{person.address}</td>
                        <td>{person.city}</td>
                        <td>{person.state}</td>
                        <td>{person.pinCode}</td>
                        <td>{person.phoneNum}</td>
                        <td>{person.email}</td>
                        <td className="gender">{person.gender}</td>
                        <td>{person.notes}</td>
                        <td>
                            <img className="removeimg"
                            onClick={() => remove(person.personId)}
                            src={DeleteLogo}
                            alt="delete"/>
                            <img className="updateimg"
                            onClick={() => update(person.personId)}
                            src={CreateLogo}
                            alt="edit"/>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ); }

    export default Display