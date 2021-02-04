import select_oms from constValues
import select_trans from constValues

let lines_status = []


// создание полей для ввода данных
function Lines_count() {
    let lines_count_number = document.getElementById("userAnswer_Lines_count").value;
    let text = "<p>Удельное сопротивление трансформатора -" + select_trans
    for (i = 1; i <= lines_count_number; i++) {
        text = text + ("<p>Участок № " + i + ". <br>Cопротивление кабеля на участке - <select id=lines_oms_" + i + ">" + select_oms + "</select>. Длина кабеля на участке - <input type='number' id=lines_length_" + i + "></p>")
    }
    text = text + ("<p>После введения нажмите кнопку</p> <a href='#'' onClick='array_great();'' id='button'>Занести данные</a>")
    document.getElementById("lines_count").innerHTML = text;
}

//Создание массива с веденными данными
function array_great() {
    lines_status = []
    let lines_count_number = document.getElementById("userAnswer_Lines_count").value;
    //0 значение массива - сопротивление трансформатора
    lines_status.push(parseInt(document.getElementById("trans_oms").value))
    //цикл вноса данных в массив.
    for (i = 1; i <= lines_count_number; i++) {
        let omsID = ("lines_oms_" + i + "")
        let lengthID = ("lines_length_" + i + "")
        let temparray = [] //временный массив
        temparray.push(parseFloat(document.getElementById(omsID).value))
        temparray.push(parseFloat(document.getElementById(lengthID).value))
        //внесение данных в основной массив
        lines_status.push(temparray)
    }
    console.log(lines_status)
}