import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductoContext } from '../context/producto';
import { useNavigate, useParams } from "react-router-dom";

const ProductoEditar = () => {
    const params = useParams();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {data ,setData} = useContext(ProductoContext);
    const navigate = useNavigate();

    // buscar el elemento a modificar en la lista de productos
    const itemUpdate = data.find(i => i.id == params?.id) || {};

    // esta logica valida que si exista un producto para modificar y sino redirecciona a la lista de productos
    useEffect(() => {
        if(itemUpdate.id == null){
            navigate("/productos");
            return;
        }
    }, [params?.id]);

    const save = (info) => {
        // valida que si tenga codigo y que no venga en null asi garantizamos que es un objeto valido
        if(info.codigo == null) return;

        // cambia el elemento ya existente en el contexto
        var item = data.find(i => i.id == params?.id);
        item.codigo = info.codigo;
        item.nombre = info.nombre;
        item.descripcion = info.descripcion;
        item.precio = info.precio;

        setData(data);

        navigate("/productos");
    }

    return (
        <>
            <div className="mb-4">
                <h1 className="h2">Editar productos</h1>
                <hr />
            </div>

            <form onSubmit={handleSubmit(save)}>
                <div className="row mb-3">
                    <div className="col-sm-4 mb-3">
                        <label htmlFor="codigo" className="form-label">Codigo</label>
                        <input type="text" className="form-control" {...register('codigo', {required: true})} defaultValue={itemUpdate.codigo} />
                        {errors.codigo && <span className="text-danger">Campo requerido</span>}
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" {...register('nombre', {required: true})} defaultValue={itemUpdate.nombre} />
                        {errors.nombre && <span className="text-danger">Campo requerido</span>}
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" {...register('precio', {required: true})} defaultValue={itemUpdate.precio} />
                        {errors.precio && <span className="text-danger">Campo requerido</span>}
                    </div>
                    <div className="col-sm-12 mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <textarea className="form-control" rows="4" {...register('descripcion')} defaultValue={itemUpdate.descripcion}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark" onClick={save}>Guardar</button>
            </form>
        </>
    )
};

export default ProductoEditar;