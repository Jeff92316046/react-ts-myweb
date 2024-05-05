import {Fragment,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AboutIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactPage';
import BlogIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";
import { SxProps, Theme ,TypographyVariant } from '@mui/material/styles';

const pages = ['Home','About', 'Contact', 'Blog'];
const pagesIcon = [HomeIcon ,ContactIcon ,AboutIcon ,BlogIcon ]
interface buttonLinkProps {
    to: string;
    text:string;
    tsx?: SxProps<Theme>;
    bsx?:SxProps<Theme>;
    size?:TypographyVariant
}
function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const ButtonLinker =   (props:buttonLinkProps) =>{
    return (
      <Button component={Link} to={props.to} 
        sx={props.bsx}>
        <Typography variant={props.size} sx={props.tsx}>{props.text}</Typography>
      </Button>
    );
  }

  const DrawerList = () => {
    return(
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {pages.map((text, index) => (
            <ListItem key={text} disablePadding>
              {index == 0 ? 
              <ListItemButton component={Link} to='/' >
                <ListItemIcon >
                  <SvgIcon component={pagesIcon[index]}></SvgIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              :
              <ListItemButton component={Link} to={text} >
                <ListItemIcon >
                  <SvgIcon component={pagesIcon[index]}></SvgIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              }
            </ListItem>
          ))}
        </List>
      </Box>);
    };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <ButtonLinker to='/' text='ErEr' size="h5"
              bsx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
              }}
              tsx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform:'none'
              }}
            >
            </ButtonLinker>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Typography
                  variant="h6"
                  sx={{
                    my:2,
                    display: { xs: 'flex' },
                    justifyContent: 'center',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  ErEr
                </Typography>
                <DrawerList></DrawerList>
              </Drawer>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ErEr
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page,index) => (
                index == 0 ? <Fragment key={index}></Fragment> :
                <ButtonLinker
                  key={index}
                  to={page}
                  text={page}
                  bsx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    color: 'inherit',
                  }}
                  tsx={{
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    letterSpacing: '.15rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textTransform:'none'
                  }}
                >
                </ButtonLinker>
              ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
