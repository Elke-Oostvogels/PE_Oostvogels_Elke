let errors = [];
let melding = [];
let meldingBetaling = "";
window.onload = VerbergenAlert();

function VerbergenAlert() {
    document.getElementById("MeldingErrors").style.display = 'none';
    document.getElementById("MeldingSucces").style.display = 'none';
    document.getElementById("MeldingBetaling").style.display = 'none';
}

function validateForm() {
    // waardes toekennen (postcode, betaling, )
    let betaling = document.getElementById("exampleBetaling").value;
    let postcode = document.forms["registratie"]["exampleInputPostcode"].value;
    let email = document.forms["registratie"]["exampleFormControlEmail"].value;
    // let veld = document.forms["registratie"]["InputNaam"].value;
    // veld += document.forms["registratie"]["exampleInputVoornaam"].value;
    // let voorwaarde = document.forms

    // Oproepen functies
    checkEmptyField();
    validateWachtwoord();
    checkPC(postcode);
    validateEmail(email);
    // document.forms["registratie"]["exampleFormControlEmail"].value;
    // errors = checkEmptyField(veld, melding);
    meldingBetaling = validatePayment(betaling);



    if (errors == "") {
        document.getElementById("MeldingSucces").style.display = 'block';

    } else {
        document.getElementById("MeldingErrors").style.display = 'block';
        document.getElementById("BoodschapErrors").innerText = errors;
    }

    if (meldingBetaling != "") {
        document.getElementById("MeldingBetaling").style.display = 'block';
        document.getElementById("BoodschapBetaling").innerText = meldingBetaling;
    }

    // Controle functies
    console.log(meldingBetaling + errors);
}

// Functcie controleerd velden ofdeze ingevuld zijn
function checkEmptyField(veld, melding) {
    // errors verplichte velden
    // errors += "Het veld voornaam is vereist";
    // errors += "Het veld naam is vereist";
    // errors += "Het veld gebruikersnaam is vereist";
    // errors += "Het veld adres is vereist";
    // errors += "Het veld land is vereist";
    // errors += "Het veld provincie is vereist";
    // validateGebruikersnaam(veld);
}

// fucntion validateGebruikersnaam(user) {
//     let first = user.charAt(0);
//     if (user < 1) {
//         errors += "Uw gebruikersnaam moet langer zijn dan 1 karakter";
//     } else if (typeof first != 'string' && typeof first != 'number') {
//         errors += "Uw gebruikersnaam moet beginnen met een letter of een cijfer";
//     } else { return true; }
// }


// Functie controle op een geldig email 
function validateEmail(emailadres) {

    let first = emailadres.charAt(0);
    if (first >= 'a' && first >= 'z' || first <= 9 && first >= 0) {
        errors += "Uw emailadress moet beginnen met een letter of een cijfer";
    }
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailadres.match(pattern)) {
        errors += "Emailadress is niet correct.";
    }
}

// Functie controle wachtwoord en herhaald wachtwoord
function validateWachtwoord() {
    let wachtwoord1 = document.forms["registratie"]["inputPassword1"].value;
    let wachtwoord2 = document.forms["registratie"]["inputPassword2"].value;
    if (wachtwoord1 == "") {
        errors += "Het veld wachtwoord is vereist.";
    } else if (wachtwoord2 == "") {
        errors += "Het veld herhaal wachtwoord is vereist.";
    } else if (wachtwoord1.length < 7) {
        errors += "Het wachtwoord moet uit 7 of meer karakters bestaan";
    } else if (wachtwoord1 !== wachtwoord2) {
        errors += "Je wachtwoorden komen niet overeen";
    }
}

// Functie controle betalingswijze
function validatePayment(veld) {
    if (veld != "") {
        return "Je betalingswijze is " + veld;
    }
}

// Functie controle postcode
function checkPC(veld) {
    if (veld == "") {
        errors += "Het veld postcode is vereist";
    } // 
    else if (veld < 1000 || veld > 9999) {
        errors += "De waarde van postcode moet tussen de 1000 en 9999 liggen.";
    }
}


// Gebruikte websites
/* Controle van lege velden
https://www.w3schools.com/howto/howto_js_validation_empty_input.asp
Controle email-adress
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
Oproepen waarde select option
https://www.w3schools.com/jsref/prop_select_value.asp
Oproepen eerste karakter string
https://www.w3schools.com/jsref/jsref_startswith.asp */