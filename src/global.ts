// Si ce fichier est dans src/global.ts :
import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './assets/js/fonctions';

// Si ce fichier est dans src/assets/js/main.ts, remplacez la ligne du dessus par :
// import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './fonctions';

function initialiserFormulaire() {
    const formulaire = document.querySelector('.login100-form') as HTMLFormElement | null;
    const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
    const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
    const divMessage = document.querySelector('.message') as HTMLElement | null;
    const boutonConnecter = document.querySelector('.login100-form-btn') as HTMLElement | null;

    if (!formulaire || !inputEmail || !inputPassword || !divMessage) return;

    // Fonction unique pour traiter la validation
    const validerEtTraiter = (event: Event) => {
        // Bloque le rechargement de la page et la transmission des parametres URL
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        // Efface les anciennes erreurs
        masquerErreur(divMessage);

        // ORDRE DES CONSIGNES :
        // 1. Adresse e-mail saisie ?
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // 2. Mot de passe saisi ?
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // 3. Format e-mail correct ?
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse incorrecte");
            return;
        }

        // 4. Mot de passe >= 8 caracteres ?
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // Succes : changement de couleur de fond
        formulaire.style.backgroundColor = '#a7ff3342';
    };

    // FIX : On ecoute le submit du Formulaire ET le click sur le Bouton
    formulaire.addEventListener('submit', validerEtTraiter);
    if (boutonConnecter) {
        boutonConnecter.addEventListener('click', validerEtTraiter);
    }

    // Masquer le message d'erreur au clic ou au focus dans un champ
    const effacer = () => masquerErreur(divMessage);
    
    inputEmail.addEventListener('click', effacer);
    inputEmail.addEventListener('focus', effacer);

    inputPassword.addEventListener('click', effacer);
    inputPassword.addEventListener('focus', effacer);
}

// Execution securisee au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiserFormulaire);
} else {
    initialiserFormulaire();
}