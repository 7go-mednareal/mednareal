firebase.initializeApp(config);

  //reference msg collect
  var messageRef = firebase.database().ref('message');


  //form submit
  document.getElementById('NOME DO FORM').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    //get values
    let email = getInputVal('email');
    let name = getInputVal('name');
    let date = completeDate();

    //save message
    saveMessage(email, name, date);
 
    
 
    }

  //func para pegar os valores
  function getInputVal(id){
      return document.getElementById(id).value;
  }

  //save msg to firebase
  function saveMessage(email, name, date){
      var newMessage = messageRef.push()

      newMessage.set({
          email: email,
          name: name,
          date: date,
      });
  } 


  function completeDate () {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }