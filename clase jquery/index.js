$("#miBoton").click(function () {
    console.log("boton");
})

$("#miElemento").mouseenter(function () {
    $(this).css("background-color", "green");
})

$("#miElemento").mouseleave(function () {
    console.log("sale")
    $(this).css("background-color", "red");
})