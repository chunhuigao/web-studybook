var canConstruct = function (ransomNote, magazine) {
  const list1 = Array(26).fill(0)
  for (let i = 0; i < magazine.length; i++) {
    const idx = magazine[i].charCodeAt() - 'a'.charCodeAt()
    list1[idx]++
  }
  const list2 = Array(26).fill(0)
  for (let i = 0; i < ransomNote.length; i++) {
    const idx = ransomNote[i].charCodeAt() - 'a'.charCodeAt()
    list2[idx]++
  }

  for (let i = 0; i < 26; i++) {
    if (list2[i] > list1[i]) return false
  }
  return true
}
