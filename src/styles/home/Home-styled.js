import styled from "styled-components"
import { CgArrowLongUp } from "react-icons/cg"
import { FiLinkedin, FiGithub } from "react-icons/fi"
import { colors } from "../styled/Global"

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
`

export const HomeContainer = styled.section`
  max-width: 87.5rem;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 11.25rem 5rem 6.25rem 5rem;
  @media (max-width: 850px) {
    padding: 11.25rem 1.875rem 6.25rem 1.875rem;
  }
  @media (max-width: 1050px) {
    flex-flow: column;
    text-align: center;
  }
  #particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const HomeDes = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  @media(max-width: 1050px) {
    align-items: center;
  }
  h1 {
    font-size: clamp(3.125rem, 12vw, 6.75rem);
    font-weight: 800;
    z-index: 2;
    line-height: 1.15;
    span {
      color: ${colors.mainColorAccent};
    }
  }
  h2 {
    font-size: clamp(1.3rem, 6vw, 2.375rem);
    font-weight: 600;
    z-index: 2;
    line-height: 1.2;
    
  }
`

export const MobileIcons = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    gap: 0.3rem;
    font-size: clamp(1.3rem, 6vw, 2.375rem);
    margin-top: 1rem;
    cursor: pointer;
  }
`

export const Button = styled.button`
  border: 0.0625rem solid ${colors.mainColorAccent};
  border-radius: 0.3125rem;
  padding: 1.1875rem 2rem 1rem 2rem;
  transition-duration: 0.5s;
  margin-top: 1rem;
  z-index: 2;
  &:hover {
    cursor: pointer;
    background-color: ${colors.buttonHover};
  }
`

export const HomePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 26.125rem;
  height: 100%;
  z-index: 2;
  img {
    border-radius: 42% 58% 50% 50% / 37% 15% 85% 63%;
  }
`

export const Line = styled.div`
  position: fixed;
  right: 1.875rem;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  z-index: 555;
  @media (max-width: 850px) { 
    display: none;
  }
  span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5625rem;
    margin-right: 0.1875rem;
    a {
      transform: rotate(180deg);
      margin-top: 1rem;
    }
  }
  div {
    content: "";
    border: 0.0625rem solid ${colors.mainColorAccent};
    width: 0.0625rem;
    height: 14.7rem;
  }
`

export const LongArrow = styled(CgArrowLongUp)`
  font-size: 1.25rem;
  margin-bottom: 0.625rem;
`

export const LinkedinIcon = styled(FiLinkedin)`
  cursor: pointer;
`

export const GitHubIcon = styled(FiGithub)`
  cursor: pointer;
`