import React, { useRef, useState } from "react"
import {
  Alert,
  EmailJsContainer,
  FormContainer,
  SendBtn,
} from "../../styles/contact/Contact-styled"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"

const EmailJs = ({status, setStatus, validationAlert, setValidationAlert}) => {

    const form = useRef()
    const [message, setMessage] = useState('')
    const { t } = useTranslation()

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault()

        const user_name = e.target.elements.user_name.value
        const user_email = e.target.elements.user_email.value
        const message = e.target.elements.message.value

        if (!user_name || !user_email || !message) {
            setValidationAlert(true)
        } else {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                .then(() => {
                    setStatus(true)
                    setMessage(t("emailJsSend"))
                    e.target.reset()
                }, (error) => {
                    console.log(error.text)
                })
        }
    }

    return (
        <>
            <EmailJsContainer data-aos="flip-left" data-aos-easing="linear" data-aos-duration="500">
                <h1>{t("contactHeader")}</h1>
                <p>
                    {t("contactInfo")}
                </p>
                <FormContainer ref={form} onSubmit={sendEmail} validationAlert={validationAlert}>
                    <label>{t("emailJsName")}</label>
                    <input type="text" name="user_name" placeholder={t("emailJsNamePlace")} autoComplete='off'/>
                    <label>{t("emailJsEmail")}</label>
                    <input type="email" name="user_email" placeholder={t("emailJsEmailPlace")} autoComplete='off'/>
                    <label>{t("emailJsMessage")}</label>
                    <textarea name="message" />
                    <SendBtn type="submit" value={t("emailJsButton")} />
                </FormContainer>
            </EmailJsContainer>
            {status && <Alert status={status}><span>{message}</span></Alert>}
            {validationAlert && <Alert validationAlert={validationAlert}>{t("emailJsDecline")}</Alert>}
        </>
    )
}

export default EmailJs