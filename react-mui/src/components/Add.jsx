import { Box,
  Fab, 
  Modal,
  Tooltip,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button
} from '@mui/material';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material';
import React, { useState } from 'react';


const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"

})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"10px",
  marginBottom:"20px"

})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip 
    onClick = {e=>setOpen(true)}
    title="Delete"
     sx={{
      position:"fixed",
      bottom:20,
      left:{xs:"calc(50% -25)", sm:30}
      }}
      >
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>

<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
 <Typography 
 variant="h6"
 color="gray"
 textAlign="center" 
 >Create Post
 </Typography>
 <UserBox>
<Avatar 
src="https://picsum.photos/200"
sx={{width: 30, height: 30}}
/>
<Typography fontweight={500} variant="span">
  Nasiru Olagunju
</Typography>
 </UserBox>
 <TextField
 sx={{width:"100%"}}
 id="standard-multiline-static"
 multiline
 rows={3}
 placeholder="What's on your mind"
 variant="standard"
 />
 <Stack direction="row" gap={1} mt={2} mb={3}>
  <EmojiEmotions color="primary"/>
 <Image color="secondary" />
<VideoCameraBack color="success" />
<PersonAdd color="error" />
 </Stack>
 <ButtonGroup 
 fullWidth
 variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}} color="secondary"><DateRange /></Button>
 </ButtonGroup>
  </Box>
</StyledModal>
</>
  )
}

export default Add