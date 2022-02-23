"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacultyController_1 = __importDefault(require("../controller/FacultyController"));
class FacultyRoutes {
    constructor() {
        this.routeFacultyApi = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routeFacultyApi.get('/lasquieroya', FacultyController_1.default.getmeFaculty);
    }
}
const facultyRoutes = new FacultyRoutes();
exports.default = facultyRoutes.routeFacultyApi;
