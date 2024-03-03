/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { ContexTask } from '../context/TaskContext';

function TaskForm() {

  const { createTask } = useContext(ContexTask)

    const [title, setTitle] = useState(''),
          [description, setDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        createTask({title, description});
    }

  return (
      <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
          <h1 className='text-white text-2xl font-bold mb-3'>Crea tu tarea</h1>
        <input type="text" placeholder='Esribe tu tarea' 
            onChange={e => setTitle(e.target.value)}
            className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea placeholder='describe tu tarea...' 
        onChange={e => setDescription(e.target.value)}
        className='bg-slate-300 p-3 w-full mb-2'
        >

        </textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
      </form>
      </div>
  )
}

// TaskForm.propTypes = {
//   createTask: PropTypes.func.isRequired
// }

export default TaskForm


// La validación de las props en React con propTypes es una forma de asegurarte de que tu componente está recibiendo los datos correctos en las props. Esto es especialmente útil en aplicaciones grandes donde los componentes pueden recibir muchas props y quieres asegurarte de que todas ellas tienen los tipos de datos correctos.

// Aquí te dejo algunos beneficios de usar propTypes:

// Documentación: Los propTypes proporcionan una forma de documentar qué props espera un componente. Esto puede ser muy útil cuando otras personas trabajan en tu código, ya que pueden ver rápidamente cómo se supone que deben usar el componente.
// Depuración: Si una prop no cumple con el tipo de dato esperado, React mostrará una advertencia en la consola del navegador en modo de desarrollo. Esto puede ayudarte a detectar bugs.
// Prevención de bugs: Al asegurarte de que las props tienen los tipos de datos correctos, puedes prevenir bugs que podrían ser causados por datos inesperados.
// Es importante mencionar que propTypes es una característica opcional y no es necesario usarla para crear componentes de React. Sin embargo, puede ser una herramienta útil para mejorar la calidad y la mantenibilidad de tu código.

// Espero que esto te ayude a entender mejor por qué se utilizan los propTypes. Si tienes más preguntas, no dudes en preguntar. 😊