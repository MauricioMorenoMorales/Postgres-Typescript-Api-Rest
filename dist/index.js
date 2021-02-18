"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const index_routes_1 = __importDefault(require("./routes/index.routes"));
app.set('port', process.env.PORT || 5555);
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/users', index_routes_1.default);
app.listen(app.get('port'), () => console.log(`App corriendo en el puerto ${app.get('port')}`));
