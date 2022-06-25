
import swal from 'sweetalert';

export const SW_ICON = {
    SUCCESS: 'success',
    ERROR:'error',
    INFO: 'info',
    WARNING:'warning'
}

export const showAlert = (title, text, icon,callback) =>{
    swal(
        {
            title,
            text,
            icon
        }
    ).then (callback);
        //(value =>{
        //console.log('value', value);
    //}) //callback usando promesa
}