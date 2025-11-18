import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`,
            { method: "DELETE" }
        )
        alert("Cancelamento cancelado com sucesso!")
    } catch (error) {
        console.log(error);
        alert("Não conseguimos cancelar")
    }
}