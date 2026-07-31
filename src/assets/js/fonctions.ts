/**
 * Vérifie si le format de l'adresse e-mail est valide.
 * @param email - L'adresse e-mail à vérifier.
 * @returns boolean - true si le format est valide, false sinon.
 */
export function validerEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

/**
 * Vérifie si le mot de passe contient au moins 8 caractères.
 * @param motDePasse - Le mot de passe à vérifier.
 * @returns boolean - true s'il a au moins 8 caractères, false sinon.
 */
export function validerMotDePasse(motDePasse: string): boolean {
    return motDePasse.length >= 8;
}

/**
 * Affiche un message d'erreur en lui ajoutant la classe 'message-visible'.
 * @param messageElement - L'élément HTML <div class="message"></div>.
 * @param texteErreur - Le texte de l'erreur à afficher.
 */
export function afficherErreur(messageElement: HTMLElement, texteErreur: string): void {
    messageElement.textContent = texteErreur;
    messageElement.classList.add('message-visible');
}

/**
 * Masque le message d'erreur en supprimant la classe 'message-visible'.
 * @param messageElement - L'élément HTML <div class="message"></div>.
 */
export function masquerErreur(messageElement: HTMLElement): void {
    messageElement.textContent = '';
    messageElement.classList.remove('message-visible');
}