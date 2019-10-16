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
    let data = completeDate();


    // Salvando Leads
    saveLeads(nome, email, data);

    // Limpando form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveLeads(nome, email, data) {
    var newLeadsRef = leadsRef.push();
    newLeadsRef.set({
        nome: nome,
        email: email,
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