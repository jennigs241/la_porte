import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './fonctions';

const formulaire = document.querySelector('form') as HTMLFormElement | null;
const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
const divMessage = document.querySelector('.message') as HTMLElement | null;
const boutonConnecter = document.querySelector('.login100-form-btn') as HTMLElement | null;

if (formulaire && inputEmail && inputPassword && divMessage) {

    // Fonction de contrôle déclenchée "Au clic sur le bouton Se connecter"
    const verifierFormulaire = (event: Event) => {
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        // Réinitialiser le message d'erreur
        masquerErreur(divMessage);

        // ORDRE STRICT DES CONSIGNES :

        // 1. L’adresse e-mail a été saisie
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // 2. Le mot de passe a été saisi
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // 3. L’adresse e-mail est correctement saisie
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse incorrecte");
            return;
        }

        // 4. Le mot de passe a au moins 8 caractères
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // Si tout est valide : Changement de la couleur de fond du formulaire
        formulaire.style.backgroundColor = '#a7ff3342';
    };

    // Déclenchement sur la soumission ET sur le clic direct du bouton
    formulaire.addEventListener('submit', verifierFormulaire);
    if (boutonConnecter) {
        boutonConnecter.addEventListener('click', verifierFormulaire);
    }

    // "Au clic dans un champ de saisie, masquer le message d’erreur s’il a été affiché"
    inputEmail.addEventListener('click', () => masquerErreur(divMessage));
    inputPassword.addEventListener('click', () => masquerErreur(divMessage));
}