import axios from "axios";


export default class ApiConvertRepository {

  async getData() {
   
    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url:`https://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}&base=CLP` ,
      method: "GET",
      headers: headersList,
    };

    let res;
    await (async () => setTimeout(async () => {}, 1))(); // Anti-lag Hacks
    res = await axios.request(reqOptions);
    
    return res.data;
  }

}