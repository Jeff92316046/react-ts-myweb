import { Box, Card, CardContent,  Typography, useTheme } from "@mui/material";
import useWindowDimensions from "../components/getwindowsdimensions";

const Contact = () => {
    const theme = useTheme();
    const a = "aaa"
    const { width } = useWindowDimensions();
    return (
        <Box >
            <Card sx={{m:4}}>
                <CardContent >
                    <Typography sx={{ m:{ xs:1,sm:3 },mx:{ xs:0,sm:2 } }} variant={width>600?"h5":"h6"}>
                        聯絡我
                    </Typography>
                    <Typography sx={{ m:{ xs:2,sm:3 },mx:{ xs:1,sm:4 } }} variant={width>600?"body1":"body2"} >
                        Name : 廖俊智
                    </Typography>
                    <Typography sx={{ m:{ xs:2,sm:3 },mx:{ xs:1,sm:4 } }} variant={width>600?"body1":"body2"}>
                        ID : jeffliao(ErEr)
                    </Typography>
                    <Typography sx={{ m:{ xs:2,sm:3 },mx:{ xs:1,sm:4 } }} variant={width>600?"body1":"body2"}>
                        E-mail :&nbsp;  
                        <Typography sx={{color:theme.palette.text.primary}} variant="inherit" component="a" href="mailto:jeffliao92316046@gmail.com">jeffliao92316046@gmail.com</Typography>
                    </Typography>
                    <Typography sx={{ m:{ xs:2,sm:3 },mx:{ xs:1,sm:4 } }} variant={width>600?"body1":"body2"}>
                        Github :&nbsp; 
                        <Typography sx={{color:theme.palette.text.primary}} variant="inherit"  component="a" href="https://github.com/Jeff92316046">Jeff92316046</Typography>
                    </Typography>
                    <Typography sx={{ m:{ xs:2,sm:3 },mx:{ xs:1,sm:4 }  }} variant={width>600?"body1":"body2"}  >
                        Facebook :&nbsp;     
                        <Typography sx={{color:theme.palette.text.primary}} variant="inherit"  component="a" href="https://www.facebook.com/profile.php?id=100006762961441">廖俊智(Er Er)</Typography>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
export default Contact;