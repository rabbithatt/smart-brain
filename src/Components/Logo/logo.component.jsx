import React from 'react';
import { Logo, Image, Container } from './logo.style';
import brain from './brain.png';
import Tilt from 'react-tilt';

const Logotype = () => {
    return (
        <Container>
            <Tilt>
                <Logo>
                    <Image src={brain} alt=""/>
                </Logo>
            </Tilt>
        </Container>
    );
}

export default Logotype;