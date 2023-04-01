import styled, { css } from "styled-components"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaNpm
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiStyledcomponents, SiGit, SiRedux } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { colors } from "../styled/Global"

export const Container = styled.div`
  background: ${colors.mainBg};  
`

export const AboutContainer = styled.section`
  max-width: 87.5rem;
  margin: 0 auto;
  height: 100%;
  padding: 6.25rem 5rem;
  @media (max-width: 850px) {
    padding: 6.25rem 1.875rem;
  }
`

export const AboutMe = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 3rem;
  h1 {
    font-size: clamp(2.5rem, 8vw, 3.125rem);
    font-weight: 600;
  }
`

export const Line = styled.div`
  content: "";
  border: 0.0625rem solid ${colors.mainColorAccent};
  width: min(100%, 16.875rem);
  height: 0.0625rem;
  margin-top: 0.9375rem;
`

export const AboutMeFlex = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 6.25rem;
  gap: 5rem;
  font-size: clamp(0.9375rem, 4vw, 1.5625rem);
  @media (max-width: 1150px) {
    gap: 6rem;
  }
  @media (max-width: 1250px) {
    flex-flow: column-reverse;
    align-items: center;
    gap: 1.5rem;
  }
`

export const AboutPhoto = styled.img`
  max-width: 25rem;
  height: auto;
  @media (max-width: 1250px) {
    max-width: none;
  }
  ${props => props.Desktop && css`
    display: block;
    @media (max-width: 1250px) {
      display: none;
    }
  `}
  ${props => props.Mobile && css`
    display: none;
    @media (max-width: 1250px) {
      display: block;
      max-width: 100%;
    }
  `} 
`

export const AboutInfo = styled.article` 
  display: flex;
  justify-content: center;
  flex-flow: column;
  max-width: 50rem;
  @media (max-width: 1250px) {
    max-width: none;
  }
  p {
    text-align: justify;
    line-height: 1.15;
    font-size: clamp(1.25rem, 4vw, 1.5625rem);
    @media (max-width: 950px) {
      line-height: 1.3;
    }
  }
  div { 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: clamp(1.5625rem, 4vw, 1.875rem);
    font-weight: 600;
    margin-top: 1.5625rem;
    @media (max-width: 1250px) {
      justify-content: center;
    }
    span {
      font-size: clamp(1.4375rem, 4vw, 1.6875rem);
      color: ${colors.mainColorAccent};
    }
  }
`

export const TechStack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  @media (max-width: 1250px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    @media (max-width: 450px) {
      flex-flow: column;
    }
    div {
      margin-top: 0;
    }
  }
`

export const HtmlLogo = styled(FaHtml5)`
  color: #f06529;
  background: white;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;
`

export const CssLogo = styled(FaCss3Alt)`
  color: #2965f1;
  background: white;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;

`

export const JsLogo = styled(IoLogoJavascript)`
  color: #323330;
  background: #f0db4f;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;

`

export const ReactLogo = styled(FaReact)`
  color: #61DBFB;
  background: #20232A;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;

`

export const ReduxLogo = styled(SiRedux)`
  color: white;
  background: #764abc;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;

`

export const StyledLogo = styled(SiStyledcomponents)`
  color: #F0CD3F;
  background: #20232A;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;

`

export const RestLogo = styled(TbApi)`
  color: #0082C6;
  background: white;
  border-radius: 0.3125rem;
  font-size: 1.6875rem;

`

export const GitLogo = styled(SiGit)`
  color: #F1502F;
  background: #3E2C00;
  border-radius: 0.3125rem;
    font-size: 1.6875rem;

`

export const GitHubLogo = styled(FaGithub)`
  color: white;
  background: #161B22;
  border-radius: 0.3125rem;
    font-size: 1.6875rem;

`

export const NpmLogo = styled(FaNpm)`
  color: #CC3534;
  background: white;
  border-radius: 0.3125rem;
    font-size: 1.6875rem;

`