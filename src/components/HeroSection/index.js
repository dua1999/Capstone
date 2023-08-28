import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Video, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroVideo from '../../utils/video/HeroVideo.mp4'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation/>

                </HeroBg>

                <HeroInnerContainer>
                    <HeroLeftContainer id="left">
                        <Title>Hi, My name is <br /> {Bio.name}</Title>
                        <TextLoop>I am a
                            <Span><Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true }} /></Span></TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank'>Check Out My Resume!</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Video  src={HeroVideo} autoPlay loop muted>
                            Your browser does not support the video tag.
                        </Video>

                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>

        </div>
    )
}

export default HeroSection 