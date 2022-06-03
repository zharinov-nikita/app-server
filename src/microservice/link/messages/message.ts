import { IMessage, LevelMessageType } from "./interfaces/message"


class Message {
    show = (level: LevelMessageType, content: string): IMessage => ({ message: { level, content } })
}


export default new Message()