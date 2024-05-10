import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";

interface drawerListProps {
    pages:string[],
    pagesIcon:(OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    })[],
    toggleDrawer: (newOpen: boolean) => () => void
}

const DrawerList = (props:drawerListProps) => {
    return(
      <Box sx={{ width: 250 }} role="presentation" onClick={props.toggleDrawer(false)}>
        <List>
          {props.pages.map((text, index) => (
            <ListItem key={text} disablePadding>
              {index == 0 ? 
              <ListItemButton component={Link} to='/' >
                <ListItemIcon >
                  <SvgIcon component={props.pagesIcon[index]}></SvgIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              :
              <ListItemButton component={Link} to={text} >
                <ListItemIcon >
                  <SvgIcon component={props.pagesIcon[index]}></SvgIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              }
            </ListItem>
          ))}
        </List>
      </Box>);
    };
export default DrawerList