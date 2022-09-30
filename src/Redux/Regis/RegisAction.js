import ServerApi from "../../API/ApiServer";
import Swal from "sweetalert2";
import { USER_REGISTER_RESET_FORM, USER_SET_FULLNAME, USER_SET_PASSWORD,USER_SET_EMAIL } from "../ActionType";


const resetForm = () => {
    return{
        type: USER_REGISTER_RESET_FORM,
    };

};


const setEmail = (email) => {
    return{
        type: USER_SET_EMAIL,
        payload: {
            email:email,

        },
    };
};


const setFullName = (fullName) => {
    return{
        type: USER_SET_FULLNAME,
        payload: {
        fullName:fullName,

    },
    

    };
};


const setPassword = (password) => {
    return{
        type: USER_SET_PASSWORD,
        payload:{
            password:password,
        },
    };
};




const register = (email,password,fullName,navigate) => async (dispatch) => {
    try {
        const registerData = {
            email:email,
            password:password,
            fullName:fullName,
        };

        const postRegisterData = await ServerApi({
            method: "POST",
            mode:"cors",
            url:"/register/",
            data: registerData
        });

        if(postRegisterData.status === 200){
            Swal.fire({
                title:"Registrasi Berhasil",
                icon:"success",
                timer:1500,
            });

            navigate("/login")
        }
        
    } catch (error) {

        console.log(error.response.data);
        
    }

    
}

const userRegisterAction = {
    resetForm,
    setEmail,
    setFullName,
    setPassword,
    register,
}


export default userRegisterAction