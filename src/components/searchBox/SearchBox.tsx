import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TextField } from "@mui/material";

import useSelectors from "../../hooks/useSelectors";
import { useAppDispatch } from "../../store/ConfigureStore";
import { setSearchBox } from "../../store/slice/AppSlice";

const SearchBox = () => {
  const matches = useMediaQuery("(max-width:716px)");
  const dispatch = useAppDispatch();
  const { themeMode, selectSearchBox } = useSelectors();
  return (
    <Box
      sx={{
        width: matches ? 270 : 350,
        maxWidth: "100%",
        position: "absolute",
        top: "45%",
        left: matches ? "13%" : "35%",
        backgroundColor: themeMode === "dark" ? "#0c0c0c" : "white",
      }}
    >
      <TextField
        value={selectSearchBox}
        // When user types in the search box, a dispatch occurs to update the search box state.
        onChange={(e) => dispatch(setSearchBox(e.target.value))}
        color={"success"}
        fullWidth
        label="search character"
        id="fullWidth"
        size={"small"}
      />
    </Box>
  );
};

export default SearchBox;
