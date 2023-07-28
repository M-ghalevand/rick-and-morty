import type { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material/";

import style from "./accordion.module.scss";
import statusData from "../../data/status.json";
import speciesData from "../../data/species.json";
import gendersData from "../../data/genders.json";
import { useAppDispatch } from "../../store/ConfigureStore";
import {
  fetchCharacters,
  setCharactersStatus,
  setGender,
  setPagination,
  setSpecie,
} from "../../store/slice/AppSlice";
import useSelectors from "../../hooks/useSelectors";

const Accordion: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPage, selectStatus, selectGender, selectSpecie } =
    useSelectors();
  const handleStatus = (status: string): void => {
    dispatch(setCharactersStatus(selectStatus !== status ? status : ""));
    dispatch(setPagination(1));
    dispatch(
      fetchCharacters({
        page: selectedPage,
        status: selectStatus !== status ? status : "",
        species: selectSpecie,
        gender: selectGender,
      })
    );
  };
  const handleSpecie = (species: string): void => {
    dispatch(setSpecie(selectSpecie !== species ? species : ""));
    dispatch(setPagination(1));
    dispatch(
      fetchCharacters({
        page: selectedPage,
        status: selectStatus,
        species: selectSpecie !== species ? species : "",
        gender: selectGender,
      })
    );
  };
  const handleGender = (gender: string): void => {
    dispatch(setGender(selectGender !== gender ? gender : ""));
    dispatch(setPagination(1));
    dispatch(
      fetchCharacters({
        page: selectedPage,
        status: selectStatus,
        species: selectSpecie,
        gender: selectGender !== gender ? gender : "",
      })
    );
  };
  return (
    <div className={style.AccordionRoot}>
      <MUIAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Status</Typography>
          {selectStatus && (
            <span className={style.AccordionSelected}>{selectStatus}</span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {statusData.map((status) => (
            <Button
              key={status}
              variant={selectStatus === status ? "contained" : "outlined"}
              size="small"
              color={"success"}
              sx={{ margin: "10px" }}
              onClick={() => handleStatus(status)}
            >
              {status}
            </Button>
          ))}
        </AccordionDetails>
      </MUIAccordion>
      <MUIAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Species</Typography>
          {selectSpecie && (
            <span className={style.AccordionSelected}>{selectSpecie}</span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {speciesData.map((specie) => (
            <Button
              key={specie}
              variant={selectSpecie === specie ? "contained" : "outlined"}
              size="small"
              color={"success"}
              sx={{ margin: "10px" }}
              onClick={() => handleSpecie(specie)}
            >
              {specie}
            </Button>
          ))}
        </AccordionDetails>
      </MUIAccordion>
      <MUIAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Genders </Typography>
          {selectGender && (
            <span className={style.AccordionSelected}>{selectGender}</span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {gendersData.map((gender) => (
            <Button
              key={gender}
              variant={selectGender === gender ? "contained" : "outlined"}
              size="small"
              color={"success"}
              sx={{ margin: "10px" }}
              onClick={() => handleGender(gender)}
            >
              {gender}
            </Button>
          ))}
        </AccordionDetails>
      </MUIAccordion>
    </div>
  );
};
export default Accordion;
