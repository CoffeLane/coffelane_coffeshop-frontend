import React from "react";
import { Box, Pagination } from "@mui/material";

const PaginationControl = ({ page, totalPages, onChange }) => {

    
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination count={totalPages} page={page} onChange={onChange}
                sx={{
                    "& .MuiPaginationItem-root": {
                        borderRadius: "50%",
                        minWidth: "40px",
                        minHeight: "40px",
                        color: "#3E3027",

                    },
                    "& .MuiPaginationItem-previousNext": {
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        minWidth: "40px",
                        minHeight: "40px",
                    },
                    "& .Mui-selected": {
                        borderRadius: "50%",
                        minWidth: "40px",
                        minHeight: "40px",
                        backgroundColor: "#FFFFFF !important",
                        color: "#3E3027",
                    },
                    "& .Mui-selected:hover": {
                        backgroundColor: "#FFFFFF !important",
                    },
                    "& .MuiPaginationItem-root.Mui-selected.Mui-focusVisible": {
                        backgroundColor: "#FFFFFF !important",
                    },
                }}
            />
        </Box>
    );
};

export default PaginationControl;
