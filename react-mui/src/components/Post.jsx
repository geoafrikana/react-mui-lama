import { 
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
  } from '@mui/material';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import ShareIcon from '@mui/icons-material/Share';
  import { Favorite, FavoriteBorder } from '@mui/icons-material';

import React from 'react'

const Post = () => {
  return (
    <div>
             <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nasiru Olagunju"
        subheader="November 27, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://picsum.photos/300"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
      </CardActions>
    </Card>
    </div>
  )
}

export default Post