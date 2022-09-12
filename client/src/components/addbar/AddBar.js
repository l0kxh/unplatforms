import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddBar.css';
import { useAddTodoMutation } from '../../services/todoservice';
import { useAddInProgMutation } from '../../services/InProgressService';
import { useAddDoneMutation } from '../../services/DoneService';

const Input = ({ modal, toggle, title }) => {
    const [task, setTask] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');

    const [fm, setFM] = useState(true);
    const [tm, setTM] = useState(false);

    const [addTodo] = useAddTodoMutation();
    const [addInProg] = useAddInProgMutation();
    const [addDone] = useAddDoneMutation();

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "task") {
            setTask(value)
        } else if (name === "fromTime") {
            setFromTime(value)
        } else {
            setToTime(value)
        }
    }

    const handleAddTodo = async (todo) => {
        await addTodo(todo)
    }
    const handleAddInProg = async (inprog) => {
        await addInProg(inprog)
    }
    const handleAddDone = async (done) => {
        await addDone(done)
    }

    const handleSave = (e) => {
        e.preventDefault()
        toggle();
        console.log(task, fromTime + (fm ? " AM" : " PM"), toTime + (fm ? " AM" : " PM"))
        let fTime = fromTime + (fm ? " AM" : " PM");
        let tTime = toTime + (fm ? " AM" : " PM");
        if (title === "To Do List") {
            handleAddTodo({
                task: task,
                fTime: fTime,
                tTime: tTime
            });
        } else if (title === "In Progress") {
            handleAddInProg({
                task: task,
                fTime: fTime,
                tTime: tTime
            });
        } else {
            handleAddDone({
                task: task,
                fTime: fTime,
                tTime: tTime
            });
        }
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <form onSubmit={handleSave}>
                <ModalHeader toggle={toggle}><b>{title}</b></ModalHeader>
                <ModalBody>

                    <div className="form-group">
                        <label><b>Task</b></label>
                        <input type="text" className="form-control" value={task} onChange={handleChange} name="task" required />
                    </div>
                    <div className="form-group d-flex mt-3">
                        <div>
                            <label className='d-block'><b>From</b></label>
                            <input type="time" className="form-control" value={fromTime} onChange={handleChange} name="fromTime" required></input>
                            <div className='btn btn-secondary rounded-circle mx-3' onClick={() => { setFM(!fm) }}>{fm ? "AM" : "PM"}</div>
                        </div>
                        <div className='mx-5'>
                            <label className='d-block'><b>To</b></label>
                            <input type="time" className="form-control" value={toTime} onChange={handleChange} name="toTime" required></input>
                            <div className='btn btn-secondary rounded-circle mx-3' onClick={() => { setTM(!tm) }}>{tm ? "AM" : "PM"}</div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' type='submit'>ADD</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </form>
        </Modal>
    )
}

export default Input