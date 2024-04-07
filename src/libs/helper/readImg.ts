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
      resolve(color)
    })
    img.crossOrigin = 'Anonymous'
    img.src = imageURL
  })
}
