import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './fonctions';

// Sélection des éléments HTML ciblés sur le HTML fourni
const formulaire = document.querySelector('.login100-form') as HTMLFormElement | null;
const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
const divMessage = document.querySelector('.message') as HTMLElement | null;

if (formulaire && inputEmail && inputPassword && divMessage) {

    // 1. Contrôle au clic sur le bouton "Se connecter" (soumission du formulaire)
    formulaire.addEventListener('submit', (event: Event) => {
        // Empêche la soumission automatique du formulaire
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        // Réinitialiser les messages d'erreur au début de la vérification
        masquerErreur(divMessage);

        // VÉRIFICATION 1 : L'adresse e-mail a été saisie ?
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // VÉRIFICATION 2 : L'adresse e-mail est correctement saisie ?
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse incorrecte"); // Respect strict de l'exemple de rendu
            return;
        }

        // VÉRIFICATION 3 : Le mot de passe a été saisi ?
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // VÉRIFICATION 4 : Le mot de passe a au moins 8 caractères ?
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // SI TOUT EST CORRECT :
        // Changement de la couleur de fond du formulaire en #a7ff3342
        formulaire.style.backgroundColor = '#a7ff3342';
    });

    // 2. Au clic / focus dans un champ de saisie, masquer le message d'erreur
    inputEmail.addEventListener('click', () => masquerErreur(divMessage));
    inputEmail.addEventListener('focus', () => masquerErreur(divMessage));

    inputPassword.addEventListener('click', () => masquerErreur(divMessage));
    inputPassword.addEventListener('focus', () => masquerErreur(divMessage));
}