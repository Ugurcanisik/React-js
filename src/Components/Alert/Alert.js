import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'


export const Alert = ({type, message, title = "OK"}) => {
    // console.log(type, message)
    return iziToast[type]({
        title: title,
        message: message,
        position: 'topRight'
    });
}