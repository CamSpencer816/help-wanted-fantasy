import { SqlQuerySpec } from '@azure/cosmos';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { containers } from '../shared';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  // TODO Accept Input
  const productId: number = 1;
  const selectProductQuerySpec: SqlQuerySpec = {
    query: 'SELECT * FROM products f WHERE f.productId = @productId',
    parameters: [
      { name: '@productId', value: productId }
    ]
  };

  context.log('Getting the product with ID [' + productId + ']...');
  const { result } = await containers.refinancingProducts.items.query(selectProductQuerySpec).toArray();

  context.res = {
    status: 200,
    body: result
  };

};

export default httpTrigger;
