
import Swal from 'sweetalert2'


const initState= {
    authError: null
}

const authReducer= (state= initState, action)=>{
    switch(action.type){

        case "LOGIN-SUCCESS":
            Swal.fire({title: 'Success!', text: 'Log In Successful', icon: 'success', confirmButtonText: 'Okay'})
            console.log("login Success!!")
            return{
                ...state,
                authError: null
            }

        case "LOGIN-ERROR":
            Swal.fire({title: 'Error!',text: 'Login Failed', icon: 'error', confirmButtonText: 'Okay'})
            console.log("login failed")
            return {
                ...state,
                authError: "login Failed"
            }

        case "SIGNED-OUT":
            console.log("Signed out")
            return {
                ...state,
                authError: null
            }

        case "SIGNED-OUT-ERROR":
            console.log("Signed out error")
            return {
                ...state,
                authError: action.err.message
            }

        case "SIGNUP-SUCCESS":
            console.log("Signed up");
            return {
                ...state,
                authError: null
            }

        case "SIGNUP-ERROR":
            console.log("Signed out error");
            return {
                ...state,
                authError: "SignUp Failed"
            }
    
        default:
            return state; 
    }
}


 export default authReducer;