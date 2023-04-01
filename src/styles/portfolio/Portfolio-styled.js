import styled from "styled-components"
import Slider from "react-slick"
import { AiFillGithub } from "react-icons/ai"
import { BiLinkExternal } from 'react-icons/bi'
import { colors } from "../styled/Global"

export const Container = styled.section`
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 6.25rem 5rem 10rem 5rem;
  @media (max-width: 850px) {
    padding: 6.25rem 1.875rem;
  }
`

export const PortfolioInfo = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  h1 {
    font-size: clamp(2.5rem, 8vw, 3.125rem);
    font-weight: 600;
    
  }
  p {
    font-size: clamp(1.5625rem, 4vw, 1.875rem);
    width: min(100%, 37.5rem);
    margin: 2.25rem 0 6.25rem 0;
    font-weight: 300;
    line-height: 1.2;
  }
`

export const Line = styled.div`
  content: "";
  border: 0.0625rem solid ${colors.mainColorAccent};
  width: min(100%, 16.875rem);
  height: 0.0625rem;
  margin-top: 0.9375rem;
`

export const StyledSlider = styled(Slider)`
  width: min(100%, 87.5rem);
  margin: 0 auto;
  .slick-dots li button:before {
    background-color: ${colors.mainColorAccent};
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    text-indent: -9999px;
    overflow: hidden;
    margin-top: 1.25rem;
    display: block;
    @media(max-width: 850px) {
      height: 0.625rem;
      width: 0.625rem;
    }
  }
  .slick-next {
    right: 0;
    z-index: 999;
    &::before {
      color: ${colors.mainColorAccent};
    }
    @media (max-width: 1250px) {
      display: none !important;
    }
  }
  .slick-prev {
    left: 0;
    z-index: 999;
    &::before {
      color: ${colors.mainColorAccent};
    }
    @media (max-width: 1250px) {
      display: none !important;
    }
  }
`

export const PortfolioProject = styled.section`
  display: flex !important;
  flex-flow: row;
`

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: min(100%, 25rem);
  @media (max-width: 1250px) {
    flex-flow: column;
  }
`

export const ProjectImg = styled.div`
  height: min(100%, 20rem);
`

export const ProjectDes = styled.article`
  min-width: 34.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 0.9375rem 1.875rem 0.9375rem 1.875rem;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    min-width: unset;
  }
  h2 {
    font-size: 2.1875rem;
    font-weight: 700;
    color: ${colors.mainColorAccent};
    text-align: center;
  }
  p {
    font-size: clamp(1.25rem, 4vw, 1.5625rem);
    max-width: 34.375rem;
    text-align: justify;
    @media (max-width: 1250px) {
      max-width: unset;
    }
  }
  span {
    font-size: 1.5625rem;
    font-weight: 900;
    text-align: center;
  }
  div {
    font-size: 1.5625rem;
    height: 100%;
    display: flex;
    gap: 1rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.35rem;
    }
  }
`

export const GiIcon = styled(AiFillGithub)`
  margin-bottom: 0.3125rem;
`

export const LinkIcon = styled(BiLinkExternal)`
  margin-bottom: 0.3125rem;
`
