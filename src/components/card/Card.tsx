import { FC, useState, lazy, Suspense } from "react";
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import type ICharacterResult from "../../types/ICharacterResult";

const Modal = lazy(() => import("../modal/Modal"));

const Card: FC<ICharacterResult & { color: string }> = ({
  id,
  episode,
  image,
  location,
  name,
  status,
  color,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MuiCard>
      {open && (
        <Suspense>
          <Modal open={open} setOpen={setOpen} id={id} />
        </Suspense>
      )}
      <CardActionArea
        sx={{ position: "relative", width: 256, height: 380 }}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          loading={"lazy"}
          component="img"
          height="176"
          image={image}
          alt={name}
          sx={{
            width: "228px",
            borderRadius: "5px",
            margin: "12px auto 0 auto",
          }}
        />
        <Typography
          component="div"
          sx={{
            position: "absolute",
            top: "20px",
            right: "18px",
            backgroundColor: color,
            borderRadius: "7px",
            padding: "2px",
            minWidth: "60px",
            textAlign: "center",
            color: "white",
          }}
        >
          {status}
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ margin: "7px 0 0 0", display: "block" }}
          >
            Last known location:
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {location.name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ margin: "7px 0 0 0", display: "block" }}
          >
            First seen in:
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {episode[0].name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
