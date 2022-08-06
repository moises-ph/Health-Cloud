const user_id = localStorage.getItem('user');
var Data = [];
fetch('/dashboard/getData/'+user_id).then(res => res.json()).then(data => {
    console.log(data);
    const {name, lastname, email, age, address, num_documento, doc_type, date_of_birth, gender, regim, civil_status,city, phone, stratus, ocupation, state} = data;
    Data = {name, lastname, email, age, address, num_documento, doc_type, date_of_birth, gender, regim, civil_status,city, phone, stratus, ocupation, state};
    DataKeys = Object.keys(Data)
    console.log(Data);
    console.log(DataKeys);
    for(let i = 0; i < DataKeys.length; i++){
        let clave = DataKeys[i];
        console.log(clave);
        if(Data[clave] != '0' || Data[clave] != 0){
            console.log('value');
            document.getElementById(clave).value = Data[clave];
        }
    }
});

function email_con(email1, email2){
    if(email1 == email2){
        return true;
    }
    else{
        return false;
    }
}
function password_con(password1, password2){
    if(password1 == password2){
        return true;
    }
    else{
        return false;
    }
}

const logout_button = document.getElementById('logout_button');

logout_button.addEventListener('click', (e)=>{
    fetch( `/logout/${user_id}`).then(res => res.json()).then(data => {
        if(data.status === 'ok'){
            window.location.href = '/login';
        }
    }).catch(err => console.log(err));
});

const form = document.getElementById('form');
form.addEventListener('sumbit', (e)=>{
    e.preventDefault();
    if(e.email.value != '' && e.email-confirm.value != ''){
        let email1 = e.email.value;
        let email2 = e.email-confirm.value;
        if(email_con(email1, email2)){
            let email_send = true;
        }
        else{
            swal('Error', 'Email no coincide', 'error');
        }
    }
    if(e.password.value != '' && e.password-confirm.value != ''){
        let password1 = e.password.value;
        let password2 = e.password-confirm.value;
        if(password_con(password1, password2)){
            let password_send = true;
        }
        else{
            swal('Error', 'Las contraseñas no coinciden', 'error');
        }
    }
    if(email_send && password_send){
        let data = {
            userdata: {
                date_of_birth: e.date_of_birth.value,
                phone: e.phone.value,
                address: e.address.value,
                city: e.city.value,
                state: e.state.value,
                civil_status: e.civil_status.value,
                stratus: e.stratus.value,
                ocupation: e.ocupation.value,
                regim: e.regim.value
                },
            doc_type: e.doc_type.value,
            num_documento: e.num_documento.value,
            email: e.email.value,
            password: e.password.value,
        }
    }
    else if(email_send && !password_send){
        let data = {
            userdata: {
                date_of_birth: e.date_of_birth.value,
                phone: e.phone.value,
                address: e.address.value,
                city: e.city.value,
                state: e.state.value,
                civil_status: e.civil_status.value,
                stratus: e.stratus.value,
                ocupation: e.ocupation.value,
                regim: e.regim.value
                },
            doc_type: e.doc_type.value,
            num_documento: e.num_documento.value,
            email: e.email.value,
        }
    }
    else if(!email_send && password_send){
        let data = {
            userdata: {
                date_of_birth: e.date_of_birth.value,
                phone: e.phone.value,
                address: e.address.value,
                city: e.city.value,
                state: e.state.value,
                civil_status: e.civil_status.value,
                stratus: e.stratus.value,
                ocupation: e.ocupation.value,
                regim: e.regim.value
                },
            doc_type: e.doc_type.value,
            num_documento: e.num_documento.value,
            password: e.password.value,
        }
    }
    else{
        let data = {
            userdata: {
                date_of_birth: e.date_of_birth.value,
                phone: e.phone.value,
                address: e.address.value,
                city: e.city.value,
                state: e.state.value,
                civil_status: e.civil_status.value,
                stratus: e.stratus.value,
                ocupation: e.ocupation.value,
                regim: e.regim.value
                },
                doc_type: e.doc_type.value
        }
    }
});