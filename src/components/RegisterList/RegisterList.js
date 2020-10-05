import React, { useEffect, useState } from 'react';
import Logo from '../../logos/Group 1329.png'
import UserIcon from '../../logos/users-alt 1.png'
import PlusIcon from '../../logos/plus 1.png'
import TrashIcon from '../../logos/trash-2 9.png'
import './RegisterList.css'
import { Link } from 'react-router-dom';

const RegisterList = () => {
    const [events, setEvents] = useState([]);

    const deleteEvent = id => {
        const event = events.filter(event => event._id !== id);
        setEvents(event)
        fetch('https://secure-journey-18425.herokuapp.com/remove/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted')
            })
    }

    useEffect(() => {
        fetch('https://secure-journey-18425.herokuapp.com/allEvents')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <nav className="navbar navbar-light ">
                <a className="navbar-brand" href="home">
                    <img src={Logo} className="d-inline-block align-top logo" alt="logo" />
                </a>
                <h4 className="mr-auto ">Volunteer register list</h4>
            </nav>
            <div className="row">
                <div className="col-md-2">
                    <h6 className="p-3"><img className="icon" src={UserIcon} alt="user" />Volunteer register list</h6>
                    <Link to="/addEvent">
                        <h6 className="p-3"><img className="icon" src={PlusIcon} alt="plus" />Add event</h6>
                    </Link>
                </div>
                <div className="col-md-10">
                    <div className="container">
                        <table className="table table-borderLess">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registration  date</th>
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {
                                events.map(event => 
                                <tbody>
                                    <tr>
                                        <th scope="row">{event.Name}</th>
                                        <td>{event.Email}</td>
                                        <td>{event.Date}</td>
                                        <td>{event.taskName}</td>
                                        <td onClick={() => deleteEvent(event._id,)}><img className="trashIcon" src={TrashIcon} alt="trash" /></td>
                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterList;