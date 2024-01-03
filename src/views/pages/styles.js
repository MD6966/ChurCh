export const usePageStyle = ({ theme }) => {
  const style = {
    contactBoxRelative: {
      position: "relative",
      minHeight: "400px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url('/img13.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    contactBoxAbsolute: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.70)",
      zIndex: 0,
    },
    contactBoxTextParagraph: {
      display: "flex",
      flexDirection: "column",
      color: "white",
      textAlign: "center",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
    },
    contactUsText: { fontSize: { xs: "28px", sm: "32px" }, fontWeight: 600 },
    contactUsParagraph: {
      fontSize: { xs: "16px", sm: "20px" },
      fontWeight: 400,
      textAlign: "center",
      paddingX: { xs: 4, sm: 5, md: 6 },
    },
    contactUsFormText: {
      fontSize: "24px",
      fontWeight: 700,
      textAlign: "start",
    },
    inputsBox: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      marginTop: "40px",
      width: "100%",
    },
    inputStyle: {
      border: "none",
      backgroundColor: "#EDE8E8",
      color: "gray",
      padding: " 15px 20px",
      borderRadius: "8px",
    },
    contactUsButton: {
      backgroundColor: "#E10B0B",
      color: "white",
      fontSize: "24px",
      borderRadius: "8px",
      padding: "10px 40px",
      border: "none",
      marginTop: { xs: "20px", sm: "25px", md: "30px" },
    },
    contactUsImageBox: {
      maxWidth: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    contactUsImg: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" },
  };
  return style;
};
