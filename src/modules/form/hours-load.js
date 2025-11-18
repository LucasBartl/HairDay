import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js";

const hours = document.querySelector("#hours")




export function hoursLoad({date, dailySchedules}) {
    const opening = openingHours.map((hour) => {

        //limpa a lista de horarios
        hours.innerHTML = "";

        //Obtem a lista de todos os horarios ocupados
        const unavailableHours = dailySchedules.map((schedules) => dayjs(schedules.when).format("HH:mm"))
    


        //Recuperando somente a horas
        const [scheduleHour] = hour.split(":");

        //Adiciona a hora na data e verificar se esta no passado 

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
      
        const available = !unavailableHours.includes(hour) && !isHourPast

        //Definindo se o horario esta disponível 
        return ({
            hour,
            available,
        })
    })

    //Renderiza os horários
    // Adicionando as classes 
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeaderAdd("Tarde");
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite");
        }

        hours.append(li)
    })

    //Adiciona o evento de click nos horarios disponíveis
    hoursClick()
}
function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header)
}