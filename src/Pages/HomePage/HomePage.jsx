import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: { xs: 1, sm: 2 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <FontAwesomeIcon icon={faCode} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                fontWeight: "bold",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <h2>Developer Hub</h2>
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, marginTop: { xs: 1, sm: 0 } }}>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" } }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/register"
              sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" } }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
