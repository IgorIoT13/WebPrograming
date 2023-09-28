const nameInp = document.getElementById('name_inp');
const descInp = document.getElementById('desc');
const fuelInp = document.getElementById('fuel_inp');
const container = document.getElementById('listToRender')
const allsite = document.getElementsByTagName('header');

export const getInputValues = () => {
  return {
      name: nameInp.value,
      desc: descInp.value,
      fuel: fuelInp.value,
  };
};

export const cleanInput = () => {
    nameInp.value = "";
    descInp.value = "";
    fuelInp.value = "";

}
