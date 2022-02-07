import axios from 'axios';
import { injectable } from 'tsyringe';
import { expressConstants } from '../Config/Constants';

@injectable()
class GetContentEndPointService {
    async getContent() {
        try {
            const response = await axios.get(expressConstants.__URLENDPOINT);
            if(response.status === 200) return response.data;
        
            return [];
        } catch(error) {
            return [];
        }
    }
}


export { GetContentEndPointService }
