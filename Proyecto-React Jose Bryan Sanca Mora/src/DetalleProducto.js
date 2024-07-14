import React from "react";
function DetalleProducto({producto}){
    return(
        <div className="mt-3 bg-gray-200 rounded">
            <h3 className="text-lg font-bold">{producto.title}</h3>
            <img
                className="w-56 h-auto"
                src={producto.url}
                alt={producto.title}
            />
        </div>
    );
}
export default DetalleProducto;