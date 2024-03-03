import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

let IDS = 0;

export const ContexTask = createContext();

export function TaskContext(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(info) {

    setTasks([
      ...tasks,
      {
        id: tasks.length + IDS++,
        title: info.title,
        description: info.description,
      },
    ]);
  }

  function deleteTask(card) {
    setTasks(tasks.filter((task) => task.id !== card.id));
  }

  return (
    <ContexTask.Provider value={ { tasks, deleteTask, createTask } }>
      {props.children}
    </ContexTask.Provider>
  );
}

TaskContext.propTypes = {
  children: PropTypes.node,
};
