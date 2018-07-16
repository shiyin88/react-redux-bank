import React from 'react'

export const UserComponents = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {props.username}</p>
                    <p>User Age: {props.age}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUsername("Bob")}>Change the Username
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeAge(25)}>Change the Age
                    </button>
                </div>
            </div>
        </div>
    );
};