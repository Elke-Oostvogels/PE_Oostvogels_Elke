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

    function Gegevens(voornaam, achternaam, gebruikersnaam, adres, land, provincie) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.gebruikersnaam = gebruikersnaam;
        this.adres = adres;
        this.land = land;
        this.proprovincie = provincie;

    }
    // Object maken
    let veld = new Gegevens(document.forms["registratie"]["exampleInputVoornaam"].value,
        document.forms["registratie"]["exampleInputNaam"].value,
        document.forms["registratie"]["exampleInputGebruikersnaam"].value,
        document.forms["registratie"]["exampleInputAdres"].value,
        document.getElementById("exampleFormSelectLand").value,
        document.getElementById("exampleFormControlSelectProvincie").value);


    // let voorwaarde = document.forms

    // Oproepen functies
    errors += checkEmptyField(veld, melding);
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
    if (veld.voornaam == "") {
        melding += "Het veld voornaam is vereist.\n";
    }
    if (veld.achternaam == "") {
        melding += "Het veld naam is vereist.\n";
    }
    if (veld.gebruikersnaam == "") {
        melding += "Het veld gebruikersnaam is vereist.\n";
    }
    if (veld.adres == "") {
        melding += "Het veld adres is vereist.\n";
    }
    if (veld.land == "") {
        melding += "Het veld land is vereist.\n";
    }
    if (veld.proprovincie == "") {
        melding += "Het veld provincie is vereist.\n";
    }
    return melding;
}



// Functie controle op een geldig email 
function validateEmail(emailadres) {

    let first = emailadres.charAt(0);
    if (first >= 'a' && first >= 'z' || first <= 9 && first >= 0) {
        errors += "Uw emailadress moet beginnen met een letter of een cijfer.\n";
    }
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailadres.match(pattern)) {
        errors += "Emailadress is niet correct.\n";
    }
}

// Functie controle wachtwoord en herhaald wachtwoord
function validateWachtwoord() {
    let wachtwoord1 = document.forms["registratie"]["inputPassword1"].value;
    let wachtwoord2 = document.forms["registratie"]["inputPassword2"].value;
    if (wachtwoord1 == "") {
        errors += "Het veld wachtwoord is vereist.\n";
    } else if (wachtwoord2 == "") {
        errors += "Het veld herhaal wachtwoord is vereist.\n";
    } else if (wachtwoord1.length < 7) {
        errors += "Het wachtwoord moet uit 7 of meer karakters bestaan.\n";
    } else if (wachtwoord1 !== wachtwoord2) {
        errors += "Je wachtwoorden komen niet overeen.\n";
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
        errors += "Het veld postcode is vereist.\n";
    } // 
    else if (veld < 1000 || veld > 9999) {
        errors += "De waarde van postcode moet tussen de 1000 en 9999 liggen.\n";
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