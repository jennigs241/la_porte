export function validerEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

export function validerMotDePasse(motDePasse: string): boolean {
    return motDePasse.length >= 8;
}

export function afficherErreur(messageElement: HTMLElement, texteErreur: string): void {
    messageElement.textContent = texteErreur;
    messageElement.classList.add('message-visible');
}

export function masquerErreur(messageElement: HTMLElement): void {
    messageElement.textContent = '';
    messageElement.classList.remove('message-visible');
}