import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SideLinks,
        SideBtnWrap,
        SidebarRoute
     } from './sidebarELe'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                      
                          <SideLinks to='about' onClick={toggle}>About</SideLinks>
                     
                          <SideLinks to='discover' onClick={toggle}>Discover</SideLinks>
                     
                          <SideLinks to='services' onClick={toggle}>Services</SideLinks>
                     
                          <SideLinks to='contacts' onClick={toggle}>Contacts</SideLinks>
                     
            </SidebarMenu> 
            <SideBtnWrap>
                <SidebarRoute to='/signin'><strong>Sign In</strong> </SidebarRoute>
            </SideBtnWrap> 
            </SidebarWrapper>        
        </SidebarContainer>
    )
}

export default Sidebar;
