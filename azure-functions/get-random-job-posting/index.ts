import { SqlQuerySpec } from "@azure/cosmos";
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { containers } from '../shared';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  // const getTotalNumberOfJobPostingsQuerySpec: SqlQuerySpec = {
  //   query: "SELECT VALUE COUNT(1) FROM c"
  // };

  // console.log("Getting total number of job postings");
  // const { totalNumberOfPostings }: any = await containers.products.items.query(getTotalNumberOfJobPostingsQuerySpec).toArray();
  // console.log("LOOK" + totalNumberOfPostings);
  // const randomJobPostingId: number = Math.floor(Math.random() * Math.floor(totalNumberOfPostings));

  // TODO Make this random
  const randomJobPostingId: number = 1;
  const selectJobPostingQuerySpec: SqlQuerySpec = {
    query: "SELECT * FROM products f WHERE f.jobPostingId = @jobPostingId",
    parameters: [
      { name: "@jobPostingId", value: randomJobPostingId }
    ]
  };

  context.log("Getting the job posting with ID [" + randomJobPostingId + "]...");
  const { result } = await containers.jobPostings.items.query(selectJobPostingQuerySpec).toArray();

  context.res = {
    status: 200,
    body: result
  };

};

export default httpTrigger;
