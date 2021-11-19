// 现在有函数f1,f2,f3,希望f3执行时，f1,f2也执行

function f1() {
  // 18、根据备注15、可以知道f1必然有入参,且入参是函数、且必然返回的是函数
  return function (next) {
    return function () {
      console.log('f1函数？？？1')

      return next()
    }
  }
}

function f2() {
  // 19、根据备注15、可以知道f1必然有入参,且入参是函数、且必然返回的是函数
  return function (next) {
    return function () {
      console.log('f2函数？？？')
      return next()
    }
  }
}
function log() {
  // 20、根据备注15、可以知道f1必然有入参,且入参是函数、且必然返回的是函数
  return function (next) {
    return function () {
      console.log('log函数')
      return next()
    }
  }
}
function f3(enhancer) {
  //1、如果有参数传入，执行参数
  if (typeof enhancer === 'function') {
    // 7、这里执行了一个函数有入参f3，说明enhancer返回了一个函数
    return enhancer(f3)
  }
  //2、没有参数传入，执行原f3函数,option是参数
  return function (option) {
    console.log('todu', option) //输出todu 这里是啥？
  }
}

// 5、调用中间件
const start = f3(applyMiddleware(f1, f2, log))
// console.log('start', start)
//3、这里执行start类似执行原来f3()
start({ type: '这里是啥？' })

//4、中间件函数
function applyMiddleware(...middlewares) {
  // 6、因为中间要执行的函数数量不确定，这里用...展开符

  // 8、根据备注7、这里应该返回一个函数是不是？可以理解吧,并且还要接收参数f3
  return function (f3) {
    // 9、middlewares是一个数组，可以理解吧？数组里面放的是f1、f2、log函数可以理解吧
    // 10、数组是可以使用map的对吧，现将f1、f2、log这些函数执行一下
    const chain = middlewares.map((fn) => fn())

    // 11、将f1,f2,log合并执行一遍，并将f3函数传入
    const f = compose(...chain)(f3)

    // console.log('ff', f)
    //17、将合并好的函数返回回去

    return f()
  }
}

function compose(...funcs) {
  //12、因为不知道要合并集合函数，所以要用...展开符
  // 13、如果没有数组传来，将参数传递出去
  if (funcs.length === 0) return (args) => args
  console.log('funcs', funcs[0])
  // 14、只有一个函数，直接执行
  if (funcs.length === 1) return funcs[0]

  //15、函数数量超出1个，使用reduce，因为funcs是数组，这可以理解吧
  // 16、 args是外面传递过来的参数，这里是f3
  return funcs.reduce(function (a, b) {
    return function (...args) {
      return a(b(...args))
    }
  })
}
