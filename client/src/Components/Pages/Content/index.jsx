import React from "react";
import Form from "../../Form";
import NotesList from "../../NotesList";
import useStyles from './styles'
const Content = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Form />
      <NotesList />
    </div>
  );
};

export default Content;
