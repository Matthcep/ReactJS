import React, { useState } from 'react';

function CapicuaChecker() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  // Función para verificar si el texto es capicúa
  const esCapicua = (str) => {
    const textoLimpio = str.replace(/\s+/g, '').toLowerCase(); // Elimina espacios y pasa a minúsculas
    const textoReverso = textoLimpio.split('').reverse().join(''); // Invierte el texto
    return textoLimpio === textoReverso;
  };

  // Función que se ejecuta al hacer clic en el botón "Analizar"
  const analizarTexto = () => {
    if (esCapicua(texto)) {
      setResultado('El texto es capicúa');
    } else {
      setResultado('El texto no es capicúa');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Verificador de Capicúa</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button
        onClick={analizarTexto}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Analizar
      </button>
      <p>{resultado}</p>
    </div>
  );
}

export default CapicuaChecker;
