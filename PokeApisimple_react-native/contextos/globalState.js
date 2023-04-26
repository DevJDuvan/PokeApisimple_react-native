import React from 'react';
import Context from './contexto';
export default class GlobalState extends React.Component {
  state = {
    stateButton:true,
    tasks: [],
    canciones:[],
    posicionActual:null,
    cantidad:null,
    
  };

  addNewTask = (task) => {
   this.setState({tasks:task})
   this.setState({cantidad:task.length})
  };
  // posicionamos la ubicacion de la cancion a reproducir de manera global
  posicionActual = (posicionActual) => {
this.setState({posicionActual:posicionActual})
  };
  stateButton =(stateButton)=>{
    this.setState({stateButton:stateButton})
  };

  deleteTask = (taskId) => {
    this.setState(this.state.tasks.splice(taskId, 1));
  };

  Fselecionada  = (estado) =>{
    if(estado==0){
      if(this.state.posicionActual!=this.state.cantidad-1){ 
        this.posicionActual(++this.state.posicionActual)
      window.alert("entro"+this.state.posicionActual)
      return this.state.posicionActual
      }
      else{this.posicionActual(0);
        window.alert("antigua"+this.state.posicionActual)
        return 0
      }
  window.alert(this.state.posicionActual)
  }
  else if(estado==1){
  if(this.state.posicionActual!=0){
    this.posicionActual(--this.state.posicionActual);
      window.alert("entro"+this.state.posicionActual);
      return this.state.posicionActual
   
  }else{
    this.posicionActual(this.state.cantidad-1);
    return this.state.cantidad-1;
  }
  
  }else if(estado==2){
  this.posicionActual(Math.floor((Math.random() * (this.context.canciones.length - 0 + 1)) + 0))
  }
 
        };


  render() {
    return (
      <Context.Provider
        value={{
          posicionactual:this.state.posicionActual,
          canciones:this.state.tasks,
          estadoBoton:this.state.stateButton,
          addNewTask: this.addNewTask,
          deleteTask: this.deleteTask,
          posicionar: this.posicionActual,
          Fselecionada:this.Fselecionada,
          stateButton:this.stateButton
   
        }}
      >
        
        {this.props.children}
      </Context.Provider>
    );
  }
  

}
