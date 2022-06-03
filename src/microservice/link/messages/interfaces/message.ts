export type LevelMessageType = "success" | "error" | "open" | "info" | "warning" | "loading"

export interface IMessage {
    message: {
        level: LevelMessageType
        content: string
    }
}