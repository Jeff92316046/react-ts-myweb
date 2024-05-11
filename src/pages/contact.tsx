import { Box, Card, CardContent, Grid, Typography, colors } from "@mui/material";

const Contact = () => {
    return (
        <Box >
            <Card sx={{m:4}}>
                <CardContent >
                    <Typography sx={{m:3}} variant="h5">
                        聯絡我
                    </Typography>
                    <Typography sx={{ m:3,mx:4 }} variant="body1">
                        Name : 廖俊智
                    </Typography>
                    <Typography sx={{ m:3,mx:4 }} variant="body1">
                        ID : jeffliao(ErEr)
                    </Typography>
                    <Typography sx={{ m:3,mx:4 }} variant="body1">
                        E-mail :&nbsp;  
                        <Typography sx={{color:"white"}} component="a" href="mailto:jeffliao92316046@gmail.com">jeffliao92316046@gmail.com</Typography>
                    </Typography>
                    <Typography sx={{ m:3,mx:4 }} variant="body1">
                        Github :&nbsp; 
                        <Typography sx={{color:"white"}} component="a" href="https://github.com/Jeff92316046">Jeff92316046</Typography>
                    </Typography>
                    <Typography sx={{ m:3,mx:4 }} variant="body1">
                        Facebook :&nbsp;     
                        <Typography sx={{color:"white"}} component="a" href="https://www.facebook.com/profile.php?id=100006762961441">廖俊智(Er Er)</Typography>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
export default Contact;