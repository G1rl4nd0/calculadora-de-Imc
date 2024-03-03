const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    const heightString = document.getElementById('height').value;
    if (!heightString.includes('.')) {
        
        const parteInteira = heightString.slice(0, -2); 
        const parteDecimal = heightString.slice(-2); 
        height = parseFloat(parteInteira + '.' + parteDecimal);
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = "Cuidado você está abaixo do peso!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 29.9) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 34.9) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 39.9) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
    }
      
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;

});
