import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.AZURE_COSMOS_ENDPOINT;
const masterKey = process.env.AZURE_COSMOS_MASTER_KEY;
const databaseId = process.env.AZURE_COSMOS_DATABASE_ID;
const jobPostingsContainer = 'job-postings'
const productContainerName = 'products';

const client = new CosmosClient({ endpoint, auth: { masterKey } });

const containers = {
  products: client.database(databaseId).container(productContainerName),
  jobPostings: client.database(databaseId).container(jobPostingsContainer)
};

export { containers };
