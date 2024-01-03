import React, { useState } from "react";
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { menuItems } from "../../utils/helper";
import { SidebarMenu } from "../SidebarMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { Text } from "../base";
import { Images } from "../../utils/assets/images";
import { useHeaderStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const styles = useHeaderStyle({ theme });
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleToggle = () => {
    setOpenDropDown(!openDropDown);
  }
  const [openlive, setOpenlive] = useState(false);
  const handleLive = () => {
    setOpenlive(!openlive);
  }

  const [openLiveDrop, setopenLive] = useState(false);
  const handleDrop = () => {
    setopenLive(!openLiveDrop);
  }
  const dropdownItems = [
    { label: 'Ministry', link: '/minister' },
    { label: 'M Housing', link: '/ministerHousing' },
    { label: 'M Human Rights', link: '/ministerHuman' },
  ];
  const GoLive = [
    { label: 'Study Materials', link: '/study-materials' },
    { label: 'Live Stream', link: '/live-stream' },
    { label: 'Last Events', link: '/live-stream' },
    { label: 'View All Blogs', link: '/blog' },
    { label: 'Onlne Sermons', link: '/sermons' },
  ];

  const handleMouseEnter = () => {
    setOpenDropDown(true);
  };

  const handleMouseLeave = () => {
    setOpenDropDown(false);
  };
  const handleMouseLive = () => {
    setopenLive(true);
  };

  const handleMouseLeft = () => {
    setopenLive(false);
  };
  // console.log("========open======", open);
  // console.log("images object =========", Images);

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
              <React.Fragment key={index}>
                {menu.name === 'MINISTRIES' ? (

                  <div style={{ display: 'flex', position: 'relative' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Text sx={styles.menuItem} onClick={() => navigate(menu.link)}>
                      {menu.name}
                    </Text>
                    <ExpandMoreOutlinedIcon onClick={handleToggle} />
                    {openDropDown && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          // left: '47%',
                          padding: '10px 5px',
                          backgroundColor: 'white',
                          border: '1px solid #ccc',
                          borderRadius: '9px',
                          zIndex: 10,
                          textAlign: "start"
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >

                        {dropdownItems.map((item, index) => (
                          <Text
                            key={index}
                            onClick={() => navigate(item.link)}
                            style={{ padding: '8px', cursor: 'pointer' }}
                          >
                            {item.label}
                          </Text>
                        ))}
                      </div>
                    )}
                  </div>
                ) :
                  menu.name === 'GO ONLINE' ? (

                    <div style={{ display: 'flex', position: 'relative', padding: '0px 20px' }}
                      onMouseEnter={handleMouseLive}
                      onMouseLeave={handleMouseLeft}
                    >
                      <Text sx={styles.menuItem} onClick={() => navigate(menu.link)}>
                        {menu.name}
                      </Text>
                      <ExpandMoreOutlinedIcon onClick={handleDrop} />
                      {openLiveDrop && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            // left: '47%',
                            padding: '10px 5px',
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '9px',
                            zIndex: 10,
                            textAlign: "start"
                          }}
                          onMouseEnter={handleMouseLive}
                          onMouseLeave={handleMouseLeft}
                        >

                          {GoLive.map((item, index) => (
                            <Text
                              key={index}
                              onClick={() => navigate(item.link)}
                              style={{ padding: '8px', cursor: 'pointer' }}
                            >
                              {item.label}
                            </Text>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (

                    <Text sx={styles.menuItem} onClick={() => navigate(menu.link)}>
                      {menu.name}
                    </Text>
                  )
                }
              </React.Fragment>
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
