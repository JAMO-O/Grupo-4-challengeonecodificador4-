const encryptBtn = document.querySelector('#encrypt');
const decrypttBtn = document.querySelector('#decrypt');
const copytBtn = document.querySelector('#copy');
const inputText = document.querySelector('.input-container textarea');
const outputText = document.querySelector('.output-container textarea');

function changeUI() {
    Array.from(outputText.closest('div').children).forEach(el => el.classList.add('hidden'));

    outputText.classList.remove('hidden');
    copytBtn.classList.remove('hidden');
    outputText.scrollIntoView();
}

function copyText() {
    this.select();
    this.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(this.value);
}

function encrypt() {
    const text = this.value.trim().toLowerCase();

    if (!text) return;

    changeUI();

    const encryptedText = text
        .split('')
        .map(cha => {
            if (cha === 'a') return 'ai';
            if (cha === 'e') return 'enter';
            if (cha === 'i') return 'imes';
            if (cha === 'o') return 'ober';
            if (cha === 'u') return 'ufat';
            return cha;
        })
        .join('');

    outputText.value = encryptedText;
}

function decrypt() {
    const text = this.value.trim().toLowerCase();

    if (!text) return;

    changeUI();

    const decryptedText = text
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    outputText.value = decryptedText;
}


encryptBtn.addEventListener('click', encrypt.bind(inputText));
decrypttBtn.addEventListener('click', decrypt.bind(inputText));
copytBtn.addEventListener('click', copyText.bind(outputText));