import React from "react"
import {
  Container,
  PortfolioInfo,
  Line
} from "../../styles/portfolio/Portfolio-styled"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslation } from "react-i18next"
import SlickSlider from "../../components/portfolio/SlickSlider"

const Portfolio = () => {

    const { t } = useTranslation()

    return (
        <Container id="scrollP">
            <PortfolioInfo data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                <h1>{t("portfolioHeader")}
                    <Line />
                </h1>
                <p>
                    {t("portfolioInfo")}
                </p>
            </PortfolioInfo>
            <SlickSlider />
        </Container>
    )
}

export default Portfolio