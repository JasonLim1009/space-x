import React from 'react';
import { navData } from '../data';

const Nav = () => {

  const { items } = navData;

  return (
    <nav>
      <ul className='flex gap-x-[58px]'>
        {items.map((items, index) => {
          return (
            <li key={index}>
              <a className='link hover:border-b-2 hover:border-dark transition duration-300' href={items.href}>
                {items.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;
