import React from 'react';
import Title from '../../components/Ttile/Title';
import About from '../../components/About/About';

function MainPage() {
    return (
        <>
            <Title name={'Hello World!'} />
            <About info={{title: "Some Title", body:"Some body"}}/>
        </>
    );
}

export default MainPage;