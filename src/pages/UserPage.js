import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = () => {
    return (
        <div className='container'>
            <h1>Hello World from UserPage!</h1>
            <p>
                <Link to='/page'>Pages</Link> available here.
            </p>
        </div>
    );
}

export default UserPage;