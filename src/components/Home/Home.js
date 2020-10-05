import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Home = () => {

    const { data } = useContext(userContext);
    const [dataValue, setDataValue] = data;
    const colors = ['Aqua', 'CadetBlue', 'BlueViolet', 'BurlyWood'];

    return (
        <div className="container">
            <div className="row">
                {
                    dataValue.map(task =>
                        <div className="col-md-3 p-3 ">
                            <div className="card border-0 " >
                                <Link to={"/register/" + task.name}>
                                    <img src={task.img} className=" img-thumbnail" alt="..." />
                                    <div className="card-body" style={{ "height": "5rem", "backgroundColor": colors[parseInt(Math.random() * colors.length)], "color": "black" }}>
                                        <h5 className="card-title ">{task.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;