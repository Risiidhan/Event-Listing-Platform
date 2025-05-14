import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEventContext } from '@/context/EventContext';
import { FaChevronCircleDown } from 'react-icons/fa';

const CategoryMobileComponent = ({ list }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { formData, setFormData } = useEventContext();

    const orderedCategories = [
        formData?.category,
        ...list.filter((cat: string) => cat !== formData?.category),
    ];

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="!font-bold !text-black !text-xl !hover:underline"
            >
                <div className='flex gap-2 items-center'>
                    {formData?.category} <FaChevronCircleDown />
                </div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {orderedCategories.map((menu: string) => (
                    <MenuItem onClick={() => { setFormData({ ...formData, category: menu || '' }), handleClose() }}>{menu}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default CategoryMobileComponent