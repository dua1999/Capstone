import React from 'react'
import { Nav, NavLink, NavContainer, Span, NavLogo,
NavItems, GithubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLogo, MobileMenuLink } from './NavbarStyle'
import { GiButterflyFlower } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';



const Navbar= ( )=> {
    const [isOpen, setOpen] = React.useState(false);
    const theme = useTheme()
    return (<Nav>
        <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <GiButterflyFlower size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>            
        <MobileIcon>
            <FaBars onClick={() => {
            setOpen(!isOpen)
          }} />
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#education">Education</NavLink>

            </NavItems>
            <ButtonContainer>
                <GithubButton href={Bio.github} target='_blank'>
                    Github Profile
                </GithubButton>
            </ButtonContainer>
            {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLink href="#about" onClick={() => {
              setOpen(!isOpen)
            }}>About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => {
              setOpen(!isOpen)
            }}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => {
              setOpen(!isOpen)
            }}>Experience</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => {
              setOpen(!isOpen)
            }}>Projects</MobileMenuLink>
            <MobileMenuLink href='#education' onClick={() => {
              setOpen(!isOpen)
            }}>Education</MobileMenuLink>
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GithubButton>
          </MobileMenu>
        }
      </NavContainer>
    </Nav>
    
    )
}

export default Navbar 