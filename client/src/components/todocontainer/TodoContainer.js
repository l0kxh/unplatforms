import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  faTrashCan } from "@fortawesome/free-solid-svg-icons"
import TodoItem from '../todoItem/TodoItem'
import './TodoContainer.css'
import { useState } from 'react'
import AddBar from '../addbar/AddBar'
import { useDeleteTodoMutation } from '../../services/todoservice'
import { useDeleteInProgMutation } from '../../services/InProgressService'
import { useDeleteDoneMutation } from '../../services/DoneService'

const TodoBox = ({ title, currentList }) => {

    const [deleteTodo] = useDeleteTodoMutation();
    const [deleteInProg] = useDeleteInProgMutation();
    const [deleteDone] = useDeleteDoneMutation();
    const [modal, setModal] = useState(false);

    const handleDeleteTodo = async (todoId) => {
        await deleteTodo(todoId)
    }
    const handleDeleteInProg = async (inprogId) => {
        await deleteInProg(inprogId)
    }
    const handleDeleteDone = async (doneId) => {
        await deleteDone(doneId)
    }

    const toggle = () => {
        setModal(!modal)
    }
    const handleDelete = () => {
        if (title === "To Do List") {
            handleDeleteTodo(currentList[0].id);
        } else if (title === "In Progress") {
            handleDeleteInProg(currentList[0].id);
        } else {
            handleDeleteDone(currentList[0].id);
        }
    }
    return (
        <div className='Container'>
            <div className='todoContainer'>
                <div className='todoHead'>
                    <p className='todoTitle'>{title}</p>
                    <FontAwesomeIcon icon={faTrashCan} className="action" onClick={handleDelete} />
                </div>
                {
                    currentList.map((items, index) => (
                        <TodoItem
                            key={index}
                            title={title}
                            task={items.task}
                            fTime={items.fTime}
                            tTime={items.tTime}
                            id={items.id}
                        />
                    ))
                }
            </div>
            <div className='AddButtonContainer'>
                <span className='AddButton' onClick={toggle}>+</span>
            </div>
            <AddBar modal={modal} toggle={toggle} title={title} />
        </div>
    )
}

export default TodoBox