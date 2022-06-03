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
const model_1 = __importDefault(require("../models/model"));
class Service {
    create(link) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.create(link);
        });
    }
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_id) {
                return yield model_1.default.findByIdAndDelete({ _id });
            }
            throw new Error();
        });
    }
    read(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_id) {
                return yield model_1.default.findById({ _id });
            }
            throw new Error();
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.find();
        });
    }
    update(link) {
        return __awaiter(this, void 0, void 0, function* () {
            if (link === null || link === void 0 ? void 0 : link._id) {
                return yield model_1.default.findByIdAndUpdate(link._id, link, { new: true });
            }
            throw new Error();
        });
    }
    redirect(short) {
        return __awaiter(this, void 0, void 0, function* () {
            if (short) {
                return yield model_1.default.findOne({ short });
            }
            throw new Error();
        });
    }
}
exports.default = new Service();
