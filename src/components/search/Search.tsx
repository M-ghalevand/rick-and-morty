import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

import useSelectors from "../../hooks/useSelectors";
import { useAppDispatch } from "../../store/ConfigureStore";
import { setSearchBox } from "../../store/slice/AppSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const { themeMode, selectSearchBox } = useSelectors();

  return (
    <Box
      sx={{
        width: 350,
        maxWidth: "100%",
        position: "absolute",
        top: "45%",
        left: "35%",
        backgroundColor: themeMode === "dark" ? "#0c0c0c" : "white",
      }}
    >
      <TextField
        value={selectSearchBox}
        // This is done by typing dispatch, which updates the searchBox box in state redux
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

export default Search;
