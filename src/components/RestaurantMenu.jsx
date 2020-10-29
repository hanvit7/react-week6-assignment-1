import React from 'react';

export default function RestaurantMenu({ menus }) {
  return (
    <>
      <h3>메뉴</h3>
      <ul>
        {
          menus.map((menu) => (
            <li
              key={menu.id}
            >
              {menu.name}
            </li>
          ))
        }
      </ul>
    </>
  );
}
