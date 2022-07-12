import React from "react";
import {AiFillDelete} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {supabase} from "../firebase/supabase";

function ModalBorrar(props) {
    const navigate=useNavigate();
    async function handlerEliminar() {
        try{
            const { data, error } = await supabase
                .storage
                .from('mabriss')
                .remove([props.archivoName])
            error ? console.log(error.message):console.log(data);

        }catch (e) {
            console.log(e.message);
        }
        try{
            const { data, error } = await supabase
                .from('tienda')
                .delete()
                .match({ id: props.idborrar })
            error && console.log(error.message);

            navigate("/log");
        }catch (e) {
            console.log(e.message);
        }

    }
    return(
        <div>



            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title text-danger" id="exampleModalLabel"><AiFillDelete className='text-danger'/> Advertensia</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" > </button>
                        </div>
                        <div className="modal-body">
                            Seguro que desea Eliminar esta targeta?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handlerEliminar}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}
export default ModalBorrar;