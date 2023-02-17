import React, { useState } from 'react'

import * as S from './styles'
import { MenuItems } from '../../consts/menu'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prev => !prev)
  }

  const menuItems = MenuItems.map(item =>
    (<S.MenuItem key={item.link}>
      <S.RouterLink styles={{ all: 'unset' }} to={item.link}>{item.label}</S.RouterLink>
    </S.MenuItem>),
  )

  return (
    <S.Container>
      <S.StyledBurger open={open} onClick={toggle}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <S.MenuContainer open={open}>
        <S.MenuItemsContainer>
          {menuItems}
        </S.MenuItemsContainer>
      </S.MenuContainer>
    </S.Container>
  )
}
