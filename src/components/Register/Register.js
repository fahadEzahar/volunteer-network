import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Logo from '../../logos/Group 1329.png'

const Register = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const { taskName } = useParams();

  const { data , loggedInUser } = useContext(userContext);
  const [dataValue, setDataValue] = data;
  const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;

  const taskImage = dataValue.find(task => task.name === taskName)

  const handleBlur = (e) => {
    const { name, value } = e.target
    if (name === 'date') {
      setDate(value)
    }
    if (name === 'description') {
      setDescription(value)
    }
  }

  const history = useHistory();
  const handleSubmit = (e) => {
    const newTask = {
      Name: loggedInUserValue.displayName,
      Email: loggedInUserValue.email,
      Date: date,
      Description: description,
      taskName: taskName,
      Image: taskImage.img
    }
    fetch('https://secure-journey-18425.herokuapp.com/addTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => console.log(data))
    history.push('/yourSelectedTask');
    e.preventDefault();
  }

  return (
    <div className="container">

      <div className="col-md-4  mx-auto text-center m-5">
        <img className="logo" src={Logo} alt="" />
      </div>

      <div className="col-md-6 mx-auto p-5 border">
        <form onSubmit={handleSubmit}>
          <h4 className="text-center">Register as a Volunteer</h4>
          <div className="form-group">
            <input type="text" className="form-control" readOnly value={loggedInUserValue.displayName} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" readOnly value={loggedInUserValue.email} />
          </div>
          <div className="form-group">
            <input type="date" className="form-control" placeholder="Date" name="date" onBlur={handleBlur} required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Description" name="description" onBlur={handleBlur} required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" readOnly value={taskName} />
          </div>
          <input type="submit" value="Registration" className="btn btn-primary btn-block" />
        </form>
      </div>

    </div>
  );
};

export default Register;