import React from 'react'

const ListItem = (props) => {
  return (
    <ListItem disablePadding>
    <ListItemButton component="a" href={`#${props.itemURL}`}>
      <ListItemIcon>
    <Home />
      </ListItemIcon>
      <ListItemText primary={props.itemText} />
    </ListItemButton>
  </ListItem>
  )
}

export default ListItem