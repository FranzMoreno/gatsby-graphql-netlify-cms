import React from 'react';

const ServiciosGrid = ({ servicios }) => (
  <div>
    {servicios.map((servicio, index) => (
      <div key={index}>
        <h6>{servicio.titulo}</h6>
        <p>{servicio.descripcion}</p>
      </div>
    ))}
  </div>
)

export default ServiciosGrid;