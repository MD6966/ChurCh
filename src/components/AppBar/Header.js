import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { menuItems } from "../../utils/helper";
import { SidebarMenu } from "../SidebarMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { Text } from "../base";
import { Images } from "../../utils/assets/images";
import { useHeaderStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const Header = (props) => {
  const { color } = props
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
  // const dropdownItems = [
  //   { label: 'Ministry', link: '/minister' },
  //   { label: 'M Housing', link: '/ministerHousing' },
  //   { label: 'M Human Rights', link: '/ministerHuman' },
  // ];
  const GoLive = [
    { label: 'Study Materials', link: '/study-materials' },
    { label: 'Live Stream', link: '/live-stream' },
    { label: 'Last Events', link: '/live-stream' },
    { label: 'View All Blogs', link: '/blog' },
    { label: 'Onlne Sermons', link: '/sermons' },
    { label: 'All events', link: '/upcomings' },
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
  const [scrolling, setScrolling] = useState(false);

  const [logoImage, setLogoImage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        setLogoImage("img36.png");
      } else {
        setScrolling(false);
        // setLogoImage("img39.png");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log("========open======", open);
  // console.log("images object =========", Images);
  const propsStyles = {
    position: props?.position,
    marginTop: scrolling ? '0px' : props?.mt,
    background: 'transparent',
    backgroundColor: scrolling ? 'white' : 'transparent',
    color: color || (scrolling ? 'black' : 'white'),
  }
  return (
    <div>

      <AppBar elevation={0} sx={props.position ? propsStyles : styles.appBar}>
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
                color: color || (scrolling ? 'black' : 'white'),
                cursor: 'pointer',
                '&:hover': { color: '#E10B0B' }
              }}
            >
              {scrolling && (
                <img

                  src={logoImage}
                  style={{
                    objectFit: "cover",
                    height: '40px',
                    width: '100%'
                  }}
                  alt="Logo"
                />
              )}


            </Box>

            <SidebarMenu open={open} setOpen={setOpen} />
          </div>

          <Box sx={styles.menuBox}>
            {menuItems.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.isButton ? (
                  <button
                    onClick={() => navigate('/donate')}
                    style={{
                      backgroundColor: "#E10B0B",
                      color: "white",
                      fontSize: '16px',
                      // fontSize: { xs: "20px", sm: "24px", lg: '24px' },
                      borderRadius: "8px",
                      padding: "10px 10px",
                      border: "none",
                    }}
                  >
                    Donate
                  </button>
                ) :

                  // menu.name === 'MINISTRIES' ? (

                  //   <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}
                  //     onMouseEnter={handleMouseEnter}
                  //     onMouseLeave={handleMouseLeave}
                  //   >
                  //     <Text sx={styles.menuItem} onClick={() => navigate(menu.link)}>
                  //       {menu.name}
                  //     </Text>
                  //     <ExpandMoreOutlinedIcon onClick={handleToggle} style={{ color: scrolling ? 'black' : 'white', '&:hover': { color: '#E10B0B' } }} />
                  //     {openDropDown && (
                  //       <div
                  //         style={{
                  //           position: 'absolute',
                  //           top: '100%',
                  //           // left: '47%',
                  //           padding: '10px 5px',
                  //           backgroundColor: 'white',
                  //           border: '1px solid #ccc',
                  //           borderRadius: '9px',
                  //           zIndex: 10,
                  //           textAlign: "start",

                  //         }}
                  //         onMouseEnter={handleMouseEnter}
                  //         onMouseLeave={handleMouseLeave}
                  //       >

                  //         {dropdownItems.map((item, index) => (
                  //           <Text
                  //             key={index}
                  //             onClick={() => navigate(item.link)}
                  //             style={{ padding: '8px', cursor: 'pointer' }}
                  //           >
                  //             {item.label}
                  //           </Text>
                  //         ))}
                  //       </div>
                  //     )}
                  //   </div>
                  // ) :
                  menu.name === 'GO ONLINE' ? (

                    <div style={{ display: 'flex', position: 'relative', padding: '0px 20px', alignItems: 'center', justifyContent: 'center' }}
                      onMouseEnter={handleMouseLive}
                      onMouseLeave={handleMouseLeft}
                    >
                      <Text sx={{ display: { xs: "none", lg: "flex", alignItems: 'center', justifyContent: 'center' }, cursor: "pointer", color: color || (scrolling ? 'black' : 'white'), '&:hover': { color: '#' } }} onClick={() => navigate(menu.link)}>
                        {menu.name}
                      </Text>
                      <ExpandMoreOutlinedIcon onClick={handleDrop} style={{ color: color || (scrolling ? 'black' : 'white') }} />
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

                    <Text sx={{ display: { xs: "none", lg: "flex", alignItems: 'center', justifyContent: 'center' }, cursor: "pointer", color: color || (scrolling ? 'black' : 'white'), '&:hover': { color: '#' } }} onClick={() => navigate(menu.link)}>
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
    </div >
  );
};

export default Header;
