import React from 'react';

export default React.createContext({
  posicionactual:0,
  canciones:[],
  addNewTask: task => {},
  deleteTask: taskId => {},
  posicionar: cancionId => {},
  fSelecionada: cancionId => {},
  stateButton:stateButton => {},
});
