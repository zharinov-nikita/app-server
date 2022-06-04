"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor() {
        this.show = (level, content) => ({ message: { level, content } });
    }
}
exports.default = new Message();
