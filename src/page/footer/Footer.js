import React from 'react'
import { Container } from '../../styles/footer/Footer-styled'

const Footer = () => {
    return (
        <Container>
            Copyright ©&nbsp;{new Date().getFullYear()} <span>Marek Patyna</span>
        </Container>
    )
}

export default Footer