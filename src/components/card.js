import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AiFillDelete } from "react-icons/ai";
import ModalBorrar from "./modalBorrar";



export default function RecipeReviewCard(props) {

    return (
        <Card sx={{ width: 345, height:500,margin:1}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.nombre}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="320"
                image={`${props.url}`}
                alt="foto"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.descripcion}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="share" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 <AiFillDelete className='text-danger'/>
                </IconButton>

            </CardActions>
     <ModalBorrar/>
        </Card>
    );
}
