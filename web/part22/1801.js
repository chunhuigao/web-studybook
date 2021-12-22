var getNumberOfBacklogOrders = function (orders) {
  const len = orders.length
  let buy = []
  let shell = []
  for (let i = 0; i < len; i++) {
    const type = orders[i][2]

    // 价格，数量 ，类型
    const [price, num, type] = orders

    if (type === 0) {
      //这是采购单
      if (shell.length === 0) {
        buy.push(orders[i])
        // buy.sort((a,b)=>b[0]-a[0])
      } else {
        //查找销售单
        for (let j = 0; j < shell.length; j++) {
          const ary = shell[j]
          //采购价格
          const pricei = orders[i][0]

          //采购数量
          const amounti = orders[i][1]
          if (!amounti) break
          //订购单价格低于销售单，移除销售单
          if (ary[0] <= pricei) {
            if (ary[1] >= amounti) {
              ary[1] -= amounti
              orders[i][1] = 0
            } else {
              orders[i][1] -= ary[1]
              shell[j][1] = 0
            }
          }
        }
        if (orders[i][1] > 0) {
          buy.push(orders[i])

          // buy.sort((a,b)=>a[0]-b[0])
        }
      }
    } else {
      //销售订单，
      if (buy.length === 0) {
        shell.push(orders[i])
        // shell.sort((a,b)=>a[0]-b[0])
      } else {
        //获取采购订单
        for (let j = 0; j < buy.length; j++) {
          const ary = buy[j]

          //这张销售单单价
          const pricei = orders[i][0]

          const amounti = orders[i][1]
          if (!amounti) break
          //销售单价格高于采购单
          if (ary[0] >= pricei) {
            if (ary[1] >= amounti) {
              ary[1] -= amounti
              orders[i][1] = 0
            } else {
              orders[i][1] -= ary[1]
              ary[1] = 0
            }
          }
        }
        if (orders[i][1] > 0) {
          shell.push(orders[i])

          //shell.sort((a,b)=>a[0]-b[0])
        }
      }
    }
  }

  let result = 0
  shell.forEach((v) => {
    result = (result + v[1]) % 1000000007
  })
  buy.forEach((v) => {
    result = (result + v[1]) % 1000000007
  })
  return result
}

var orders = [
  [30, 27, 1],
  [18, 9, 1],
  [11, 4, 0],
  [21, 11, 0],
  [1, 1, 1],
  [24, 20, 1],
  [15, 13, 1],
  [13, 3, 0],
  [30, 11, 1],
]
const aa = getNumberOfBacklogOrders(orders)
