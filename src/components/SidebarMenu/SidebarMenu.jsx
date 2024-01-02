import React from "react";

import {
  Drawer,
  Stack,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { menuItems } from "../../utils/helper";
import { Text } from "../base";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { userSideBarMenuStyle } from "./styles";

const SidebarMenu = ({ open, setOpen }) => {
  const { palette } = useTheme();
  const theme = useTheme();

  const styles = userSideBarMenuStyle({ theme });
  return (
    <Drawer sx={styles.drawer} variant="persistent" anchor="left" open={open}>
      <Stack
        alignItems={"center"}
        justifyContent={"flex-start"}
        sx={{ padding: 2 }}
      >
        <Stack
          direction={"row"}
          alignContent={"center"}
          justifyContent={"space-between"}
          width="100%"
          height={"100%"}
          pl={1}
        >
          <Stack flexDirection={"row"} alignItems={"center"}>
            {/* <MuiImage src={Svgs.Menui} width={"24px"} height={"24px"} /> */}
            <MenuIcon size={22} sx={{ color: "#fff" }} />

            <Text sx={styles.menuText}>Menu</Text>
          </Stack>

          <IconButton onClick={() => setOpen(false)}>
            {/* <MuiImage src={Svgs.Close} width={"24px"} height={"24px"} /> */}
            <CloseIcon size={22} sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={styles.divider} />
      <List>
        {menuItems.map((menu, index) => (
          <ListItem
            // onClick={() => onClickItem(item)}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                sx={styles.listItems}
                primaryTypographyProps={styles.primaryTypographyProps}
              >
                {menu.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarMenu;
