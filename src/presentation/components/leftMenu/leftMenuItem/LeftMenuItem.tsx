import { useState } from 'react';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Driver, LocationMarker } from '../../../../domain';

interface Props {
    title: string;
    items: Array<LocationMarker | Driver>;
    setActive: (id: number) => void;
}

export const LeftMenuItem = ({ title, items, setActive }: Props) => {
    const [open, setOpen] = useState(false);

    const selectItem = (itemId: number) => {
        setActive(itemId);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick} key={title}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {items.map((item) => (
                    <ListItemButton
                        sx={{ pl: 3 }}
                        key={item.id}
                        onClick={() => selectItem(item.id)}
                    >
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                ))}
            </Collapse>
        </>
    );
};
