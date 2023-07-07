import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { StyledTextField, StyledButton } from "./styled";
import { searchTodo, allTodos, doneTodos } from "../store/todoSlice";
import { AppDispatch } from "../store/store";

export const SearchFild = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [allFilter, setAllFilter] = useState<boolean>(true);
  const [doneFilter, setDoneFilter] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(allTodos());
  }, [dispatch]);

  const changeFilter = useCallback(
    (all?: boolean) => {
      if (all) {
        setAllFilter(true);
        setDoneFilter(false);
        dispatch(allTodos());
      } else {
        setAllFilter(false);
        setDoneFilter(true);
        dispatch(doneTodos());
      }
      setSearchText("");
      dispatch(searchTodo(""));
    },
    [allFilter, doneFilter, setSearchText]
  );

  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!e.target.value) {
        dispatch(allTodos());
      }
      setSearchText(e.target.value);
      dispatch(searchTodo(e.target.value));
    },
    [dispatch, setSearchText]
  );

  return (
    <Box mt={3} sx={{ display: "flex" }}>
      <StyledTextField
        sx={{ width: 300, mr: 1 }}
        id='outlined-basic'
        label='Search by text'
        variant='outlined'
        value={searchText}
        onChange={(e) => onSearch(e)}
      />
      <StyledButton
        onClick={() => changeFilter(true)}
        filter={allFilter}
        sx={{ width: 87, mr: 1 }}
        variant='outlined'
        size='medium'
      >
        All
      </StyledButton>
      <StyledButton
        onClick={() => changeFilter()}
        filter={doneFilter}
        done
        sx={{ width: 78 }}
        variant='outlined'
        size='medium'
      >
        <CheckCircleOutlineIcon />
        Done
      </StyledButton>
    </Box>
  );
};
