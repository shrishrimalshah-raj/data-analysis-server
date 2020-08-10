import { RootRepository } from "../../../RootRepository";
import {
  PROCallModel,
} from "../../../../db/models";

import {
  CreateRecord,
  createRecordUsingPreviousRecord,
  renameObjectKey
} from '../helper';

class PROCallService extends RootRepository{
  constructor(model) {
    super(model);
  }

  async insertDataForProCall(data, date) {
    const result = data.find((item) => item["Client Type"] === "Pro") || {};
    result.date = date;
    const newObject = renameObjectKey(result);

    const countData = await super.countDocuments();

    if (countData === 0) {
      const key = ["Option Index Call Long", "Option Index Call Short"];
      let clientIndexObject = CreateRecord(newObject, key);
      let result = super.create(clientIndexObject);
      if (result) {
        console.log("!!! IF BLOCK NEW RECORD INSERTED !!!");
      }
      return result;
    } 
    
    if (countData > 0) {
      const oldObject = await super.findLastRecord(1);
      const newkey = ["Option Index Call Long", "Option Index Call Short"];
      const oldKey = ["longPosition", "shortPosition"];
      let clientIndexObject = createRecordUsingPreviousRecord(
        newObject,
        newkey,
        oldObject[0],
        oldKey
      );
      let result = super.create(clientIndexObject);
      if (result) {
        console.log("!!! ELSE BLOCK NEW RECORD INSERTED !!!");
      }
      return result;
    }
  }




}

export default new PROCallService(PROCallModel);