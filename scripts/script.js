let lines_status = []

const select_oms = `<option value=37,8>Сечение = 1. Медь.</option>
<option value=25.2>Сечение = 1,5. Медь.</option>
<option value=15.1>Сечение = 2,5. Медь.</option>
<option value=9.3>Сечение = 4. Медь.</option>
<option value=6.12>Сечение = 6. Медь.</option>
<option value=3.68>Сечение = 10. Медь.</option>
<option value=2.4>Сечение = 16. Медь.</option>
<option value=1.49>Сечение = 25. Медь.</option>
<option value=1.09>Сечение = 35. Медь.</option>
<option value=0.79>Сечение = 50. Медь.</option>
<option value=0.58>Сечение = 70. Медь.</option>
<option value=0.428>Сечение = 95. Медь.</option>
<option value=0.35>Сечение = 120. Медь.</option>
<option value=0.285>Сечение = 150. Медь.</option>
<option value=0.27>Сечение = 185. Медь.</option>
<option value=25.2>Сечение = 2,5. Алюминий.</option>
<option value=15.8>Сечение = 4. Алюминий.</option>
<option value=10.5>Сечение = 6. Алюминий.</option>
<option value=6.32>Сечение = 10. Алюминий.</option>
<option value=3.96>Сечение = 16. Алюминий.</option>
<option value=2.56>Сечение = 25. Алюминий.</option>
<option value=1.84>Сечение = 35. Алюминий.</option>
<option value=1.29>Сечение = 50. Алюминий.</option>
<option value=0.93>Сечение = 70. Алюминий.</option>
<option value=0.797>Сечение = 95. Алюминий.</option>
<option value=0.561>Сечение = 120. Алюминий.</option>
<option value=0.446>Сечение = 150. Алюминий.</option>
<option value=0.45>Сечение = 185. Алюминий.</option>`

const select_trans = `<select id=trans_oms>
<option value=0>Подключение к ВЛ</option>
<option value=1.39>Мощность = 20. Масляный Y/Y</option>
<option value=1.04>Мощность = 25. Масляный Y/Y</option>
<option value=0.9>Мощность = 30. Масляный Y/Y</option>
<option value=0.65>Мощность = 40. Масляный Y/Y</option>
<option value=0.54>Мощность = 50. Масляный Y/Y</option>
<option value=0.413>Мощность = 63. Масляный Y/Y</option>
<option value=0.26>Мощность = 100. Масляный Y/Y</option>
<option value=0.162>Мощность = 160. Масляный Y/Y</option>
<option value=0.15>Мощность = 180. Масляный Y/Y</option>
<option value=0.104>Мощность = 250. Масляный Y/Y</option>
<option value=0.085>Мощность = 320. Масляный Y/Y</option>
<option value=0.065>Мощность = 400. Масляный Y/Y</option>
<option value=0.048>Мощность = 560. Масляный Y/Y</option>
<option value=0.043>Мощность = 630. Масляный Y/Y</option>
<option value=0.036>Мощность = 750. Масляный Y/Y</option>
<option value=0.27>Мощность = 1000. Масляный Y/Y</option>
<option value=0.15>Мощность = 180. Сухой Y/Y</option>
<option value=0.085>Мощность = 320. Сухой Y/Y</option>
<option value=0.048>Мощность = 560. Сухой Y/Y</option>
<option value=0.036>Мощность = 750. Сухой Y/Y</option>
<option value=0.027>Мощность = 1000. Сухой Y/Y</option>
<option value=0.022>Мощность = 400. Масляный T/Y</option>
<option value=0.014>Мощность = 630. Масляный T/Y</option>
<option value=0.009>Мощность = 1000. Масляный T/Y</option>
<option value=0.055>Мощность = 160. Сухой T/Y</option>
<option value=0.035>Мощность = 250. Сухой T/Y</option>
<option value=0.022>Мощность = 400. Сухой T/Y</option>
<option value=0.014>Мощность = 630. Сухой T/Y</option>
<option value=0.09>Мощность = 1000. Сухой T/Y</option>
</select>`

// создание полей для ввода данных
function Lines_count() {
    let lines_count_number = document.getElementById("userAnswer_Lines_count").value;
    let text = "<br><p>Удельное сопротивление трансформатора -" + select_trans
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
    lines_status.push(parseFloat(document.getElementById("trans_oms").value))
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
    //внесение информации по количеству потребителей
    text = ("<br><br><br><br><p>Введите информацию по количеству потребителей - <input type='number' id=eaters_count_inp></p><p>После введения нажмите кнопку</p> <a href='#'' onClick='eaters_count();'' id='button'>Занести данные</a>")
    document.getElementById("eaters_count").innerHTML = text;
}

function eaters_count() {
    let eaters_count_number = parseInt(document.getElementById("eaters_count_inp").value)
    let lines_count_number = parseInt(document.getElementById("userAnswer_Lines_count").value)
    let result = "<br><br><br><br><br><br><table border = 1 ><tr><td>№ потреб</td><td>потреб ТП</td>"

    for (i = 1; i <= lines_count_number; i++) {
        result = result + ("<td>Линия №" + i + "</td>")
    }
    result = result + "</tr>"

    for (y = 1; y <= eaters_count_number; y++) {
        result = result + ("<tr><td>№" + y + "</td>")
        for (i = 0; i <= lines_count_number; i++) {
            result = result + ("<td><input type='checkbox' id=_eater_id_" + y + "_line_id_" + i + "</td>")
        }

        result = result + "</tr>"
    }
    result = result + "</table><br><br><br><a href='#'' onClick='result_Zl_ikz();'' id='button'>Результаты Zl и Iкз</a>"
    document.getElementById("eaters_count_table").innerHTML = result

}

function result_Zl_ikz(){
    let result = ""

    document.getElementById("result_Zl_Ikz").innerHTML = result
}