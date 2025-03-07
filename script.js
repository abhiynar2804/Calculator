document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;

            if (buttonText === 'AC') {
                inputBox.value = '';
            } else if (buttonText === 'DEL') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (e) {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += buttonText;
            }
        });
    });
});
