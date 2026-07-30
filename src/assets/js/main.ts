import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './fonctions';

// Sélection des éléments du DOM
const formulaire = document.querySelector('form') as HTMLFormElement | null;
const inputEmail = document.querySelector('input[type="email"]') as HTMLInputElement | null;
const inputPassword = document.querySelector('input[type="password"]') as HTMLInputElement | null;
const divMessage = document.querySelector('.message') as HTMLElement | null;

if (formulaire && inputEmail && inputPassword && divMessage) {

    // 1. Gestion de la soumission du formulaire
    formulaire.addEventListener('submit', (event: Event) => {
        // Empêche le rechargement automatique de la page
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        // Réinitialiser les erreurs précédentes
        masquerErreur(divMessage);

        // Vérification 1 : Adresse e-mail saisie ?
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // Vérification 2 : Format de l'e-mail correct ?
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse e-mail incorrecte.");
            return;
        }

        // Vérification 3 : Mot de passe saisi ?
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // Vérification 4 : Mot de passe d'au moins 8 caractères ?
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // Si toutes les vérifications sont validées :
        // - Changement de la couleur de fond du formulaire en #a7ff3342
        formulaire.style.backgroundColor = '#a7ff3342';
    });

    // 2. Masquer le message d'erreur au clic / focus dans un champ de saisie
    inputEmail.addEventListener('focus', () => masquerErreur(divMessage));
    inputPassword.addEventListener('focus', () => masquerErreur(divMessage));

}