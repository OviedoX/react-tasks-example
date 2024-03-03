import TaskCard from "./TaskCard";
import { useContext } from "react";
import { ContexTask } from "../context/TaskContext";

function TaskList() {

  const {tasks} = useContext(ContexTask)

  if (!tasks || tasks.length === 0) return <h1 className="text-white text-4xl font-bold text-center">No hay Tareas aun</h1>;

  return (
    <div className="grid grid-cols-auto gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
