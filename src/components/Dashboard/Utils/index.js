export const genItemDataSet = (data) => {
  let obj = {}; //Object containing the month (int) as key and values that month stock []
  const date = new Date();
  const curMonth = date.getMonth();

  // console.log(item);
  if (data.history) {
    data.history.sort((a, b) => a.date - b.date); //Sort history by date. This in essence allows us to use the index alongside the the month array in sync

    data.history.forEach((his) => {
      const date = new Date(his.date); // generate 2d array and push month stock to relevant child []
      const month = date.getMonth();
      obj[month] ? obj[month].push(his.qty) : (obj[month] = [his.qty]);
    });
  }

  obj[curMonth] ? obj[curMonth].push(data.qty) : (obj[curMonth] = [data.qty]); //push the latest stock to current month

  for (const i in obj) {
    obj[i] = obj[i].reduce((accumulator, value) => accumulator + value, 0);
  }

  obj = Object.values(obj); //turn obj to array
  obj = obj.slice(obj.length - 6); // slice of the last 6 months

  return obj;
};

export const genChartObject = (data) => {
  return data.map((item) => {
    return {
      label: item.sku,
      data: genItemDataSet(item),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    };
  });
};
