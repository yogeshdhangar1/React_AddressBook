import axios from "axios";

class AddressBookService{
 baseUrl = "http://localhost:8082/addressbook";


 createAddressBookData(data){
    return axios.post(`${this.baseUrl}/create`,data)
 }
}
export default new AddressBookService()