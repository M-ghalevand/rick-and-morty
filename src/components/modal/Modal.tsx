import type { Dispatch, FC, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MUIModal from "@mui/material/Modal";
import ICharacterResult from "../../types/ICharacterResult";
import { RootState, useAppSelector } from "../../store/ConfigureStore";
import { selectById } from "../../store/slice/AppSlice";
import { CardContent, CardMedia } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modal: FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
}> = ({ open, setOpen, id }) => {
  const selectCharacter = useAppSelector((state: RootState) =>
    selectById(state, id)
  ) as ICharacterResult;
  return (
    <>
      <MUIModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            loading={"lazy"}
            component="img"
            height="200"
            image={selectCharacter.image}
            alt={selectCharacter.name}
            sx={{
              width: "300px",
              borderRadius: "5px",
              margin: "12px auto 0 auto",
            }}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectCharacter.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ margin: "7px 0 0 0", display: "block" }}
            >
              Last known location:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {selectCharacter.location.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ margin: "7px 0 0 0", display: "block" }}
            >
              First seen in:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {selectCharacter.episode[0].name}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ margin: "7px 0 0 0", display: "block" }}
            >
              Gender:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {selectCharacter.gender}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ margin: "7px 0 0 0", display: "block" }}
            >
              Created:
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {selectCharacter.created}
            </Typography>
          </CardContent>
        </Box>
      </MUIModal>
    </>
  );
};
export default Modal;
