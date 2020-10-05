import React from 'react';

const SearchEvents = () => {
    return (
        <div>
            <h3 className="text-center"><strong>I GROW BY HELPING PEOPLE IN NEED.</strong></h3>
            <nav className="navbar navbar-light ">
                <form className="form-inline mx-auto">
                    <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary  " type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
};

export default SearchEvents;