import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear, faPowerOff, faChevronRight, faXmark, faPencil } from '@fortawesome/free-solid-svg-icons';
import './style/UserProfile.css';

function SignUp() {

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Edit user info</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">User name</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firtsname">First name</label>
                        <input type="text" id="firtsname" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" />
                    </div>
                </form>
                <button className="edit-button">Save</button>
                <button className="edit-button">Cancel</button>
            </div>
        </main >
    );
}

export default SignUp;
