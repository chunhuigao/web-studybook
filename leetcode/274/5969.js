var asteroidsDestroyed = function (mass, asteroids) {
  asteroids = asteroids.sort((a, b) => a - b)
  let start = mass
  for (let i = 0; i < asteroids.length; i++) {
    if (start >= asteroids[i]) {
      start += asteroids[i]
    } else {
      return false
    }
  }
  return true
}
