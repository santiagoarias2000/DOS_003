import { Request, Response } from "express";
import FacultyDAO from "../daos/FacultyDAO";
import { SQL_FACULTY } from '../repository/faculty_sql';

class FacultyController extends FacultyDAO {

    public getmeFaculty(req: Request, res: Response): void {
        FacultyController.getFaculty(SQL_FACULTY.ALL, [], res);
    }

}
//Change name to de class for use const, and the first letter chage to upperletter for lowerletter
const facultyController = new FacultyController();
export default facultyController;
