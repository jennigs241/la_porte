import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './assets/js/fonctions';

document.addEventListener('DOMContentLoaded', () => {
    const formulaire = document.querySelector('.login100-form') as HTMLFormElement | null;
    const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
    const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
    const divMessage = document.querySelector('.message') as HTMLElement | null;

    if (formulaire && inputEmail && inputPassword && divMessage) {

        formulaire.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const emailValue = inputEmail.value.trim();
            const passwordValue = inputPassword.value;

            masquerErreur(divMessage);

            if (emailValue === '') {
                afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
                return;
            }

            if (!validerEmail(emailValue)) {
                afficherErreur(divMessage, "Adresse incorrecte");
                return;
            }

            if (passwordValue === '') {
                afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
                return;
            }

            if (!validerMotDePasse(passwordValue)) {
                afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
                return;
            }

            formulaire.style.backgroundColor = '#a7ff3342';
        });

        inputEmail.addEventListener('click', () => masquerErreur(divMessage));
        inputEmail.addEventListener('focus', () => masquerErreur(divMessage));

        inputPassword.addEventListener('click', () => masquerErreur(divMessage));
        inputPassword.addEventListener('focus', () => masquerErreur(divMessage));
    }
});
