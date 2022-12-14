import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography 
} from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  
    flex={2} p={2}
    sx={{display: { xs:"none", sm: "block" }}}>
      <Box>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
  <Avatar alt="Travis Howard" src="https://picsum.photos/200" />
  <Avatar alt="Cindy Baker" src="https://picsum.photos/200" />
  <Avatar alt="Agnes Walker" src="https://picsum.photos/200" />
  <Avatar alt="Trevor Henderson" src="https://picsum.photos/200" />
</AvatarGroup>
<Typography>
  Latest Photos
</Typography>
<ImageList cols={3} rowHeight={100}>
  
    <ImageListItem key={'1'}>
      <img
        src={'https://picsum.photos/200'}
        srcSet={'https://picsum.photos/200'}
        alt={'image-alt'}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem key={'2'}>
      <img
        src={'https://picsum.photos/200'}
        srcSet={'https://picsum.photos/200'}
        alt={'image-alt'}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem key={'3'}>
      <img
        src={'https://picsum.photos/200'}
        srcSet={'https://picsum.photos/200'}
        alt={'image-alt'}
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem key={'4'}>
      <img
        src={'https://picsum.photos/200'}
        srcSet={'https://picsum.photos/200'}
        alt={'image-alt'}
        loading="lazy"
      />
    </ImageListItem>
</ImageList>
<Typography variant="h6" fontWeight={100} mt={2} >
  Latest Conversations
</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.picsum.photos/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" ??? I'll be in your neighborhood doing errands this???"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://www.picsum.photos/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" ??? Wish I could come, but I'm out of town this???"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://www.picsum.photos/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' ??? Do you have Paris recommendations? Have you ever???'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
      </Box>
  )
}

export default Rightbar