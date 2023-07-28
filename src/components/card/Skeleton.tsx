import type { FC } from "react";
import {
  Card as MuiCard,
  CardActionArea,
  Skeleton as MuiSkeleton,
  CardContent,
} from "@mui/material";
const Skeleton: FC = () => {
  return (
    <MuiCard>
      <CardActionArea sx={{ position: "relative", width: 256, height: 380 }}>
        <MuiSkeleton
          animation="wave"
          variant="rounded"
          sx={{
            height: "176px",
            width: "228px",
            margin: "12px auto 0 auto",
          }}
        />
        <MuiSkeleton
          animation="wave"
          variant="rounded"
          sx={{
            position: "absolute",
            top: "18px",
            right: "18px",
            minWidth: "60px",
            height: "35px",
            margin: "12px auto 0 auto",
          }}
        />
        <CardContent>
          <MuiSkeleton
            animation="wave"
            variant="rounded"
            sx={{
              width: "200px",
              margin: "7px 0 20px 0",
            }}
          />
          <MuiSkeleton
            animation="wave"
            variant="rounded"
            sx={{
              width: "150px",
              margin: "7px 0 0 0",
            }}
          />
          <MuiSkeleton
            animation="wave"
            variant="rounded"
            sx={{
              width: "100px",
              margin: "7px 0 13px 0",
            }}
          />
          <MuiSkeleton
            animation="wave"
            variant="rounded"
            sx={{
              width: "185px",
              margin: "7px 0 0 0",
            }}
          />
          <MuiSkeleton
            animation="wave"
            variant="rounded"
            sx={{
              width: "130px",
              margin: "7px 0 0 0",
            }}
          />
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
export default Skeleton;
