import React from 'react'
import IconAqua from './assets/icon_aqua.png';
import IconDark from './assets/icon_dark.png';
import IconEarth from './assets/icon_earth.png';
import IconLight from './assets/icon_light.png';
import IconSpell from './assets/icon_spell.png';
import IconTrap from './assets/icon_trap.png';

export const IconAtribute = ({type}) => {

  const iconAt = () => {
    switch (type) {
    case 'DARK':
      return IconDark;

    case 'WATER':
    return IconAqua;


    case 'EARTH':
    return IconEarth;

    case 'LIGHT':
    return IconLight;


    case 'SPELL CARD':
    return IconSpell;


    case 'TRAP':
    return IconTrap;

    default:
      return 'default'
    }
  }

  return (
    <>

      {
        (iconAt() === 'default') ? ' XX '
        :
        <img src={iconAt()} className='w-5 h-5 mx-2'/>}
    </>
  )


}

