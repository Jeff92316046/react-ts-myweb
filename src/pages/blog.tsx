import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
    const theme = useTheme();
    const [list , setlist] = useState([]);
    useEffect(()=>{
        axios.get("https://api.github.com/repos/Jeff92316046/react-ts-myweb/issues")
        .then((response)=>{
            setlist(response.data)
        }).catch((error)=>{
            setlist(error)
        })
    },[])
    console.log(list)
    return (
        <Box >
            {list.map((i,index)=>{
                return(
                    <Card sx={{m:4}} key={index}>
                        <CardContent >
                            <Typography sx={{ m:{ xs:1,sm:2 },mx:{ xs:1,sm:1 } }} variant={"h6"} >
                                {i['title']}
                            </Typography>
                            <Typography sx={{ m:{ xs:1,sm:2 },mx:{ xs:2,sm:3 } }} variant={"body1"} >
                                content: {i['body']}
                            </Typography>
                            <Typography sx={{ m:{ xs:1,sm:2 },mx:{ xs:2,sm:3 } }} variant={"body1"} >
                                Assignees:&nbsp;
                                <Typography sx={{wordBreak:"break-word" ,color:theme.palette.text.primary}} component="a" href={i['assignee']['html_url']} variant={"body1"} >
                                    {i['assignee']['login']}
                                </Typography>
                            </Typography>
                            <Typography sx={{ m:{ xs:1,sm:2 },mx:{ xs:2,sm:3 } }} variant={"body1"} >
                                label:&nbsp;
                                <Typography sx={{wordBreak:"break-word" ,color:i['labels'][0]['colors']}} component="span" variant={"body1"} >
                                    {i['labels'][0]['name']}
                                </Typography>
                            </Typography>
                            <Typography sx={{ m:{ xs:1,sm:2 },mx:{ xs:2,sm:3 } }} variant={"body1"} >
                                issue_url:&nbsp;
                                <Typography  sx={{wordBreak:"break-word" ,color:theme.palette.text.primary}} component="a" href={i['assignee']['html_url']} variant={"body1"} >
                                    {i['html_url']}
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    );
}
export default Blog;