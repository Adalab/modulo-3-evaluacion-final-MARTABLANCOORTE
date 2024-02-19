// Fichero src/services/localStorage.js

// Función que obtiene una propiedad del local storage
// Si esta propiedad no existe porque es la primera vez que la usuaria entra en la página, la función devuelve el valor de defaultValue
// Que esta función devuelva un valor por defecto es una cómoda manera de trabajar, así esta comprobación no la tenemos que hacer en App.js

export const get = (key, defaultValue) => {
    const dataFromLS = JSON.parse(localStorage.getItem(key));
  
    return dataFromLS || defaultValue;
  };
  
  // Función que guarda una propiedad y su valor en el local storage
  export const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
  };
  
  // Función que borra una propiedad del local storage
  export const remove = (key) => {
    localStorage.removeItem(key);
  };
  
  // Función que limpia todo el local storage
  export const clear = () => {
    localStorage.clear();
  };
  
  // Función que comprueba si existe una variable en el local storage
  export const includes = (key) => {
    return localStorage.getItem(key) !== null;
  };
  
  // Creamos un objeto temporal, que es el que queremos exportar
  // Este objeto tiene una propiedad get cuyo valor es la función get
  // Este objeto tiene una propiedad set cuyo valor es la función set
  // Este objeto tiene una propiedad remove cuyo valor es la función remove
  // Este objeto tiene una propiedad clear cuyo valor es la función clear
  // Este objeto tiene una propiedad includes cuyo valor es la función includes
  const objToExport = {
    get,
    set,
    remove,
    clear,
    includes,
  };
  
  export default objToExport;
  