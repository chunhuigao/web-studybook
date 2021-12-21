/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.users = {}
  this.userAndMess = {}
  this.index = 0
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
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

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
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

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
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

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
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

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
