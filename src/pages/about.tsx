import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const About = () => {
    return (
        <Box >
            <Card sx={{m:4}}>
                <CardContent >
                    <Typography sx={{m:2}} variant="h5">
                        關於我
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
                        對資訊有興趣的人
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
						北市大資科系
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
						北市大學生會資訊部部員
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
						北市大資科系系學會技術部部員
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{m:4}}>
                <CardContent >
                    <Typography sx={{m:1}} variant="h5">
                        技能樹
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ m:1,mx:3 }} variant="h6">
                                程式語言
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                C/C++
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                python
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                java
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                javascript(Vue.js,React.js)
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                typescript
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ m:1,mx:3 }} variant="h6">
                                工具
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                Window/linux
                            </Typography>
                            <Typography sx={{ m:2,mx:4 }} variant="body1">
                                Git
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{m:4}}>
                <CardContent >
                    <Typography sx={{m:1}} variant="h5">
                        參與活動
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
                        2023臺北程式設計節-臺北城市儀表板黑客松(11/18~11/19)
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
                        臺北市立大學112學年度第1學期「動態網頁設計」課程競賽(2/20):特優
                    </Typography>
                    <Typography sx={{ m:2,mx:3 }} variant="body1">
                        日本語能力試驗JLPT2022年第二回:N2通過
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
export default About ;