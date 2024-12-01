import { useContext, useState } from "react";
import TablaInfo from "../components/TablaInfo";
import { ProductoContext } from "../context/producto";
import { Link } from "react-router-dom";

const ProductoListar = ()=>{

    const { data, setData} = useContext(ProductoContext);

    const columns = [
        "ID", "codigo", "nombre", "descripcion", "precio"
    ];
    const [removeItemId, setRemoveIteId] = useState(0);

    const removeItem = (itemId) => {
        setRemoveIteId(itemId);
    }

    const confirmRemove = ()=> {
        const newInfo = data.filter(d => d.id != removeItemId);
        setData(newInfo);
    }

    return <>
        <div className="mb-4">
            <h1 className="h2">Lista de productos</h1>
            <hr/>
        </div>
        <Link to="/productos/crear" className="btn btn-dark mb-2"><i className="bi bi-plus-lg"></i> Agregar</Link>
        <TablaInfo columns={columns} rows={data} removeItem={removeItem}></TablaInfo>


        {/* modal para eliminacion de elementos */}
        <div className="modal fade" id="itemDelete" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Esta seguro de confirmar esta accion?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Despues de realizar esta accion no se puede revertir
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={confirmRemove}>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

    </>;
}

export default ProductoListar;