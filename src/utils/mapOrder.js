export default function mapOrder (originalArray, orderArray, key) {
  const originalMap = new Map(originalArray.map(item => [item[key], item]))
  return orderArray.map(id => originalMap.get(id))
}

