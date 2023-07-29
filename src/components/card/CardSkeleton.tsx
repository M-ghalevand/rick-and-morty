import type { FC } from "react";
import { Card, Skeleton, CardContent } from "@mui/material";
const CardSkeleton: FC = () => {
  return (
    <Card sx={{ position: "relative", width: 256, height: 380 }}>
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{
          height: "180px",
          width: "228px",
          margin: "20px auto 0 auto",
        }}
      />
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{
          position: "absolute",
          top: "8px",
          right: "18px",
          minWidth: "60px",
          height: "28px",
          margin: "12px auto 0 auto",
        }}
      />
      <CardContent>
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: "200px",
            margin: "7px 0 20px 0",
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: "150px",
            margin: "7px 0 0 0",
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: "100px",
            margin: "7px 0 13px 0",
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: "185px",
            margin: "7px 0 0 0",
          }}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{
            width: "130px",
            margin: "7px 0 0 0",
          }}
        />
      </CardContent>
    </Card>
  );
};
export default CardSkeleton;
