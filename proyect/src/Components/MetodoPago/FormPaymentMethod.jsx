import { useEffect, useState } from 'react';
import { crearunMetodoNuevo } from '../Api/PaymentMethodApi';

export default function FormPaymentMethod(onSubmit, modo, metodo = null ) {
    const [formData, setFormData ] = useState ({
        marca: "",
        nombre: "",
        apellido: "",
        number: "",
    });

    const [marcas, setMarcas] = useState ([]);
    const [validate, setValidate] = useState (false);

    useEffect(() => {
        if (modo === "editar" && metodo) {
            setFormData({
                marca: marca.metodo || "",
                nombre: nombre.metodo || "",
                apellido: apellido.metodo || "",
                number: number.metodo || "",
            });
        
        }
    }, [modo, metodo]);

    const
    


}