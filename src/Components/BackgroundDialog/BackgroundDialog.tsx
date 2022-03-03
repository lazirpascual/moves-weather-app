import { useState, Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./BackgroundDialog.css";

const backgroundList = [
  {
    description: "Standard",
    image: "https://i.imgur.com/hj2L1tO.jpg",
  },
  {
    description: "Night",
    image: "https://i.imgur.com/Iwcvizh.jpg",
  },
  {
    description: "Mountain Top",
    image: "https://i.imgur.com/DeP2Jmd.jpg",
  },
  {
    description: "Snow",
    image: "https://i.imgur.com/XkqBWj8.jpg",
  },
  {
    description: "Grass",
    image: "https://i.imgur.com/9ZBogM3.jpg",
  },
  {
    description: "Orange Clouds",
    image: "https://i.imgur.com/RTwOGna.jpg",
  },
  {
    description: "Blue Sky",
    image: "https://i.imgur.com/tj73svH.jpg",
  },
];

interface Props {
  setBackground: Dispatch<SetStateAction<string>>;
}

const BackgroundDialog: React.FC<Props> = ({ setBackground }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (image: string) => {
    handleClose();
    setBackground(image);
    localStorage.setItem("background", image);
  };

  return (
    <div className="BackgroundButton">
      <br />
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Background
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set Background Image</DialogTitle>
        <List sx={{ pt: 0 }}>
          {backgroundList.map(({ description, image }) => (
            <ListItem
              button
              onClick={() => handleListItemClick(image)}
              key={description}
            >
              <ListItemAvatar>
                <Avatar src={image} />
              </ListItemAvatar>
              <ListItemText primary={description} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default BackgroundDialog;
