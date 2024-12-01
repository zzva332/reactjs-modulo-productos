import { Link } from "react-router-dom";

const TablaInfo = ({columns, rows, removeItem}) => {

    return (
        <>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        {columns.map((column, i) => <td key={i}>{column}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td>{row.id}</td>
                            <td>{row.codigo}</td>
                            <td>{row.nombre}</td>
                            <td>{row.descripcion}</td>
                            <td>{row.precio}</td>
                            <td>
                                <Link to={'/productos/editar/' + row.id} className="btn btn-secondary btn-sm"><i className="bi bi-pencil-square"></i></Link>
                                <a href="#" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#itemDelete" onClick={() => removeItem(row.id)}><i className="bi bi-trash3"></i></a>
                            </td>
                        </tr>
                    ))}
                    {rows == null || rows.length == 0 &&
                        <tr>
                            <td colSpan={columns.length} className="text-center">No hay elementos para mostrar</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
        
    );
}

export default TablaInfo;