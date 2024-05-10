import { SxProps, Theme ,TypographyVariant } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

interface buttonLinkProps {
    to: string;
    text:string;
    tsx?: SxProps<Theme>;
    bsx?:SxProps<Theme>;
    size?:TypographyVariant
}

const ButtonLinker = (props:buttonLinkProps) =>{
    return (
        <Button component={Link} to={props.to} sx={props.bsx}>
            <Typography variant={props.size} sx={props.tsx}>{props.text}</Typography>
        </Button>
    );
}
export default ButtonLinker