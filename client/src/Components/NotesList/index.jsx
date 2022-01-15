import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useMyContext } from "../../Context";
import useStyles from "./styles";
const NotesList = () => {
  useEffect(() => {
    getAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { todo, getAllTodos, removeTodo, toEdit, setToEdit } = useMyContext();
  const styles = useStyles();

  const handleEdit = (id) => {
    setToEdit({ edit: true, id: id });
  };

  const dragElement = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(id));
  };

  return (
    <>
      {todo.allTodos && todo.allTodos.length > 0 ? (
        <List dense={false} className={styles.container}>
          {todo.allTodos.map((t) => (
            <div
              id={t.id}
              draggable={toEdit.edit ? true : false}
              onDragStart={(ev) => dragElement(ev)}
              onDrop={(ev) => drop(ev)}
              onDragOver={(ev) => allowDrop(ev)}
              key={t.id}
            >
              <Slide direction="down" in mountOnEnter unmountOnExit key={t.id}>
                <ListItem key={t.id}>
                  <ListItemText
                    className={styles.listItem}
                    primary={`${t.titulo} -- ${t.date}`}
                    secondary={t.descricao}
                  />
                  <ListItemSecondaryAction className={styles.listButtons}>
                    <IconButton
                      edge="end"
                      aria-label="Deletar"
                      onClick={() => removeTodo(t.id)}
                      disabled={toEdit.edit}
                    >
                      <Delete />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="Editar"
                      onClick={() => handleEdit(t.id)}
                      disabled={toEdit.edit}
                    >
                      <Edit />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Slide>
            </div>
          ))}
        </List>
      ) : (
        <div>Não há nenhuma tarefa no momento</div>
      )}
    </>
  );
};

export default NotesList;
