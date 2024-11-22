const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        const descriptionElem = document.getElementById('description');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        // Esconder todas as imagens
        const imgUnderweight = document.getElementById('img-underweight');
        const imgNormal = document.getElementById('img-normal');
        const imgOverweight = document.getElementById('img-overweight');
        const imgObesity1 = document.getElementById('img-obesity1');
        const imgObesity2 = document.getElementById('img-obesity2');
        const imgObesity3 = document.getElementById('img-obesity3');

        imgUnderweight.classList.add('hidden');
        imgNormal.classList.add('hidden');
        imgOverweight.classList.add('hidden');
        imgObesity1.classList.add('hidden');
        imgObesity2.classList.add('hidden');
        imgObesity3.classList.add('hidden');
    
        if (bmi < 18.5){
            description = 'Cuidado! Você pode estar abaixo do peso!';
            imgUnderweight.classList.remove('hidden');
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
            imgNormal.classList.remove('hidden');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você pode estar com sobrepeso!";
            imgOverweight.classList.remove('hidden');
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você pode estar com obesidade moderada!";
            imgObesity1.classList.remove('hidden');
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você pode estar com obesidade severa!";
            imgObesity2.classList.remove('hidden');
        }

        else {
            description = "Cuidado! Você pode estar com obesidade mórbida!";
            imgObesity3.classList.remove('hidden');
        }

        value.textContent = bmi.replace('.', ',');
        descriptionElem.textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
