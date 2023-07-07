import styled from "styled-components";
import { TextField, Button } from "@mui/material";

export const StyledTextField = styled(TextField)`
  .MuiFormLabel-root.Mui-focused {
    color: #5dcb42;
  }
  .MuiInputBase-root.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #5dcb42;
    }
  }
  .MuiFormLabel-root.Mui-error {
    color: #f33a3d;
  }
  .MuiInputBase-root.Mui-error {
    .MuiOutlinedInput-notchedOutline {
      border-color: #f33a3d;
    }
  }
  .MuiInputBase-root {
    .MuiInputBase-input {
      padding: 12px 7px;
    }
  }
`;

export const StyledButton = styled(Button)<{ done?: boolean; filter?: boolean }>`
  && {
    color: ${(props) => (props.done ? "black" : props.filter ? "white" : "#5dcb42")};
    background: ${(props) => (props.filter ? "#5dcb42" : "white")};
    text-transform: none;
    border: 1px solid #5dcb42;
    &:hover {
      background: #5dcb42;
      color: white;
      border: 1px solid #5dcb42;
      .MuiSvgIcon-root {
        color: white;
      }
    }
    .MuiSvgIcon-root {
      color: ${(props) => (props.filter ? "black" : "#5dcb42")};
      width: 15px;
      margin-right: 5px;
    }
  }
`;

export const StyledCheckbox = styled.span`
  .Mui-checked {
    .MuiSvgIcon-root {
      color: #5dcb42;
      width: 16px;
    }
  }
`;

export const TodosContainer = styled.div`
  div {
    :nth-child(even) {
      background: #f3f3f3;
    }
  }
`;

export const StyledTodoItem = styled.p<{ done?: boolean }>`
  width: 445px;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  font-size: 14px;
  line-height: 21px;
`;
