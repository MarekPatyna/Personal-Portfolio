import React, { useEffect, useState } from "react"
import {
  Container,
  ContactContainer,
  GoogleMapDesk,
  GoogleMapMobile
} from "../../styles/contact/Contact-styled"
import Map from "../../components/contact/Map"
import EmailJs from "../../components/contact/EmailJs"

const Contact = () => {

    const [status, setStatus] = useState(false)
    const [validationAlert, setValidationAlert] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(false)
            setValidationAlert(false)
        }, 2000)
        return () => clearTimeout(timer)
    },[status, validationAlert])

    return (
        <Container id="scrollC">
            <ContactContainer>
                <EmailJs
                    status={status}
                    setStatus={setStatus}
                    validationAlert={validationAlert}
                    setValidationAlert={setValidationAlert}
                />
                <GoogleMapDesk data-aos="flip-right" data-aos-easing="linear" data-aos-duration="500">
                    <Map />
                </GoogleMapDesk>
            </ContactContainer>
            <GoogleMapMobile>
                <Map />
            </GoogleMapMobile>
        </Container>
    )
}

export default Contact