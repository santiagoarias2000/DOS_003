import pgPromise from "pg-promise";
import { opcionesPG } from './optionConnection';
import var_conection from "../dominios/var_database";

const pgp = pgPromise(opcionesPG);
const pool = pgp(var_conection);

pool.connect()
    .then((conn) => {
        console.log('TE CONECTASTES A: ', var_conection.database, 'EL USUARIO: ', var_conection.user);
        conn.done();
    })
    .catch((meErr) => {
        console.log(meErr);
    });

export default pool;