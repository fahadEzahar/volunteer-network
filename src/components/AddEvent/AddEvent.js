import React, { useContext, useState } from 'react';
import Logo from '../../logos/Group 1329.png'
import UserIcon from '../../logos/users-alt 1.png'
import PlusIcon from '../../logos/plus 1.png'
import './AddEvent.css'
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const AddEvent = () => {
    const { data } = useContext(userContext);
    const [dataValue, setDataValue] = data;
    const [title, setTitle] = useState('');

    const handleBlur = (e) => {
        const { name, value } = e.target
        if (name === 'title') {
            setTitle(value)
        }
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        const newEvent = {
            name: title,
            img: "https://i.ibb.co/R9Pp6Lr/extra-Volunteer.png"
        }
        const updateEvent = [...dataValue, newEvent]
        setDataValue(updateEvent);
        fetch('https://secure-journey-18425.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        history.push('/');
        e.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-light ">
                <a className="navbar-brand" href="home">
                    <img src={Logo} className="d-inline-block align-top logo" alt="logo" />
                </a>
                <h4 className="mr-auto ">Add Event</h4>
            </nav>
            <div className="row">
                <div className="col-md-2">
                    <Link to="/registerList">
                        <h6 className="p-3"><img className="icon" src={UserIcon} alt="user" />Volunteer register list</h6>
                    </Link>
                    <h6 className="p-3"><img className="icon" src={PlusIcon} alt="plus" />Add event</h6>
                </div>
                <div className="col-md-10">
                    <div className="container">
                        <form className="m-3" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="Event Title">Event Title</label>
                                    <input type="text" className="form-control" placeholder="Event Title" name="title" onBlur={handleBlur} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="Event Date">Event Date</label>
                                    <input type="date" className="form-control" placeholder="Event Date" name="date" onBlur={handleBlur} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3 ">
                                    <label for="Description">Description</label>
                                    <input type="text" className="form-control inputField " placeholder="Description" name="description" onBlur={handleBlur} required />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="Banner">Banner</label>
                                    <input type="file" className="form-control UploadIcon border-0" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-5">
                                <button className="btn btn-primary " type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;