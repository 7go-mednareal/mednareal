// Inicializando o Firebase
var config = {
    apiKey: "AIzaSyBONhZhHUCOZyM8LpR0mW6SaLOts1npDMc",
    authDomain: "jalecando-7go.firebaseapp.com",
    databaseURL: "https://jalecando-7go.firebaseio.com",
    projectId: "jalecando-7go",
    storageBucket: "jalecando-7go.appspot.com",
    messagingSenderId: "100363083828",
    appId: "1:100363083828:web:02f19d3cae7beed831aa61",
    measurementId: "G-N61LB0Y4SY"
};

firebase.initializeApp(config);
// firebase.analytics();

var leadsRef = firebase.database().ref('leads');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    let nome = getInputVal('nomeId');
    let email = getInputVal('emailId');
    let data = completeDate;
    let tipo = IsEmail;

    // validacaoEmail(email);
    IsEmail(email);


    // Salvando Leads
    saveLeads(nome, email, tipo, data);

    // Limpando form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveLeads(nome, email, tipo, data) {
    var newLeadsRef = leadsRef.push();
    newLeadsRef.set({
        nome: nome,
        email: email,
        tipo: tipo,
        data: data
    });
}


function completeDate() {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = "" + now.getDate();
    if (day.length == 1) {
        day = "0" + day;
    }
    hour = "" + now.getHours();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    minute = "" + now.getMinutes();
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    second = "" + now.getSeconds();
    if (second.length == 1) {
        second = "0" + second;
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function IsEmail(id) {
    var exclude = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check = /@[w-]+./;
    var checkend = /.[a-zA-Z]{2,3}$/;
    if (((id.search(exclude) != -1) || (id.search(check)) == -1) || (id.search(checkend) == -1)) {
        return false;
    } else {
        return true;
    }
}


// function validacaoEmail(field) {
//     //usuario = field.value.substring(0, field.value.indexOf("@"));
//     dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

//     if ((usuario.length >= 1) &&
//         (dominio.length >= 3) &&
//         (usuario.search("@") == -1) &&
//         (dominio.search("@") == -1) &&
//         (usuario.search(" ") == -1) &&
//         (dominio.search(" ") == -1) &&
//         (dominio.search(".") != -1) &&
//         (dominio.indexOf(".") >= 1) &&
//         (dominio.lastIndexOf(".") < dominio.length - 1)) {
//         document.getElementById("msgemail").innerHTML = "E-mail válido";
//         alert("E-mail valido");
//         if ((dominio == "gmail.com") &&
//             (dominio == "hotmail.com") &&
//             (dominio == "yahoo.com") &&
//             (dominio == "uol.com")) {
//             return "B2C";
//         } else {
//             return "B2B";
//         }
//     } else {
//         document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail inválido </font>";
//         alert("E-mail invalido");
//     }
// }