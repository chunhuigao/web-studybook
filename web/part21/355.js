var Twitter = function () {
  this.users = {}
  this.userAndMess = {}
  this.index = 0
}

Twitter.prototype.postTweet = function (userId, tweetId) {
  if (this.users[userId] === undefined) {
    this.users[userId] = [userId]
  }
  this.index += 1
  const idx = this.index
  if (this.userAndMess[userId] === undefined) {
    this.userAndMess[userId] = [[idx, tweetId]]
  } else {
    this.userAndMess[userId].unshift([idx, tweetId])
  }
}

Twitter.prototype.getNewsFeed = function (userId) {
  const array = this.users[userId]
  if (Boolean(array)) {
    let atotal = []
    for (let i = 0; i < array.length; i++) {
      const key = array[i]
      const messArr = this.userAndMess[key]
      if (Array.isArray(messArr)) {
        atotal = atotal.concat(messArr.slice(0, 10))
      }
    }
    atotal.sort((a, b) => b[0] - a[0])
    const result = atotal.slice(0, 10).map((v) => v[1])
    return result
  } else {
    return []
  }
}

Twitter.prototype.follow = function (followerId, followeeId) {
  if (followerId === followeeId) return
  if (this.users[followerId] === undefined) {
    this.users[followerId] = [followerId, followeeId]
  } else {
    const array = this.users[followerId]
    if (!array.includes(followeeId)) {
      this.users[followerId].unshift(followeeId)
    }
  }
}

Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followerId === followeeId) return
  if (this.users[followerId] === undefined) {
  } else {
    const array = this.users[followerId]
    if (array.includes(followeeId)) {
      const index = array.indexOf(followeeId)
      array.splice(index, 1)
    }
  }
}
