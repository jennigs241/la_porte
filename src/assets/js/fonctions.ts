/**
 * Valide le format de l'adresse e-mail avec une expression régulière.
 */
export function validerEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

/**
 * Valide si le mot de passe contient au moins 8 caractères.
 */
export function validerMotDePasse(motDePasse: string): boolean {
    return motDePasse.length >= 8;
}

/**
 * Affiche le message d'erreur et ajoute la classe 'message-visible'.
 */
export function afficherErreur(messageElement: HTMLElement, texteErreur: string): void {
    messageElement.textContent = texteErreur;
    messageElement.classList.add('message-visible');
}

/**
 * Masque le message d'erreur et retire la classe 'message-visible'.
 */
export function masquerErreur(messageElement: HTMLElement): void {
    messageElement.textContent = '';
    messageElement.classList.remove('message-visible');
}