import React from "react"
import {
  Container,
  Button,
  Line,
  HomeContainer,
  HomeDes,
  HomePhoto,
  MobileIcons,
  LongArrow,
  LinkedinIcon,
  GitHubIcon
} from "../../styles/home/Home-styled"
import Typewriter from "typewriter-effect"
import HomeParticles from "../../components/particles/HomeParticles"
import { useTranslation, Trans } from "react-i18next"
import portrait from "../../assets/img/homeport.webp"

const Home = () => {

    const { t } = useTranslation()

    const downloadFile = () => {
        fetch('Marek_Patyna_CV.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Marek_Patyna_CV.pdf'
                alink.click()
            })
        })
    }

    return (
        <Container id="scrollH">
            <HomeContainer>
                <HomeParticles />
                <HomeDes>
                    <h1 data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1400">
                        <Trans i18nKey={"homeHeader"}>
                            <span>Hello,</span> I'm MAREK <span>PATYNA</span>
                        </Trans>
                    </h1>
                    <h2 data-aos="flip-up" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1400">
                        <Typewriter
                            options={{delay: 40}}
                            onInit={(typewriter) => {
                                typewriter.typeString('')
                                    .pauseFor(1700)
                                typewriter.typeString('JUNIOR FRONT-END REACT DEVELOPER')
                                    .start()
                            }}
                        />
                    </h2>
                    <MobileIcons data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1400">
                        <a href="https://www.linkedin.com/in/marek-patyna-162839161/"><LinkedinIcon /></a>
                        <a href="https://github.com/MarekPatyna"><GitHubIcon /></a>
                    </MobileIcons>
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1400">
                        <Button onClick={downloadFile}>
                            {t("downloadCV")}
                        </Button>
                    </div>
                </HomeDes>
                <HomePhoto data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1400">
                    <img src={portrait} alt="portrait"/>
                </HomePhoto>
                <Line data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300" data-aos-delay="1400">
                    <span>
                        <LongArrow />
                        <p>{t("scroll")}</p>
                        <a href="https://www.linkedin.com/in/marek-patyna-162839161/"><LinkedinIcon /></a>
                        <a href="https://github.com/MarekPatyna"><GitHubIcon /></a>
                    </span>
                    <div />
                </Line>
            </HomeContainer>
        </Container>
    )
}

export default Home