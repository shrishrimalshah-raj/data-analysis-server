import { RootRepository } from '../RootRepository';
import { PROFutureModel } from '../../db/models'

class PROFutureService extends RootRepository {
  constructor(model) {
    super(model)
  }

  async find() {
    const result = await super.find();
    return result;
  }
  
  async findLastRecord(days) {
    const result = await super.findLastRecord(days);
    const sortedData = result.sort((a, b) => a.date - b.date)
    return sortedData;
  }

  async create(item) {
    const result = await super.create(item);
    return result;
  }

  async findByDate(cond) {
    const result = await super.findByDate(cond);
    return result;
  }

}

export default new PROFutureService(PROFutureModel);
