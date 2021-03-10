let errors = [];
let melding = [];
let meldingBetaling = "";
let veld = document.forms["registratie"]["exampleInputNaam"];
veld += document.forms["registratie"]["exampleInputVoornaam"];



function validateForm() {
    checkEmptyField();
    validateWachtwoord();
    let postcode = document.forms["registratie"]["exampleInputPostcode"].value;
    checkPC(postcode);
    document.forms["registratie"]["exampleFormControlEmail"].value;
    // let mail = validateEmail(emailadres);
    errors = checkEmptyField(veld, melding);
    let betaling = document.getElementById("exampleBetaling").value;
    meldingBetaling = validatePayment(betaling);
    console.log(meldingBetaling);
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
}

// Functie controle op een geldig email 
function validateEmail(emailadres) {
    if (emailadres.validity.typeMismatch) {} else {
        errors += "E-mail adres is niet correct";
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
    console.log(errors, "melding");
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
    console.log(errors, "melding");
}

// Functie


// Gebruikte websites
/* Controle van lege velden
https://www.w3schools.com/howto/howto_js_validation_empty_input.asp
Controle email-adress
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
Oproepen waarde select option
https://www.w3schools.com/jsref/prop_select_value.asp*/


// errors voorwaarde
// errors += "Je moet de algemene voorwaarden accepteren.";