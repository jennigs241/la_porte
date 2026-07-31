import { validerEmail, validerMotDePasse, afficherErreur, masquerErreur } from './assets/js/fonctions';

function initialiserFormulaire() {
    const formulaire = document.querySelector('.login100-form') as HTMLFormElement | null;
    const inputEmail = document.querySelector('input[name="email"]') as HTMLInputElement | null;
    const inputPassword = document.querySelector('input[name="pass"]') as HTMLInputElement | null;
    const divMessage = document.querySelector('.message') as HTMLElement | null;

    if (!formulaire || !inputEmail || !inputPassword || !divMessage) return;

    formulaire.addEventListener('submit', (event: Event) => {
        // ESSENTIEL : bloque le rechargement de la page
        event.preventDefault();

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPassword.value;

        masquerErreur(divMessage);

        // 1. Email renseigné
        if (emailValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre adresse e-mail.");
            return;
        }

        // 2. Mot de passe renseigné
        if (passwordValue === '') {
            afficherErreur(divMessage, "Veuillez saisir votre mot de passe.");
            return;
        }

        // 3. Email valide
        if (!validerEmail(emailValue)) {
            afficherErreur(divMessage, "Adresse incorrecte");
            return;
        }

        // 4. Mot de passe >= 8 caractères
        if (!validerMotDePasse(passwordValue)) {
            afficherErreur(divMessage, "Le mot de passe doit contenir au moins 8 caractères.");
            return;
        }

        // Succès
        formulaire.style.backgroundColor = '#a7ff3342';
    });

    // Masquer le message d'erreur au clic sur un champ
    const effacer = () => masquerErreur(divMessage);
    inputEmail.addEventListener('click', effacer);
    inputPassword.addEventListener('click', effacer);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiserFormulaire);
} else {
    initialiserFormulaire();
}
