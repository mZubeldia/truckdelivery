const set = (key, value) => {
  //tengo que asignar nuevo nombre y el elemento que quiero guardar
  //función
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key, defaultData) => {
  //solo recibe nombre que yo le he asignado
  //función
  const data = localStorage.getItem(key);
  if (data === null) {
    //condición, data vacío
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const objToExport = {
  get: get,
  set: set,
};
export default objToExport;
