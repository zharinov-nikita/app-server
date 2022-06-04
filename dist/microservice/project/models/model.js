"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    offer: { type: String, required: true },
    status: { type: String, required: true, default: 'сео' }
});
exports.default = (0, mongoose_1.model)('Project', exports.ProjectSchema);
