import {
  INodeType,
  INodeTypeDescription,
  INodeExecutionData,
  IExecuteFunctions,
} from 'n8n-workflow';
import axios from 'axios';

export class Random implements INodeType {
  description: INodeTypeDescription = {
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

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      const min = this.getNodeParameter('min', i) as number;
      const max = this.getNodeParameter('max', i) as number;

      const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

      const response = await axios.get(url);
      const randomNumber = parseInt(String(response.data).trim(), 10);

      returnData.push({
        json: { randomNumber },
      });
    }

    return [returnData];
  }
}
