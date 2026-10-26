import {useState} from 'react';
import {menus} from './menuData.ts';
import {Bar, MenuWrapper, MenuButton, Dropdown, DropdownItem} from "./MenuBar.styles.ts";

export function MenuBar() {

    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    return (
        <Bar>
            {menus.map((menu)=>(
               <MenuWrapper key={menu.id}>
                   <MenuButton
                       $active={openMenuId === menu.id}
                       onClick={() =>setOpenMenuId(openMenuId === menu.id ? null : menu.id )}
                   >
                       {menu.title}
                   </MenuButton>
                   {openMenuId === menu.id && (
                       <Dropdown>
                           {menu.items.map((item) => (
                               <DropdownItem key={item.id}
                               onClick={
                                   () => {
                                       console.log('Нажато:', item.label)
                                       setOpenMenuId(null)
                               }}
                               >{item.label}
                               </DropdownItem>
                           ))}
                       </Dropdown>
                   )}
               </MenuWrapper>
            ))}
        </Bar>
    )
}