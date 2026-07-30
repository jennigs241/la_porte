/**
 * Valide le format d'une adresse e-mail.
 * @param email - L'adresse e-mail à vérifier.
 * @returns boolean - true si le format est valide, false sinon.
 */
export function validerEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

/**
 * Valide la longueur du mot de passe.
 * @param motDePasse - Le mot de passe à vérifier.
 * @returns boolean - true si au moins 8 caractères, false sinon.
 */
export function validerMotDePasse(motDePasse: string): boolean {
    return motDePasse.length >= 8;
}

/**
 * Affiche un message d'erreur dans l'élément HTML prévu à cet effet.
 * @param messageElement - L'élément HTML div.message.
 * @param texteErreur - Le texte de l'erreur à afficher.
 */
export function afficherErreur(messageElement: HTMLElement, texteErreur: string): void {
    messageElement.textContent = texteErreur;
    messageElement.classList.add('message-visible');
}

/**
 * Masque le message d'erreur.
 * @param messageElement - L'élément HTML div.message.
 */
export function masquerErreur(messageElement: HTMLElement): void {
    messageElement.textContent = '';
    messageElement.classList.remove('message-visible');
}