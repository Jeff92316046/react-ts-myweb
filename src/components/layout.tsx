import { Fragment , useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ButtonLinker from './buttonlinker';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import DrawerList from './drawerlist';
import AboutIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactPage';
import BlogIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ToggleColorMode from './thememode';

const pages = ['Home','About', 'Contact', 'Blog'];

const pagesIcon = [HomeIcon ,ContactIcon ,AboutIcon ,BlogIcon ]

const Layout = () =>{
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
                aria-label="menu_button"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)} sx={{flexDirection: 'column',display:"flex"}}>
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
                <DrawerList toggleDrawer={toggleDrawer} pagesIcon={pagesIcon} pages={pages}></DrawerList>
                <Box sx={{ display: { xs: 'flex' }, justifyContent: 'center',m:3}}>
                  <ToggleColorMode></ToggleColorMode>
                </Box>
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
            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
              <ToggleColorMode></ToggleColorMode>
            </Box>
            

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Layout;
