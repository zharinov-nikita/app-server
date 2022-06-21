export class UpdateOfferDto {
    readonly name: string
    readonly model: string
    readonly type: string
    readonly pay: {
        value: number
        currency: string
    }
    readonly url: string
    readonly short: string
}