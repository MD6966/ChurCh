export const userSideBarMenuStyle = ({ theme }) => {
  const style = {
    drawer: {
      width: "100%",
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: "100%",
        //   bgcolor: palette.secondary.main,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      display: { md: "flex", lg: "none" },
    },
    menuText: {
      color: "#fff",
      textTransform: "capitalize",
      pl: 1,
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "28px",
    },
    divider: { border: "1px Solid ", borderColor: "#ffffff50" },
    listItems: { color: "#FFFFFF", textTransform: "capitalize", ml: 5 },
    primaryTypographyProps: {
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: "24px",
    },
  };
  return style;
};
