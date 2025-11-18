import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import {scheduleDays} from "../schedules/load.js"
const form = document.querySelector("form");
const sectedDate = document.querySelector("#date");
const clientName = document.querySelector("#client")
//Data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
sectedDate.value = inputToday

//Definindo a data minima como atual, assim não possibilitando agendar datas antigas

sectedDate.min =  inputToday


form.onsubmit= async(event)=> {
    //Previne carregamento do form
    event.preventDefault();

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim();
        console.log(name)

        if(!name){
            return alert("Preencha o nome")
        }
        //Recuperando o horario selecionado
        const hourSelected = document.querySelector(".hour-selected");
        if(!hourSelected){
            return alert("selecione um horario")

        }
        //Recuperando somente a hora
        const [hour] = hourSelected.innerText.split(":");

        //Inserindo a hora na data
        const when = dayjs(sectedDate.value).add(hour, "hour")

        //Gerando um id 
        const id = new Date().getTime()
        
        //Faz o agendamento
        await scheduleNew({id,name,when })
        
        //Recarregar os agendamentos 
        await scheduleDays()

        //Limpa o input de nome do cliente
        clientName.value="";


    } catch (error) {
        alert("Não foi possivel agendar")
        console.log(error)
    }
}