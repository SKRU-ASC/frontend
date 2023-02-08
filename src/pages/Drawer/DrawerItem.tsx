
// import HomeIcon from '@mui/icons-material/Home';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DrawerItem(props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: any | JSX.Element; open: boolean; title: string; to: string;
}) {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(theme);

    // console.log(location.pathname);

    const select = location.pathname == props.to;
    return (
        <ListItem onClick={() => navigate(props.to)} key={props.title} disablePadding sx={{ display: 'block' }} >
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: props.open ? 'initial' : 'center',
                    px: 2.5,
                }}
                selected={select}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {/* <HomeIcon /> */}
                    <props.Icon />
                </ListItemIcon>
                <ListItemText primary={props.title} sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    )
}
