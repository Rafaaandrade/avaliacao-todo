import {
  Button,
  FormControl, TextField,
  Typography
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMyContext } from "../../Context";
import useStyles from "./styles";

const Form = () => {
  const { toEdit, setToEdit, addTodo, editTodo } = useMyContext();
  const styles = useStyles();
  const { edit, id } = toEdit;
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      titulo: "",
      descricao: "",
      date: "",
    },
  });

  useEffect(() => {
    clearfields();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  const clearfields = () => {
    setValue("titulo", "");
    setValue("descricao", "");
    setValue("date", "");
  };

  const onSubmit = (data) => {
    addTodo(data);
  };

  const handleEdit = (data) => {
    editTodo(id, data);
    setToEdit([]);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(onSubmit)}
      >
        <Typography>
          {edit ? "Edite a tarefa" : "Adicione nova tarefa"}
        </Typography>
        <FormControl fullWidth>
          <Controller
            name="titulo"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text" label="Titulo" />
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name="descricao"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text" label="Descrição" />
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="date" label="Data" />
            )}
          />
        </FormControl>
        <Button className={styles.button} type="submit">
          {edit ? "Editar" : "Adicionar"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
