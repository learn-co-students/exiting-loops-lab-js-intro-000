var breakOut = (array, changeValue, stopValue) =>
  {
    for (var i = 0; i < array.length; i++)
    {
      if (array[i] == stopValue)
        {
          break;
        }
      array[i] = changeValue;
    }
    return array;
  }
var keepGoing = (array, changeValue, skipValue) =>
  {
    for (var i = 0; i < array.length; i++)
    {
      if (array[i] === skipValue)
        {
          continue;
        }
      array[i] = changeValue;
    }
    return array;
  }
var findBy = (array, findFn) =>
  {
    var found;
    for (var i = 0; i < array.length; i++)
    {
      if (findFn(array[i]))
      {
        found = array[i];
        return found;
      }
    }
    return found;
  }
