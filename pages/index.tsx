import * as React from "react";
import type { GetServerSideProps, GetServerSidePropsContext, NextApiHandler, NextPage, NextPageContext } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, Stack } from "@mui/material";
import { getSession, useSession } from "next-auth/react";
import prisma  from "./api/db";

const Home: NextPage = ({questTracking}: any ) => {
  console.log(questTracking)
  const {data: session, status} = useSession();
  return (
    <React.Fragment>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Stack direction={"column"}>
          <Typography variant="h2" component="h1" gutterBottom>
            EFT Tools | Welcome {`${session?.user?.name === null ?  "" : session?.user?.name || ''}`.toUpperCase()}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction={"row"}
          spacing={20}
          display={"flex"}
          justifyContent={"center"}
          mb={5}
        >
          <Card
            sx={{
              minWidth: 500,
              borderColor: "white",
              borderRadius: 1,
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h5" component={"h5"}>
                  WIPE STATS
                </Typography>
              </Box>
              <Typography>Last Wipe Date: 29 Jun 2022</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 500,
              borderColor: "white",
              borderRadius: 1,
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            <CardContent>
              <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h5" component={"h5"}>
                  Latest Changes
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Home;
