import { hoursLoad } from "../form/hours-load.js";
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js";
const selectDate = document.getElementById("date")

export async function  scheduleDays(){
    
    //obtem a datado input 
    const date = selectDate.value
    

    
    //Buscar na API agendamentos para carregar do lado direito da tela
    const dailySchedules = await scheduleFetchByDay({date})
    
    //Exibe os agendamentos
    scheduleShow({dailySchedules})

    //Renderiza as horas disponíveis
    hoursLoad({date,dailySchedules})

}