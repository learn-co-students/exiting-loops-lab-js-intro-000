function breakOut (array, changeValue, stopValue) {for (var i = 0; i < array.length; i++)
                                                        {if  (array[i] !== stopValue)
                                                              {array[i] = changeValue
                                                              break}}
                                                    return array}
function keepGoing(array, changeValue, skipValue) {for (var i = 0; i < array.length; i++)
                                                        {if  (array[i] === skipValue)
                                                              {continue}
                                                          array[i] = changeValue}
                                                    return array}
