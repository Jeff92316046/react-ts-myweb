import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './colormodecontext'



const ThemeButton = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow:0
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1  }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
}

export default ThemeButton