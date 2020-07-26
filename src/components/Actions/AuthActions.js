
import Swal from 'sweetalert2'


export const SignIn= (credentials)=>{
    return (dispatch, getState, { getFirebase })=>{
        const firebase= getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.Email,
            credentials.password
        ).then(()=>{
            dispatch({type: "LOGIN-SUCCESS"})

        }).catch((err)=>{
            dispatch({type: "LOGIN-ERROR", err})
        })

    }
}



export const SignOut=()=>{
    return (dispatch, getState, { getFirebase })=>{
        const firebase= getFirebase();
        firebase.auth().signOut().then(()=>{
            Swal("Logout Success", "Youre Logged Out!", "success");
            dispatch({type: "SIGNED-OUT"})
        })
        .catch((err)=>{
            Swal.fire({title: 'Error!',text: 'Logout Failed', icon: 'error', confirmButtonText: 'Okay'})
            dispatch({type: "SIGNED-OUT-ERROR", err})
        })
    }
}


export const SignUp=(newUser)=>{
    return (dispatch, getState, { getFirebase })=>{

        const firebase= getFirebase();
        const firestore= firebase.firestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.Email,
            newUser.Password
        ).then((res)=>{
            console.log(res)
            return firestore.collection("Users").doc(res.user.uid).set({
                Name: newUser.Name,
                initals: newUser.Name.substring(0,3)
            })
        }).then(()=>{
            dispatch({type: "SIGNUP-SUCCESS"})
            Swal.fire({title: 'Success!', text: 'Sign Up Succesful', icon: 'success', confirmButtonText: 'Okay'})
        }).catch((err)=>{
            dispatch({type: "SIGNUP-ERROR", err})
            Swal.fire({title: 'Error!',text: 'Failed to Sign Up.. Check your inputs', icon: 'error', confirmButtonText: 'Okay'})
        })

    }
}