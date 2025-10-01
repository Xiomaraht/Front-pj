export const crearunMetodoNuevo = async () => {
    try {
        const result = await fetch ('http://localhost:8080/PaymentMethod',{
            method: "POST",
            headers: {"Content-Type":"application/JSON"},
            body: JSON.stringify(data),
            });
            if(!result.ok) {
                throw new Error ("Hubo un error al crear una nueva forma de pago")
            }
            return await result.json();    
        }  catch (error) {
                if(error.mensaje.include("Failed to fetch")|| error.message.include("NetworkError")){
                    throw new Error("No se puede crear metodo de pago");
                }
            }
};