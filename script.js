document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const messageBox = document.getElementById('message-box');
    const message = document.getElementById('message');
    const presentacionImagen = document.querySelector('.presentacion__imagen');
    const copyButton = document.getElementById('copy-button');

    function encrypt(text) {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    }

    function displayResult(result) {
        presentacionImagen.style.display = 'none';
        messageBox.innerHTML = '';
        const resultElement = document.createElement('p');
        resultElement.textContent = result;
        resultElement.style.textAlign = 'left';
        messageBox.appendChild(resultElement);
        copyButton.style.display = 'block';
    }

    function clearMessage() {
        messageBox.innerHTML = '<p id="message">Ningún mensaje fue encontrado</p><p>Ingresa el texto que desees encriptar o desencriptar.</p>';
        presentacionImagen.style.display = 'block';
        copyButton.style.display = 'none';
    }

    function copyToClipboard() {
        const textToCopy = messageBox.innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                alert('Error al copiar el texto: ', err);
            });
    }

    encryptButton.addEventListener('click', function() {
        const text = inputText.value.trim();
        if (text) {
            const encryptedText = encrypt(text);
            displayResult(encryptedText);
        } else {
            clearMessage();
        }
    });

    decryptButton.addEventListener('click', function() {
        const text = inputText.value.trim();
        if (text) {
            const decryptedText = decrypt(text);
            displayResult(decryptedText);
        } else {
            clearMessage();
        }
    });

    copyButton.addEventListener('click', copyToClipboard);

    inputText.addEventListener('input', clearMessage);
});


