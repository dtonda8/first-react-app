import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (<div>
                    <li style={{listStyleType: "none"}}key={task.id}>{task.number}.  {task.text}</li>
                </div>);
      })}
      
    </ul>
  );
};



export default Overview;
