const d = document;
const texArea = d.querySelector(".txt_area");
const carga1 = d.querySelector(".carga");
const cargaRobot = d.querySelector(".carga_robot");
const resultadoTitulo = d.querySelector(".titulo_result");
const resultadoText = d.querySelector(".txt_result");
const btn_encriptar = d.querySelector(".prop_btn");
const btn_desencriptar = d.querySelectorAll(".prop_btn");
const btn_copiar = d.querySelector(".copy_btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
];

function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;

    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

texArea.addEventListener("input", (e) => {
    carga1.style.display = "none";
    cargaRobot.classList.remove("hidden")
    resultadoTitulo.textContent = "Cargando...";
    resultadoText.textContent = "";
});

btn_encriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    btn_copiar.classList.remove("hidden");
    resultadoTitulo.textContent = "¡Tu mensaje fue encriptado con éxito!";
});

btn_desencriptar[1].addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "¡Mensaje desencriptado!";
    carga1.style.display = "flex";
    cargaRobot.classList.add("hidden");

});

btn_copiar.addEventListener("click", () => {
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        carga1.style.display = "flex";
        cargaRobot.classList.add("hidden");
        resultadoTitulo.textContent = "¡Texto copiado!"
        btn_copiar.classList.add("hidden");
        resultadoText.textContent = "";
    })
});