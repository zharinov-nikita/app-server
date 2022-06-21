export class CreateOfferDto {
    readonly name: string
    readonly model: string
    readonly type: string
    readonly pay: {
        readonly value: number
        readonly currency: string
    }
    readonly url: string
    readonly short: string
}