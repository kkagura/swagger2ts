/** PageResult«BiddingDriverOrderRes» */
export interface driverOrderListUsingPOSTResult{

data: {
/** @description 招标编号 */
biddingCode: string
/** @description 中标报价（单价） */
biddingFreightPrice: number
/**
  * Format: int64 
  * @description 投标时间:格式(YYYY/MM/DD hh:mm)
  */
biddingTime: number
/** @description 开标专用字段，三期新增加报多车的情况 */
children: {
}[]
/** @description 派单备注 */
dispatchRemark: string
/** @description 司机投标编号 */
driverBiddingCode: string
/** @description 司机编码 */
driverCode: string
/** @description 司机姓名 */
driverName: string
/**
  * Format: int32 
  * @description 报号车数
  */
enrollNum: number
/**
  * Format: int32 
  * @description 报号类型1：单人，2：多人
  */
enrollType: number
/**
  * Format: int32 
  * @description 中标数量
  */
hitNum: number
/**
  * Format: int64 
  * @description 司机-投标单id唯一标识
  */
id: number
/**
  * Format: int32 
  * @description 是否在黑名单中,0:不是,1:是
  */
isBlack: number
/** @description 投标报价（单价） */
joinFreightPrice: number
/** @description 最新投标协商编号 */
latestConsultRecordCode: string
/**
  * Format: int32 
  * @description 最新协商状态： 0 未协商； 1 待确认; 2 已拒绝 ；3 同意
  */
latestConsultStatus: number
/** @description 协商新价格(xx元/吨)，价格把元扩大1万倍 */
newFreightPrice: number
/** @description 开标价格(xx元/吨)，价格把元扩大1万倍 */
openFreightPrice: number
/**
  * Format: int32 
  * @description 结果  司机-投标单标记状态：  0 空 ； 1 （预留）； 2 未中标 ; 3 已中标
  */
orderMarkStatus: number
/** @description 运单编号 */
orderNo: string
/** @description 投标单备注 */
orderRemark: string
/** @description 手机号码 */
phoneNo: string
/** @description 车牌号码 */
plateCode: string
/** @description 参考单价(xx元/吨)，价格把元扩大1万倍 */
refFreightPrice: number
/** @description 报价备注 */
remarks: string
/**
  * Format: int64 
  * @description 租户id
  */
tenantId: number
/**
  * Format: int32 
  * @description 平台派单状态 0 已取消； 1 派单中； 2 派单失败； 3 已派单；  4 在途；5 已卸货；6已卸货待确认； 7 已送达
  */
tmsOrderStatus: number
/** @description 车辆号码 */
vehicleCode: string
}[]
/** Format: int64 */
total: number
}
/** BiddingDriverOrderReq */
export interface BiddingDriverOrderReq{
/** @description 招标编号 */
biddingCode: string
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
}
/** BiddingInfoRes */
export interface getUsingPOSTResult{
/** @description 执行备注 */
actionRemark: string
/** @description 实际装车重量(吨) */
actualLoadingWeight: number
/**
  * Format: int64 
  * @description 发布时间
  */
biddingBeginTime: number
/** @description 招标编号 */
biddingCode: string
/**
  * Format: int64 
  * @description 招标日期:格式到天，(YYYY-MM-DD)， 传时间数值，YYYY-MM-DD 00:00:00 对应数值
  */
biddingDate: number
/**
  * Format: int64 
  * @description 截止时间
  */
biddingEndTime: number
/** @description 备注说明 */
biddingRemark: string
/**
  * Format: int32 
  * @description 招标状态(0 未发布、1 竞标中、2 待开标、3 已开标、4 全部)
  */
biddingStatus: number
/**
  * Format: int32 
  * @description 招标类型  0 未发布、 1 竞价中、2 待开标、3 已开标、 4 全部
  */
biddingType: number
/**
  * Format: int64 
  * @description 业务员员工id
  */
busiEmployeeId: number
/** @description 业务员员工姓名 */
busiEmployeeName: string
/**
  * Format: int64 
  * @description 创建用户id
  */
createdUserId: number
/** @description 创建用户名称 */
createdUserName: string
/** @description 信息费 ，单位为 元扩大10000倍 */
infoFee: number
/**
  * Format: int32 
  * @description 信息费标识 0：显示信息费，1：不显示信息费
  */
infoFeeShow: number
/**
  * Format: int64 
  * @description 装货时间
  */
loadTime: number
/**
  * Format: int32 
  * @description 1 待确认、2 已确认
  */
loadingConfirm: number
/**
  * Format: int64 
  * @description 装货(执行)确认时间
  */
loadingConfirmDate: number
/** @description 确认执行人 */
loadingConfirmOperater: string
/** @description 装车重量 */
loadingWeight: number
/**
  * Format: int32 
  * @description 订单类型
  */
orderType: number
/** @description 网络货运平台名称 */
platformAccountName: string
/** @description 网络货运平台账号 */
platformAccountNo: string
/** @description 网络货源平台来源分类,分为司机宝和自主填写(dy 自己填写;  sjb  ; g7) */
platformCode: string
/** @description 网络货源平台来源名称 */
platformName: string
/** @description 平台签收人id */
platformSignerId: string
/** @description 平台签收人 姓名 */
platformSignerName: string
/** @description 平台签收人 手机号 */
platformSignerPhone: string
/** @description 产品编码 */
prodCode: string
/** @description 产品长度 */
prodLength: number
/** @description 产品名称 */
prodName: string
/**
  * Format: int32 
  * @description 产品数量
  */
prodNum: number
/** @description 产品数量单位 */
prodNumUnit: string
/** @description 产品重量 */
prodWeight: number
/** @description 产品宽度 */
prodWidth: number
/**
  * Format: int32 
  * @description 推送状态: 0 未推送 ; 1  已推送
  */
pushStatus: number
/** @description 收货地点 */
receiverAddress: string
/** @description 收货详细地址 */
receiverAddressDetail: string
/** @description 收货联系人 */
receiverName: string
/** @description 收货联系人电话 */
receiverTel: string
/** @description 收货地址编码 */
recvAddressCode: string
/** @description 参考单价 */
refFreightPrice: number
/** @description 关联订单号 */
refOrderNo: string
/**
  * Format: int32 
  * @description 参考计价方式: 0  xx元/吨 ;  1  xx元/ 车
  */
refPriceType: number
/** @description 发货地址编码 */
sendAddressCode: string
/** @description 发货线路 */
sendRoute: string
/** @description 发货地点 */
senderAddress: string
/** @description 发货详细地址 */
senderAddressDetail: string
/** @description 发货联系人 */
senderName: string
/** @description 发货联系人电话 */
senderTel: string
/** @description 分享链接地址 */
shareLinkAddress: string
/** @description 产品规格 */
specCode: string
/**
  * Format: int32 
  * @description 租户id
  */
tenantId: number
/**
  * Format: int32 
  * @description 需要车数
  */
truckNum: number
}
/** BiddingInfoReq */
export interface BiddingInfoReq{
/** @description 招标编号 */
biddingCode: string
}
/** @description 返回的具体数据 */
export interface getPosterUsingGETResultstring
/** PosterDataRes */
export interface getPosterDataUsingGETResult{
/** @description 产品数量，带吨位 */
productCount: string
/** @description 产品日期 */
productDate: string
/** @description 产品价格 */
productPrice: string
/** @description 产品类型 */
productType: string
/** @description 收货地址 */
receiverAddress: string
/** @description 发货地址 */
senderAddress: string
/** @description 分享链接 */
shareUrl: string
}
/** BiddingPageRes */
export interface BiddingPageRes{
/** @description 招标编号 */
biddingCode: string
/**
  * Format: int64 
  * @description 招标日期
  */
biddingDate: number
/** @description 备注说明 */
biddingRemark: string
/**
  * Format: int32 
  * @description 招标类型  0 未发布、 1 竞价中、2 待开标、3 已开标、 4 全部、 5 废弃
  */
biddingType: number
/** @description 业务员员工姓名 */
busiEmployeeName: string
/**
  * Format: int32 
  * @description 竞标人数
  */
competeBiddingNum: number
/** @description 信息费 ，单位为 元 */
infoFee: number
/** @description 产品编码 */
prodCode: string
/** @description 产品长度(毫米) */
prodLength: number
/** @description 产品名称 */
prodName: string
/**
  * Format: int32 
  * @description 产品数量
  */
prodNum: number
/** @description 产品数量单位 件 或者 块，或者其他单位，直接存储汉字 */
prodNumUnit: string
/** @description 产品重量 */
prodWeight: number
/** @description 产品宽度(毫米) */
prodWidth: number
/** @description 产品信息 */
productInfo: string
/**
  * Format: int32 
  * @description 产品数量
  */
productQty: number
/** @description 参考单价(xx元 /吨) */
refFreightPrice: number
/**
  * Format: int32 
  * @description 参考计价方式: 0  xx元/吨 ;  1  xx元/ 车
  */
refPriceType: number
/** @description 发货线路 */
sendRoute: string
/** @description 分享链接地址 */
shareLinkAddress: string
/** @description 规格编码 */
specCode: string
/**
  * Format: int32 
  * @description 货车数量
  */
truckNum: number
/**
  * Format: int32 
  * @description 需要车数
  */
vehicleQty: number
}
/** BiddingPageReq */
export interface BiddingPageReq{
/** Format: int32 */
biddingType: number
/** @description 业务员员工姓名 */
busiEmployeeName: string
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
/** @description 收货地址名称 */
recvAddressName: string
/** @description 发货地址名称 */
sendAddressName: string
/** Format: int32 */
start: number
}


