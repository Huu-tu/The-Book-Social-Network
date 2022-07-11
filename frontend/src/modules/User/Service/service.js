import { get } from "../../../api/http";

const API_ENDPOINT = {
    GET_USER: '/',
    GET_COMPANY: '/company/company/get',
    CREATE_COMPANY: '/company/company/create',
    UPDATE_COMPANY: '/company/company/update',
    DELETE_COMPANY: '/company/company/delete',
}

class UserServices{
    constructor(){
        if(UserServices._instance){
            return UserServices._instance
        }
        UserService._instance = this;
    }

    getUser(){
        return get(API_ENDPOINT.GET_USER)
    }
}

const UserService = new UserServices();
export default UserService

//  const getUser = async () =>{
//     const { data } = await get(API_ENDPOINT.GET_USER)

//     return data
// };

// const UserService = new getUser();
// export default UserService
