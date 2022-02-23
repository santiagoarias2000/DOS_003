import { Response } from "express";
import pool from '../settings/connection/connectionDB';

class FacultyDAO {

    public static async getFaculty(sqlConsult: string, parameter: any, res: Response): Promise<any> {
        pool.result(sqlConsult, parameter)
            .then((results)=>{
                res.status(200).json(results.rows);
            })
            .catch((meErr) => {
                console.log('Error mano!!!',meErr);
                res.status(400).json({answer: 'Ayyy, no sirvio, mano'});
            });
    }

}
export default FacultyDAO;