/**
  * 司机报价列表数据查询
   * @param req req
  */
 export function driverOrderListUsingPOST(req: BiddingDriverOrderReq) {
return XHR<driverOrderListUsingPOSTResult>({
url: '/bidding/driverOrderList',
method: 'post',
data: {req},
})
}

/**
  * 获取招标信息详情
   * @param req req
  */
 export function getUsingPOST(req: BiddingInfoReq) {
return XHR<getUsingPOSTResult>({
url: '/bidding/get',
method: 'post',
data: {req},
})
}

/**
  * 获取海报
   * @param biddingCode biddingCode
  */
 export function getPosterUsingGET(biddingCode: string) {
return XHR<getPosterUsingGETResult>({
url: '/bidding/getPoster',
method: 'get',
params: {biddingCode},
})
}

/**
  * 获取海报数据
   * @param biddingCode biddingCode
  */
 export function getPosterDataUsingGET(biddingCode: string) {
return XHR<getPosterDataUsingGETResult>({
url: '/bidding/getPosterData',
method: 'get',
params: {biddingCode},
})
}

/**
  * 招标信息列表查询
   * @param req req
  */
 export function queryBiddingPageListByLogisticsUsingPOST(req: BiddingPageReq) {
return XHR<BiddingPageRes>({
url: '/bidding/logistics/pageList',
method: 'post',
data: {req},
})
}