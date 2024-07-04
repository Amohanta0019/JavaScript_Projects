const form = document.querySelector('form');
//this will give empty value
//const ht = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (ht === '' || ht < 0 || ht === 0 || isNaN(ht)) {
        result.innerHTML = `Please give a valid height :- ${ht}`
    }
    // result.innerHTML = `height = ${ht}`

    else if (wt === '' || wt < 0 || wt === 0 || isNaN(wt)) {
        result.innerHTML = `Please give a valid weight :- ${wt}`
    }
    else {
        const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `<spam>UNDERWEIGHT . BMI = ${bmi}</span>`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `<spam>NORMAL WEIGHT . BMI = ${bmi}</span>`
        }
        else if (bmi > 24.9) {
            result.innerHTML = `<spam>OVER WEIGHT . BMI = ${bmi}</span>`
        }
        else {
            result.innerHTML = `<spam>${bmi}</span>`
        }



    }
})









