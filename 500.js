;`
给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
第一行由字符 "qwertyuiop" 组成。
第二行由字符 "asdfghjkl" 组成。
第三行由字符 "zxcvbnm" 组成。`

//感觉没那么简单，但是又没有提起思路

var findWords = function (words) {
  let l = words.length
  let arr = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  let result = []
  for (let i = 0; i < l; i++) {
    str = words[i].toLowerCase()
    let h = words[i].length
    let index = 0
    if (arr[0].indexOf(str[0]) != -1) {
      index = 0
    } else if (arr[1].indexOf(str[0]) != -1) {
      index = 1
    } else if (arr[2].indexOf(str[0]) != -1) {
      index = 2
    }
    let tag = true

    for (let k = 0; k < h; k++) {
      if (arr[index].indexOf(str[k]) == -1) {
        tag = false
        break
      }
    }
    if (tag) {
      result.push(words[i])
    }
  }
  return result
}
