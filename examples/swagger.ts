/** PageResult«BiddingDriverOrderRes» */
export interface DriverOrderListUsingPOSTResult {
  data: {
    /** @description 招标编号 */
    biddingCode: string;
    /** @description 中标报价（单价） */
    biddingFreightPrice: number;
    /**
     * Format: int64
     * @description 投标时间:格式(YYYY/MM/DD hh:mm)
     */
    biddingTime: number;
    /** @description 开标专用字段，三期新增加报多车的情况 */
    children: {}[];
    /** @description 派单备注 */
    dispatchRemark: string;
    /** @description 司机投标编号 */
    driverBiddingCode: string;
    /** @description 司机编码 */
    driverCode: string;
    /** @description 司机姓名 */
    driverName: string;
    /**
     * Format: int32
     * @description 报号车数
     */
    enrollNum: number;
    /**
     * Format: int32
     * @description 报号类型1：单人，2：多人
     */
    enrollType: number;
    /**
     * Format: int32
     * @description 中标数量
     */
    hitNum: number;
    /**
     * Format: int64
     * @description 司机-投标单id唯一标识
     */
    id: number;
    /**
     * Format: int32
     * @description 是否在黑名单中,0:不是,1:是
     */
    isBlack: number;
    /** @description 投标报价（单价） */
    joinFreightPrice: number;
    /** @description 最新投标协商编号 */
    latestConsultRecordCode: string;
    /**
     * Format: int32
     * @description 最新协商状态： 0 未协商； 1 待确认; 2 已拒绝 ；3 同意
     */
    latestConsultStatus: number;
    /** @description 协商新价格(xx元/吨)，价格把元扩大1万倍 */
    newFreightPrice: number;
    /** @description 开标价格(xx元/吨)，价格把元扩大1万倍 */
    openFreightPrice: number;
    /**
     * Format: int32
     * @description 结果  司机-投标单标记状态：  0 空 ； 1 （预留）； 2 未中标 ; 3 已中标
     */
    orderMarkStatus: number;
    /** @description 运单编号 */
    orderNo: string;
    /** @description 投标单备注 */
    orderRemark: string;
    /** @description 手机号码 */
    phoneNo: string;
    /** @description 车牌号码 */
    plateCode: string;
    /** @description 参考单价(xx元/吨)，价格把元扩大1万倍 */
    refFreightPrice: number;
    /** @description 报价备注 */
    remarks: string;
    /**
     * Format: int64
     * @description 租户id
     */
    tenantId: number;
    /**
     * Format: int32
     * @description 平台派单状态 0 已取消； 1 派单中； 2 派单失败； 3 已派单；  4 在途；5 已卸货；6已卸货待确认； 7 已送达
     */
    tmsOrderStatus: number;
    /** @description 车辆号码 */
    vehicleCode: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** BiddingDriverOrderReq */
export interface BiddingDriverOrderReq {
  /** @description 招标编号 */
  biddingCode: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** BiddingInfoRes */
export interface GetUsingPOSTResult {
  /** @description 执行备注 */
  actionRemark: string;
  /** @description 实际装车重量(吨) */
  actualLoadingWeight: number;
  /**
   * Format: int64
   * @description 发布时间
   */
  biddingBeginTime: number;
  /** @description 招标编号 */
  biddingCode: string;
  /**
   * Format: int64
   * @description 招标日期:格式到天，(YYYY-MM-DD)， 传时间数值，YYYY-MM-DD 00:00:00 对应数值
   */
  biddingDate: number;
  /**
   * Format: int64
   * @description 截止时间
   */
  biddingEndTime: number;
  /** @description 备注说明 */
  biddingRemark: string;
  /**
   * Format: int32
   * @description 招标状态(0 未发布、1 竞标中、2 待开标、3 已开标、4 全部)
   */
  biddingStatus: number;
  /**
   * Format: int32
   * @description 招标类型  0 未发布、 1 竞价中、2 待开标、3 已开标、 4 全部
   */
  biddingType: number;
  /**
   * Format: int64
   * @description 业务员员工id
   */
  busiEmployeeId: number;
  /** @description 业务员员工姓名 */
  busiEmployeeName: string;
  /**
   * Format: int64
   * @description 创建用户id
   */
  createdUserId: number;
  /** @description 创建用户名称 */
  createdUserName: string;
  /** @description 信息费 ，单位为 元扩大10000倍 */
  infoFee: number;
  /**
   * Format: int32
   * @description 信息费标识 0：显示信息费，1：不显示信息费
   */
  infoFeeShow: number;
  /**
   * Format: int64
   * @description 装货时间
   */
  loadTime: number;
  /**
   * Format: int32
   * @description 1 待确认、2 已确认
   */
  loadingConfirm: number;
  /**
   * Format: int64
   * @description 装货(执行)确认时间
   */
  loadingConfirmDate: number;
  /** @description 确认执行人 */
  loadingConfirmOperater: string;
  /** @description 装车重量 */
  loadingWeight: number;
  /**
   * Format: int32
   * @description 订单类型
   */
  orderType: number;
  /** @description 网络货运平台名称 */
  platformAccountName: string;
  /** @description 网络货运平台账号 */
  platformAccountNo: string;
  /** @description 网络货源平台来源分类,分为司机宝和自主填写(dy 自己填写;  sjb  ; g7) */
  platformCode: string;
  /** @description 网络货源平台来源名称 */
  platformName: string;
  /** @description 平台签收人id */
  platformSignerId: string;
  /** @description 平台签收人 姓名 */
  platformSignerName: string;
  /** @description 平台签收人 手机号 */
  platformSignerPhone: string;
  /** @description 产品编码 */
  prodCode: string;
  /** @description 产品长度 */
  prodLength: number;
  /** @description 产品名称 */
  prodName: string;
  /**
   * Format: int32
   * @description 产品数量
   */
  prodNum: number;
  /** @description 产品数量单位 */
  prodNumUnit: string;
  /** @description 产品重量 */
  prodWeight: number;
  /** @description 产品宽度 */
  prodWidth: number;
  /**
   * Format: int32
   * @description 推送状态: 0 未推送 ; 1  已推送
   */
  pushStatus: number;
  /** @description 收货地点 */
  receiverAddress: string;
  /** @description 收货详细地址 */
  receiverAddressDetail: string;
  /** @description 收货联系人 */
  receiverName: string;
  /** @description 收货联系人电话 */
  receiverTel: string;
  /** @description 收货地址编码 */
  recvAddressCode: string;
  /** @description 参考单价 */
  refFreightPrice: number;
  /** @description 关联订单号 */
  refOrderNo: string;
  /**
   * Format: int32
   * @description 参考计价方式: 0  xx元/吨 ;  1  xx元/ 车
   */
  refPriceType: number;
  /** @description 发货地址编码 */
  sendAddressCode: string;
  /** @description 发货线路 */
  sendRoute: string;
  /** @description 发货地点 */
  senderAddress: string;
  /** @description 发货详细地址 */
  senderAddressDetail: string;
  /** @description 发货联系人 */
  senderName: string;
  /** @description 发货联系人电话 */
  senderTel: string;
  /** @description 分享链接地址 */
  shareLinkAddress: string;
  /** @description 产品规格 */
  specCode: string;
  /**
   * Format: int32
   * @description 租户id
   */
  tenantId: number;
  /**
   * Format: int32
   * @description 需要车数
   */
  truckNum: number;
}
/** BiddingInfoReq */
export interface BiddingInfoReq {
  /** @description 招标编号 */
  biddingCode: string;
}
/** PosterDataRes */
export interface GetPosterDataUsingGETResult {
  /** @description 产品数量，带吨位 */
  productCount: string;
  /** @description 产品日期 */
  productDate: string;
  /** @description 产品价格 */
  productPrice: string;
  /** @description 产品类型 */
  productType: string;
  /** @description 收货地址 */
  receiverAddress: string;
  /** @description 发货地址 */
  senderAddress: string;
  /** @description 分享链接 */
  shareUrl: string;
}
/** BiddingPageRes */
export interface BiddingPageRes {
  /** @description 招标编号 */
  biddingCode: string;
  /**
   * Format: int64
   * @description 招标日期
   */
  biddingDate: number;
  /** @description 备注说明 */
  biddingRemark: string;
  /**
   * Format: int32
   * @description 招标类型  0 未发布、 1 竞价中、2 待开标、3 已开标、 4 全部、 5 废弃
   */
  biddingType: number;
  /** @description 业务员员工姓名 */
  busiEmployeeName: string;
  /**
   * Format: int32
   * @description 竞标人数
   */
  competeBiddingNum: number;
  /** @description 信息费 ，单位为 元 */
  infoFee: number;
  /** @description 产品编码 */
  prodCode: string;
  /** @description 产品长度(毫米) */
  prodLength: number;
  /** @description 产品名称 */
  prodName: string;
  /**
   * Format: int32
   * @description 产品数量
   */
  prodNum: number;
  /** @description 产品数量单位 件 或者 块，或者其他单位，直接存储汉字 */
  prodNumUnit: string;
  /** @description 产品重量 */
  prodWeight: number;
  /** @description 产品宽度(毫米) */
  prodWidth: number;
  /** @description 产品信息 */
  productInfo: string;
  /**
   * Format: int32
   * @description 产品数量
   */
  productQty: number;
  /** @description 参考单价(xx元 /吨) */
  refFreightPrice: number;
  /**
   * Format: int32
   * @description 参考计价方式: 0  xx元/吨 ;  1  xx元/ 车
   */
  refPriceType: number;
  /** @description 发货线路 */
  sendRoute: string;
  /** @description 分享链接地址 */
  shareLinkAddress: string;
  /** @description 规格编码 */
  specCode: string;
  /**
   * Format: int32
   * @description 货车数量
   */
  truckNum: number;
  /**
   * Format: int32
   * @description 需要车数
   */
  vehicleQty: number;
}
/** BiddingPageReq */
export interface BiddingPageReq {
  /** Format: int32 */
  biddingType: number;
  /** @description 业务员员工姓名 */
  busiEmployeeName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** @description 收货地址名称 */
  recvAddressName: string;
  /** @description 发货地址名称 */
  sendAddressName: string;
  /** Format: int32 */
  start: number;
}
/** PageResult«BookDriverRsp» */
export interface ListDriverUsingPOSTResult {
  data: {
    /** @description 经纪人手机号 */
    agentMobile: string;
    /** @description 经纪人 */
    agentName: string;
    /**
     * Format: int64
     * @description 报号时间
     */
    bookCreateTime: number;
    /** @description 企业名称 */
    companyName: string;
    /** @description 司机手机号 */
    driverMobile: string;
    /** @description 司机姓名 */
    driverName: string;
    /**
     * Format: int64
     * @description 报号司机主键
     */
    id: number;
    /** @description 车牌号 */
    plateNumber: string;
    /** @description 装货地名称 */
    sourceAddressName: string;
    /** @description 报号状态 */
    statusName: string;
    /** @description 卸货地名称 */
    targetAddressName: string;
    /** @description 运费单价（元/吨） */
    unitPrice: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** BookDriverListReq */
export interface BookDriverListReq {
  /**
   * Format: int64
   * @description 报号计划主键
   */
  bookId: number;
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int64
   * @description 报号结束时间
   */
  endTime: number;
  /** @description 关键字 */
  keyword: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** @description 装货地名称 */
  sourceAddressName: string;
  /** Format: int32 */
  start: number;
  /**
   * Format: int64
   * @description 报号开始时间
   */
  startTime: number;
  /** @description 卸货地名称 */
  targetAddressName: string;
}
/** PageResult«BookScheduleRsp» */
export interface ListScheduleUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 报号截止日期
     */
    bookCloseTime: number;
    /**
     * Format: int32
     * @description 调价次数
     */
    changePriceNum: number;
    /** @description 企业名称 */
    companyName: string;
    /** @description 创建人 */
    createName: string;
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /**
     * Format: int32
     * @description 报号运单数
     */
    currentBookOrderNum: number;
    /**
     * Format: int32
     * @description 报号车数
     */
    driverNum: number;
    /**
     * Format: int64
     * @description 报号主键
     */
    id: number;
    /**
     * Format: int64
     * @description 装车截止日期
     */
    loadCloseTime: number;
    /**
     * Format: int64
     * @description 装车日期
     */
    loadTime: number;
    /** @description 要车数量 */
    needCarNum: string;
    /** @description 剩余车数 */
    remainNum: string;
    /** @description 装货地名称 */
    sourceAddressName: string;
    /** @description 报号状态 */
    statusName: string;
    /** @description 卸货地名称 */
    targetAddressName: string;
    /** @description 运价（元/吨） */
    unitPrice: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** BookScheduleListReq */
export interface BookScheduleListReq {
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int64
   * @description 报号创建时间
   */
  createTime: number;
  /** @description 关键字企业名称/装货/卸货 */
  keyword: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** @description 装货地名称 */
  sourceAddressName: string;
  /** Format: int32 */
  start: number;
  /**
   * Format: int32
   * @description 1:报号中2:报号已截至3:装车中4:装车已截至
   */
  status: number;
  /** @description 卸货地名称 */
  targetAddressName: string;
}
/** @description 返回的具体数据 */
export interface SchedulePriceHisUsingPOSTResult {
  /** @description 新增数量 */
  addNum: string;
  /**
   * Format: int64
   * @description 报号主键
   */
  bookId: number;
  /** @description 报名数量 */
  carNum: string;
  /**
   * Format: int64
   * @description 操作时间
   */
  createTime: number;
  /** @description 操作人 */
  createUserName: string;
  /** @description 删除数量 */
  subNum: string;
  /** @description 运费单价 */
  unitPrice: string;
}
[];
/** BookScheduleReq */
export interface BookScheduleReq {
  /**
   * Format: int64
   * @description 报号主键id
   */
  bookId: number;
}
/** PageResult«CaptainResponse» */
export interface ListUsingPOSTResult {
  data: {
    /** @description 车队长手机号 */
    captainMobile: string;
    /** @description 车队长姓名 */
    captainName: string;
    /**
     * Format: int64
     * @description 收款设置时间
     */
    createTime: number;
    /** @description 收款设置描述 */
    tranSetDesc: string;
    /** @description 车队长编码 */
    userCode: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 车队长查询请求体 */
export interface ListUsingPOSTData {
  /** @description 车队长手机号 */
  captainMobile: string;
  /** @description 车队长姓名 */
  captainName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResult«CaptainTransetLogResponse» */
export interface TranSetLogListUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 收款设置时间
     */
    createTime: number;
    /** @description 收款设置描述 */
    operationDesc: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 车队长收款设置日志查询请求体 */
export interface TranSetLogListUsingPOSTData {
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 车队长编码 */
  userCode: string;
}
/** EntityResult«Void» */
export interface AddUsingPOSTResult {
  /**
   * Format: int32
   * @description 状态码
   */
  code: number;
  /** @description 提示语，建议success为false时，弹出提示语 */
  message: string;
  /** @description 是否成功 */
  success: boolean;
}
/** AddCargoGuaranteeProductsReq */
export interface AddCargoGuaranteeProductsReq {
  /** @description 产品配置明细 */
  addCargoGuaranteeProductsDetailReqs: {
    /** @description 对应收费价格(扩大10000倍) */
    chargePrice: string;
    /** @description 货物价值最大值(万元) */
    goodsMaxValue: string;
    /** @description 货物价值最小值(万元) */
    goodsMinValue: string;
    /** @description 产品配置明细 */
    children: {}[];
  }[];

  createName: string;
  /** @description 产品类型code */
  productType: string;
  /** @description 规则名称 */
  ruleName: string;
  /** @description 货源类型code */
  stockKind: string;
}
/** EditCargoGuaranteeProductsReq */
export interface EditCargoGuaranteeProductsReq {
  /** @description 产品配置明细 */
  addCargoGuaranteeProductsDetailReqs: {
    /** @description 对应收费价格(扩大10000倍) */
    chargePrice: string;
    /** @description 货物价值最大值(万元) */
    goodsMaxValue: string;
    /** @description 货物价值最小值(万元) */
    goodsMinValue: string;
    /** @description 产品配置明细 */
    children: {}[];
  }[];
  /**
   * Format: int64
   * @description 产品配置ID
   */
  productsId: number;

  updateName: string;
}
/** CargoGuaranteeProductsRsp */
export interface GetUsingPOST_1Result {
  /** @description 产品配置明细 */
  cargoGuaranteeProductsDetailReqs: {
    /** @description 对应收费价格(扩大10000倍) */
    chargePrice: string;
    /** @description 货物价值最大值 */
    goodsMaxValue: string;
    /** @description 货物价值最小值 */
    goodsMinValue: string;
    /** Format: int64 */
    id: number;
  }[];
  /** @description 产品类型Name */
  productName: string;
  /** @description 产品类型code */
  productType: string;
  /**
   * Format: int64
   * @description 产品配置ID
   */
  productsId: number;
  /** @description 规则名称 */
  ruleName: string;
  /** @description 货源类型code */
  stockKind: string;
  /** @description 货源类型Name */
  stockKindName: string;
}
/** CargoGuaranteeProductsDetailQueryReq */
export interface CargoGuaranteeProductsDetailQueryReq {
  /**
   * Format: int64
   * @description 产品配置ID
   */
  productsId: number;
}
/** PageResult«CargoGuaranteeProductsPageListRsp» */
export interface SelectPageListUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /** @description 产品类型Name */
    productName: string;
    /** @description 产品类型code */
    productType: string;
    /**
     * Format: int64
     * @description 产品配置ID
     */
    productsId: number;
    /** @description 规则名称 */
    ruleName: string;
    /** @description 货源类型code */
    stockKind: string;
    /** @description 货源类型code */
    stockKindName: string;
    /**
     * Format: int64
     * @description 更新时间
     */
    updateTime: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** CargoGuaranteeProductsListQueryReq */
export interface CargoGuaranteeProductsListQueryReq {
  /** Format: int32 */
  pageNum: number;
  /** Format: int32 */
  pageSize: number;
  /** @description 产品类型code */
  productType: string;
  /** @description 规则名称 */
  ruleName: string;
  /** Format: int32 */
  start: number;
  /** @description 货源类型code */
  stockKind: string;
}
/** AddAndEditCompanySettingReq */
export interface AddAndEditCompanySettingReq {
  /** @description 企业Code集合 */
  companyCodeList: string[];

  createName: string;
  /**
   * Format: int64
   * @description 增值产品企业关联id
   */
  id: number;
  /** @description 增值产品类型code */
  productType: string;
  /**
   * Format: int64
   * @description 增值产品配置ID
   */
  productsId: number;
  /** @description 增值货源类型code */
  stockKind: string;
}
/** CargoGuaranteeCompanySettingDetailRsp */
export interface GetUsingPOST_2Result {
  /** @description 企业编码 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int64
   * @description id
   */
  id: number;
  /** @description 产品类型code */
  productType: string;
  /**
   * Format: int64
   * @description 产品配置ID
   */
  productsId: number;
  /** @description 货源类型code */
  stockKind: string;
}
/** CompanySettingDetailQueryReq */
export interface CompanySettingDetailQueryReq {
  /** @description id */
  id: string;
}
/** @description 返回的具体数据 */
export interface SelectComboBoxUsingGETResult {
  /** @description 货源类型List */
  cargoStockKindComboBoxRsps: {
    /** @description 规则类型List */
    cargoRuleNameComboBoxRsps: {
      /**
       * Format: int64
       * @description 规则名称id
       */
      ruleId: number;
      /** @description 规则名称 */
      ruleName: string;
    }[];
    /** @description 货源类型code */
    stockKind: string;
    /** @description 货源类型code */
    stockKindName: string;
  }[];
  /** @description 产品类型Name */
  productName: string;
  /** @description 产品类型code */
  productType: string;
}
[];
/** PageResult«CargoGuaranteeCompanySettingPageListRsp» */
export interface SelectPageListUsingPOST_1Result {
  data: {
    /** @description 企业编码 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /**
     * Format: int64
     * @description id
     */
    id: number;
    /** @description 产品类型Name */
    productName: string;
    /** @description 产品类型code */
    productType: string;
    /** @description 规则名称 */
    ruleName: string;
    /** @description 货源类型code */
    stockKind: string;
    /** @description 货源类型code */
    stockKindName: string;
    /**
     * Format: int64
     * @description 修改时间
     */
    updateTime: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** CompanySettingPageListQueryReq */
export interface CompanySettingPageListQueryReq {
  /** @description 企业名称 */
  companyName: string;
  /** Format: int32 */
  pageNum: number;
  /** Format: int32 */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResult«CarrierDetailRsp» */
export interface ListUsingPOST_1Result {
  data: {
    /** @description 承运公司编码 */
    carrierCode: string;
    /** @description 承运公司名称 */
    carrierName: string;
    /** @description 是否已存在，true：是，false：否 */
    exist: boolean;
  }[];
  /** Format: int64 */
  total: number;
}
/** CarrierListQueryReq */
export interface CarrierListQueryReq {
  /** @description 承运公司名称 */
  carrierName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** @description 返回的具体数据 */
export interface ListAddressUsingPOSTResult {
  /** @description 地址编码 */
  addressCode: string;
  /** @description 地址名称 */
  addressName: string;
}
[];
/** CompanyAddressQueryReq */
export interface CompanyAddressQueryReq {
  /** @description 企业编码列表 */
  companyCodeList: string[];
}
/** PageResult«CompanyDetailRsp» */
export interface ListUsingPOST_2Result {
  data: {
    /** @description 真实企业编码 */
    actualCompanyCode: string;
    /** @description 企业编码 实际是主账号userCode */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /** @description 数据可否被选 */
    dataChooseCan: boolean;
  }[];
  /** Format: int64 */
  total: number;
}
/** CompanyListQueryReq */
export interface CompanyListQueryReq {
  /** @description 企业编码，多个用逗号分隔 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;
  /** @description 是否过滤已认证的企业，true：是，false：否 */
  filterCertified: boolean;
  /**
   * Format: int32
   * @description 过滤类型，1 过滤已添加榜单配置企业
   */
  filterType: number;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResult«CompanyBlackListRsp» */
export interface ListCompanyBlackListUsingPOSTResult {
  data: {
    /** @description 是否已加入黑名单，true：是，false：否 */
    blackListFlag: boolean;
    /** @description 企业编码 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** ListCompanyBlackListReq */
export interface ListCompanyBlackListReq {
  /** @description 企业编码，多个用逗号分隔 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** @description 返回的具体数据 */
export interface QueryCarrierScheduleRateUsingPOSTResult {
  /** @description 承运公司名称 */
  carrierName: string;
  /** @description 调度费金额（元） */
  scheduleFeeAmount: string;
  /** @description 调度费比例（%） */
  scheduleRate: string;
}
[];
/** CarrierScheduleRateQueryReq */
export interface CarrierScheduleRateQueryReq {
  /** @description 企业编码 */
  companyCode: string;
  /** @description 总运费（元） */
  totalFreight: number;
}
/** AbnormalLevelReq */
export interface AbnormalLevelReq {
  /** @description 异常等级名称 */
  abnormalName: string;
  /** @description 异常类型集合 */
  abnormalTypes: number[];
}
/** AbnormalTrackReq */
export interface AbnormalTrackReq {
  /** @description 异常等级主键集合 */
  abnormalLevelIds: number[];
  /** @description 企业code */
  companyCode: string;
}
/** CarrierCompanyBlacklistAddReq */
export interface CarrierCompanyBlacklistAddReq {
  /** @description 承运公司编码 */
  carrierCode: string;
  /** @description 承运公司名称 */
  carrierName: string;
}
/** IdListReq */
export interface IdListReq {
  /** @description 主键id集合 */
  idList: number[];
}
/** PageResult«CarrierCompanyBlacklistRsp» */
export interface ListCarrierCompanyBlacklistUsingPOSTResult {
  data: {
    /** @description 承运公司编码 */
    carrierCode: string;
    /** @description 承运公司名称 */
    carrierName: string;
    /**
     * Format: int64
     * @description 创建时间
     */
    createDate: number;
    /** @description 创建用户 */
    createUser: string;
    /**
     * Format: int64
     * @description 主键
     */
    id: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** CarrierCompanyBlacklistQueryReq */
export interface CarrierCompanyBlacklistQueryReq {
  /** @description 承运公司编码 */
  carrierCode: string;
  /** @description 承运公司名称 */
  carrierName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** id */
export interface id {
  /**
   * Format: int32
   * @description 记录主键
   */
  id: number;
}
/** ETCCompanyBlackListAddReq */
export interface ETCCompanyBlackListAddReq {
  /** @description 企业编码集合 */
  companyCodeList: string[];
}
/** PageResult«ETC发票企业黑名单» */
export interface ListCompanyBlackListUsingPOST_1Result {
  data: {
    /** @description 企业编码 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /** @description 创建人姓名 */
    createrUserName: string;
    /**
     * Format: int64
     * @description 主键id
     */
    id: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** ETCCompanyBlackListQueryReq */
export interface ETCCompanyBlackListQueryReq {
  /** @description 企业编码集合 */
  companyCodeList: string[];
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** ETCVehicleBlackListAddReq */
export interface ETCVehicleBlackListAddReq {
  /** @description 车牌号码集合 */
  plateNumberList: string;
}
/** PageResult«ETC发票车辆黑名单» */
export interface ListVehicleBlackListUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /** @description 创建人姓名 */
    createrUserName: string;
    /**
     * Format: int64
     * @description 主键id
     */
    id: number;
    /** @description 车牌号码 */
    plateNumber: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** ETCVehicleBlackListQueryReq */
export interface ETCVehicleBlackListQueryReq {
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** @description 车牌号码 */
  plateNumber: string;
  /** Format: int32 */
  start: number;
}
/** @description 返回的具体数据 */
export interface ListAbnormalLevelUsingPOSTResult {
  /** @description 异常等级名称 */
  abnormalLevel: string;
  /** @description 异常类型名称 */
  abnormalTypeName: string;
  /**
   * Format: int64
   * @description 异常等级主键
   */
  id: number;
  /** @description 异常类型名称 */
  name: string;
  /**
   * Format: int32
   * @description 异常类型值
   */
  value: number;
}
[];
/** PageResult«AbnormalTrackRsp» */
export interface ListAbnormalTrackUsingPOSTResult {
  data: {
    /** @description 异常类型名称 */
    abnormalLevelNames: string;
    /** @description 异常类型名称 */
    companyName: string;
    /** @description 创建人 */
    createName: string;
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /**
     * Format: int64
     * @description 主键
     */
    id: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** AbnormalTrackListReq */
export interface AbnormalTrackListReq {
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** OrderPoundDataSetAddReq */
export interface OrderPoundDataSetAddReq {
  /** @description 企业编码 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;
  /** @description 皮重最大值 */
  emptyMaxValue: string;
  /** @description 皮重最小值 */
  emptyMinValue: string;
  /** @description 毛重最大值 */
  heavyMaxValue: string;
  /** @description 毛重最小值 */
  heavyMinValue: string;
}
/** OrderPoundDataSetRsp */
export interface OrderPoundDataSetDetailUsingPOSTResult {
  /** @description 企业编码 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;
  /** @description 创建时间 */
  createTime: string;
  /** @description 皮重最大值 */
  emptyMaxValue: string;
  /** @description 皮重最小值 */
  emptyMinValue: string;
  /** @description 毛重最大值 */
  heavyMaxValue: string;
  /** @description 毛重最小值 */
  heavyMinValue: string;
  /** @description 操作人姓名 */
  operateUserName: string;
}
/** OderPoundDataSetRemoveReq */
export interface OderPoundDataSetRemoveReq {
  /** @description 企业编码 */
  companyCode: string;
}
/** PageResult«OrderPoundDataSetRsp» */
export interface OrderPoundDataSetListUsingPOSTResult {
  data: {
    /** @description 企业编码 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /** @description 创建时间 */
    createTime: string;
    /** @description 皮重最大值 */
    emptyMaxValue: string;
    /** @description 皮重最小值 */
    emptyMinValue: string;
    /** @description 毛重最大值 */
    heavyMaxValue: string;
    /** @description 毛重最小值 */
    heavyMinValue: string;
    /** @description 操作人姓名 */
    operateUserName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** OderPoundDataSetListReq */
export interface OderPoundDataSetListReq {
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** TwoLicenceSwitchRsp */
export interface QueryTwoLicenceSwitchUsingPOSTResult {
  /**
   * Format: int32
   * @description 从业资格证认证开关，0->关，1->开
   */
  qualificationCertifySwitch: number;
  /**
   * Format: int32
   * @description 从业资格证接单开关，0->关，1->开
   */
  qualificationOrderSwitch: number;
  /**
   * Format: int32
   * @description 从业资格证提现开关，0→关，1→开
   */
  qualificationWithdrawSwitch: number;
  /**
   * Format: int32
   * @description 道路许可证认证开关，0→关，1→开
   */
  roadLicenceCertifySwitch: number;
  /**
   * Format: int32
   * @description 道路许可证接单开关，0→关，1→开
   */
  roadLicenceOrderSwitch: number;
  /**
   * Format: int32
   * @description 道路许可证提现开关，0→关，1→开
   */
  roadLicenceWithdrawSwitch: number;
}
/** TwoLicenceSwitchUpdateReq */
export interface TwoLicenceSwitchUpdateReq {
  /**
   * Format: int32
   * @description 从业资格证认证开关，0->关，1->开
   */
  qualificationCertifySwitch: number;
  /**
   * Format: int32
   * @description 从业资格证接单开关，0->关，1->开
   */
  qualificationOrderSwitch: number;
  /**
   * Format: int32
   * @description 从业资格证提现开关，0->关，1->开
   */
  qualificationWithdrawSwitch: number;
  /**
   * Format: int32
   * @description 道路许可证认证开关，0→关，1→开
   */
  roadLicenceCertifySwitch: number;
  /**
   * Format: int32
   * @description 道路许可证接单开关，0→关，1→开
   */
  roadLicenceOrderSwitch: number;
  /**
   * Format: int32
   * @description 道路许可证提现开关，0→关，1→开
   */
  roadLicenceWithdrawSwitch: number;
}
/** TwoLicenceWhitelistAddReq */
export interface TwoLicenceWhitelistAddReq {
  /** @description 司机名称 */
  driverName: string;
  /** @description userCode */
  userCode: string;
}
/** PageResult«TwoLicenceWhitelistRsp» */
export interface ListTwoLicenceWhitelistUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 创建时间
     */
    createDate: number;
    /** @description 创建用户 */
    createUser: string;
    /** @description 司机名称 */
    driverName: string;
    /** @description 司机手机号 */
    driverPhone: string;
    /**
     * Format: int64
     * @description 主键
     */
    id: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** TwoLicenceWhitelistQueryReq */
export interface TwoLicenceWhitelistQueryReq {
  /** @description 司机名称 */
  driverName: string;
  /** @description 司机手机号 */
  driverPhone: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** @description 返回的具体数据 */
export interface LisFreightLoanBlackListReasonDicUsingPOSTResult {
  /** @description 费用字典code */
  code: string;
  /** @description 费用字典名称 */
  name: string;
  /**
   * Format: int32
   * @description 1黑名单2白名单
   */
  type: number;
}
[];
/** StockDictRsp */
export interface ListStockDicUsingPOSTResult {
  /** @description 付款方式字典 */
  payWayDictList: {
    /** @description 费用字典code */
    code: string;
    /** @description 费用字典名称 */
    name: string;
    /**
     * Format: int32
     * @description 1黑名单2白名单
     */
    type: number;
  }[];
  /** @description 货源状态字典 */
  stockStatusDictList: {
    /** @description 费用字典code */
    code: string;
    /** @description 费用字典名称 */
    name: string;
    /**
     * Format: int32
     * @description 1黑名单2白名单
     */
    type: number;
  }[];
}
/** PageResult«日志列表返回体» */
export interface PagesUsingPOST_1Result {
  data: {
    /** @description 操作 */
    operatedDesc: string;
    /**
     * Format: date-time
     * @description 操作时间
     */
    operatedTime: string;
    /** @description 操作人用户姓名 */
    operatorName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 日志请求体 */
export interface PagesUsingPOST_1Data {
  /**
   * Format: int64
   * @description 规则id
   */
  ruleId: number;
}
/** PageResult«规则列表返回体» */
export interface PagesUsingPOSTResult {
  data: {
    /** @description 企业名称 */
    companyName: string;
    /**
     * Format: int64
     * @description 规则id
     */
    id: number;
    /** @description 规则节点 */
    ruleNode: string;
    /**
     * Format: int32
     * @description 状态
     */
    status: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** 规则查询请求体 */
export interface PagesUsingPOSTData {
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** 规则操作请求体 */
export interface UpdateStatusUsingPOSTData {
  /**
   * Format: int64
   * @description 规则id
   */
  ruleId: number;
  /**
   * Format: int32
   * @description 状态 0 ：禁用 1：启用
   */
  status: number;
}
/** PageResult«DriverDetailRsp» */
export interface ListUsingPOST_3Result {
  data: {
    /** @description 司机名称 */
    driverName: string;
    /** @description 司机手机号 */
    driverPhone: string;
    /** @description 是否已存在，true：是，false：否 */
    exist: boolean;
    /** @description userCode */
    userCode: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** DriverListQueryReq */
export interface DriverListQueryReq {
  /** @description 司机名称 */
  driverName: string;
  /** @description 司机手机号 */
  driverPhone: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** EvaluationConfigRsp */
export interface AddEvaluationConfigUsingPOSTResult {
  /**
   * Format: int32
   * @description 状态：1.已创建，2.已上线，3.已结束
   */
  configState: number;
  /** @description 状态描述 */
  configStateDesc: string;
  /**
   * Format: int32
   * @description 服务评价类型：1.异常单，2.开票
   */
  configType: number;
  /**
   * Format: int64
   * @description 创建时间
   */
  createTime: number;
  /** @description 创建人姓名 */
  creatorName: string;
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
  /** @description 备注 */
  memo: string;
  /**
   * Format: int64
   * @description 上线时间
   */
  onlineTime: number;
  /** @description 上线人姓名 */
  onlinerName: string;
  /** @description 标题 */
  title: string;
}
/** ConfigAddReq */
export interface ConfigAddReq {
  /**
   * Format: int32
   * @description 服务评价类型：1.异常单，2.开票
   */
  configType: number;
  /** @description 备注 */
  memo: string;
  /** @description 标题 */
  title: string;
}
/** ConfigDeleteReq */
export interface ConfigDeleteReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
}
/** PageResult«EvaluationConfigRsp» */
export interface ListEvaluationConfigUsingPOSTResult {
  data: {
    /**
     * Format: int32
     * @description 状态：1.已创建，2.已上线，3.已结束
     */
    configState: number;
    /** @description 状态描述 */
    configStateDesc: string;
    /**
     * Format: int32
     * @description 服务评价类型：1.异常单，2.开票
     */
    configType: number;
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /** @description 创建人姓名 */
    creatorName: string;
    /**
     * Format: int64
     * @description 评价配置主键id
     */
    id: number;
    /** @description 备注 */
    memo: string;
    /**
     * Format: int64
     * @description 上线时间
     */
    onlineTime: number;
    /** @description 上线人姓名 */
    onlinerName: string;
    /** @description 标题 */
    title: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** ListConfigReq */
export interface ListConfigReq {
  /**
   * Format: int32
   * @description 服务评价类型：1.异常单，2.开票
   */
  configType: number;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** ConfigOnlineReq */
export interface ConfigOnlineReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 上线类型：1.上线，2.下线
   */
  onlineType: number;
}
/** ConfigUpdateReq */
export interface ConfigUpdateReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
  /** @description 备注 */
  memo: string;
  /** @description 标题 */
  title: string;
}
/** EvaluationConfigDetailAddReq */
export interface EvaluationConfigDetailAddReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
  /** @description 评价项目配置明细 */
  itemConfigAddList: {
    /** @description 项目名称 */
    itemName: string;
    /** @description 评价选项配置明细 */
    optionConfigAddList: {
      /** @description 选项名称 */
      optionName: string;
    }[];
  }[];
}
/** EvaluationConfigDetailRsp */
export interface GetEvaluationConfigDetailUsingPOSTResult {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
  /** @description 评价项目配置明细 */
  itemConfigList: {
    /**
     * Format: int64
     * @description 评价配置id
     */
    evaluationId: number;
    /**
     * Format: int32
     * @description 评价次数
     */
    frequency: number;
    /**
     * Format: int64
     * @description 评价项目配置主键id
     */
    id: number;
    /** @description 项目名称 */
    itemName: string;
    /** @description 评价选项配置明细 */
    optionConfigList: {
      /**
       * Format: int64
       * @description 评价配置id
       */
      evaluationId: number;
      /**
       * Format: int64
       * @description 评价项目配置id
       */
      evaluationItemId: number;
      /**
       * Format: int64
       * @description 评价选项配置主键id
       */
      id: number;
      /** @description 选项名称 */
      optionName: string;
      /** @description 选项百分占比，例如：70% */
      ratio: string;
    }[];
  }[];
  /** @description 备注 */
  memo: string;
  /** @description 标题 */
  title: string;
}
/** ConfigDetailQueryReq */
export interface ConfigDetailQueryReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
}
/** PageResult«EvaluationDetailRsp» */
export interface ListEvaluationDetailUsingPOSTResult {
  data: {
    /** @description 企业名称 */
    companyName: string;
    /**
     * Format: int64
     * @description 评价时间
     */
    evaluateTime: number;
    /** @description 评价人姓名 */
    evaluatorName: string;
    /**
     * Format: int64
     * @description 企业评价明细主键id
     */
    id: number;
    /** @description 手机号码 */
    mobileNum: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** ListEvaluationDetailReq */
export interface ListEvaluationDetailReq {
  /**
   * Format: int64
   * @description 评价选项配置主键id
   */
  evaluationOptionId: number;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** CollectEvaluationResultReq */
export interface CollectEvaluationResultReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
}
/** 运费贷司机黑名单批量新增入参 */
export interface DriverAddUsingPOSTData {
  /** @description 司机列表 */
  driverList: {
    /** @description 司机编码 */
    driverCode: string;
    /** @description 身份证号 */
    driverIdCode: string;
    /** @description 司机手机号码 */
    driverMobile: string;
    /** @description 司机名字 */
    driverName: string;
  }[];
  /**
   * Format: int32
   * @description 原因枚举code
   */
  reasonCode: number;
  /** @description 备注 */
  reasonRemark: string;
}
/** PageResult«司机列表反参» */
export interface DriverSearchUsingPOSTResult {
  data: {
    /** @description 司机编码 */
    driverCode: string;
    /** @description 司机身份证号 */
    driverIdCode: string;
    /** @description 司机手机号码 */
    driverMobile: string;
    /** @description 司机名字 */
    driverName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 运费贷司机黑名单列表查询入参 */
export interface DriverSearchUsingPOSTData {
  /** @description 司机手机号码 */
  driverMobile: string;
  /** @description 司机名字 */
  driverName: string;
}
/** PageResult«运费贷司机黑名单列表返回参数» */
export interface FreightLoanBlackListUsingPOSTResult {
  data: {
    /** @description 司机编码 */
    driverCode: string;
    /** @description 身份证号 */
    driverIdCode: string;
    /** @description 司机手机号码 */
    driverMobile: string;
    /** @description 司机名字 */
    driverName: string;
    /**
     * Format: int64
     * @description id
     */
    id: number;
    /** @description 创建人 */
    operatorName: string;
    /**
     * Format: int64
     * @description 操作时间
     */
    operatorTime: number;
    /** @description 原因 */
    reason: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 运费贷司机黑名单移除入参 */
export interface DriverRemoveUsingPOSTData {
  /** @description 司机编码 */
  driverCode: string;
}
/** 地址标记列表 */
export interface GetPointDetailUsingPOSTResult {
  /** @description 详细地址 */
  addressDetail: string;
  /** @description 地址名称 */
  addressName: string;
  /** @description 地址类型 */
  addressTypeName: string;
  /** @description 添加人 */
  createName: string;
  /**
   * Format: int64
   * @description 添加时间
   */
  createTime: number;
  /** @description 终点地址名称 */
  endAddressName: string;
  /** 点 */
  endPoint: {
    /** @description 详情地址 */
    addressDetail: string;
    /**
     * Format: double
     * @description 纬度
     */
    latitude: number;
    /**
     * Format: double
     * @description 经度
     */
    longitude: number;
    /**
     * Format: int32
     * @description 标记点类型, 0途经点 1起点 2终点
     */
    pointType: number;
  };
  /**
   * Format: int64
   * @description 主键
   */
  id: number;
  /** @description 标签 */
  labelName: string;
  /**
   * Format: double
   * @description 纬度
   */
  lat: number;
  /**
   * Format: double
   * @description 经度
   */
  lng: number;
  /** @description 途经点 */
  passingPoints: {
    /** @description 详情地址 */
    addressDetail: string;
    /**
     * Format: double
     * @description 纬度
     */
    latitude: number;
    /**
     * Format: double
     * @description 经度
     */
    longitude: number;
    /**
     * Format: int32
     * @description 标记点类型, 0途经点 1起点 2终点
     */
    pointType: number;
  }[];
  /** @description 添加人手机号 */
  phone: string;
  /**
   * Format: int32
   * @description 点类型1点2线
   */
  pointType: number;
  /** @description 区域 */
  regionName: string;
  /** 点 */
  startPoint: {
    /** @description 详情地址 */
    addressDetail: string;
    /**
     * Format: double
     * @description 纬度
     */
    latitude: number;
    /**
     * Format: double
     * @description 经度
     */
    longitude: number;
    /**
     * Format: int32
     * @description 标记点类型, 0途经点 1起点 2终点
     */
    pointType: number;
  };
}
/** 地址标记 */
export interface GetPointDetailV1UsingPOSTResult {
  /** @description 地址名称 */
  addressName: string;
  /** @description 地址类型 */
  addressTypeName: string;
  /** @description 添加人 */
  createName: string;
  /**
   * Format: int64
   * @description 添加时间
   */
  createTime: number;
  /**
   * Format: int64
   * @description 主键
   */
  id: number;
  /** @description 标签集合 */
  labelNames: string[];
  /** 地址线路 */
  markLine: {
    /** @description 终点地址名称 */
    endAddressDetail: string;
    /** 点 */
    endPoint: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
    /** @description 终点区域 */
    endRegionName: string;
    /** @description 途经点 */
    passingPoints: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    }[];
    /** @description 起始详细地址 */
    startAddressDetail: string;
    /** 点 */
    startPoint: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
    /** @description 起始区域 */
    startRegionName: string;
  };
  /** 标记地址点 */
  markPoint: {
    /** @description 详细地址 */
    addressDetail: string;
    /** @description 地址名称 */
    addressName: string;
    /**
     * Format: int32
     * @description 地址类型，1黑名单，2白名单
     */
    addressType: number;
    /** @description 添加人 */
    createName: string;
    /**
     * Format: int64
     * @description 添加时间
     */
    createTime: number;
    /**
     * Format: int64
     * @description 标记点ID
     */
    id: number;
    /** @description 标签名字数组 */
    labelNames: string[];
    /** 点 */
    point: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
    /** @description 起始区域 */
    regionName: string;
  };
  /** @description 添加人手机号 */
  phone: string;
  /**
   * Format: int32
   * @description 点类型1点2线
   */
  pointType: number;
}
/** PageResult«地址标记列表» */
export interface ListMarkPointUsingPOSTResult {
  data: {
    /** @description 详细地址 */
    addressDetail: string;
    /** @description 地址名称 */
    addressName: string;
    /** @description 地址类型 */
    addressTypeName: string;
    /** @description 添加人 */
    createName: string;
    /**
     * Format: int64
     * @description 添加时间
     */
    createTime: number;
    /** @description 终点地址名称 */
    endAddressName: string;
    /** 点 */
    endPoint: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
    /**
     * Format: int64
     * @description 主键
     */
    id: number;
    /** @description 标签 */
    labelName: string;
    /**
     * Format: double
     * @description 纬度
     */
    lat: number;
    /**
     * Format: double
     * @description 经度
     */
    lng: number;
    /** @description 途经点 */
    passingPoints: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    }[];
    /** @description 添加人手机号 */
    phone: string;
    /**
     * Format: int32
     * @description 点类型1点2线
     */
    pointType: number;
    /** @description 区域 */
    regionName: string;
    /** 点 */
    startPoint: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
  }[];
  /** Format: int64 */
  total: number;
}
/** 监控标记列表入参 */
export interface ListMarkPointUsingPOSTData {
  /** @description 详细地址 */
  addressDetail: string;
  /**
   * Format: int32
   * @description 地址类型0全部1黑名单2白名单
   */
  addressType: number;
  /**
   * Format: int64
   * @description 结束时间
   */
  endTime: number;
  /** @description 查询关键字详细地址、地址名称、添加人 */
  keyword: string;
  /** @description 标签code */
  labelCode: string;
  /** @description 标签名称 */
  labelName: string[];
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /**
   * Format: int64
   * @description 开始时间
   */
  startTime: number;
}
/** PageResult«地址标记» */
export interface ListMarkPointV1UsingPOSTResult {
  data: {
    /** @description 地址名称 */
    addressName: string;
    /** @description 地址类型 */
    addressTypeName: string;
    /** @description 添加人 */
    createName: string;
    /**
     * Format: int64
     * @description 添加时间
     */
    createTime: number;
    /**
     * Format: int64
     * @description 主键
     */
    id: number;
    /** @description 标签集合 */
    labelNames: string[];
    /** 地址线路 */
    markLine: {
      /** @description 终点地址名称 */
      endAddressDetail: string;
      /** 点 */
      endPoint: {
        /** @description 详情地址 */
        addressDetail: string;
        /**
         * Format: double
         * @description 纬度
         */
        latitude: number;
        /**
         * Format: double
         * @description 经度
         */
        longitude: number;
        /**
         * Format: int32
         * @description 标记点类型, 0途经点 1起点 2终点
         */
        pointType: number;
      };
      /** @description 终点区域 */
      endRegionName: string;
      /** @description 途经点 */
      passingPoints: {
        /** @description 详情地址 */
        addressDetail: string;
        /**
         * Format: double
         * @description 纬度
         */
        latitude: number;
        /**
         * Format: double
         * @description 经度
         */
        longitude: number;
        /**
         * Format: int32
         * @description 标记点类型, 0途经点 1起点 2终点
         */
        pointType: number;
      }[];
      /** @description 起始详细地址 */
      startAddressDetail: string;
      /** 点 */
      startPoint: {
        /** @description 详情地址 */
        addressDetail: string;
        /**
         * Format: double
         * @description 纬度
         */
        latitude: number;
        /**
         * Format: double
         * @description 经度
         */
        longitude: number;
        /**
         * Format: int32
         * @description 标记点类型, 0途经点 1起点 2终点
         */
        pointType: number;
      };
      /** @description 起始区域 */
      startRegionName: string;
    };
    /** 标记地址点 */
    markPoint: {
      /** @description 详细地址 */
      addressDetail: string;
      /** @description 地址名称 */
      addressName: string;
      /**
       * Format: int32
       * @description 地址类型，1黑名单，2白名单
       */
      addressType: number;
      /** @description 添加人 */
      createName: string;
      /**
       * Format: int64
       * @description 添加时间
       */
      createTime: number;
      /**
       * Format: int64
       * @description 标记点ID
       */
      id: number;
      /** @description 标签名字数组 */
      labelNames: string[];
      /** 点 */
      point: {
        /** @description 详情地址 */
        addressDetail: string;
        /**
         * Format: double
         * @description 纬度
         */
        latitude: number;
        /**
         * Format: double
         * @description 经度
         */
        longitude: number;
        /**
         * Format: int32
         * @description 标记点类型, 0途经点 1起点 2终点
         */
        pointType: number;
      };
      /** @description 起始区域 */
      regionName: string;
    };
    /** @description 添加人手机号 */
    phone: string;
    /**
     * Format: int32
     * @description 点类型1点2线
     */
    pointType: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** 监控标记v1列表入参 */
export interface ListMarkPointV1UsingPOSTData {
  /**
   * Format: int32
   * @description 地址类型0全部1黑名单2白名单
   */
  addressType: number;
  /**
   * Format: int64
   * @description 结束时间
   */
  endTime: number;
  /** @description 查询关键字详细地址、地址名称、添加人 */
  keyword: string;
  /** @description 标签codes */
  labelCodes: string[];
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /**
   * Format: int64
   * @description 开始时间
   */
  startTime: number;
}
/** PageResult«用户列表» */
export interface ListUserPhoneUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /**
     * Format: int32
     * @description 主键
     */
    id: number;
    /** @description 手机号 */
    mobile: string;
    /** @description 姓名 */
    name: string;
    /**
     * Format: int32
     * @description 状态0全部1已启用2已暂停
     */
    status: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** 手机号查询 */
export interface ListUserPhoneUsingPOSTData {
  /** @description 手机号 */
  mobile: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /**
   * Format: int32
   * @description 状态0全部1已启用2已暂停
   */
  status: number;
}
/** 工具用户 */
export interface SavePhoneUsingPOSTData {
  /** @description 手机号 */
  mobile: string;
  /** @description 姓名 */
  name: string;
}
/** 手机号启用停用 */
export interface SwitchStatusPhoneUsingPOSTData {
  /**
   * Format: int32
   * @description 记录主键
   */
  id: number;
  /**
   * Format: int32
   * @description 状态1启用2停用
   */
  status: number;
}
/** ChangeRiteReq */
export interface ChangeRiteReq {
  /** @description 调整原因 */
  changeReason: string;
  /** @description 报号运单id */
  enrollNumberIds: number[];
  /** @description 信息服务费留存比例(%) */
  informationRetentionRate: string;
}
/** PageResult«EnrollListRsp» */
export interface RefundListUsingPOSTResult {
  data: {
    /** @description 经纪人 */
    agentUserName: string;
    /** @description 经纪人手机号 */
    agentUserPhone: string;
    /** @description 调整比例原因 */
    changeReason: string;
    /** @description 报号码 */
    enrollCode: string;
    /**
     * Format: int64
     * @description 报号ID
     */
    enrollNumberId: number;
    /**
     * Format: int64
     * @description 运单完结时间
     */
    finishDeadTime: number;
    /** @description 待付经纪人信息费 */
    informationDisburseFee: string;
    /** @description 总信息费 */
    informationFee: string;
    /** @description 收取信息服务费 */
    informationRetentionFee: string;
    /** @description 收取信息服务费留存比例 */
    informationRetentionRate: string;
    /** @description 代收开票费 */
    invoiceFee: string;
    /** @description 运单号 */
    orderNumber: string;
    /**
     * Format: int64
     * @description 支付时间
     */
    payTime: number;
    /**
     * Format: int64
     * @description 退款时间
     */
    refundTime: number;
    /**
     * Format: int64
     * @description 提交复核时间
     */
    reviewTime: number;
    /** @description 是否封签 */
    seal: boolean;
    /** @description 采购订单 */
    tradeSn: string;
    /** @description 贸易订单编号 */
    tradeSnKey: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** RefundListReq */
export interface RefundListReq {
  /** @description 经纪人 */
  agentUserName: string;
  /** @description 经纪人手机号 */
  agentUserPhone: string;
  /** @description 报号码 */
  enrollCode: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /**
   * Format: date-time
   * @description 支付结束时间
   */
  payEndTime: string;
  /**
   * Format: date-time
   * @description 支付开始时间
   */
  payStartTime: string;
  /**
   * Format: date-time
   * @description 退款结束时间
   */
  refundEndTime: string;
  /**
   * Format: date-time
   * @description 退款开始时间
   */
  refundStartTime: string;
  /** Format: int32 */
  start: number;
  /** @description 采购订单 */
  tradeSn: string;
}
/** SubmitEnrollReq */
export interface SubmitEnrollReq {
  /** @description 报号运单id */
  enrollNumberIds: number[];
}
/** ReviewListReq */
export interface ReviewListReq {
  /** @description 经纪人 */
  agentUserName: string;
  /** @description 经纪人手机号 */
  agentUserPhone: string;
  /** @description 报号码 */
  enrollCode: string;
  /** @description 运单 */
  orderNumber: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /**
   * Format: date-time
   * @description 提交复核结束时间
   */
  reviewEndTime: string;
  /**
   * Format: date-time
   * @description 提交复核开始时间
   */
  reviewStartTime: string;
  /** Format: int32 */
  start: number;
  /** @description 采购订单 */
  tradeSn: string;
}
/** MonitorAddressWhiteListAddReq */
export interface MonitorAddressWhiteListAddReq {
  /** @description 白名单名称 */
  listName: string;
}
/** MonitorAddressWhiteListDeleteReq */
export interface MonitorAddressWhiteListDeleteReq {
  /** @description 地址白名单标识 */
  id: string;
}
/** PageResult«MonitorAddressWhiteListRsp» */
export interface ListUsingPOST_4Result {
  data: {
    /** @description 创建人 */
    createName: string;
    /**
     * Format: int64
     * @description 唯一标识
     */
    id: number;
    /** @description 白名单名称 */
    listName: string;
    /**
     * Format: date-time
     * @description 创建时间
     */
    rowCreateTime: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** MonitorAddressWhiteListQueryReq */
export interface MonitorAddressWhiteListQueryReq {
  /** @description 白名单名称 */
  listName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** 查询异常点 */
export interface ListAbnormalPointUsingPOSTResult {
  /** @description 异常点集合 */
  abnormalPoints: {
    /**
     * Format: int32
     * @description 点数量
     */
    abnormalPointNum: number;
    /** 点 */
    point: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
  }[];
  /** @description 标记点集合 */
  markPointRsp: {
    /** @description 详细地址 */
    addressDetail: string;
    /** @description 地址名称 */
    addressName: string;
    /**
     * Format: int32
     * @description 地址类型，1黑名单，2白名单
     */
    addressType: number;
    /** @description 添加人 */
    createName: string;
    /**
     * Format: int64
     * @description 添加时间
     */
    createTime: number;
    /**
     * Format: int64
     * @description 标记点ID
     */
    id: number;
    /** @description 标签名字数组 */
    labelNames: string[];
    /** 点 */
    point: {
      /** @description 详情地址 */
      addressDetail: string;
      /**
       * Format: double
       * @description 纬度
       */
      latitude: number;
      /**
       * Format: double
       * @description 经度
       */
      longitude: number;
      /**
       * Format: int32
       * @description 标记点类型, 0途经点 1起点 2终点
       */
      pointType: number;
    };
    /** @description 起始区域 */
    regionName: string;
  }[];
}
/** 区域查询 */
export interface ListAbnormalPointUsingPOSTData {
  /** @description 结束点纬度 */
  endLat: number;
  /** @description 结束点经度 */
  endLng: number;
  /** @description 开始点纬度 */
  startLat: number;
  /** @description 开始点经度 */
  startLng: number;
}
/** BaseResult«Void» */
export interface InvoiceDataUsingPOSTResult {
  /** Format: int32 */
  code: number;

  msg: string;
}
/** PageResult«EtcLineRsp» */
export interface ListLineUsingPOSTResult {
  data: {
    /**
     * Format: int64
     * @description 创建时间
     */
    createTime: number;
    /** @description 创建人 */
    creator: string;
    /** @description 司机姓名 */
    driverName: string;
    /** @description 装货地 */
    loadAddress: string;
    /** @description 装货城市 */
    loadCity: string;
    /** @description 卸货地 */
    unloadAddress: string;
    /** @description 卸货城市 */
    unloadCity: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** EtcLineReq */
export interface EtcLineReq {
  /** @description 司机姓名 */
  driverName: string;
  /** @description 装货地 */
  loadAddress: string;
  /** @description 装货地市 */
  loadCity: string;
  /** @description 装货地省 */
  loadProvince: string;
  /** @description 装货地区 */
  loadRegion: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 卸货地 */
  unloadAddress: string;
  /** @description 卸货地市 */
  unloadCity: string;
  /** @description 卸货地省 */
  unloadProvince: string;
  /** @description 卸货地区 */
  unloadRegion: string;
}
/** 字典类型 */
export interface ListGisAddressLabelDicUsingPOSTData {
  /**
   * Format: int32
   * @description 标签类型0全部1:黑名单2:白名单
   */
  type: number;
}
/** gis工具用户信息返回对象 */
export interface LoginByAuthCodeUsingPOSTResult {
  /** @description 登陆账号 */
  account: string;
  /** @description 登陆姓名 */
  name: string;
  /** @description token */
  token: string;
}
/** 打点工具手机号登陆 */
export interface LoginByAuthCodeUsingPOSTData {
  /** @description 登陆验证码 */
  authCode: string;
  /** @description 手机号 */
  mobile: string;
}
/** MengWangSmsPushResponse */
export interface MengWangSmsPushResponse {
  cmd: string;
  /** Format: int32 */
  result: number;
  /** Format: int32 */
  seqid: number;
}
/** MengWangSmsPushRequest */
export interface MengWangSmsPushRequest {
  cmd: string;

  mos: {
    content: string;

    mobile: string;

    rtime: string;
  }[];

  pwd: string;
  /** Format: int32 */
  seqid: number;

  timestamp: string;

  userid: string;
}
/** 手机号 */
export interface SendAuthCodeUsingPOSTData {
  /** @description 手机号 */
  mobile: string;
}
/** CustomerApiRsp */
export interface DetailUsingPOSTResult {
  /** @description 已关联接口数据值数组 */
  apiItems: number[];
  /** @description appKey */
  appKey: string;
  /** @description appParam */
  appParam: string;
  /** @description 企业编码（渠道ID） */
  customerCode: string;
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
  /** @description 企业名称 */
  customerName: string;
  /** @description 接口数据树形结构 */
  items: {
    /**
     * Format: int32
     * @description 值
     */
    apiType: number;
    /** @description 子项 */
    children: {}[];
    /** @description 文本 */
    label: string;
  }[];
  /** @description secretKey */
  secretKey: string;
}
/** CustomerApiDetailReq */
export interface CustomerApiDetailReq {
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
}
/** CustomerApiSaveReq */
export interface CustomerApiSaveReq {
  /** @description 接口类型数组 */
  apiTypes: number[];
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
}
/** CustomerCompanyRelationCancelReq */
export interface CustomerCompanyRelationCancelReq {
  /**
   * Format: int64
   * @description 企业关联数据ID
   */
  id: number;
}
/** PageResult«CustomerCompanyRelationRsp» */
export interface PageUsingPOSTResult {
  data: {
    /**
     * Format: int32
     * @description 企业认证状态1初始，2未认证，3审核中，4认证通过，5认证取消
     */
    companyCertifyStatus: number;
    /** @description 企业认证状态描述文本 */
    companyCertifyStatusText: string;
    /** @description 企业编码4开头 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /** @description 企业手机号 */
    companyPhone: string;
    /**
     * Format: date-time
     * @description 关联时间
     */
    createTime: string;
    /** @description 关联时间文本 */
    createTimeText: string;
    /** @description 企业编码2开头 */
    holderCode: string;
    /**
     * Format: int64
     * @description 数据ID
     */
    id: number;
    /** @description 统一社会信用编码 */
    licenseCode: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** CustomerCompanyRelationPageReq */
export interface CustomerCompanyRelationPageReq {
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResult«CustomerCompanyRsp» */
export interface QueryUsingPOST_1Result {
  data: {
    /** @description 企业编码4开头 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /** @description 企业编码2开头 */
    holderCode: string;
    /** @description 统一社会信用编码 */
    licenseCode: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** CustomerCompanyRelationQueryReq */
export interface CustomerCompanyRelationQueryReq {
  /** @description 企业名称 */
  companyName: string;
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
  /** @description 企业编码2开头 */
  holderCode: string;
  /** @description 统一社会信用编码 */
  licenseCode: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** CustomerCompanyRelationSaveReq */
export interface CustomerCompanyRelationSaveReq {
  /** @description 企业编码4开头集合 */
  companyCodes: string[];
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
}
/** CustomerInfoEnabledReq */
export interface CustomerInfoEnabledReq {
  /** @description 是否启用 */
  enabled: boolean;
  /**
   * Format: int64
   * @description 数据ID
   */
  id: number;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResult«CustomerInfoRsp» */
export interface PageUsingPOST_1Result {
  data: {
    /** @description appKey */
    appKey: string;
    /** @description appParam */
    appParam: string;
    /** @description 企业编码 */
    customerCode: string;
    /** @description 描述 */
    customerDesc: string;
    /** @description 企业名称 */
    customerName: string;
    /** @description 企业手机号 */
    customerPhone: string;
    /**
     * Format: int32
     * @description 企业类型
     */
    customerType: number;
    /** @description 是否启用 */
    enabled: boolean;
    /**
     * Format: int64
     * @description 数据ID
     */
    id: number;
    /**
     * Format: int32
     * @description 关联企业账号数
     */
    relationCompany: number;
    /** @description secretKey */
    secretKey: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** CustomerInfoQueryReq */
export interface CustomerInfoQueryReq {
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** CustomerInfoSaveReq */
export interface CustomerInfoSaveReq {
  /** @description appKey */
  appKey: string;
  /** @description appParam */
  appParam: string;
  /** @description 企业编码 */
  customerCode: string;
  /** @description 描述 */
  customerDesc: string;
  /** @description 企业名称 */
  customerName: string;
  /** @description 企业手机号 */
  customerPhone: string;
  /**
   * Format: int32
   * @description 企业类型
   */
  customerType: number;
  /** @description secretKey */
  secretKey: string;
}
/** CustomerSubscribeRsp */
export interface DetailUsingPOST_1Result {
  /** @description appKey */
  appKey: string;
  /** @description appParam */
  appParam: string;
  /** @description 企业编码（渠道ID） */
  customerCode: string;
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
  /** @description 企业名称 */
  customerName: string;
  /** @description 订阅数据树形结构 */
  items: {
    /** @description 子项 */
    children: {}[];
    /** @description 文本 */
    label: string;
    /**
     * Format: int32
     * @description 值
     */
    subscribeType: number;
  }[];
  /**
   * Format: int32
   * @description 运单推送类型（0：所有运单，10：仅贸易运单）
   */
  pushOrderType: number;
  /** @description 企业推送地址 */
  pushUrl: string;
  /** @description secretKey */
  secretKey: string;
  /** @description 已订阅数据值数组 */
  subscribeItems: number[];
}
/** CustomerSubscribeDetailReq */
export interface CustomerSubscribeDetailReq {
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
}
/** CustomerSubscribeSaveReq */
export interface CustomerSubscribeSaveReq {
  /**
   * Format: int64
   * @description 平台客户数据ID
   */
  customerId: number;
  /**
   * Format: int32
   * @description 运单推送类型（0：所有运单，10：仅贸易运单）
   */
  pushOrderType: number;
  /** @description 推送地址 */
  pushUrl: string;
  /** @description 订阅类型数组 */
  subscribeTypes: number[];
}
/** CustomerInfoUpdateReq */
export interface CustomerInfoUpdateReq {
  /** @description appKey */
  appKey: string;
  /** @description appParam */
  appParam: string;
  /** @description 企业编码 */
  customerCode: string;
  /** @description 描述 */
  customerDesc: string;
  /** @description 企业名称 */
  customerName: string;
  /** @description 企业手机号 */
  customerPhone: string;
  /**
   * Format: int64
   * @description 数据ID
   */
  id: number;
  /** @description secretKey */
  secretKey: string;
}
/** OrderTrackCopyReq */
export interface OrderTrackCopyReq {
  /** @description 企业名称 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;

  loadAddressName: string;
  /**
   * Format: int64
   * @description 开始时间
   */
  orderBeginTime: number;
  /**
   * Format: int64
   * @description 截止时间
   */
  orderEndTime: number;

  referenceOrderNumber: string;

  unloadAddressName: string;
}
/** PageResult«运单轨迹小工具操作记录返回体» */
export interface OrderTrackCopyRecordQueryUsingPOSTResult {
  data: {
    /** @description 企业名称 */
    companyName: string;
    /** Format: int64 */
    id: number;

    loadAddressName: string;
    /** @description 操作人姓名 */
    operatorName: string;
    /**
     * Format: date-time
     * @description 操作时间
     */
    operatorTime: string;
    /**
     * Format: date-time
     * @description 开始时间
     */
    orderBeginTime: string;
    /** Format: int32 */
    orderCount: number;
    /**
     * Format: date-time
     * @description 截止时间
     */
    orderEndTime: string;

    referenceOrderNumber: string;

    unloadAddressName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** OrderTrackCopyRecordQueryReq */
export interface OrderTrackCopyRecordQueryReq {
  /** @description 企业名称 */
  companyName: string;

  loadAddressName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** @description 参考运单号 */
  referenceOrderNumber: string;
  /** Format: int32 */
  start: number;

  unloadAddressName: string;
}
/** StockDetailRsp */
export interface DetailUsingPOST_2Result {
  /** @description 是否经纪人货源 */
  agentStock: boolean;
  /** @description 是否预约模式：是，否 */
  allowAppointmentDesc: string;
  /** @description 是否自动确认司机：是，否 */
  autoCheckDesc: string;
  /** @description 是否自动更新货源：是，否 */
  autoUpdateDesc: string;
  /**
   * Format: int32
   * @description 允许收单修改，0：否 1：是
   */
  canntReceiveRule: number;
  /** @description 是车队长货源显示代收比率，不是显示否 */
  captainCollectFreightDesc: string;
  /** @description 是否车队长货源：true-是 */
  captainFlag: boolean;
  /** @description 货源数量 */
  carNumber: string;
  /** @description 承运公司 */
  carrierCompanyName: string;
  /** @description 企业编码 */
  companyCode: string;
  /** @description 企业名称 */
  companyName: string;
  /** @description 每日自动结束时间 */
  dailyAutoEndTime: string;
  /** @description 亏扣单价 */
  deductionUnitPrice: string;
  /**
   * Format: int32
   * @description 司机上传装货磅单开关，0：无要求 1：必传
   */
  driverLoadPound: number;
  /**
   * Format: int32
   * @description 司机填充装货吨位开关，0：无要求 1：必传
   */
  driverLoadUnit: number;
  /**
   * Format: int32
   * @description 司机上传卸货磅单开关，0：无要求 1：必传
   */
  driverUnloadPound: number;
  /**
   * Format: int32
   * @description 司机填充卸货吨位开关，0：无要求 1：必传
   */
  driverUnloadUnit: number;
  /** @description 运费计划列表 */
  freightPlanList: {
    /** @description 运费计划生效时间，例如2020-11-28 15:44:30 */
    freightPlanEffectDate: string;
    /** @description 计划运价，单位：元/吨 */
    planUnitPrice: number;
  }[];
  /** @description 发货人 */
  holderName: string;
  /** @description 发货人电话 */
  holderPhone: string;
  /**
   * Format: int32
   * @description 是否货源险签订
   */
  isInsurance: number;
  /** @description 装货详细地址 */
  loadAddressDetail: string;
  /** @description 装货地址名 */
  loadAddressName: string;
  /** @description 装货日期 */
  loadDate: string;
  /** @description 渣土任务单截止时间 */
  muckDeadline: string;
  /** @description 支付方式:预付，账期 */
  payWayDesc: string;
  /** @description 平台服务费 */
  platformServiceFee: string;
  /** @description 优惠补贴 */
  preferentialSubsidies: string;
  /** @description 运费总价, 例如400，默认单位是元 */
  price: string;
  /** @description 发布时间，例如2020-11-28 15:44:30 */
  publishDate: string;
  /** @description 发布对象 */
  publishLocationDesc: string;
  /**
   * Format: int32
   * @description 发布对象类别：0 货源大厅，1 我的物流圈，2 非公开货源
   */
  publishLocationDescType: number;
  /** @description 备注 */
  remark: string;
  /** @description 收单规则 */
  ruleName: string;
  /** @description 分享链接 */
  shareLink: string;
  /** @description 货源编码 */
  stockCode: string;
  /** @description 货源联系人 */
  stockContactPhone: string;
  /** @description 货源截止日期，例如2020-11-28 15:44:30 */
  stockDeadline: string;
  /** @description 一级货物类型 */
  stockFirstName: string;
  /** @description 货源险协议操作记录 */
  stockInsuranceIntentionOperationLogList: {
    /** Format: date-time */
    createTime: string;
    /** Format: int32 */
    operateType: number;
    /** Format: int64 */
    stockInsuranceRetId: number;

    stockInsuranceUrl: string;
    /** Format: date-time */
    updateTime: string;
  }[];
  /** @description 货源险签订协议 */
  stockInsuranceRelList: {
    /** Format: date-time */
    createTime: string;
    /** Format: int64 */
    insuranceId: number;
    /** Format: int32 */
    state: number;

    stockCode: string;
    /** Format: int64 */
    stockInsuranceRelId: number;

    stockInsuranceUrl: string;

    userId: string;

    userName: string;
  }[];
  /** @description 货物类型名称 */
  stockKindName: string;
  /** @description 发货单号 */
  stockOrderNo: string;
  /** @description 货源状态:已发布 */
  stockStatusDesc: string;
  /** @description 货源类型 */
  stockTypeDesc: string;
  /** @description 运费单价，例如：20元/吨 */
  stockUnitPrice: string;
  /** @description 贸易订单号 */
  tradeOrderNo: string;
  /** @description 运费支付方案 */
  tradePayRecordList: {
    /** @description 支付费用名称：油费、ETC、现金 */
    costsName: string;
    /** @description 装货金额 */
    loadCosts: number;
    /** @description 回单付款金额 */
    returnOrderCosts: number;
    /** @description 总金额 */
    totalCosts: number;
    /** @description 卸货金额 */
    unloadCosts: number;
  }[];
  /** @description 运输限时 */
  transportationTime: string;
  /** @description 重量/体积，例如：20吨 */
  unit: string;
  /** @description 卸货详细地址 */
  unloadAddressDetail: string;
  /** @description 卸货地址名 */
  unloadAddressName: string;
  /** @description 车辆长度 */
  vehicleLengthDesc: string;
  /** @description 车型 */
  vehicleTypeDesc: string;
  /** @description 是否任务单模式：是，否 */
  workStockDesc: string;
}
/** StockCodeQueryReq */
export interface StockCodeQueryReq {
  /** @description 货源编码 */
  stockCode: string;
}
/** PageResult«StockReleaseDetailRsp» */
export interface ReleaseDetailUsingPOSTResult {
  data: {
    /** @description 名称 */
    designation: string;
    /** @description 手机号 */
    phoneNumber: string;
    /** @description 对象 */
    target: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** PageResult«StockListRsp» */
export interface ListStockUsingPOSTResult {
  data: {
    /** @description 是否经纪人货源 */
    agentStock: boolean;
    /** @description 是否预约模式：是，否 */
    allowAppointmentDesc: string;
    /** @description 货源数量 */
    carNumber: string;
    /** @description 企业编码 */
    companyCode: string;
    /** @description 企业名称 */
    companyName: string;
    /** @description 发货人 */
    holderName: string;
    /** @description 发货人电话 */
    holderPhone: string;
    /** @description 装货地址名 */
    loadAddressName: string;
    /** @description 支付方式:预付，账期 */
    payWayDesc: string;
    /** @description 运费总价, 例如400，默认单位是元 */
    price: string;
    /** @description 发布时间，例如2020-11-28 15:44:30 */
    publishDate: string;
    /** @description 分享链接 */
    shareLink: string;
    /** @description 货源编码 */
    stockCode: string;
    /** @description 货源联系人 */
    stockContactPhone: string;
    /** @description 货源截止日期，例如2020-11-28 15:44:30 */
    stockDeadline: string;
    /** @description 一级货物类型 */
    stockFirstName: string;
    /** @description 货物类型名称 */
    stockKindName: string;
    /** @description 货源状态:已发布 */
    stockStatusDesc: string;
    /** @description 运费单价，例如：20元/吨 */
    stockUnitPrice: string;
    /** @description 重量/体积，例如：20吨 */
    unit: string;
    /** @description 卸货地址名 */
    unloadAddressName: string;
    /** @description 是否任务单模式：是，否 */
    workStockDesc: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** StockListQueryReq */
export interface StockListQueryReq {
  /** @description 企业编码 */
  companyCodeList: string[];
  /** @description 装货地址编码 */
  loadAddressCode: string;
  /** @description 装货地址名 */
  loadAddressName: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** @description 付款方式，传编码 */
  payWay: string;
  /** @description 装货区域市 */
  sourceCityCode: string;
  /** @description 装货区域区 */
  sourceCountyCode: string;
  /** @description 装货区域省 */
  sourceProvinceCode: string;
  /** Format: int32 */
  start: number;
  /** @description 货源编码，用逗号分隔 */
  stockCode: string;
  /** @description 货源状态，传编码 */
  stockStatus: string;
  /** @description 卸货区域市 */
  targetCityCode: string;
  /** @description 卸货区域区 */
  targetCountyCode: string;
  /** @description 卸货区域省 */
  targetProvinceCode: string;
  /** @description 卸货地址编码 */
  uploadAddressCode: string;
  /** @description 卸货地址名 */
  uploadAddressName: string;
}
/** @description 返回的具体数据 */
export interface ListUsingPOST_5Result {
  authInfo: string;
  /**
   * Format: date-time
   * @description 创建时间
   */
  createTime: string;

  insuranceCode: string;
  /**
   * Format: int64
   * @description 货运险数据主键
   */
  insuranceId: number;
  /** @description 货运险数据名称 */
  insuranceName: string;

  insuranceUrl: string;
  /**
   * Format: int32
   * @description 是否展示
   */
  showFlag: number;
  /** Format: int32 */
  showSort: number;
  /** @description 展示URL */
  showUrl: string;
  /**
   * Format: date-time
   * @description 修改时间
   */
  updateTime: string;
}
[];
/** StockInsuranceListReq */
export interface StockInsuranceListReq {}
/** InsuranceIntentionSignInfoRsp */
export interface QueryStockProtocolUrlUsingPOST_1Result {
  /** @description 已签订的意向协议页面URL */
  redirectUrl: string;
  /** @description 货源编码 */
  stockCode: string;
}
/** InsuranceIntentionSignInfoQueryReq */
export interface InsuranceIntentionSignInfoQueryReq {
  /**
   * Format: int64
   * @description 保险协议关联id
   */
  insuranceRelId: number;
  /** @description 货源编码 */
  stockCode: string;
}
/** @description 返回的具体数据 */
export interface EntityResult {}
/** StockInsuranceUpdateReq */
export interface StockInsuranceUpdateReq {
  /** @description 内容 */
  authInfo: string;

  insuranceCode: string;
  /**
   * Format: int64
   * @description 货运险主键id
   */
  insuranceId: number;

  insuranceName: string;

  insuranceUrl: string;
  /**
   * Format: int32
   * @description 是否展示
   */
  showFlag: number;
  /** Format: int32 */
  showSort: number;
  /** @description 展示图片 */
  showUrl: string;
}
/** @description 返回的具体数据 */
export interface GetSysDictUsingPOSTResult {
  label: string;
  /** Format: int32 */
  sort: number;

  type: string;

  value: string;
}
[];
/** @description 返回的具体数据 */
export interface ListPermissonUsingGETResult {
  children: {}[];

  description: string;

  domainCode: string;

  id: string;

  interPermission: string;
  /** Format: int32 */
  isDeleted: number;
  /** Format: int32 */
  isDisabled: number;

  isDisabledStr: string;

  menuColor: string;

  menuIcon: string;

  menuName: string;

  menuPermission: string;

  menuTarget: string;

  menuTitle: string;
  /** Format: int32 */
  menuType: number;

  menuTypeStr: string;

  menuUri: string;

  moduleCode: string;

  parentId: string;

  parentIds: string;
  /** Format: date-time */
  rowCreateTime: string;
  /** Format: date-time */
  rowUpdateTime: string;
  /** Format: int32 */
  treeLevel: number;
  /** Format: int32 */
  treeSort: number;
}
[];
/** @description 返回的具体数据 */
export interface ListRegionUsingPOSTResult {
  /** @description 是否有子节点 */
  hasChildren: boolean;
  /**
   * Format: double
   * @description 中心纬度，WGS84坐标系下
   */
  latitude: number;
  /**
   * Format: double
   * @description 中心经度，WGS84坐标系下
   */
  longitude: number;
  /** @description 城市的简化名称 */
  nickName: string;
  /** @description 城市简化名称拼音,例如：北京 bei,jing */
  nickNameSpell: string;
  /** @description 上级code */
  parentCode: string;
  /** @description 上级名称 */
  parentName: string;
  /**
   * Format: double
   * @description 面积
   */
  regionArea: number;
  /** @description 行政区划全局唯一标识 */
  regionCode: string;
  /** @description 区划级别 */
  regionLevel: string;
  /** @description 备注信息 */
  regionMemo: string;
  /** @description 区划名称,如：武汉市 */
  regionName: string;
  /** @description 每个汉字的拼音用逗号隔开,例如：北京市 bei,jing,shi */
  regionNameSpell: string;
  /** @description 电话区号 */
  regionPhoneCode: string;
  /**
   * Format: double
   * @description 人口数量
   */
  regionPopulation: number;
  /** @description 邮政编码 */
  regionPostCode: string;
  /**
   * Format: int32
   * @description 同一级别，数字越大，排序越靠后
   */
  sortIndex: number;
}
[];
/** RegionReq */
export interface RegionReq {
  regioncode: string;
}
/** 登陆用户信息 */
export interface GetUserUsingGETResult {
  /** @description cas用户id */
  id: string;
  /** @description 登陆code */
  loginName: string;
  /** @description 用户邮箱 */
  mail: string;
  /** @description 姓名 */
  name: string;
}
/** @description 返回的具体数据 */
export interface ListWechatAppUsingPOSTResult {
  /** @description 微信应用id */
  appId: string;
  /** @description 微信应用名称 */
  appName: string;
}
[];
/** PageResult«TemplateSendRsp» */
export interface ListTemplateUsingPOSTResult {
  data: {
    /** @description 公众号名称 */
    appName: string;
    /** @description 内容 */
    content: string;
    /**
     * Format: int64
     * @description 消息主键
     */
    id: number;
    /**
     * Format: int32
     * @description 阅读人数
     */
    readNum: number;
    /**
     * Format: int64
     * @description 发送时间
     */
    sendTime: number;
    /** @description 模板ID */
    templateId: string;
    /** @description 标题 */
    title: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** TemplateReq */
export interface TemplateReq {
  /** @description 公众号id */
  appId: string;
  /** @description 模板内容 */
  content: string;
  /**
   * Format: int64
   * @description 发送结束日期
   */
  endTime: number;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /**
   * Format: int64
   * @description 发送开始日期
   */
  startTime: number;
  /** @description 模版编号ID */
  templateId: string;
  /** @description 标题 */
  title: string;
}
/** TemplateSendReq */
export interface TemplateSendReq {
  /** @description 公众号ID */
  appId: string;
  /** @description 发送消息需要的参数json串 */
  params: string;
  /** @description 消息模板ID */
  templateId: string;
  /** @description 模板链接 */
  url: string;
}
/** TemplateDetailRsp */
export interface GetTemplateExampleUsingPOSTResult {
  /** @description 模板内容 */
  content: string;
  /** @description 行业分类 */
  deputyIndustry: string;
  /** @description 模板样例 */
  example: string;
  /** @description 基本行业 */
  primaryIndustry: string;
  /** @description 模板ID */
  templateId: string;
  /** @description 标题 */
  title: string;
  /** @description 模板变量集合 */
  variables: string[];
}
/** TemplateIdReq */
export interface TemplateIdReq {
  /** @description 应用id */
  appId: string;
  /** @description 模板id */
  templateId: string;
}
/** 白名单操作拦截请求体 */
export interface InterceptUsingPOSTData {
  /**
   * Format: int32
   * @description 设置是否拦截 0 ：否 1：是
   */
  isIntercept: number;
  /** @description 修改原因 */
  reason: string;
  /** @description 用户编码 */
  userCode: string;
}
/** PageResult«白名单操作列表返回体» */
export interface PagesUsingPOST_3Result {
  data: {
    /** @description 操作明细 */
    operatedDesc: string;
    /**
     * Format: date-time
     * @description 操作时间
     */
    operatedTime: string;
    /** @description 原因 */
    reason: string;
    /** @description 用户编码 */
    userCode: string;
    /** @description 操作人用户姓名 */
    userName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 白名单操作日志查询请求体 */
export interface PagesUsingPOST_3Data {
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 用户编码 */
  userCode: string;
}
/** PageResult«白名单列表返回体» */
export interface PagesUsingPOST_2Result {
  data: {
    /**
     * Format: date-time
     * @description 加入白名单时间
     */
    addWhitelistTime: string;
    /** @description 注册手机号 */
    mobile: string;

    setCCBPwd: boolean;

    setIntercept: boolean;
    /** @description 用户编码 */
    userCode: string;
    /** @description 用户姓名 */
    userName: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** 白名单查询请求体 */
export interface PagesUsingPOST_2Data {
  /** @description 是否设置建行密码 */
  isSetCCBPwd: boolean;
  /** @description 手机号 */
  mobile: string;
  /**
   * Format: int32
   * @description 起始数据,从1开始 默认1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示记录数 默认10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 用户姓名 */
  userName: string;
}
/** 提现白名单导入结果返回体 */
export interface WithdrawImportUsingPOSTResult {
  /**
   * Format: int32
   * @description 失败数量
   */
  failCount: number;
  /**
   * Format: int32
   * @description 成功数量
   */
  successCount: number;
}
/** 提现白名单导入请求体 */
export interface WithdrawImportUsingPOSTData {
  /** @description 用户编码 */
  userCodeStr: string;
}

/**
 * 司机报价列表数据查询
 * @param req req
 */
export function driverOrderListUsingPOST(req: BiddingDriverOrderReq) {
  return XHR<DriverOrderListUsingPOSTResult>({
    url: "/bidding/driverOrderList",
    method: "post",
    data: req,
  });
}

/**
 * 获取招标信息详情
 * @param req req
 */
export function getUsingPOST(req: BiddingInfoReq) {
  return XHR<GetUsingPOSTResult>({
    url: "/bidding/get",
    method: "post",
    data: req,
  });
}

/**
 * 获取海报
 * @param biddingCode biddingCode
 */
export function getPosterUsingGET(biddingCode: string) {
  return XHR<string>({
    url: "/bidding/getPoster",
    method: "get",
    params: { biddingCode },
  });
}

/**
 * 获取海报数据
 * @param biddingCode biddingCode
 */
export function getPosterDataUsingGET(biddingCode: string) {
  return XHR<GetPosterDataUsingGETResult>({
    url: "/bidding/getPosterData",
    method: "get",
    params: { biddingCode },
  });
}

/**
 * 招标信息列表查询
 * @param req req
 */
export function queryBiddingPageListByLogisticsUsingPOST(req: BiddingPageReq) {
  return XHR<BiddingPageRes>({
    url: "/bidding/logistics/pageList",
    method: "post",
    data: req,
  });
}

/**
 * 报号司机列表（分页）
 * @param req req
 */
export function listDriverUsingPOST(req: BookDriverListReq) {
  return XHR<ListDriverUsingPOSTResult>({
    url: "/book/driver/list",
    method: "post",
    data: req,
  });
}

/**
 * 报号计划列表（分页）
 * @param req req
 */
export function listScheduleUsingPOST(req: BookScheduleListReq) {
  return XHR<ListScheduleUsingPOSTResult>({
    url: "/book/schedule/list",
    method: "post",
    data: req,
  });
}

/**
 * 调价历史
 * @param req req
 */
export function schedulePriceHisUsingPOST(req: BookScheduleReq) {
  return XHR<SchedulePriceHisUsingPOSTResult>({
    url: "/book/schedule/price/his",
    method: "post",
    data: req,
  });
}

/**
 * 车队长列表（分页）
 * @param request request
 */
export function listUsingPOST(request: ListUsingPOSTData) {
  return XHR<ListUsingPOSTResult>({
    url: "/captain/list",
    method: "post",
    data: request,
  });
}

/**
 * 车队长收款设置日志列表（分页）
 * @param request request
 */
export function tranSetLogListUsingPOST(request: TranSetLogListUsingPOSTData) {
  return XHR<TranSetLogListUsingPOSTResult>({
    url: "/captain/tranSet/log/list",
    method: "post",
    data: request,
  });
}

/**
 * 新增增值产品
 * @param addCargoGuaranteeProductsReq addCargoGuaranteeProductsReq
 */
export function addUsingPOST(
  addCargoGuaranteeProductsReq: AddCargoGuaranteeProductsReq
) {
  return XHR<AddUsingPOSTResult>({
    url: "/cargoGuarantee/add",
    method: "post",
    data: addCargoGuaranteeProductsReq,
  });
}

/**
 * 编辑增值产品
 * @param editCargoGuaranteeProductsReq editCargoGuaranteeProductsReq
 */
export function editUsingPOST(
  editCargoGuaranteeProductsReq: EditCargoGuaranteeProductsReq
) {
  return XHR<AddUsingPOSTResult>({
    url: "/cargoGuarantee/edit",
    method: "post",
    data: editCargoGuaranteeProductsReq,
  });
}

/**
 * 查询增值产品详情
 * @param cargoGuaranteeProductsDetailQueryReq cargoGuaranteeProductsDetailQueryReq
 */
export function getUsingPOST_1(
  cargoGuaranteeProductsDetailQueryReq: CargoGuaranteeProductsDetailQueryReq
) {
  return XHR<GetUsingPOST_1Result>({
    url: "/cargoGuarantee/get",
    method: "post",
    data: cargoGuaranteeProductsDetailQueryReq,
  });
}

/**
 * 查询增值产品列表
 * @param cargoGuaranteeProductsListQueryReq cargoGuaranteeProductsListQueryReq
 */
export function selectPageListUsingPOST(
  cargoGuaranteeProductsListQueryReq: CargoGuaranteeProductsListQueryReq
) {
  return XHR<SelectPageListUsingPOSTResult>({
    url: "/cargoGuarantee/selectPageList",
    method: "post",
    data: cargoGuaranteeProductsListQueryReq,
  });
}

/**
 * 编辑或新增增值产品企业配置
 * @param addCargoGuaranteeProductsReq addCargoGuaranteeProductsReq
 */
export function addAndEditUsingPOST(
  addCargoGuaranteeProductsReq: AddAndEditCompanySettingReq
) {
  return XHR<AddUsingPOSTResult>({
    url: "/cargoGuaranteeCompanySetting/addAndEdit",
    method: "post",
    data: addCargoGuaranteeProductsReq,
  });
}

/**
 * 查询增值产品企业配置详情
 * @param companySettingQueryReq companySettingQueryReq
 */
export function getUsingPOST_2(
  companySettingQueryReq: CompanySettingDetailQueryReq
) {
  return XHR<GetUsingPOST_2Result>({
    url: "/cargoGuaranteeCompanySetting/get",
    method: "post",
    data: companySettingQueryReq,
  });
}

/**
  * 企业配置规则下拉框

  */
export function selectComboBoxUsingGET() {
  return XHR<SelectComboBoxUsingGETResult>({
    url: "/cargoGuaranteeCompanySetting/selectList",
    method: "get",
  });
}

/**
 * 查询增值产品企业配置列表
 * @param companySettingQueryReq companySettingQueryReq
 */
export function selectPageListUsingPOST_1(
  companySettingQueryReq: CompanySettingPageListQueryReq
) {
  return XHR<SelectPageListUsingPOST_1Result>({
    url: "/cargoGuaranteeCompanySetting/selectPageList",
    method: "post",
    data: companySettingQueryReq,
  });
}

/**
 * 查询所有承运公司（分页）
 * @param req req
 */
export function listUsingPOST_1(req: CarrierListQueryReq) {
  return XHR<ListUsingPOST_1Result>({
    url: "/carrier/list",
    method: "post",
    data: req,
  });
}

/**
 * 查询企业的地址列表
 * @param req req
 */
export function listAddressUsingPOST(req: CompanyAddressQueryReq) {
  return XHR<ListAddressUsingPOSTResult>({
    url: "/company/address/list",
    method: "post",
    data: req,
  });
}

/**
 * 查询所有企业（分页）
 * @param req req
 */
export function listUsingPOST_2(req: CompanyListQueryReq) {
  return XHR<ListUsingPOST_2Result>({
    url: "/company/list",
    method: "post",
    data: req,
  });
}

/**
 * 查询已认证企业（分页）
 * @param req req
 */
export function listCompanyBlackListUsingPOST(req: ListCompanyBlackListReq) {
  return XHR<ListCompanyBlackListUsingPOSTResult>({
    url: "/company/list/blackList",
    method: "post",
    data: req,
  });
}

/**
 * 查询企业关联承运公司调度费率
 * @param req req
 */
export function queryCarrierScheduleRateUsingPOST(
  req: CarrierScheduleRateQueryReq
) {
  return XHR<QueryCarrierScheduleRateUsingPOSTResult>({
    url: "/company/queryCarrierScheduleRate",
    method: "post",
    data: req,
  });
}

/**
 * 配置异常等级
 * @param req req
 */
export function addAbnormalLevelUsingPOST(req: AbnormalLevelReq) {
  return XHR<number>({
    url: "/config/add/abnormal/level",
    method: "post",
    data: req,
  });
}

/**
 * 配置企业异常监控
 * @param req req
 */
export function addAbnormalTrackUsingPOST(req: AbnormalTrackReq) {
  return XHR<number>({
    url: "/config/add/abnormal/track",
    method: "post",
    data: req,
  });
}

/**
 * 承运公司黑名单批量添加
 * @param req req
 */
export function addCarrierCompanyBlacklistUsingPOST(
  req: CarrierCompanyBlacklistAddReq[]
) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/carrierCompanyBlacklist/add",
    method: "post",
    data: req,
  });
}

/**
 * 承运公司黑名单批量删除
 * @param req req
 */
export function deleteCarrierCompanyBlacklistUsingPOST(req: IdListReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/carrierCompanyBlacklist/delete",
    method: "post",
    data: req,
  });
}

/**
 * 承运公司黑名单列表
 * @param req req
 */
export function listCarrierCompanyBlacklistUsingPOST(
  req: CarrierCompanyBlacklistQueryReq
) {
  return XHR<ListCarrierCompanyBlacklistUsingPOSTResult>({
    url: "/config/carrierCompanyBlacklist/list",
    method: "post",
    data: req,
  });
}

/**
 * 删除异常等级
 * @param req req
 */
export function delAbnormalLevelUsingPOST(req: id) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/del/abnormal/level",
    method: "post",
    data: req,
  });
}

/**
 * 删除配置企业异常监控
 * @param req req
 */
export function delAbnormalTrackUsingPOST(req: id) {
  return XHR<string>({
    url: "/config/del/abnormal/track",
    method: "post",
    data: req,
  });
}

/**
 * ETC发票企业黑名单添加
 * @param req req
 */
export function addCompanyBlackListUsingPOST(req: ETCCompanyBlackListAddReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/etcCompanyBlackList/add",
    method: "post",
    data: req,
  });
}

/**
 * ETC发票企业黑名单删除
 * @param req req
 */
export function deleteCompanyBlackListUsingPOST(req: IdListReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/etcCompanyBlackList/delete",
    method: "post",
    data: req,
  });
}

/**
 * ETC发票企业黑名单查询
 * @param req req
 */
export function listCompanyBlackListUsingPOST_1(
  req: ETCCompanyBlackListQueryReq
) {
  return XHR<ListCompanyBlackListUsingPOST_1Result>({
    url: "/config/etcCompanyBlackList/list",
    method: "post",
    data: req,
  });
}

/**
 * ETC发票车辆黑名单添加
 * @param req req
 */
export function addVehicleBlackListUsingPOST(req: ETCVehicleBlackListAddReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/etcVehicleBlackList/add",
    method: "post",
    data: req,
  });
}

/**
 * ETC发票车辆黑名单删除
 * @param req req
 */
export function deleteVehicleBlackListUsingPOST(req: IdListReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/etcVehicleBlackList/delete",
    method: "post",
    data: req,
  });
}

/**
 * ETC发票车辆黑名单查询
 * @param req req
 */
export function listVehicleBlackListUsingPOST(
  req: ETCVehicleBlackListQueryReq
) {
  return XHR<ListVehicleBlackListUsingPOSTResult>({
    url: "/config/etcVehicleBlackList/list",
    method: "post",
    data: req,
  });
}

/**
  * 异常等级列表

  */
export function listAbnormalLevelUsingPOST() {
  return XHR<ListAbnormalLevelUsingPOSTResult>({
    url: "/config/list/abnormal/level",
    method: "post",
  });
}

/**
 * 企业异常监控列表
 * @param req req
 */
export function listAbnormalTrackUsingPOST(req: AbnormalTrackListReq) {
  return XHR<ListAbnormalTrackUsingPOSTResult>({
    url: "/config/list/abnormal/track",
    method: "post",
    data: req,
  });
}

/**
  * 配置异常等级异常类型

  */
export function listAbnormalTypeUsingPOST() {
  return XHR<ListAbnormalLevelUsingPOSTResult>({
    url: "/config/list/abnormal/type",
    method: "post",
  });
}

/**
 * 运单磅单数据设置
 * @param req req
 */
export function orderPoundDataSetAddUsingPOST(req: OrderPoundDataSetAddReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/orderPoundDataSet/add",
    method: "post",
    data: req,
  });
}

/**
 * 运单磅单数据详情
 * @param req req
 */
export function orderPoundDataSetDetailUsingPOST(
  req: OderPoundDataSetRemoveReq
) {
  return XHR<OrderPoundDataSetDetailUsingPOSTResult>({
    url: "/config/orderPoundDataSet/detail",
    method: "post",
    data: req,
  });
}

/**
 * 运单磅单数据列表
 * @param req req
 */
export function orderPoundDataSetListUsingPOST(req: OderPoundDataSetListReq) {
  return XHR<OrderPoundDataSetListUsingPOSTResult>({
    url: "/config/orderPoundDataSet/list",
    method: "post",
    data: req,
  });
}

/**
 * 运单磅单数据删除
 * @param req req
 */
export function orderPoundDataSetRemoveUsingPOST(
  req: OderPoundDataSetRemoveReq
) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/orderPoundDataSet/remove",
    method: "post",
    data: req,
  });
}

/**
 * 运单磅单数据更新
 * @param req req
 */
export function orderPoundDataSetUpdateUsingPOST(req: OrderPoundDataSetAddReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/orderPoundDataSet/update",
    method: "post",
    data: req,
  });
}

/**
  * 两证拦截开关查询

  */
export function queryTwoLicenceSwitchUsingPOST() {
  return XHR<QueryTwoLicenceSwitchUsingPOSTResult>({
    url: "/config/twoLicenceSwitch/query",
    method: "post",
  });
}

/**
 * 两证拦截开关更新
 * @param req req
 */
export function updateTwoLicenceSwitchUsingPOST(
  req: TwoLicenceSwitchUpdateReq
) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/twoLicenceSwitch/update",
    method: "post",
    data: req,
  });
}

/**
 * 两证司机白名单批量添加
 * @param req req
 */
export function addTwoLicenceWhitelistUsingPOST(
  req: TwoLicenceWhitelistAddReq[]
) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/twoLicenceWhitelist/add",
    method: "post",
    data: req,
  });
}

/**
 * 两证司机白名单批量删除
 * @param req req
 */
export function deleteTwoLicenceWhitelistUsingPOST(req: IdListReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/config/twoLicenceWhitelist/delete",
    method: "post",
    data: req,
  });
}

/**
 * 两证司机白名单列表
 * @param req req
 */
export function listTwoLicenceWhitelistUsingPOST(
  req: TwoLicenceWhitelistQueryReq
) {
  return XHR<ListTwoLicenceWhitelistUsingPOSTResult>({
    url: "/config/twoLicenceWhitelist/list",
    method: "post",
    data: req,
  });
}

/**
  * 运费贷司机黑名单理由字典

  */
export function lisFreightLoanBlackListReasonDicUsingPOST() {
  return XHR<LisFreightLoanBlackListReasonDicUsingPOSTResult>({
    url: "/dict/freightLoanBlackList/reason",
    method: "post",
  });
}

/**
  * 火运费用字典

  */
export function listRailCostDicUsingPOST() {
  return XHR<LisFreightLoanBlackListReasonDicUsingPOSTResult>({
    url: "/dict/rail/cost",
    method: "post",
  });
}

/**
  * 货源所有字典

  */
export function listStockDicUsingPOST() {
  return XHR<ListStockDicUsingPOSTResult>({
    url: "/dict/stock/all",
    method: "post",
  });
}

/**
 * 规则日志列表
 * @param request request
 */
export function pagesUsingPOST_1(request: PagesUsingPOST_1Data) {
  return XHR<PagesUsingPOST_1Result>({
    url: "/driver/import/rule/log/pages",
    method: "post",
    data: request,
  });
}

/**
 * 规则列表
 * @param request request
 */
export function pagesUsingPOST(request: PagesUsingPOSTData) {
  return XHR<PagesUsingPOSTResult>({
    url: "/driver/import/rule/pages",
    method: "post",
    data: request,
  });
}

/**
 * 修改状态
 * @param request request
 */
export function updateStatusUsingPOST(request: UpdateStatusUsingPOSTData) {
  return XHR<AddUsingPOSTResult>({
    url: "/driver/import/rule/updateStatus",
    method: "post",
    data: request,
  });
}

/**
 * 查询所有司机（分页）
 * @param req req
 */
export function listUsingPOST_3(req: DriverListQueryReq) {
  return XHR<ListUsingPOST_3Result>({
    url: "/driver/list",
    method: "post",
    data: req,
  });
}

/**
 * 添加评价配置
 * @param req req
 */
export function addEvaluationConfigUsingPOST(req: ConfigAddReq) {
  return XHR<AddEvaluationConfigUsingPOSTResult>({
    url: "/evaluation/config/add",
    method: "post",
    data: req,
  });
}

/**
 * 删除评价配置
 * @param req req
 */
export function deleteEvaluationConfigUsingPOST(req: ConfigDeleteReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/evaluation/config/delete",
    method: "post",
    data: req,
  });
}

/**
 * 查询评价配置列表（分页）
 * @param req req
 */
export function listEvaluationConfigUsingPOST(req: ListConfigReq) {
  return XHR<ListEvaluationConfigUsingPOSTResult>({
    url: "/evaluation/config/list",
    method: "post",
    data: req,
  });
}

/**
 * 评价配置上下线
 * @param req req
 */
export function evaluationConfigOnlineUsingPOST(req: ConfigOnlineReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/evaluation/config/online",
    method: "post",
    data: req,
  });
}

/**
 * 编辑评价配置
 * @param req req
 */
export function updateEvaluationConfigUsingPOST(req: ConfigUpdateReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/evaluation/config/update",
    method: "post",
    data: req,
  });
}

/**
 * 保存评价配置详情(项目、选项)
 * @param req req
 */
export function addEvaluationConfigDetailUsingPOST(
  req: EvaluationConfigDetailAddReq
) {
  return XHR<AddUsingPOSTResult>({
    url: "/evaluation/configDetail/add",
    method: "post",
    data: req,
  });
}

/**
 * 查询评价配置详情(项目、选项)
 * @param req req
 */
export function getEvaluationConfigDetailUsingPOST(req: ConfigDetailQueryReq) {
  return XHR<GetEvaluationConfigDetailUsingPOSTResult>({
    url: "/evaluation/configDetail/get",
    method: "post",
    data: req,
  });
}

/**
 * 查看企业明细
 * @param req req
 */
export function listEvaluationDetailUsingPOST(req: ListEvaluationDetailReq) {
  return XHR<ListEvaluationDetailUsingPOSTResult>({
    url: "/evaluation/detail/list",
    method: "post",
    data: req,
  });
}

/**
 * 查看结果
 * @param req req
 */
export function collectEvaluationResultUsingPOST(
  req: CollectEvaluationResultReq
) {
  return XHR<GetEvaluationConfigDetailUsingPOSTResult>({
    url: "/evaluation/result/collect",
    method: "post",
    data: req,
  });
}

/**
 * 司机黑名单新增
 * @param req req
 */
export function driverAddUsingPOST(req: DriverAddUsingPOSTData) {
  return XHR<AddUsingPOSTResult>({
    url: "/freightLoanBlackList/add",
    method: "post",
    data: req,
  });
}

/**
 * 司机查询
 * @param req req
 */
export function driverSearchUsingPOST(req: DriverSearchUsingPOSTData) {
  return XHR<DriverSearchUsingPOSTResult>({
    url: "/freightLoanBlackList/driver/search",
    method: "post",
    data: req,
  });
}

/**
 * 运费贷司机黑名单列表
 * @param req req
 */
export function freightLoanBlackListUsingPOST(req: DriverSearchUsingPOSTData) {
  return XHR<FreightLoanBlackListUsingPOSTResult>({
    url: "/freightLoanBlackList/list",
    method: "post",
    data: req,
  });
}

/**
 * 司机黑名单移除
 * @param req req
 */
export function driverRemoveUsingPOST(req: DriverRemoveUsingPOSTData) {
  return XHR<AddUsingPOSTResult>({
    url: "/freightLoanBlackList/remove",
    method: "post",
    data: req,
  });
}

/**
 * 根据id删除标记点
 * @param req req
 */
export function deleteMarkPointUsingPOST(req: id) {
  return XHR<AddUsingPOSTResult>({
    url: "/gis/del",
    method: "post",
    data: req,
  });
}

/**
 * 删除手机号
 * @param req req
 */
export function delPhoneUsingPOST(req: id) {
  return XHR<AddUsingPOSTResult>({
    url: "/gis/del/phone",
    method: "post",
    data: req,
  });
}

/**
 * 根据id获取详情
 * @param req req
 */
export function getPointDetailUsingPOST(req: id) {
  return XHR<GetPointDetailUsingPOSTResult>({
    url: "/gis/detail",
    method: "post",
    data: req,
  });
}

/**
 * 根据id获取详情v1
 * @param req req
 */
export function getPointDetailV1UsingPOST(req: id) {
  return XHR<GetPointDetailV1UsingPOSTResult>({
    url: "/gis/detail/v1",
    method: "post",
    data: req,
  });
}

/**
 * 标记点地址列表
 * @param req req
 */
export function listMarkPointUsingPOST(req: ListMarkPointUsingPOSTData) {
  return XHR<ListMarkPointUsingPOSTResult>({
    url: "/gis/list/markaddress",
    method: "post",
    data: req,
  });
}

/**
 * 标记点地址列表v1
 * @param req req
 */
export function listMarkPointV1UsingPOST(req: ListMarkPointV1UsingPOSTData) {
  return XHR<ListMarkPointV1UsingPOSTResult>({
    url: "/gis/list/markaddress/v1",
    method: "post",
    data: req,
  });
}

/**
 * 手机号列表
 * @param req req
 */
export function listUserPhoneUsingPOST(req: ListUserPhoneUsingPOSTData) {
  return XHR<ListUserPhoneUsingPOSTResult>({
    url: "/gis/list/phone",
    method: "post",
    data: req,
  });
}

/**
 * 保存用户手机
 * @param req req
 */
export function savePhoneUsingPOST(req: SavePhoneUsingPOSTData) {
  return XHR<number>({
    url: "/gis/save/phone",
    method: "post",
    data: req,
  });
}

/**
 * 启用/停用手机号
 * @param req req
 */
export function switchStatusPhoneUsingPOST(
  req: SwitchStatusPhoneUsingPOSTData
) {
  return XHR<AddUsingPOSTResult>({
    url: "/gis/switch/status/phone",
    method: "post",
    data: req,
  });
}

/**
 * 批量调整比例
 * @param req req
 */
export function changeRateUsingPOST(req: ChangeRiteReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/information/rate/change",
    method: "post",
    data: req,
  });
}

/**
 * 信息费退款列表
 * @param req req
 */
export function refundListUsingPOST(req: RefundListReq) {
  return XHR<RefundListUsingPOSTResult>({
    url: "/information/refund/list",
    method: "post",
    data: req,
  });
}

/**
 * 批量退款
 * @param req req
 */
export function submitRefundUsingPOST(req: SubmitEnrollReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/information/refund/submit",
    method: "post",
    data: req,
  });
}

/**
 * 信息费已退款列表
 * @param req req
 */
export function refundedListUsingPOST(req: RefundListReq) {
  return XHR<RefundListUsingPOSTResult>({
    url: "/information/refunded/list",
    method: "post",
    data: req,
  });
}

/**
 * 信息费返利调整列表
 * @param req req
 */
export function reviewListUsingPOST(req: ReviewListReq) {
  return XHR<RefundListUsingPOSTResult>({
    url: "/information/review/list",
    method: "post",
    data: req,
  });
}

/**
 * 批量提交复核
 * @param req req
 */
export function submitReviewUsingPOST(req: SubmitEnrollReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/information/review/submit",
    method: "post",
    data: req,
  });
}

/**
 * 信息费已复核列表
 * @param req req
 */
export function reviewedListUsingPOST(req: ReviewListReq) {
  return XHR<RefundListUsingPOSTResult>({
    url: "/information/reviewed/list",
    method: "post",
    data: req,
  });
}

/**
 * 地址白名单-添加
 * @param req req
 */
export function addUsingPOST_1(req: MonitorAddressWhiteListAddReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/monitor/addressWhiteList/add",
    method: "post",
    data: req,
  });
}

/**
 * 地址白名单-删除
 * @param req req
 */
export function deleteUsingPOST(req: MonitorAddressWhiteListDeleteReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/monitor/addressWhiteList/delete",
    method: "post",
    data: req,
  });
}

/**
 * 地址白名单列表（分页）
 * @param req req
 */
export function listUsingPOST_4(req: MonitorAddressWhiteListQueryReq) {
  return XHR<ListUsingPOST_4Result>({
    url: "/monitor/addressWhiteList/list",
    method: "post",
    data: req,
  });
}

/**
 * 获取异常点
 * @param regionPointReq regionPointReq
 */
export function listAbnormalPointUsingPOST(
  regionPointReq: ListAbnormalPointUsingPOSTData
) {
  return XHR<ListAbnormalPointUsingPOSTResult>({
    url: "/open/abnormal/point",
    method: "post",
    data: regionPointReq,
  });
}

/**
 * 根据id删除标记点
 * @param req req
 */
export function deleteMarkPointUsingPOST_1(req: id) {
  return XHR<AddUsingPOSTResult>({
    url: "/open/del",
    method: "post",
    data: req,
  });
}

/**
 * 根据id获取详情
 * @param req req
 */
export function getPointDetailUsingPOST_1(req: id) {
  return XHR<GetPointDetailUsingPOSTResult>({
    url: "/open/detail",
    method: "post",
    data: req,
  });
}

/**
 * 根据id获取详情v1
 * @param req req
 */
export function getPointDetailV1UsingPOST_1(req: id) {
  return XHR<GetPointDetailV1UsingPOSTResult>({
    url: "/open/detail/v1",
    method: "post",
    data: req,
  });
}

/**
 * invoiceData
 * @param data
 * @param requestId
 * @param sign
 * @param timeStamp
 */
export function invoiceDataUsingPOST(
  data: string,
  requestId: string,
  sign: string,
  timeStamp: string
) {
  return XHR<InvoiceDataUsingPOSTResult>({
    url: "/open/etc/invoiceData",
    method: "post",
    data: { data, requestId, sign, timeStamp },
  });
}

/**
 * 线路列表
 * @param req req
 */
export function listLineUsingPOST(req: EtcLineReq) {
  return XHR<ListLineUsingPOSTResult>({
    url: "/open/etc/line/list",
    method: "post",
    data: req,
  });
}

/**
 * orderStatus
 * @param data
 * @param requestId
 * @param sign
 * @param timeStamp
 */
export function orderStatusUsingPOST(
  data: string,
  requestId: string,
  sign: string,
  timeStamp: string
) {
  return XHR<InvoiceDataUsingPOSTResult>({
    url: "/open/etc/orderStatus",
    method: "post",
    data: { data, requestId, sign, timeStamp },
  });
}

/**
 * tradeData
 * @param data
 * @param requestId
 * @param sign
 * @param timeStamp
 */
export function tradeDataUsingPOST(
  data: string,
  requestId: string,
  sign: string,
  timeStamp: string
) {
  return XHR<InvoiceDataUsingPOSTResult>({
    url: "/open/etc/tradeData",
    method: "post",
    data: { data, requestId, sign, timeStamp },
  });
}

/**
 * 刷新缓存字典
 * @param typeCode typeCode
 */
export function flushDictUsingGET(typeCode: string) {
  return XHR<AddUsingPOSTResult>({
    url: "/open/flushDict",
    method: "get",
    params: { typeCode },
  });
}

/**
 * 标记点地址类型字典
 * @param req req
 */
export function listGisAddressLabelDicUsingPOST(
  req: ListGisAddressLabelDicUsingPOSTData
) {
  return XHR<LisFreightLoanBlackListReasonDicUsingPOSTResult>({
    url: "/open/gis/adddress/label",
    method: "post",
    data: req,
  });
}

/**
 * 标记点地址列表
 * @param req req
 */
export function listMarkPointUsingPOST_1(req: ListMarkPointUsingPOSTData) {
  return XHR<ListMarkPointUsingPOSTResult>({
    url: "/open/list/markaddress",
    method: "post",
    data: req,
  });
}

/**
 * 标记点地址列表v1
 * @param req req
 */
export function listMarkPointV1UsingPOST_1(req: ListMarkPointV1UsingPOSTData) {
  return XHR<ListMarkPointV1UsingPOSTResult>({
    url: "/open/list/markaddress/v1",
    method: "post",
    data: req,
  });
}

/**
 * 打点工具手机号登陆
 * @param req req
 */
export function loginByAuthCodeUsingPOST(req: LoginByAuthCodeUsingPOSTData) {
  return XHR<LoginByAuthCodeUsingPOSTResult>({
    url: "/open/login/byphone",
    method: "post",
    data: req,
  });
}

/**
 * 短信推送
 * @param req req
 */
export function mengWangSmsPushUsingPOST(req: MengWangSmsPushRequest) {
  return XHR<MengWangSmsPushResponse>({
    url: "/open/mengWang/sms/push",
    method: "post",
    data: req,
  });
}

/**
 * 手机号登陆发送验证码
 * @param req req
 */
export function sendAuthCodeUsingPOST(req: SendAuthCodeUsingPOSTData) {
  return XHR<AddUsingPOSTResult>({
    url: "/open/send/authcode",
    method: "post",
    data: req,
  });
}

/**
  * 意向协议回调

  */
export function queryStockProtocolUrlUsingPOST() {
  return XHR({
    url: "/open/stockInsurance/callback",
    method: "post",
  });
}

/**
 * 统计微信阅读数
 * @param id id
 * @param sjbOpenId sjbOpenId
 */
export function statUsingGET(id: number, sjbOpenId: string) {
  return XHR<AddUsingPOSTResult>({
    url: "/open/wechat/read",
    method: "get",
    params: { id, sjbOpenId },
  });
}

/**
 * 详情
 * @param req req
 */
export function detailUsingPOST(req: CustomerApiDetailReq) {
  return XHR<DetailUsingPOSTResult>({
    url: "/openplateform/customer/api/detail",
    method: "post",
    data: req,
  });
}

/**
 * 保存订阅（全量数据）
 * @param req req
 */
export function saveAllUsingPOST(req: CustomerApiSaveReq) {
  return XHR<number>({
    url: "/openplateform/customer/api/saveAll",
    method: "post",
    data: req,
  });
}

/**
 * 取消企业关联
 * @param req req
 */
export function queryUsingPOST(req: CustomerCompanyRelationCancelReq) {
  return XHR<number>({
    url: "/openplateform/customer/company/relation/cancel",
    method: "post",
    data: req,
  });
}

/**
 * 企业关联（分页）
 * @param req req
 */
export function pageUsingPOST(req: CustomerCompanyRelationPageReq) {
  return XHR<PageUsingPOSTResult>({
    url: "/openplateform/customer/company/relation/page",
    method: "post",
    data: req,
  });
}

/**
 * 查询企业
 * @param req req
 */
export function queryUsingPOST_1(req: CustomerCompanyRelationQueryReq) {
  return XHR<QueryUsingPOST_1Result>({
    url: "/openplateform/customer/company/relation/query",
    method: "post",
    data: req,
  });
}

/**
 * 保存企业关联
 * @param req req
 */
export function saveUsingPOST(req: CustomerCompanyRelationSaveReq) {
  return XHR<number>({
    url: "/openplateform/customer/company/relation/save",
    method: "post",
    data: req,
  });
}

/**
 * 开放平台启用禁用
 * @param req req
 */
export function enabledUsingPOST(req: CustomerInfoEnabledReq) {
  return XHR<number>({
    url: "/openplateform/customer/enabled",
    method: "post",
    data: req,
  });
}

/**
 * 开放平台（分页）
 * @param req req
 */
export function pageUsingPOST_1(req: CustomerInfoQueryReq) {
  return XHR<PageUsingPOST_1Result>({
    url: "/openplateform/customer/page",
    method: "post",
    data: req,
  });
}

/**
 * 开放平台保存
 * @param req req
 */
export function saveUsingPOST_1(req: CustomerInfoSaveReq) {
  return XHR<number>({
    url: "/openplateform/customer/save",
    method: "post",
    data: req,
  });
}

/**
 * 详情
 * @param req req
 */
export function detailUsingPOST_1(req: CustomerSubscribeDetailReq) {
  return XHR<DetailUsingPOST_1Result>({
    url: "/openplateform/customer/subscribe/detail",
    method: "post",
    data: req,
  });
}

/**
 * 保存订阅（全量数据）
 * @param req req
 */
export function saveAllUsingPOST_1(req: CustomerSubscribeSaveReq) {
  return XHR<number>({
    url: "/openplateform/customer/subscribe/saveAll",
    method: "post",
    data: req,
  });
}

/**
 * 开放平台编辑
 * @param req req
 */
export function updateUsingPOST(req: CustomerInfoUpdateReq) {
  return XHR<number>({
    url: "/openplateform/customer/update",
    method: "post",
    data: req,
  });
}

/**
 * 运单拷贝
 * @param req req
 */
export function orderTrackCopyUsingPOST(req: OrderTrackCopyReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/orderTrack/copy",
    method: "post",
    data: req,
  });
}

/**
 * 轨迹拷贝记录查询
 * @param req req
 */
export function orderTrackCopyRecordQueryUsingPOST(
  req: OrderTrackCopyRecordQueryReq
) {
  return XHR<OrderTrackCopyRecordQueryUsingPOSTResult>({
    url: "/orderTrack/list",
    method: "post",
    data: req,
  });
}

/**
 * 货源详情
 * @param req req
 */
export function detailUsingPOST_2(req: StockCodeQueryReq) {
  return XHR<DetailUsingPOST_2Result>({
    url: "/stock/detail",
    method: "post",
    data: req,
  });
}

/**
 * 查看详情
 * @param req req
 */
export function releaseDetailUsingPOST(req: StockCodeQueryReq) {
  return XHR<ReleaseDetailUsingPOSTResult>({
    url: "/stock/detail/releaseDetail",
    method: "post",
    data: req,
  });
}

/**
 * 获取海报数据
 * @param stockCode stockCode
 */
export function stockPosterDataUsingGET(stockCode: string) {
  return XHR<GetPosterDataUsingGETResult>({
    url: "/stock/getPosterData",
    method: "get",
    params: { stockCode },
  });
}

/**
 * 货源列表（分页）
 * @param req req
 */
export function listStockUsingPOST(req: StockListQueryReq) {
  return XHR<ListStockUsingPOSTResult>({
    url: "/stock/list",
    method: "post",
    data: req,
  });
}

/**
 * 查看海报（分享海报）
 * @param stockCode stockCode
 */
export function stockPosterUsingGET(stockCode: string) {
  return XHR<string>({
    url: "/stock/poster",
    method: "get",
    params: { stockCode },
  });
}

/**
 * 货运险数据列表
 * @param req req
 */
export function listUsingPOST_5(req: StockInsuranceListReq) {
  return XHR<ListUsingPOST_5Result>({
    url: "/stockInsurance/list",
    method: "post",
    data: req,
  });
}

/**
 * 查询签署的意向协议
 * @param req req
 */
export function queryStockProtocolUrlUsingPOST_1(
  req: InsuranceIntentionSignInfoQueryReq
) {
  return XHR<QueryStockProtocolUrlUsingPOST_1Result>({
    url: "/stockInsurance/queryStockProtocolUrl",
    method: "post",
    data: req,
  });
}

/**
 * 货运险数据修改
 * @param req req
 */
export function updateUsingPOST_1(req: StockInsuranceUpdateReq) {
  return XHR<EntityResult>({
    url: "/stockInsurance/update",
    method: "post",
    data: req,
  });
}

/**
 * 系统字典查询
 * @param type type
 */
export function getSysDictUsingPOST(type: string) {
  return XHR<GetSysDictUsingPOSTResult>({
    url: "/sys/getSysDict",
    method: "post",
    params: { type },
  });
}

/**
  * 用户权限

  */
export function listPermissonUsingGET() {
  return XHR<ListPermissonUsingGETResult>({
    url: "/sys/permisson",
    method: "get",
  });
}

/**
 * 行政区域
 * @param req req
 */
export function listRegionUsingPOST(req: RegionReq) {
  return XHR<ListRegionUsingPOSTResult>({
    url: "/sys/region",
    method: "post",
    data: req,
  });
}

/**
  * 当前用户信息

  */
export function getUserUsingGET() {
  return XHR<GetUserUsingGETResult>({
    url: "/sys/user",
    method: "get",
  });
}

/**
  * 众树余额查询

  */
export function zsBalanceQueryUsingPOST() {
  return XHR<number>({
    url: "/sys/zs/balance/query",
    method: "post",
  });
}

/**
  * 公众号列表

  */
export function listWechatAppUsingPOST() {
  return XHR<ListWechatAppUsingPOSTResult>({
    url: "/wechat/app/list",
    method: "post",
  });
}

/**
 * 微信模板消息列表
 * @param request request
 */
export function listTemplateUsingPOST(request: TemplateReq) {
  return XHR<ListTemplateUsingPOSTResult>({
    url: "/wechat/msg/list",
    method: "post",
    data: request,
  });
}

/**
 * 发送模板消息
 * @param request request
 */
export function sendTemplateMsgUsingPOST(request: TemplateSendReq) {
  return XHR<AddUsingPOSTResult>({
    url: "/wechat/msg/send",
    method: "post",
    data: request,
  });
}

/**
 * 模板消息样例
 * @param request request
 */
export function getTemplateExampleUsingPOST(request: TemplateIdReq) {
  return XHR<GetTemplateExampleUsingPOSTResult>({
    url: "/wechat/template/sample",
    method: "post",
    data: request,
  });
}

/**
 * 接单是否拦截
 * @param request request
 */
export function interceptUsingPOST(request: InterceptUsingPOSTData) {
  return XHR<AddUsingPOSTResult>({
    url: "/whitelist/intercept",
    method: "post",
    data: request,
  });
}

/**
 * 操作日志列表
 * @param request request
 */
export function pagesUsingPOST_3(request: PagesUsingPOST_3Data) {
  return XHR<PagesUsingPOST_3Result>({
    url: "/whitelist/operated/pages",
    method: "post",
    data: request,
  });
}

/**
 * 操作日志列表
 * @param request request
 */
export function withdrawPagesUsingPOST(request: PagesUsingPOST_3Data) {
  return XHR<PagesUsingPOST_3Result>({
    url: "/whitelist/operated/withdraw/pages",
    method: "post",
    data: request,
  });
}

/**
 * 接单拦截白名单列表
 * @param request request
 */
export function pagesUsingPOST_2(request: PagesUsingPOST_2Data) {
  return XHR<PagesUsingPOST_2Result>({
    url: "/whitelist/pages",
    method: "post",
    data: request,
  });
}

/**
 * 导入提现白名单
 * @param request request
 */
export function withdrawImportUsingPOST(request: WithdrawImportUsingPOSTData) {
  return XHR<WithdrawImportUsingPOSTResult>({
    url: "/whitelist/withdraw/import",
    method: "post",
    data: request,
  });
}

/**
 * 提现是否拦截
 * @param request request
 */
export function withdrawInterceptUsingPOST(request: InterceptUsingPOSTData) {
  return XHR<AddUsingPOSTResult>({
    url: "/whitelist/withdraw/intercept",
    method: "post",
    data: request,
  });
}

/**
 * 提现拦截白名单列表
 * @param request request
 */
export function withDrawPagesUsingPOST(request: PagesUsingPOST_2Data) {
  return XHR<PagesUsingPOST_2Result>({
    url: "/whitelist/withdraw/pages",
    method: "post",
    data: request,
  });
}
