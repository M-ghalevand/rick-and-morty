import type { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material/";

import styles from "./accordion.module.scss";
import statusData from "../../data/status.json";
import speciesData from "../../data/species.json";
import gendersData from "../../data/genders.json";
import { useAppDispatch } from "../../store/ConfigureStore";
import useSelectors from "../../hooks/useSelectors";
import {
  setCharactersStatus,
  setGender,
  setSpecie,
} from "../../store/slice/AppSlice";
import { useCallback } from "react";

const Accordion: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedStatus, selectedGender, selectedSpecies } = useSelectors();

  //to set status of character if not selected to filter characters.
  const handleStatus = useCallback(
    (status: string): void => {
      dispatch(setCharactersStatus(selectedStatus !== status ? status : ""));
    },
    [dispatch, selectedStatus]
  );

  //to set species of character if not selected to filter characters.
  const handleSpecies = useCallback(
    (species: string): void => {
      dispatch(setSpecie(selectedSpecies !== species ? species : ""));
    },
    [dispatch, selectedSpecies]
  );

  //to set gender of character if not selected to filter characters.
  const handleGender = useCallback(
    (gender: string): void => {
      dispatch(setGender(selectedGender !== gender ? gender : ""));
    },
    [dispatch, selectedGender]
  );

  return (
    <div className={styles.AccordionRoot}>
      <MUIAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Status</Typography>
          {selectedStatus && (
            <span className={styles.AccordionSelected}>{selectedStatus}</span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {statusData.map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "contained" : "outlined"}
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
          {selectedSpecies && (
            <span className={styles.AccordionSelected}>{selectedSpecies}</span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {speciesData.map((species) => (
            <Button
              key={species}
              variant={selectedSpecies === species ? "contained" : "outlined"}
              size="small"
              color={"success"}
              sx={{ margin: "10px" }}
              onClick={() => handleSpecies(species)}
            >
              {species}
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
          {selectedGender && (
            <span className={styles.AccordionSelected}>{selectedGender}</span>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {gendersData.map((gender) => (
            <Button
              key={gender}
              variant={selectedGender === gender ? "contained" : "outlined"}
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
