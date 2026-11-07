import {useState} from 'react';
import {menus} from './data/menuData.ts';
import {StyledBar, StyledMenuWrapper, StyledMenuButton, StyledDropdown, StyledDropdownItem} from "./StyledMenuBar.ts";

export function MenuBar() {

    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    return (
        <StyledBar>
            {menus.map((menu)=>(
               <StyledMenuWrapper key={menu.id}>
                   <StyledMenuButton
                       $active={openMenuId === menu.id}
                       onClick={() =>setOpenMenuId(openMenuId === menu.id ? null : menu.id )}
                   >
                       {menu.title}
                   </StyledMenuButton>
                   {openMenuId === menu.id && (
                       <StyledDropdown>
                           {menu.items.map((item) => (
                               <StyledDropdownItem key={item.id}
                               onClick={
                                   () => {
                                       console.log('Нажато:', item.label)
                                       setOpenMenuId(null)
                               }}
                               >{item.label}
                               </StyledDropdownItem>
                           ))}
                       </StyledDropdown>
                   )}
               </StyledMenuWrapper>
            ))}
        </StyledBar>
    )
}