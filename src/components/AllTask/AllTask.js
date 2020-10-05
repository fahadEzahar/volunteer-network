import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const AllTask = () => {
    const { loggedInUser , allTask } = useContext(userContext)
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
    const [allTaskValue, setAllTaskValue] = allTask;

    const deleteTask = id => {
        const task = allTaskValue.filter(task => task._id !== id);
        setAllTaskValue(task)
        fetch('https://secure-journey-18425.herokuapp.com/remove/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted')
            })
    }

    useEffect(() => {
        fetch('https://secure-journey-18425.herokuapp.com/task?email=' + loggedInUserValue.email)
            .then(res => res.json())
            .then(data => setAllTaskValue(data))
    }, [allTaskValue])
    
    return (
        <div className="container p-5">
            <div className="row">
                {
                    allTaskValue.map(task =>
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="row no-gutters p-2">
                                    <div className="col-md-4">
                                        <img src={task.Image} className="card-img" alt="Humanity More" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{task.taskName}</h5>
                                            <p className="card-text">{task.Date}</p>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button onClick={() => deleteTask(task._id)} className="btn btn-secondary ">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllTask;