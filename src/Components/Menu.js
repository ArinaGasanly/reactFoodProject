import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import menuBanner from '../image/banner.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Banner = styled.img`
  width: 100%;
  heigh: 100%;
`;

export const Menu = () => (
 <MenuStyled>
   <div>
    <Banner src={menuBanner} alt="banner"/>
   </div>
   <SectionMenu>
     <h2>Бургеры</h2>
     <ListItem itemList={dbMenu.burger}/>
   </SectionMenu>

   <SectionMenu>
     <h2>Закуски / Напитки</h2>
     <ListItem itemList={dbMenu.other}/>
   </SectionMenu>
 </MenuStyled>
)