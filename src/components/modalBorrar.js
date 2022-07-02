import React from "react";
import {AiFillDelete} from "react-icons/ai";
import {app} from "../firebase/nuevacredensial";
import {useNavigate} from "react-router-dom";
import { getStorage, ref,deleteObject} from "@firebase/storage";

function ModalBorrar(props) {
    const navigate=useNavigate();
    async function handlerEliminar() {
        const storage = getStorage();
        console.log(props.archivoName);
        const desertRef = ref(storage, props.archivoName);
        deleteObject(desertRef).then(() => {
          console.log("se borro bien");
        }).catch((error) => {
            console.log(error);
        });
        const coleccionref = app.firestore().collection('tienda');
        await coleccionref.doc(props.idborrar).delete();
        navigate("/log");
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