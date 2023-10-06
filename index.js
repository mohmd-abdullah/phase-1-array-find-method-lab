function superbowlWin(arrOfRecords){
    function findTheObject(arrOfRecords){
        return arrOfRecords.result === "W"?arrOfRecords.year:undefined;
    }
    const findYear = arrOfRecords.find(findTheObject);
    return findYear != undefined?findYear.year:undefined;
}

const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
  ]

  console.log(superbowlWin(record));