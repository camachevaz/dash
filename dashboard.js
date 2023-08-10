let today = new Date();
let day = today.getDay();
let diaMes = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
let minute = today.getMinutes();

if (minute<10) {
    minute = '0'+minute;
}

const formattedDate = `Hoy es ${day}, ${diaMes} de ${month} de ${year}, Son las ${hour}:${minute}`;

document.getElementById("date").innerHTML = formattedDate;

const intervalId = setInterval(() => {
    let today = new Date();
    let day = today.getDay();
    let diaMes = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();

    switch (day){
        case 0:
            day = "<strong>Domingo</strong>";
            break;
        case 1:
            day = "<strong>Lunes</strong>";
            break;
        case 2:
            day = "<strong>Martes</strong>";
            break;
        case 3:
            day = "<strong>Miércoles</strong>";
            break;
        case 4:
            day = "<strong>Jueves</strong>";
            break;
        case 5:
            day = "<strong>Viernes</strong>";
            break;
        case 6:
            day = "<strong>Sábado</strong>";
            break;
        default:
            day = day;
    }

    switch (month){
        case 1:
            month = "Enero";
            break;
        case 2:
            month = "Febrero";
            break;
        case 3:
            month = "Marzo";
            break;
        case 4:
            month = "Abril";
            break;
        case 5:
            month = "Mayo";
            break;
        case 6:
            month = "Junio";
            break;
        case 7:
            month = "Julio";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Septiembre";
            break;
        case 10:
            month = "Octubre";
            break;
        case 11:
            month = "Noviembre";
            break;
        case 12:
            month = "Diciembre";
            break;
        default:
            month = month;
    }

    if (minute<10) {
        minute = '0'+minute;
    }
  
    const formattedDate = `Hoy es ${day}, ${diaMes} de ${month} de ${year}. Son las ${hour}:${minute}`;
  
    document.getElementById("date").innerHTML = formattedDate;
  }, 1000);
