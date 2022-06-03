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
const service_1 = __importDefault(require("../services/service"));
const message_1 = __importDefault(require("../messages/message"));
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const link = yield service_1.default.create(data);
                return res.status(200).json(link);
            }
            catch (e) {
                const error = message_1.default.show('error', 'error');
                return res.status(500).json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const link = yield service_1.default.delete(_id);
                return res.status(200).json(link);
            }
            catch (e) {
                const error = message_1.default.show('error', 'error');
                return res.status(500).json(error);
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const link = yield service_1.default.read(_id);
                return res.status(200).json(link);
            }
            catch (e) {
                const error = message_1.default.show('error', 'error');
                return res.status(500).json(error);
            }
        });
    }
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const link = yield service_1.default.readAll();
                return res.status(200).json(link);
            }
            catch (e) {
                const error = message_1.default.show('error', 'error');
                return res.status(500).json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const link = yield service_1.default.update(data);
                return res.status(200).json(link);
            }
            catch (e) {
                const error = message_1.default.show('error', 'error');
                return res.status(500).json(error);
            }
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { short } = req.params;
                const link = yield service_1.default.redirect(short);
                if (link) {
                    return res.redirect(link.url);
                }
                const warning = message_1.default.show('warning', 'warning');
                return res.status(400).json(warning);
            }
            catch (e) {
                const error = message_1.default.show('error', 'error');
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new Controller();
