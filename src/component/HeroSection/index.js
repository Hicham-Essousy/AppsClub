import React from 'react'
import video from '../../video/srrrc.mp4'
import {Button} from '../ButtonElement'
import {HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroH1, HeroP, HeroBtnWrapper
        } from './HeroElem'


const HeroSection = () => {
    return (
        
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video}  />
            </HeroBg>
            <HeroContent>
                <HeroH1>AppsClub</HeroH1>
                <HeroP>
                    lefefjieozhfuehfuefjhfdjoiifefjifizeojfie fzehufhizeufhe
                    
                </HeroP>
                <HeroBtnWrapper>
                <Button to="about">For more details</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        
    )};

export default HeroSection;
