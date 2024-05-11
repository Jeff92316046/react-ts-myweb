import { Box, Grid } from "@mui/material";
import cat from "../assets/fullcat.png";
import useWindowDimensions from "../components/getwindowsdimensions";
import { useState } from "react";



const Home = () => {
    const { height } = useWindowDimensions();
    const [count, setCount] = useState(4    );
    const plus = () => () => {
        if(count > 1)setCount(count-1);
        else setCount(7)
      };
    return (
        <Box height={height*0.8}>
            <Grid container height="100%">
                <Grid xs={count} item>
                </Grid>
                <Grid xs={4} item alignContent={"center"}>
                    <Box component="img"  src={cat}
                        sx={{
                            width: "100%",
                            mx:2,
                            my:2,
                        }}
                        onClick={plus()}
                    >
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Home;