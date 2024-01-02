import React, { useState } from "react";
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { menuItems } from "../../utils/helper";
import { SidebarMenu } from "../SidebarMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { Text } from "../base";
import { Images } from "../../utils/assets/images";
import { useHeaderStyle } from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const styles = useHeaderStyle({ theme });

  // console.log("========open======", open);
  // console.log("images object =========", Images);
  return (
    <div>
      <AppBar position="fixed" sx={styles.appBar}>
        {/* Toolbar  */}
        <Toolbar sx={styles.toolbar}>
          <div
            sx={{
              marginRight: (theme) => theme.spacing(2),
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                width={25}
                height={25}
                src={Images.churchLogo}
                style={{
                  objectFit: "cover",
                }}
                alt="Logo"
              />
            </Box>

            <SidebarMenu open={open} setOpen={setOpen} />
          </div>

          <Box sx={styles.menuBox}>
            {menuItems.map((menu, index) => (
              <Text sx={styles.menuItem} key={index}>
                {menu.name}
              </Text>
            ))}
          </Box>
          <MenuIcon
            size={22}
            sx={styles.menuIcon}
            onClick={() => setOpen(true)}
          />
        </Toolbar>
      </AppBar>

      <Toolbar />
    </div>
  );
};

export default Header;
