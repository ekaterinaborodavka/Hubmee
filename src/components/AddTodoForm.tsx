import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Box } from "@mui/material";
import { StyledTextField, StyledButton } from "./styled";
import { addTodo } from "../store/todoSlice";
import { AppDispatch } from "../store/store";

type FormValues = {
  todo: string;
};

export const AddTodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      todo: "",
    },
  });

  const onSubmit = useCallback(
    (data: FormValues) => {
      dispatch(addTodo(data));
      clearErrors();
      reset();
    },
    [dispatch]
  );

  const validateTodoText = (todoText: string) => {
    return todoText.length >= 2;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={4} sx={{ display: "flex" }}>
        <StyledTextField
          sx={{ width: 355, mr: 1 }}
          id='outlined-basic'
          label='Your task'
          variant='outlined'
          {...register("todo", {
            required: "fill in the task",
            validate: validateTodoText,
          })}
          error={Boolean(errors.todo)}
          helperText={
            Boolean(errors.todo) &&
            "Error content (the name of the task shouldn't be less than 2 characters)"
          }
        />
        <StyledButton
          sx={{ width: 120, height: 47 }}
          variant='outlined'
          size='medium'
          type='submit'
        >
          Add
        </StyledButton>
      </Box>
    </form>
  );
};
