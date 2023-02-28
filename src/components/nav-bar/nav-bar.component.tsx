import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { LogoIcon } from "../logo";
import { NavLink } from "../core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { authActions } from "@/store/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SelectComponent } from "../core/select";
import { RouteKey } from "@/types/enum";
import { Storages } from "@/types/enum/storage.enum";

export const NavBar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { t } = useTranslation();

  const auth = useSelector((state: RootState) => state.auth.login);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    dispatch(
      authActions.login({ username: "", password: "", isLoggedIn: false })
    );
    localStorage.setItem(
      Storages.AUTH,
      JSON.stringify({
        username: auth?.username,
        password: auth?.password,
        isLoggedIn: false,
      })
    );
    handleCloseNavMenu();
    nav(RouteKey.HOME);
  };

  const pages = React.useMemo(() => {
    return [
      { title: t("home"), url: RouteKey.HOME },
      { title: t("news"), url: RouteKey.NEWS },
    ];
  }, [t]);

  return (
    <AppBar style={{ background: "#1976d2" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoIcon />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <NavLink url={page.url} title={page.title} />
                </MenuItem>
              ))}
              {auth?.isLoggedIn ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink url={RouteKey.PROFILE} title={t("profile")} />
                </MenuItem>
              ) : null}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink url={page.url} title={page.title} />
              </Button>
            ))}
            {auth?.isLoggedIn ? (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={handleCloseNavMenu}
              >
                <NavLink url={RouteKey.PROFILE} title={t("profile")} />
              </Button>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <SelectComponent />
            <Tooltip style={{ marginLeft: 30 }} title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {auth?.isLoggedIn ? null : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <NavLink url={RouteKey.LOGIN} title={t("login")} />
                </MenuItem>
              )}
              {auth?.isLoggedIn ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <NavLink url={RouteKey.PROFILE} title={t("profile")} />
                </MenuItem>
              ) : null}
              {auth?.isLoggedIn ? (
                <MenuItem onClick={onLogout}>{t("logout")}</MenuItem>
              ) : null}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
