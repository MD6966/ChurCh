export const useHeaderStyle = ({ theme }) => {
  const style = {
    appBar: { top: 0 },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "white",
      color: "black",
    },
    menuBox: {
      display: { xs: "none", lg: "flex" },
      gap: "30px",
      "& >*": { fontSize: "16px", fontWeight: 600 },
    },
    menuItem: { display: { xs: "none", lg: "flex" } },
    menuIcon: {
      display: { xs: "block", lg: "none" },
      cursor: "pointer",
      transform: () => "scaleY(1)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: () => "scaleY(1.2)",
      },
    },
  };

  return style;
};
