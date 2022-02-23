import pgPromise from 'pg-promise';
import { camelizeColumns, IClient } from './funtionConection';

export const opcionesPG: pgPromise.IInitOptions<IClient> = {
  receive(data, result, e) { camelizeColumns(data); }
};
