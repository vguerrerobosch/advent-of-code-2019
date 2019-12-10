const test = require('ava')
const { parseMap, asteroidsDetected, findBestSpot } = require('./monitoring')

test('parse map', t => {
  const map = '.#..#\n.....\n#####\n....#\n...##'

  t.deepEqual(parseMap(map), [
    [0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1]
  ])
})

test('detects 8 asteriods', t => {
  const map = parseMap('.#..#\n.....\n#####\n....#\n...##')
  const P = [4, 3]

  t.is(asteroidsDetected(P, map), 8)
})

test('detects 33 asteroids', t => {
  const map = parseMap('......#.#.\n#..#.#....\n..#######.\n.#.#.###..\n.#..#.....\n..#....#.#\n#..#....#.\n.##.#..###\n##...#..#.\n.#....####')

  t.is(asteroidsDetected([8, 5], map), 33)
})

test('find best spot total is 8', t => {
  const map = parseMap('.#..#\n.....\n#####\n....#\n...##')

  t.is(findBestSpot(map), 8)
})

test('find best spot total is 33', t => {
  const map = parseMap('......#.#.\n#..#.#....\n..#######.\n.#.#.###..\n.#..#.....\n..#....#.#\n#..#....#.\n.##.#..###\n##...#..#.\n.#....####')

  t.is(findBestSpot(map), 33)
})
