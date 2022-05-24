/** BaseResult«Void» */
export interface invoiceDataUsingPOSTResult{
/** Format: int32 */
code: number

msg: string
}
/** PageResult«EtcLineRsp» */
export interface listLineUsingPOSTResult{

data: {
/**
  * Format: int64 
  * @description 创建时间
  */
createTime: number
/** @description 创建人 */
creator: string
/** @description 司机姓名 */
driverName: string
/** @description 装货地 */
loadAddress: string
/** @description 装货城市 */
loadCity: string
/** @description 卸货地 */
unloadAddress: string
/** @description 卸货城市 */
unloadCity: string
}[]
/** Format: int64 */
total: number
}
/** EtcLineReq */
export interface EtcLineReq{
/** @description 司机姓名 */
driverName: string
/** @description 装货地 */
loadAddress: string
/** @description 装货地市 */
loadCity: string
/** @description 装货地省 */
loadProvince: string
/** @description 装货地区 */
loadRegion: string
/**
  * Format: int32 
  * @description 起始数据,从1开始 默认1
  */
pageNum: number
/**
  * Format: int32 
  * @description 每页显示记录数 默认10
  */
pageSize: number
/** Format: int32 */
start: number
/** @description 卸货地 */
unloadAddress: string
/** @description 卸货地市 */
unloadCity: string
/** @description 卸货地省 */
unloadProvince: string
/** @description 卸货地区 */
unloadRegion: string
}


/**
  * invoiceData
   * @param data 
 * @param requestId 
 * @param sign 
 * @param timeStamp 
  */
 export function invoiceDataUsingPOST(data: string,requestId: string,sign: string,timeStamp: string) : Promise<invoiceDataUsingPOSTResult> {
}

/**
  * 线路列表
   * @param req req
  */
 export function listLineUsingPOST(req: EtcLineReq) : Promise<listLineUsingPOSTResult> {
}

/**
  * orderStatus
   * @param data 
 * @param requestId 
 * @param sign 
 * @param timeStamp 
  */
 export function orderStatusUsingPOST(data: string,requestId: string,sign: string,timeStamp: string) : Promise<invoiceDataUsingPOSTResult> {
}

/**
  * tradeData
   * @param data 
 * @param requestId 
 * @param sign 
 * @param timeStamp 
  */
 export function tradeDataUsingPOST(data: string,requestId: string,sign: string,timeStamp: string) : Promise<invoiceDataUsingPOSTResult> {
}