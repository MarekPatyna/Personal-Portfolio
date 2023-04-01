import styled from "styled-components"
import { colors } from "../styled/Global"

export const Container = styled.div`
  background: ${colors.mainBg};
`

export const ContactContainer = styled.section`
  max-width: 87.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 6.25rem 5rem;
  @media (max-width: 850px) {
    padding: 6.25rem 1.875rem;
    gap: 0;
  }
  @media (max-width: 1250px) {
    flex-flow: column;
  }
`

export const EmailJsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  gap: 0.8rem;
  max-width: 39.53125rem;
  h1 {
    font-size: clamp(2.5rem, 8vw, 3.125rem);
    font-weight: 600;
  }
  p {
    font-size: clamp(1.5625rem, 4vw, 1.875rem);
    font-weight: 300;
    line-height: 1.2;
  }
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 1.5625rem;
  font-weight: 300;
  label {
    font-size: clamp(1.25rem, 4vw, 1.875rem);
    font-weight: 500;
    margin-top: 2.1875rem;
  }
  input:not(:last-child) {
    width: min(130%, 20.3125rem);
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    cursor: text;
  }
  input, textarea {
    border-bottom: 0.0625rem solid ${props => props.validationAlert ? colors.alert : colors.mainColorAccent};
    text-align: left;
    margin-top: 0.9375rem;
    padding-bottom: 0.4375rem;
    &::placeholder {
      font-style: italic;
      font-size: clamp(1.25rem, 4vw, 1.5rem);
      color: ${props => props.validationAlert ? colors.alert : colors.placeholder};
      opacity: 0.5;
    }
  }
  textarea {
    overflow-wrap: break-word;
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    height: 9.375rem;
    width: min(130%, 20.3125rem) !important;
    cursor: text;
  }
`

export const SendBtn = styled.input`
  border: 0.0625rem solid ${colors.mainColorAccent} !important;
  border-radius: 0.3125rem;
  padding: 0.625rem 1.5625rem 0.625rem 1.5625rem;
  transition-duration: .25s;
  transition-timing-function: ease-out;
  margin-top: 2.8125rem !important;
  font-size: clamp(1.25rem, 4vw, 1.875rem);
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: ${colors.buttonHover};
  }
`

export const Alert = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1055;
  top: 4.9375rem;
  padding: 0.625rem;
  text-align: center;
  background-color: ${(props => props.status ? colors.alertTrue : "" || props.validationAlert ? colors.alert : "" )};
  color: ${colors.white};
  font-size: 1.25rem;
  p {
    font-size: 1.0625rem;
  }
`

export const GoogleMapDesk = styled.div`
  width: min(100%, 50rem);
  @media (max-width: 650px) {
    bottom: 5.375rem;
  }
  @media (max-width: 1250px) {
    width: 100%;
  }
  .map-container {
    height: 43.75rem;
    max-width: 37.5rem;
    margin-left: 0.375rem;
    @media (max-width: 850px) {
      display: none;
    }
    @media (max-width: 1250px) {
      max-width: 100%;
    }
  }
`

export const GoogleMapMobile = styled.div`
  width: 100%;
  display: none;
  z-index: 1;
  @media (max-width: 850px) {
    display: block;
  }
  .map-container {
    height: 35rem;
  }
`