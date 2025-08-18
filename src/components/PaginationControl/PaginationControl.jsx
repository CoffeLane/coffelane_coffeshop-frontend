import React, {useState, useEffect} from "react";
import { Box, Pagination } from "@mui/material";

const PaginationControl = ({ page, totalPages, onPageChange }) => {
  


    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination count={totalPages} page={page} onChange={onPageChange}
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
                        margin: " 0 96px",
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
