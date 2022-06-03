"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkSchema = void 0;
const mongoose_1 = require("mongoose");
exports.LinkSchema = new mongoose_1.Schema({
    offer: { type: String, required: true },
    model: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    short: { type: String, required: true, unique: true }
});
exports.default = (0, mongoose_1.model)('Link', exports.LinkSchema);
