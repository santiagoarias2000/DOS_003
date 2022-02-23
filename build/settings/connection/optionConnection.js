"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const funtionConection_1 = require("./funtionConection");
exports.opcionesPG = {
    receive(data, result, e) { (0, funtionConection_1.camelizeColumns)(data); }
};
