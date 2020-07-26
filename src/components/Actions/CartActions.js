


export const AddToTheCart= product =>{

    return (dispatch, getState, { getFirebase })=>{

        // make async call to the database or add to the database

        const firestore=  getFirebase().firestore();
        const authorId= getState().firebase.auth.uid;
        firestore.collection("cart").add({
            title: product.title,
            price: product.price,
            description: product.description,
            id: product.id,
            memory: product.memory,
            size: product.size,
            weight: product.weight,
            display: product.display,
            battery: product.battery,
            cpu: product.cpu,
            images: product.images,
            date: new Date()
        }).then(()=>{
            dispatch({
                type:"ADD-TO-CART",
                product
            })
        }).catch((err)=>{
            console.log(err);

            dispatch({
                type:"ADD-TO-CART-ERROR",
                err
            })
    
        })


    }

    }

    