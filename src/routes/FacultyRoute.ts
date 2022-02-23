import { Router } from 'express';
import facultyController from '../controller/FacultyController';

class FacultyRoutes {

    public routeFacultyApi: Router;

    constructor() {
        this.routeFacultyApi = Router();
        this.setting();
    }
    public setting() {
        this.routeFacultyApi.get('/lasquieroya', facultyController.getmeFaculty)
    }
}
const facultyRoutes = new FacultyRoutes();
export default facultyRoutes.routeFacultyApi;