import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}){
    try {
        //Realizando a requisição para enviar os dados de agendamento
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when}),
        })
        //Mensagem de agendamento realizado
        alert("Agendamento realizado!");
    } catch (error) {
        console.log(error)
        alert("Não foi feito o agendamento");
    }
}