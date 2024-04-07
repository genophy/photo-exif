export function getAddr(lat: any, lng: any) {
  return new Promise((resolve) => {
    // 创建地理编码实例
    const myGeo = new (window as any).BMapGL.Geocoder()
    // 根据坐标得到地址描述
    myGeo.getLocation(new (window as any).BMapGL.Point(lng, lat), function (result: any) {
      if (result) {
        // alert(result.address)
        resolve(result)
      } else {
        resolve(null)
      }
    })
  })
}

export function gps2bd(lat: any, lng: any) {
  return new Promise((resolve: any) => {
    const convertor = new (window as any).BMapGL.Convertor()
    const pointArr = []
    pointArr.push(new (window as any).BMapGL.Point(lng, lat))

    convertor.translate(
      pointArr,
      (window as any).COORDINATES_WGS84,
      (window as any).COORDINATES_BD09,
      (data: any) => {
        if (data.status === 0) {
          resolve(data)
        } else {
          resolve(null)
        }
      }
    )
  })
}
