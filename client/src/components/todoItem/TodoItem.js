import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";
import { useAddInProgMutation, useDeleteInProgMutation} from "../../services/InProgressService"
import { useAddDoneMutation } from "../../services/DoneService";
import { useDeleteTodoMutation } from "../../services/todoservice";

const TodoItem = ({ task, fTime, tTime, title, id }) => {
    const [popup, setPopup] = useState(false);  
    const a ="Move to progress"
    const b ="Move to done"
    const [addProgress] = useAddInProgMutation();
    const [addDone] = useAddDoneMutation();
    const[deleteTodo] = useDeleteTodoMutation();
    const[deleteProg] = useDeleteInProgMutation();
    const handleTodo = async(todo)=>{
        await addProgress(todo);
        deleteTodo(id)
    }
    const handleProgress = async(todo)=>{
        await addDone(todo);
        deleteProg(id)
    }
  return (
    <div className="todoItemContainer">
      <div className="todoItemHead">
        <p className="todoItemTitle">{task}</p>
        {title !== "Done" ? (
          <div className="todoItemTime">
            {fTime}-{tTime}
          </div>
        ) : (
          <div className="py-2"></div>
        )}
      </div>
      <div className="todoEdit" onClick={()=> setPopup(true)} onMouseLeave={()=>setPopup(false)}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
        {popup && (
            <div className="popup">
                    <div className="popupItem">Edit</div>
                    {title==="Done" ? (<></>) : (
                        <div className="popupItem" onClick={()=>{
                            if(title==="To Do List"){
                                handleTodo({task,fTime,tTime})
                            }
                            else{
                                handleProgress({task,fTime,tTime})
                            }
                        }}>{title==="In Progress" ? (b) : (a)}</div>
                    )}
            </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
