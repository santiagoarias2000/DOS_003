"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FacultyDAO_1 = __importDefault(require("../daos/FacultyDAO"));
const faculty_sql_1 = require("../repository/faculty_sql");
class FacultyController extends FacultyDAO_1.default {
    getmeFaculty(req, res) {
        FacultyController.getFaculty(faculty_sql_1.SQL_FACULTY.ALL, [], res);
    }
}
//Change name to de class for use const, and the first letter chage to upperletter for lowerletter
const facultyController = new FacultyController();
exports.default = facultyController;
