import PropTypes from "prop-types";
import { useContext } from "react";
import { ContexTask } from "../context/TaskContext";

function TaskCard({ task }) {

  const {deleteTask} = useContext(ContexTask);

  const handleDelete = () => {
    deleteTask(task);
  };

  return (
      <div className="bg-gray-800 text-white p-4 rounded-md min-w-[10rem]">
        <h2 className="text-xl font-bold capitalize">{task.title}</h2>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={handleDelete}>Eliminar Tarea</button>
      </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default TaskCard;
