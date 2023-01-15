import './FormPage.css';
import { useState,useEffect } from 'react';
import logo1 from './sign.png';


const FormPage = () => {
    let initialValue = {
      name: "",
      address: "",
      state: "",
      city: "",
      pinCode: "",
      phoneNumber: "",
      emailId: "",
      gender: "",
      notes: "",
      id: "",
    };
  
    const [formValue, setForm] = useState(initialValue);
  
    const changeValue = (event) => {
      console.log(event.target);
      console.log(event.target.name);
      setForm({ ...formValue, [event.target.name]: event.target.value });
    };
  
    useEffect(() => {
      console.log("Useeffect()");
    }, []);
  
  
    const save = async (event) => {
      event.preventDefault();
  
      let object = {
        name: formValue.name,
        address: formValue.address,
      state: formValue.state,
      city: formValue.city,
      pinCode: formValue.pinCode,
      phoneNumber: formValue.phoneNumber,
      emailId: formValue.emailId,
      gender: formValue.gender,
      notes: formValue.notes,
      };
  
      console.log(object);
    };
  
    const reset = () => {
      setForm({
        ...initialValue,
        id: formValue.id,
        isUpdate: formValue.isUpdate,
      });
    };
  
      return (
  
          <div className="formContent">
            <form className="form" action="#" onSubmit={save}>
            <div className="main-content">
            <div className="header-content"> 
            <div className="book-detail-text">Address Book Add Data form</div>
            <div className="img">
                             <img src={logo1} alt=""/>
                          </div> 
                        </div> 
                          <br/> <br/>
            
            <div className="row-content">
                <label className="label text" htmlFor="name">Name</label>
                <input className="input" type="text" name="name" id="name" placeholder="Your Name.." required  value={formValue.name} onChange={changeValue}/>
                <error-output className="text-error" for="text"></error-output>
              </div>
  
              <div className="row-content">
                <label className="label text" htmlFor="address">Address</label>
                <input className="input_address" type="text" name="address" id="address" placeholder="Your Address.." required  value={formValue.address} onChange={changeValue}/>
              </div>
  
              <div className="row-content">
                <label className="label text" htmlFor="city">City</label>
                <input className="input" type="text" name="city" id="city" placeholder="Your City.." required  value={formValue.city} onChange={changeValue}/>
              </div>
  
              <div className="row-content">
                <label className="label text" htmlFor="pinCode">Pin-Code</label>
                <input className="input" type="text" name="pinCode" id="pinCode" placeholder="Your PinCode.." required  value={formValue.pinCode} onChange={changeValue}/>
              </div>
  
              <div className="row-content">
                <label className="label text" htmlFor="phoneNumber">PhoneNumber</label>
                <input className="input" type="text" name="phoneNumber" id="phoneNumber" placeholder="Your Number.." required  value={formValue.phoneNumber} onChange={changeValue}/>
              </div>
  
              <div className="row-content">
                <label className="label text" htmlFor="emailId">Email-ID</label>
                <input className="input" type="text" name="emailId" id="emailId" placeholder="xyz@xyz.com.." required  value={formValue.emailId} onChange={changeValue}/>
              </div>
  
            <div className="row-content">
                <label className="label text" htmlFor="gender">Gender</label>
                <div>
                  <input type="radio" name="gender" value="male"  id="male" checked={formValue.gender === "male"} onChange={changeValue} required/>
                  <label className="input_number" htmlFor="male">Male</label>
                  <input type="radio" name="gender" value="female"  id="female" checked={formValue.gender === "female"} onChange={changeValue}/>
                  <label className="input_number" htmlFor="female">Female</label>
                </div>
            </div>
            
              
              <div className="row-content">
                <label className="label text" htmlFor="startDate">State</label>
                  <select className="input" id="state" name="state" value={formValue.state} onChange={changeValue}>
                             <option value="" disabled selected>State</option>
                             <option value="AndhraPradesh">Andhra Pradesh</option>
                             <option value="ArunachalPradesh">Arunachal Pradesh</option>
                             <option value="Assam">Assam</option>
                             <option value="Bihar">Bihar</option>
                             <option value="Chhattisgarh">Chhattisgarh</option>
                             <option value="Goa">Goa</option>
                             <option value="Gujarat">Gujarat</option>
                             <option value="Haryana">Haryana</option>
                             <option value="Himachal Pradesh">Himachal Pradesh</option>
                             <option value="Jharkhand">Jharkhand</option>
                             <option value="Karnataka">Karnataka</option>
                             <option value="Kerala">Kerala</option>
                             <option value="MadhyaPradesh">Madhya Pradesh</option>
                             <option value="Maharashtra">Maharashtra</option>
                             <option value="Manipur">Manipur</option>
                             <option value="Meghalaya">Meghalaya</option>
                             <option value="Mizoram">Mizoram</option>
                             <option value="Nagaland">Nagaland</option>
                             <option value="Odisha">Odisha</option>
                             <option value="Punjab">Punjab</option>
                             <option value="Rajasthan">Rajasthan</option>
                             <option value="Sikkim">Sikkim</option>
                             <option value="Tamil Nadu">Tamil Nadu</option>
                             <option value="Telangana">Telangana</option>
                             <option value="Tripura">Tripura</option>
                             <option value="Uttar Pradesh">Uttar Pradesh</option>
                             <option value="Uttarakhand">Uttarakhand</option>
                             <option value="WestBengal">West Bengal</option>
                             <option value="AndamanandNicobarIsland">Andaman and Nicobar Island</option>
                             <option value="Chandigarh">Chandigarh</option>
                             <option value="DadraandNagarHaveliandDamanandDiu">Dadra and Nagar Haveli and Daman and Diu</option>
                             <option value="Delhi">Delhi</option>
                             <option value="Ladakh">Ladakh</option>
                             <option value="Lakshadweep">Lakshadweep</option>
                             <option value="JammuandKashmir">Jammu and Kashmir</option>
                             <option value="Puducherry">Puducherry</option>
                          </select>
                </div>
  
  
              <div className="row-content">
                <label className="label text" htmlFor="notes">Notes</label>
                <textarea className="input" id="notes" name="notes" onChange={changeValue} value={formValue.notes} placeholder="" style={{ height: "120%" }}></textarea>
              </div>
  
              <div className="buttonParent"> 
                  <button type="submit" className="submitButton" id="submitButton" >{formValue.isUpdate ? "Update" : "Submit" }</button>
                  <button type="reset" className="resetButton" onClick={reset}>Reset</button>
              </div>
              </div>
            </form>  
          </div>
      );
  }
  export default FormPage;