import React from 'react';

function About(props) {
    return (
        <div>
            <h1>{props.info.title}</h1>
            <p>{props.info.body}</p>
        </div>
    );
}

export default About;