import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './fonctions';

function initValidationFormulaire() {
    // Sélection précise basée sur le HTML fourni
    const formulaire = document.querySelector('.login100-form') as HTMLFormElement | null;
    const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
    const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
    const divMessage = document.querySelector('.message') as HTMLElement | null;
    const btnSubmit = document.querySelector('.login100-form-btn') as HTMLElement | null;

    if (!formulaire || !inputEmail || !inputPassword || !divMessage) return;

    // Fonction de traitement des vérifications
    const gererSoumission = (event: Event) => {
        // Empêche la soumission ou le rechargement
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        // Réinitialisation de l'état du message
        masquerErreur(divMessage);

        // 1. E-mail renseigné ?
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // 2. Format e-mail valide ?
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse incorrecte"); // Rendu exact attendu par les consignes
            return;
        }

        // 3. Mot de passe renseigné ?
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // 4. Mot de passe >= 8 caractères ?
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // 5. Tout est valide : changement de la couleur de fond
        formulaire.style.backgroundColor = '#a7ff3342';
    };

    // Attachement de la validation au submit du formulaire ET au click du bouton
    formulaire.addEventListener('submit', gererSoumission);
    if (btnSubmit) {
        btnSubmit.addEventListener('click', gererSoumission);
    }

    // Réinitialisation de l'erreur au clic / focus / saisie dans les champs
    const effacer = () => masquerErreur(divMessage);

    inputEmail.addEventListener('click', effacer);
    inputEmail.addEventListener('focus', effacer);
    inputEmail.addEventListener('input', effacer);

    inputPassword.addEventListener('click', effacer);
    inputPassword.addEventListener('focus', effacer);
    inputPassword.addEventListener('input', effacer);
}

// Sécurité pour exécuter la fonction quel que soit le moment de chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initValidationFormulaire);
} else {
    initValidationFormulaire();
}