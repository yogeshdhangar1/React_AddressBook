import axios from "axios";

class AddressBookService{
 baseUrl = "http://localhost:8082/addressbook";


 createAddressBookData(data){
    return axios.post(`${this.baseUrl}/create`,data)
 }
 deleteById(personId){
   return axios.delete(`${this.baseUrl}/delete/${personId}`)
 }
 getAllAddressBookData(data){
   return axios.get(`${this.baseUrl}/get`,data)
 }
 updateAddressBookById(personId,data){
  return axios.put(`${this.baseUrl}/update/${personId}`,data);
 }
 getAllAddressBookDataById(personId){
  return axios.get(`${this.baseUrl}/get/${personId}`);
 }
}
export default new AddressBookService();