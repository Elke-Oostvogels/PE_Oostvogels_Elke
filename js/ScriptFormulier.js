let errors = [];



function validateForm() {
    checkEmptyField();
    validateWachtwoord();
    let postcode = document.forms["registratie"]["exampleInputPostcode"].value;
    checkPC(postcode);

}

// Functcie controleerd velden ofdeze ingevuld zijn
function checkEmptyField(veld, melding) {

}

// Functie controle op een geldig email 
function validateEmail(emailadres) {

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
    } else {
        return false;
    }
    console.log(errors, "melding");
}

// Functie controle betalingswijze
function validatePayment(veld) {

}

// Functie controle postcode
function checkPC(veld) {
    if (veld == "") {
        errors += "Het veld postcode is vereist";
    } else if (veld < 1000 || veld > 9999) {
        errors += "De waarde van postcode moet tussen de 1000 en 9999 liggen.";
    } else {
        return false;
    }
    console.log(errors, "melding");
}

// Functie


// Gebruikte websites
/* Controle van lege velden
https://www.w3schools.com/howto/howto_js_validation_empty_input.asp*/

// errors verplichte velden
// errors += "Het veld voornaam is vereist";
// errors += "Het veld naam is vereist";
// errors += "Het veld gebruikersnaam is vereist";
// errors += "Het veld adres is vereist";
// errors += "Het veld land is vereist";
// errors += "Het veld provincie is vereist";

// error email
// errors += "E-mail adres is niet correct";

// errors voorwaarde
// errors += "Je moet de algemene voorwaarden accepteren.";