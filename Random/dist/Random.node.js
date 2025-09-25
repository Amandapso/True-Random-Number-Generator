"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const axios_1 = __importDefault(require("axios"));
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            group: ['transform'],
            version: 1,
            description: 'Retorna um número randomico de Random.org',
            defaults: {
                name: 'Random',
                color: '#ffaa00',
            },
            inputs: ['main'],
            outputs: ['main'],
            icon: 'file:random.svg',
            properties: [
                {
                    displayName: 'Minimo',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    required: true,
                    description: 'Valor mínimo (inclusivo)',
                },
                {
                    displayName: 'Máximo',
                    name: 'max',
                    type: 'number',
                    default: 100,
                    required: true,
                    description: 'Valor máximo (inclusivo)',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i);
            const max = this.getNodeParameter('max', i);
            const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
            const response = await axios_1.default.get(url);
            const randomNumber = parseInt(String(response.data).trim(), 10);
            returnData.push({
                json: { randomNumber },
            });
        }
        return [returnData];
    }
}
exports.Random = Random;
