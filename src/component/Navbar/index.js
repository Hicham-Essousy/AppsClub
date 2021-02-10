import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink
    } from './NavbarEle'
const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>AppsClub</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='discover'>Discover</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='services'>Services</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='contacts'>Contacts</NavLinks>
                      </NavItem>
                      
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>

        </>
    );
}

export default Navbar;
