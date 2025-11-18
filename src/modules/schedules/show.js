import dayjs from "dayjs";

//Selecionando as sessões manhã, tarde e noite 
const periodMorning = document.getElementById("period-morning");

const periodAfternoon = document.getElementById("period-afternoon");

const periodNight= document.getElementById("period-night");

export function scheduleShow({dailySchedules}){

    try {

        //Limpa as listas

        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        //Renderiza agendamentos por periodo 
        dailySchedules.forEach((schedule)=>{
            const item = document.createElement("li");
            const time = document.createElement("strong");
            const name = document.createElement("span");

            //Adicionando id do agendamento
            item.setAttribute("data-id", schedule.id);
            time.textContent = dayjs(schedule.when).format("HH:MM");
            name.textContent = schedule.name;

            //Icone de cancelar agendamento
            const cancelIcon = document.createElement("img");
            cancelIcon.classList.add("cancel-icon");
            cancelIcon.setAttribute("src","./src/assets/cancel.svg");
            cancelIcon.setAttribute("alt", "cancelar");

            //Adicionando tempo e nome nos itens
            item.append(time, name,cancelIcon);

            //Obtendo a hora
            const hour = dayjs(schedule.when).hour()

            //Renderizar o agendamento na sessão (manhã,tarde ou noite)
            if(hour <= 12){
                periodMorning.appendChild(item);
            }else if(hour >12 && hour <=18){
                periodAfternoon.appendChild(item);
            }else if(hour <= 21){
                periodNight.appendChild(item);
            }

        });

    } catch (error) {
        console.log(error)
        alert("Não foi possivel seguir agendamentos")
    }
    
}