import { Stars, AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../assets/logo.svg?react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../redux/slices/authSlice";
import { useState } from "react";

function NavBar() {
  const user = useSelector((state) => state.auth.value);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(saveUser(undefined));
  };
  const loginPage = () => {
    navigate("/login");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            href={"/"}
          >
            <SvgIcon component={Logo} inheritViewBox />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ p: 1, flexGrow: 1 }}>
            Potter
          </Typography>
          <Grid component="div" display="flex" alignItems="center">
            {user ? (
              <Typography
                variant="h8"
                component="p"
                sx={{ p: 1, flexGrow: 1 }}
              >
                ¡Hola {user.email}!
              </Typography>
            ) : null}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {user ? <Stars /> : <AccountCircle />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {user ? (
                <MenuItem onClick={logout}>Logout</MenuItem>
              ) : (
                <MenuItem onClick={loginPage}>Login</MenuItem>
              )}
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
