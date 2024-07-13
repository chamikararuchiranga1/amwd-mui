import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

export default function CardCom({id, title, body}) {
    return (
        <Box>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#f89c9c' }} aria-label="recipe">
                            {id}
                        </Avatar>
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}