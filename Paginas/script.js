document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("button");
    const input = document.querySelector("input");
    const select = document.querySelector("select");

    const resultado = document.createElement("p");
    resultado.style.color = "white";
    resultado.style.fontWeight = "bold";
    document.querySelector(".calculadora-container").appendChild(resultado);

    btn.addEventListener("click", function () {
        const valor = parseFloat(input.value);
        const unidade = select.value;

        if (isNaN(valor)) {
            resultado.textContent = "Por favor, insira um valor numérico válido.";
            return;
        }

        let status = "";

        if (unidade === "psi") {
            if (valor < 30) status = "A pressão do pneu está baixa!";
            else if (valor <= 35) status = "Pressão adequada para o pneu.";
            else status = "A pressão do pneu está muito alta!";
        } else if (unidade === "bar") {
            if (valor < 2) status = "A pressão do pneu está baixa!";
            else if (valor <= 2.4) status = "Pressão adequada para o pneu.";
            else status = "A pressão do pneu está muito alta!";
        } else {
            status = "Unidade não reconhecida.";
        }

        resultado.innerHTML = `Valor inserido: ${valor} ${unidade}<br>Resultado: ${status}`;

        
    });
});
