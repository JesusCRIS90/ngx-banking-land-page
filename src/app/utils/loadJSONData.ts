import {
    JSONLocalFileClient,
    RequestResponse
} from "@beexy/tools"

export async function loadData(path: string): Promise<RequestResponse> {

    const jsoncl = new JSONLocalFileClient();

    const response = await jsoncl.requestData(path);

    return response;
    
    // try {
  
    //   const response = await jsoncl.requestData(path);
  
    //   console.log("JSON-CLIENT]: Data received:", response);

    //   return response;

    // } catch (error) {
  
    //   console.error("[JSON-CLIENT]: Error loading data", error);

    //   return response;
    // }
    
}