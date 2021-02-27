document.getElementById("btn").addEventListener("click", showSth)

function showSth(e) {
    e.preventDefault ();
    const fromInput = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = fromInput
}


