import { scheduleCancel } from "../../services/schedule-cancel.js";
import {scheduleDays} from "./load.js"
const period = document.querySelectorAll(".period");
console.log(period);

//Gerando evento de click para listas (manhã, tarde, noite);

period.forEach((period)=>{
    //capturando evento de click 
    period.addEventListener("click",async (event)=>{
        if(event.target.classList.contains("cancel-icon")){
            //Obtendo a LI pai do elemento clicado 
            const item = event.target.closest("li");
            //Pega o id do agendamento para remover 
            const {id} = item.dataset

            //Confirma que o id foi selecionado 
            if(id){
                //Confirma decisão do user
                const isConfirm = confirm("Realmente deseja cancelar ? ")
                if(isConfirm){
                    //Realiza a requisição do cancelamento 
                    await scheduleCancel({id});
                    //Recarrega agendamentos
                    scheduleDays();
                }
            }
        }
    })
})