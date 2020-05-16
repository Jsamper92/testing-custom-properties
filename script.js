
/**
 * @param rootStyles - Todos los estilos del document
 */
let rootStyles = document.documentElement.style;


addEventListener('scroll', _ => {
    /**
     * @param percentage - Variable que tomando como referencia el scroll del window total
     * obtenemos el porcentaje en base al 100%
     */
    let percentage = Math.round((scrollY*100)/556); 
    rootStyles.setProperty('--width', percentage + '%');    
})

let inputRed = document.getElementById('red');
let inputBlue = document.getElementById('blue');
let inputGreen = document.getElementById('green');

/**
 * 
 * @param {object} e - Constante que dado un valor devuelve el valor 
 */
const obtainValue = e => {
    return e.target.value;
}

/**
 * Seteamos la variable en función del cambio de valor al clickar sobre los distintos inputs para 
 * para cambiar de color de fondo del body
 */
inputRed.addEventListener('change', elem => {
    rootStyles.setProperty('--red',obtainValue(elem));
})

inputBlue.addEventListener('change', elem => {
    rootStyles.setProperty('--blue',obtainValue(elem));
})

inputGreen.addEventListener('change', elem => {
    rootStyles.setProperty('--green',obtainValue(elem));
})