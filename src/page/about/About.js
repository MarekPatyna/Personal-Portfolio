import React from "react"
import {
    Container,
    AboutMe,
    AboutMeFlex,
    AboutInfo,
    Line,
    AboutContainer,
    AboutPhoto,
    HtmlLogo,
    CssLogo,
    JsLogo,
    ReactLogo,
    ReduxLogo,
    StyledLogo,
    RestLogo,
    GitLogo,
    GitHubLogo,
    NpmLogo,
    TechStack
} from "../../styles/about/About-styled"
import aboutphoto from "../../assets/img/about1.webp"
import aboutphoto2 from "../../assets/img/about2.webp"
import { useTranslation } from "react-i18next"

const About = () => {

    const { t } = useTranslation()

    return (
        <Container id="scrollA">
            <AboutContainer>
                <AboutMe data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                    <h1>{t("aboutHeader")}<Line /></h1>
                </AboutMe>
                <AboutMeFlex>
                    <AboutPhoto Desktop src={aboutphoto2} alt="screen" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" />
                    <AboutPhoto Mobile src={aboutphoto} alt="computer" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" />
                    <AboutInfo data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                        <p>
                            {t("aboutInfo")}
                        </p>
                        <TechStack>
                            <span>
                                <p>{t("aboutLng")}</p><div><HtmlLogo /><CssLogo /><JsLogo /></div>
                            </span>
                            <span>
                                <p>{t("aboutFrame")}</p><div><ReactLogo /><ReduxLogo /><StyledLogo /><RestLogo /></div>
                            </span>
                            <span>
                                <p>{t("aboutTools")}</p><div><GitLogo /><GitHubLogo /><NpmLogo /></div>
                            </span>
                        </TechStack>
                    </AboutInfo>
                </AboutMeFlex>
            </AboutContainer>
        </Container>
    )
}

export default About