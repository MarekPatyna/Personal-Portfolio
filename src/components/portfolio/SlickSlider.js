import React from "react"
import { dataslider } from "../../data/data"
import {
  GiIcon,
  LinkIcon,
  PortfolioProject,
  ProjectDes,
  ProjectImg,
  ProjectInfo,
  StyledSlider,
} from "../../styles/portfolio/Portfolio-styled"
import { useTranslation } from "react-i18next"

const SlickSlider = () => {

    const { t } = useTranslation()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
    }

    return (
        <StyledSlider {...settings}>
            {dataslider.map((item) => {
                const {id, img, name, name2, trans, tech, live, code} = item
                return <PortfolioProject key={id} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
                    <ProjectInfo>
                        <ProjectImg>
                            <img src={img} alt="project"/>
                        </ProjectImg>
                        <ProjectDes>
                            <h2>
                                {name}
                                {t(name2)}
                            </h2>
                            <p>{t(trans)}</p>
                            <span>{tech}</span>
                            <div>
                                <a href={code}>{t("portfolioCode")}<GiIcon /></a>
                                <a href={live}>{t("portfolioLive")}<LinkIcon /></a>
                            </div>
                        </ProjectDes>
                    </ProjectInfo>
                </PortfolioProject>

            })}
        </StyledSlider>
    )
}

export default SlickSlider