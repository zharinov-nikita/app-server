"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing dependencies
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// importing dependencies
// import routes => импортируем router при создании нового микросервиса
const router_1 = __importDefault(require("./microservice/link/router/router"));
// import routes => импортируем router при создании нового микросервиса
// express app setting 
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3030;
// express app setting
// routes => регистрируем роутер при создании нового микросервиса
app.use('/microservice', router_1.default);
// routes => регистрируем роутер при создании нового микросервиса
// start app and connect mongodb => подлючение к базе данных + запуск приложения
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb://localhost:27017/dev');
            app.listen(PORT, () => console.log(`The server started on the port ${PORT}`));
        }
        catch (e) {
            console.log(e);
        }
    });
}
start();
// start app and connect mongodb => подлючение к базе данных + запуск приложения
