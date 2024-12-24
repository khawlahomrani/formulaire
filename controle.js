const prénom=document.getElementById("firstName");
const nom=document.getElementById("lastName");
const mail=document.getElementById("email");
const mdp=document.getElementById("password");
const genre=document.getElementById("genre");
const pays=document.getElementById("country");
let btn=document.getElementById("btn");

btn.addEventListener("click",verif);

function verif(){
    clearErrors();
    let hasError = false;

    if(prénom.value.trim() === ""){
        showError(prénom, "Erreur : Prénom requis ");
        hasError = true;
    }

    if (nom.value.trim() === ""){
        showError(nom, "Erreur : Nom requis ");
        hasError = true;
    }
    //verification de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())){
        showError(email, "Erreur : Email invalide.");
        hasError = true;

    }
    //verification du password
    if (PeriodicWave.value.trim() === ""){
        showError(pw, "Erreur : Mot de passe requis");
        hasError = true;
    }
    if (confirmPw.value.trim() ===""){
        showError(confirmPw, "Erreur : confirmation requise");
        hasError = true;
    }else if(pw.value !== confirmPw.value){
        showError(confirmPw, "Erreur : Les mots de passe ne correspond pas");
        hasError = true;
    }
//affichage d'un message de succes si aucune erreur n'est trouvée
    if (!hasError){
        alert("Inscription réussie !");
    }

}

//fonction pour afficher un message d'erreur
function showError(inputField, message){
    const errorMessage = document.createElement("p");
    errorMessage.style.color ="red";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage,inputField.nextSibling);

}

//fonction pour effacer les message d'erreur précedents 
function clearErrors(){
    const errorMessages =document.querySelectorAll("p");
    errorMessages.forEach((msg)=> msg.remove());

}

