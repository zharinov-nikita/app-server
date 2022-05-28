import mongoose from "mongoose"

const Seo = mongoose.Schema({
    mainKey: {
        type: String,
        require: true,
        default: 'mainKey - 1'
    },

    highFrequencyKeys: {
        type: Array,
        require: true,
        default: [
            'highFrequencyKey - 1',
            'highFrequencyKey - 2',
            'highFrequencyKey - 3'
        ]
    },

    midFrequencyKeys: {
        type: Array,
        require: true,
        default: [
            'midFrequencyKeys - 1',
            'midFrequencyKeys - 2',
            'midFrequencyKeys - 3'
        ]
    },

    lowFrequencyKeys: {
        type: Array,
        require: true,
        default: [
            'lowFrequencyKeys - 1',
            'lowFrequencyKeys - 2',
            'lowFrequencyKeys - 3'
        ]
    }
}
)


export default mongoose.model('Seo', Seo)