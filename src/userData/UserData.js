import {ProcessUserData} from "../PageInformation/UserInfo";

const BASE_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const getUsers = (setUsers) => {

  fetch(BASE_URL).then((res) => res.json()).then(data => {
    setUsers(ProcessUserData(data));
    console.log("Data",data);
  }).catch((err) => console.log("Error",err.response));
  
};


export { getUsers };
