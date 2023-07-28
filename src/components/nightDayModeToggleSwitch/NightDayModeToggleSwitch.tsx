import Box from "@mui/material/Box";
import { Switch } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import useSelectors from "../../hooks/useSelectors";
import { useAppDispatch } from "../../store/ConfigureStore";
import { changeModeTheme } from "../../store/slice/AppSlice";

const NightDayModeToggleSwitch = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useSelectors();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "23px",
        right: "10px",
        display: "flex",
        gap: "2px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Switch
        checked={themeMode === "dark" ? true : false}
        onChange={() =>
          // When it is clicked, it changes the themeMode in redux
          dispatch(changeModeTheme(themeMode === "light" ? "dark" : "light"))
        }
        name="loading"
        color="success"
        icon={
          <DarkMode
            sx={{
              color: "#595959",
              margin: "-3px -6px",
            }}
          />
        }
        checkedIcon={<LightMode sx={{ margin: "-3px 3px" }} />}
      />
    </Box>
  );
};

export default NightDayModeToggleSwitch;
