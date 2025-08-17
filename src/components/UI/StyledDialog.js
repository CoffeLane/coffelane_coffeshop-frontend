import {styled} from "@mui/material/styles";
import {Dialog} from "@mui/material";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    margin: 0;
    margin-left: auto;
    height: 100vh;
    max-height: 100vh;
    width: 500px;
    border-radius: 24px 0 0 0px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.MuiDialog-paperWidthSm {
      max-width: 400px;
    }

    &.MuiDialog-paperOpen {
      transform: translateX(0);
    }
  }
`;