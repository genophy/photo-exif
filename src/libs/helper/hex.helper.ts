export function rgb2Hex(r: number, g: number, b: number) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}
// 方法一：通过计算RGB颜色值的亮度来判断颜色是否为深色。
export function isDarkColor(rgb: any) {
  const cArr = rgb.split(/[^0-9]/).filter((i: any) => !!i)
  // 解析RGB颜色值
  const r = parseInt(cArr[0], 16)
  const g = parseInt(cArr[1], 16)
  const b = parseInt(cArr[2], 16)

  // 计算亮度
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // 返回判断结果
  return brightness < 280
}
