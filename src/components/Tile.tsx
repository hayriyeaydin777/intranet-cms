import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Tile = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setData(result.results);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return <div>There is an error fetching data.</div>;
  } else {
    return (
      <div className="App">
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((item: any) => (
              <Grid key={item.id.value} item xs={2} sm={2} md={2}>
                <Item sx={{ textAlign: "left" }}>
                  <EmployeeCard
                    userAvatar={item.picture.large}
                    firstName={item.name.first}
                    lastName={item.name.last}
                    gender={item.gender}
                    address={item.location.city}
                    phoneNumber={item.phone}
                    email={item.email}
                    timeZone={item.location.timezone}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
};

export default Tile;
