import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductoContext } from './../context/producto';
import { useNavigate } from "react-router-dom";

const ProductoCrear = () => {

    // hook de formulario para validaciones y obtener datos escritos.
    const {register, handleSubmit, formState: {errors}} = useForm();
    // carga los datos de productos
    const {data ,setData} = useContext(ProductoContext);
    // usado para hacer redirecciones
    const navigate = useNavigate();

    const save = (info) => {
        if(info.codigo == null) return;

        info.id = data.length + 1;
        data.push(info);

        setData(data);

        navigate("/productos");
    }

    return (
        <>
            <div className="mb-4">
                <h1 className="h2">Crear productos</h1>
                <hr />
            </div>

            <form onSubmit={handleSubmit(save)}>
                <div className="row mb-3">
                    <div className="col-sm-4 mb-3">
                        <label htmlFor="codigo" className="form-label">Codigo</label>
                        <input type="text" className="form-control" {...register('codigo', {required: true})} />
                        {errors.codigo && <span className="text-danger">Campo requerido</span>}
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" {...register('nombre', {required: true})} />
                        {errors.nombre && <span className="text-danger">Campo requerido</span>}
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" {...register('precio', {required: true})} />
                        {errors.precio && <span className="text-danger">Campo requerido</span>}
                    </div>
                    <div className="col-sm-12 mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <textarea className="form-control" rows="4" {...register('descripcion')}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark" onClick={save}>Guardar</button>
            </form>
        </>
    )
};

export default ProductoCrear;