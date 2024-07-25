document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const messageBox = document.getElementById('message-box');
    const message = document.getElementById('message');
    const presentacionImagen = document.querySelector('.presentacion__imagen'); // Selecciona la imagen

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
    }

    encryptButton.addEventListener('click', function() {
        const text = inputText.value;
        const encryptedText = encrypt(text);
        displayResult(encryptedText);
    });

    decryptButton.addEventListener('click', function() {
        const text = inputText.value;
        const decryptedText = decrypt(text);
        displayResult(decryptedText);
    });
});

