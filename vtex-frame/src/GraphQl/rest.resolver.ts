import { GetContentEndPointService } from "../Service/Service";
import { container } from 'tsyringe';

const restResolvers = {
    getContent() {
        const getContentService = container.resolve(GetContentEndPointService);
        const data = getContentService.getContent();
        return data;
    },
}


export { restResolvers }