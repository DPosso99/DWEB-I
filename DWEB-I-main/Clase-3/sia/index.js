const input = document.querySelector("#porcentaje");
const resultado = document.querySelector(".resultado"); // Cambiado a selector de clase
const button = document.querySelector("#calcular");

button.addEventListener("click", () => {
    const valor = Number(input.value);
    
    if (valor < 0 || valor > 100 || isNaN(valor)) {
        resultado.innerHTML = `
            <div class="error">
                <p>Error: No se aceptan letras y tampoco números negativos o mayores a 100</p>
            </div>
        `;
        return;
    }

    
    let redondeado;
    redondeado = valor <= 5 ? 5 : Math.floor(valor / 5) * 5;

    const imgSrc = `img/${redondeado}.jpg`; 

    resultado.innerHTML = `
    <div>
        <h2>El porcentaje es: ${valor}</h2>
        <img src="${imgSrc}" alt="Avance ${redondeado}%" />
        <p>El porcentaje redondeado es: ${redondeado}</p>
    </div>
    `;
});