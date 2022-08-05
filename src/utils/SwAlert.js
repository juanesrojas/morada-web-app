
//import swal from 'sweetalert';
import Swal from 'sweetalert2'

export const SW_ICON = {
    SUCCESS: 'success',
    ERROR:'error',
    INFO: 'info',
    WARNING:'warning'
}

export const showAlert = (title, text, icon,textArea='',confirmBtnTxt="Ok",shwCnclBtn=false,cnclBtnTxt="", callback) =>{
 
   
      Swal.fire({
        title,
        text,
        icon,
        input: textArea,
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: shwCnclBtn,
        confirmButtonText: confirmBtnTxt,
        cancelButtonText: cnclBtnTxt,
      }).then((result)=>{ if (result.isConfirmed) { callback()}});
      //.then ((result)=>{ result.isConfirmed? window.location="/":console.log('resultado no confimado')});
      //.then (function(value){ callback},function(reason){console.log("razon ",reason)});
      // .then((result)=>{result.isConfirmed? console.log("Ok"): console.log("cancel")});
      /*
    swal(
        {
            title,
            text,
            icon,
        }
    ).then (callback);*/
        //(value =>{
        //console.log('value', value);
    //}) //callback usando promesa
  
}

export const closeSwal = () => {
  Swal.close();
}