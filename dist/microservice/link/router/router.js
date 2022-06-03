"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
const router = (0, express_1.Router)();
router.post('/link', controller_1.default.create);
router.delete('/link/:_id', controller_1.default.delete);
router.get('/link', controller_1.default.readAll);
router.get('/link/:_id', controller_1.default.read);
router.patch('/link', controller_1.default.update);
router.get('/cc/:short', controller_1.default.redirect);
exports.default = router;
