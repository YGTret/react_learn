import styled from 'styled-components';

export const Bar = styled.div`
  
    display: flex;
    gap: 4px;
    padding: 4px 8px;
    background: #343e40;
`;

export const MenuButton = styled.button<{ $active: boolean}>`

    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    background: ${(props)=> (props.$active ? '#343e40 ' : '#434b4d ')};
    color: #dfe1e5;
    font-size: 14px;
    cursor: pointer;
    
    &:hover {
        background: #3c3f41;
    }
`;
export const MenuWrapper = styled.div`

    position: relative;
`;

export const Dropdown = styled.ul`
    
    position: absolute;
    top: 100%;
    left: 0;
    background: #464544;
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 100%;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const DropdownItem = styled.li`
    
    padding: 8px 16px;
    cursor: pointer;
    
    &:hover {
        background: #3c3f41;
    }
`;
