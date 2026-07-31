import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './assets/js/fonctions';

function initialiserFormulaire() {
    const formulaire = document.querySelector('.login100-form') as HTMLFormElement | null;
    const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
    const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
    const divMessage = document.querySelector('.message') as HTMLElement | null;
    const boutonSubmit = document.querySelector('.login100-form-btn') as HTMLElement | null;

    if (!formulaire || !inputEmail || !inputPassword || !divMessage) return;

    const validerSaisie = (event: Event) => {
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        // Réinitialiser les messages d'erreur
        masquerErreur(divMessage);

        // 1. L’adresse e-mail a été saisie ?
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // 2. Le mot de passe a été saisi ?
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // 3. L’adresse e-mail est correctement saisie ?
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse incorrecte");
            return;
        }

        // 4. Le mot de passe a au moins 8 caractères ?
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // Succès : changement de couleur de fond
        formulaire.style.backgroundColor = '#a7ff3342';
    };

    // Écoute de la soumission du formulaire et du clic bouton
    formulaire.addEventListener('submit', validerSaisie);
    if (boutonSubmit) {
        boutonSubmit.addEventListener('click', validerSaisie);
    }

    // Effacement au clic ou focus dans les champs
    const viderErreur = () => masquerErreur(divMessage);

    inputEmail.addEventListener('click', viderErreur);
    inputEmail.addEventListener('focus', viderErreur);

    inputPassword.addEventListener('click', viderErreur);
    inputPassword.addEventListener('focus', viderErreur);
}

// Lancement immédiat ou après chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiserFormulaire);
} else {
    initialiserFormulaire();
}
