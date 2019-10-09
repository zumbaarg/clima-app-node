const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccioón de la ciuidad para obtener el clima",
    demand: true
  }
}).argv;

//lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima
//   .getClima(35, 139)
//   .then(console.log)
//   .catch(console.log);

const getInfo = async dir => {
  try {
    const coords = await lugar.getLugarLatLng(dir).catch(console.log);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${coords.direccion} es de ${temp}.`;
  } catch (e) {
    return `No se pudo determinar el clima de ${dir}.`;
  }
};

getInfo(argv.direccion).then(console.log);

// const resp = await info.get();
