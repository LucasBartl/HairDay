import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"



export async function scheduleFetchByDay({ date }) {
    try {
        //Realizando requisição dos agendamentos
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)
        //Convertendo parsa JSON 
        const data = await response.json()

        //Filtrando os agendamento por dia selecionado
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));
        return dailySchedules
        
    } catch (error) {
        console.log(error)
        alert("Não foi possivel verificar agendamentos")
    }
}