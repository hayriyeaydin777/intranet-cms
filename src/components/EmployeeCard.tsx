import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Female from "@mui/icons-material/Female";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Employee = {
  id: number;
  userAvatar: string;
  firstName: string;
  lastName: string;
};

export default function EmployeeCard({
  userAvatar,
  firstName,
  lastName,
  gender,
  address,
  phoneNumber,
  email,
  timeZone,
  ...props
}: any) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Hayriye Aydin"
            sx={{ bgcolor: red[500] }}
            aria-label="Hayriye Aydin"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={firstName + lastName}
        subheader={phoneNumber}
      />
      <CardMedia
        component="img"
        height="194"
        // image="https://randomuser.me/api/portraits/women/14.jpg"
        image={userAvatar}
        alt="female"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <IconButton aria-label="share">
            {gender}
            {gender === "female" ? <FemaleIcon /> : <MaleIcon />}
          </IconButton>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Details:</Typography>
          <Typography paragraph>Address: {address}</Typography>
          <Typography paragraph>E-mail: {email}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
