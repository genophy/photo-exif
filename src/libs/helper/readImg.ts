import { rgb2Hex, isDarkColor } from './hex.helper'

export function readImgDataUrl(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function (e) {
      resolve(e.target?.result as string)
    }
    reader.onerror = function (e) {
      reject(e)
    }

    reader.readAsDataURL(file)
  })
}

export function readImgToColor(imageURL: any) {
  return new Promise((resolve) => {
    const colorThief = new (window as any).ColorThief()
    const img = new Image()

    img.addEventListener('load', function () {
      const color = colorThief.getColor(img)

      const pallette = colorThief.getPalette(img, 5)
      const paletteColors: PaletteColor[] = pallette.map((item: any) => {
        const rgb = `rgb(${item.join(',')})`
        return {
          rgb: rgb,
          hex: rgb2Hex(item[0], item[1], item[2]),
          reverse: isDarkColor(rgb) ? '#fff' : '#000'
        }
      })

      resolve({ color, paletteColors })
    })
    img.crossOrigin = 'Anonymous'
    img.src = imageURL
  })
}
