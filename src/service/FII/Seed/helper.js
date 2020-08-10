const CreateRecord = (newObject, key) => {
  let longPosition = newObject[key[0]];
  let shortPosition = newObject[key[1]];
  newObject.longPosition = longPosition;
  newObject.shortPosition = shortPosition;
  newObject.netPosition = longPosition - shortPosition;
  newObject.dailyLongPercentage = Number(
    (longPosition / (longPosition + shortPosition)).toFixed(2)
  );
  newObject.dailyShortPercentage = Number(
    (shortPosition / (longPosition + shortPosition)).toFixed(2)
  );

  return newObject;
}

const createRecordUsingPreviousRecord = (newObject, newkey, oldObject, oldKey) => {
  let longPosition = newObject[newkey[0]];
  let shortPosition = newObject[newkey[1]];
  let previousLongPosition = oldObject[oldKey[0]];
  let previousShortPosition = oldObject[oldKey[1]];

  newObject.longPosition = longPosition;
  newObject.shortPosition = shortPosition;
  newObject.dailyLongPosition = longPosition - previousLongPosition;
  newObject.dailyShortPosition = shortPosition - previousShortPosition;
  newObject.dailyLongPercentage = Number(
    (longPosition / (longPosition + shortPosition)).toFixed(2)
  );
  newObject.dailyShortPercentage = Number(
    (shortPosition / (longPosition + shortPosition)).toFixed(2)
  );
  newObject.netPosition = longPosition - shortPosition;

  return newObject;
}

const renameObjectKey = (oldObj) =>{
  const newObj = {};
  let date = oldObj.date;
  var position = [2, 5];
  position.forEach(
    (i) => (date = date.replace(new RegExp(`^(.{${i}})`), "$1" + "-"))
  );
  const newArray = date.split("-");
  //Given the year, month, day, hour and minutes
  let day = parseInt(newArray[0]) + 1;
  let month = parseInt(newArray[1]) - 1;
  let year = parseInt(newArray[2]);

  const convertToDate = new Date(year, month, day);

  Object.keys(oldObj).forEach((key) => {
    let value;
    const newName = key.replace("\t", "");
    if (newName !== "Client Type") {
      value = Number(oldObj[key]);
    } else {
      value = oldObj[key];
    }
    if (newName === "date") {
      newObj[newName] = convertToDate;
    } else {
      newObj[newName] = value;
    }
  });
  return newObj;
}

export {
  CreateRecord,
  createRecordUsingPreviousRecord,
  renameObjectKey
}