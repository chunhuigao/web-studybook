var findOrder = function (numCourses, prerequisites) {
  const len = prerequisites.length

  // 出度，入度 的数组，数组表示当前课程的入度；入度为0，才可以学习；
  const outAndIn = Array(numCourses).fill(0)
  // 记录课程学完后，将课程相关的入度减小
  const keyValue = {}
  for (let i = 0; i < len; i++) {
    const [a, b] = prerequisites[i]
    outAndIn[a]++
    if (keyValue[b]) {
      keyValue[b].push(a)
    } else {
      keyValue[b] = [a]
    }
  }

  // 先找到课程入度为0的课
  const stack = []
  for (let i = 0; i < outAndIn.length; i++) {
    if (outAndIn[i] === 0) stack.push(i)
  }

  let result = []
  while (stack.length) {
    const t = stack.pop()
    result.push(t)
    const next = keyValue[t]
    if (next && next.length > 0) {
      for (let i = 0; i < next.length; i++) {
        outAndIn[next[i]] -= 1
        if (outAndIn[next[i]] === 0) {
          stack.push(next[i])
        }
      }
    }
  }
  return result.length === numCourses ? result : []
}
