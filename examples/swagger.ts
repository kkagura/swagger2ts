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
/** BiddingInfoReq */
export interface BiddingInfoReq {
  /** @description 招标编号 */
  biddingCode: string;
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
/** BookScheduleReq */
export interface BookScheduleReq {
  /**
   * Format: int64
   * @description 报号主键id
   */
  bookId: number;
}
/** 车队长查询请求体 */
export interface listUsingPOSTData {
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
/** 车队长收款设置日志查询请求体 */
export interface tranSetLogListUsingPOSTData {
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
/** AddCargoGuaranteeProductsReq */
export interface AddCargoGuaranteeProductsReq {
  /** @description 产品配置明细 */
  addCargoGuaranteeProductsDetailReqs: AddCargoGuaranteeProductsDetailReq[];

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
  addCargoGuaranteeProductsDetailReqs: AddCargoGuaranteeProductsDetailReq[];
  /**
   * Format: int64
   * @description 产品配置ID
   */
  productsId: number;

  updateName: string;
}
/** CargoGuaranteeProductsDetailQueryReq */
export interface CargoGuaranteeProductsDetailQueryReq {
  /**
   * Format: int64
   * @description 产品配置ID
   */
  productsId: number;
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
/** CompanySettingDetailQueryReq */
export interface CompanySettingDetailQueryReq {
  /** @description id */
  id: string;
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
/** CompanyAddressQueryReq */
export interface CompanyAddressQueryReq {
  /** @description 企业编码列表 */
  companyCodeList: string[];
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
/** OderPoundDataSetRemoveReq */
export interface OderPoundDataSetRemoveReq {
  /** @description 企业编码 */
  companyCode: string;
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
/** 日志请求体 */
export interface pagesUsingPOST_1Data {
  /**
   * Format: int64
   * @description 规则id
   */
  ruleId: number;
}
/** 规则查询请求体 */
export interface pagesUsingPOSTData {
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
export interface updateStatusUsingPOSTData {
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
  itemConfigAddList: ItemConfigAddReq[];
}
/** ConfigDetailQueryReq */
export interface ConfigDetailQueryReq {
  /**
   * Format: int64
   * @description 评价配置主键id
   */
  id: number;
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
export interface driverAddUsingPOSTData {
  /** @description 司机列表 */
  driverList: 运费贷司机黑名单新增入参[];
  /**
   * Format: int32
   * @description 原因枚举code
   */
  reasonCode: number;
  /** @description 备注 */
  reasonRemark: string;
}
/** 运费贷司机黑名单列表查询入参 */
export interface driverSearchUsingPOSTData {
  /** @description 司机手机号码 */
  driverMobile: string;
  /** @description 司机名字 */
  driverName: string;
}
/** 运费贷司机黑名单移除入参 */
export interface driverRemoveUsingPOSTData {
  /** @description 司机编码 */
  driverCode: string;
}
/** 监控标记列表入参 */
export interface listMarkPointUsingPOSTData {
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
/** 监控标记v1列表入参 */
export interface listMarkPointV1UsingPOSTData {
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
/** 手机号查询 */
export interface listUserPhoneUsingPOSTData {
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
export interface savePhoneUsingPOSTData {
  /** @description 手机号 */
  mobile: string;
  /** @description 姓名 */
  name: string;
}
/** 手机号启用停用 */
export interface switchStatusPhoneUsingPOSTData {
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
/** 区域查询 */
export interface listAbnormalPointUsingPOSTData {
  /** @description 结束点纬度 */
  endLat: number;
  /** @description 结束点经度 */
  endLng: number;
  /** @description 开始点纬度 */
  startLat: number;
  /** @description 开始点经度 */
  startLng: number;
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
export interface listGisAddressLabelDicUsingPOSTData {
  /**
   * Format: int32
   * @description 标签类型0全部1:黑名单2:白名单
   */
  type: number;
}
/** 打点工具手机号登陆 */
export interface loginByAuthCodeUsingPOSTData {
  /** @description 登陆验证码 */
  authCode: string;
  /** @description 手机号 */
  mobile: string;
}
/** MengWangSmsPushRequest */
export interface MengWangSmsPushRequest {
  cmd: string;

  mos: MengWangDetailRequest[];

  pwd: string;
  /** Format: int32 */
  seqid: number;

  timestamp: string;

  userid: string;
}
/** 手机号 */
export interface sendAuthCodeUsingPOSTData {
  /** @description 手机号 */
  mobile: string;
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
/** StockCodeQueryReq */
export interface StockCodeQueryReq {
  /** @description 货源编码 */
  stockCode: string;
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
/** StockInsuranceListReq */
export interface StockInsuranceListReq {}
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
/** RegionReq */
export interface RegionReq {
  regioncode: string;
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
/** TemplateIdReq */
export interface TemplateIdReq {
  /** @description 应用id */
  appId: string;
  /** @description 模板id */
  templateId: string;
}
/** 白名单操作拦截请求体 */
export interface interceptUsingPOSTData {
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
/** 白名单操作日志查询请求体 */
export interface pagesUsingPOST_3Data {
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
/** 白名单查询请求体 */
export interface pagesUsingPOST_2Data {
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
/** 提现白名单导入请求体 */
export interface withdrawImportUsingPOSTData {
  /** @description 用户编码 */
  userCodeStr: string;
}
/** AddCargoGuaranteeProductsDetailReq */
export interface AddCargoGuaranteeProductsDetailReq {
  /** @description 对应收费价格(扩大10000倍) */
  chargePrice: string;
  /** @description 货物价值最大值(万元) */
  goodsMaxValue: string;
  /** @description 货物价值最小值(万元) */
  goodsMinValue: string;
  /** @description 产品配置明细 */
  children: AddCargoGuaranteeProductsDetailReq[];
}
/** ItemConfigAddReq */
export interface ItemConfigAddReq {
  /** @description 项目名称 */
  itemName: string;
  /** @description 评价选项配置明细 */
  optionConfigAddList: OptionConfigAddReq[];
}
/** 运费贷司机黑名单新增入参 */
export interface 运费贷司机黑名单新增入参 {
  /** @description 司机编码 */
  driverCode: string;
  /** @description 身份证号 */
  driverIdCode: string;
  /** @description 司机手机号码 */
  driverMobile: string;
  /** @description 司机名字 */
  driverName: string;
}
/** MengWangDetailRequest */
export interface MengWangDetailRequest {
  content: string;

  mobile: string;

  rtime: string;
}
/** OptionConfigAddReq */
export interface OptionConfigAddReq {
  /** @description 选项名称 */
  optionName: string;
}

/**
 * 司机报价列表数据查询
 * @param req req
 */
export function driverOrderListUsingPOST(req: BiddingDriverOrderReq) {}

/**
 * 获取招标信息详情
 * @param req req
 */
export function getUsingPOST(req: BiddingInfoReq) {}

/**
 * 获取海报
 * @param biddingCode biddingCode
 */
export function getPosterUsingGET(biddingCode: string) {}

/**
 * 获取海报数据
 * @param biddingCode biddingCode
 */
export function getPosterDataUsingGET(biddingCode: string) {}

/**
 * 招标信息列表查询
 * @param req req
 */
export function queryBiddingPageListByLogisticsUsingPOST(req: BiddingPageReq) {}

/**
 * 报号司机列表（分页）
 * @param req req
 */
export function listDriverUsingPOST(req: BookDriverListReq) {}

/**
 * 报号计划列表（分页）
 * @param req req
 */
export function listScheduleUsingPOST(req: BookScheduleListReq) {}

/**
 * 调价历史
 * @param req req
 */
export function schedulePriceHisUsingPOST(req: BookScheduleReq) {}

/**
 * 车队长列表（分页）
 * @param request request
 */
export function listUsingPOST(request: listUsingPOSTData) {}

/**
 * 车队长收款设置日志列表（分页）
 * @param request request
 */
export function tranSetLogListUsingPOST(request: tranSetLogListUsingPOSTData) {}

/**
 * 新增增值产品
 * @param addCargoGuaranteeProductsReq addCargoGuaranteeProductsReq
 */
export function addUsingPOST(
  addCargoGuaranteeProductsReq: AddCargoGuaranteeProductsReq
) {}

/**
 * 编辑增值产品
 * @param editCargoGuaranteeProductsReq editCargoGuaranteeProductsReq
 */
export function editUsingPOST(
  editCargoGuaranteeProductsReq: EditCargoGuaranteeProductsReq
) {}

/**
 * 查询增值产品详情
 * @param cargoGuaranteeProductsDetailQueryReq cargoGuaranteeProductsDetailQueryReq
 */
export function getUsingPOST_1(
  cargoGuaranteeProductsDetailQueryReq: CargoGuaranteeProductsDetailQueryReq
) {}

/**
 * 查询增值产品列表
 * @param cargoGuaranteeProductsListQueryReq cargoGuaranteeProductsListQueryReq
 */
export function selectPageListUsingPOST(
  cargoGuaranteeProductsListQueryReq: CargoGuaranteeProductsListQueryReq
) {}

/**
 * 编辑或新增增值产品企业配置
 * @param addCargoGuaranteeProductsReq addCargoGuaranteeProductsReq
 */
export function addAndEditUsingPOST(
  addCargoGuaranteeProductsReq: AddAndEditCompanySettingReq
) {}

/**
 * 查询增值产品企业配置详情
 * @param companySettingQueryReq companySettingQueryReq
 */
export function getUsingPOST_2(
  companySettingQueryReq: CompanySettingDetailQueryReq
) {}

/**
  * 企业配置规则下拉框

  */
export function selectComboBoxUsingGET() {}

/**
 * 查询增值产品企业配置列表
 * @param companySettingQueryReq companySettingQueryReq
 */
export function selectPageListUsingPOST_1(
  companySettingQueryReq: CompanySettingPageListQueryReq
) {}

/**
 * 查询所有承运公司（分页）
 * @param req req
 */
export function listUsingPOST_1(req: CarrierListQueryReq) {}

/**
 * 查询企业的地址列表
 * @param req req
 */
export function listAddressUsingPOST(req: CompanyAddressQueryReq) {}

/**
 * 查询所有企业（分页）
 * @param req req
 */
export function listUsingPOST_2(req: CompanyListQueryReq) {}

/**
 * 查询已认证企业（分页）
 * @param req req
 */
export function listCompanyBlackListUsingPOST(req: ListCompanyBlackListReq) {}

/**
 * 查询企业关联承运公司调度费率
 * @param req req
 */
export function queryCarrierScheduleRateUsingPOST(
  req: CarrierScheduleRateQueryReq
) {}

/**
 * 配置异常等级
 * @param req req
 */
export function addAbnormalLevelUsingPOST(req: AbnormalLevelReq) {}

/**
 * 配置企业异常监控
 * @param req req
 */
export function addAbnormalTrackUsingPOST(req: AbnormalTrackReq) {}

/**
 * 承运公司黑名单批量添加
 * @param req req
 */
export function addCarrierCompanyBlacklistUsingPOST(
  req: CarrierCompanyBlacklistAddReq[]
) {}

/**
 * 承运公司黑名单批量删除
 * @param req req
 */
export function deleteCarrierCompanyBlacklistUsingPOST(req: IdListReq) {}

/**
 * 承运公司黑名单列表
 * @param req req
 */
export function listCarrierCompanyBlacklistUsingPOST(
  req: CarrierCompanyBlacklistQueryReq
) {}

/**
 * 删除异常等级
 * @param req req
 */
export function delAbnormalLevelUsingPOST(req: id) {}

/**
 * 删除配置企业异常监控
 * @param req req
 */
export function delAbnormalTrackUsingPOST(req: id) {}

/**
 * ETC发票企业黑名单添加
 * @param req req
 */
export function addCompanyBlackListUsingPOST(req: ETCCompanyBlackListAddReq) {}

/**
 * ETC发票企业黑名单删除
 * @param req req
 */
export function deleteCompanyBlackListUsingPOST(req: IdListReq) {}

/**
 * ETC发票企业黑名单查询
 * @param req req
 */
export function listCompanyBlackListUsingPOST_1(
  req: ETCCompanyBlackListQueryReq
) {}

/**
 * ETC发票车辆黑名单添加
 * @param req req
 */
export function addVehicleBlackListUsingPOST(req: ETCVehicleBlackListAddReq) {}

/**
 * ETC发票车辆黑名单删除
 * @param req req
 */
export function deleteVehicleBlackListUsingPOST(req: IdListReq) {}

/**
 * ETC发票车辆黑名单查询
 * @param req req
 */
export function listVehicleBlackListUsingPOST(
  req: ETCVehicleBlackListQueryReq
) {}

/**
  * 异常等级列表

  */
export function listAbnormalLevelUsingPOST() {}

/**
 * 企业异常监控列表
 * @param req req
 */
export function listAbnormalTrackUsingPOST(req: AbnormalTrackListReq) {}

/**
  * 配置异常等级异常类型

  */
export function listAbnormalTypeUsingPOST() {}

/**
 * 运单磅单数据设置
 * @param req req
 */
export function orderPoundDataSetAddUsingPOST(req: OrderPoundDataSetAddReq) {}

/**
 * 运单磅单数据详情
 * @param req req
 */
export function orderPoundDataSetDetailUsingPOST(
  req: OderPoundDataSetRemoveReq
) {}

/**
 * 运单磅单数据列表
 * @param req req
 */
export function orderPoundDataSetListUsingPOST(req: OderPoundDataSetListReq) {}

/**
 * 运单磅单数据删除
 * @param req req
 */
export function orderPoundDataSetRemoveUsingPOST(
  req: OderPoundDataSetRemoveReq
) {}

/**
 * 运单磅单数据更新
 * @param req req
 */
export function orderPoundDataSetUpdateUsingPOST(
  req: OrderPoundDataSetAddReq
) {}

/**
  * 两证拦截开关查询

  */
export function queryTwoLicenceSwitchUsingPOST() {}

/**
 * 两证拦截开关更新
 * @param req req
 */
export function updateTwoLicenceSwitchUsingPOST(
  req: TwoLicenceSwitchUpdateReq
) {}

/**
 * 两证司机白名单批量添加
 * @param req req
 */
export function addTwoLicenceWhitelistUsingPOST(
  req: TwoLicenceWhitelistAddReq[]
) {}

/**
 * 两证司机白名单批量删除
 * @param req req
 */
export function deleteTwoLicenceWhitelistUsingPOST(req: IdListReq) {}

/**
 * 两证司机白名单列表
 * @param req req
 */
export function listTwoLicenceWhitelistUsingPOST(
  req: TwoLicenceWhitelistQueryReq
) {}

/**
  * 运费贷司机黑名单理由字典

  */
export function lisFreightLoanBlackListReasonDicUsingPOST() {}

/**
  * 火运费用字典

  */
export function listRailCostDicUsingPOST() {}

/**
  * 货源所有字典

  */
export function listStockDicUsingPOST() {}

/**
 * 规则日志列表
 * @param request request
 */
export function pagesUsingPOST_1(request: pagesUsingPOST_1Data) {}

/**
 * 规则列表
 * @param request request
 */
export function pagesUsingPOST(request: pagesUsingPOSTData) {}

/**
 * 修改状态
 * @param request request
 */
export function updateStatusUsingPOST(request: updateStatusUsingPOSTData) {}

/**
 * 查询所有司机（分页）
 * @param req req
 */
export function listUsingPOST_3(req: DriverListQueryReq) {}

/**
 * 添加评价配置
 * @param req req
 */
export function addEvaluationConfigUsingPOST(req: ConfigAddReq) {}

/**
 * 删除评价配置
 * @param req req
 */
export function deleteEvaluationConfigUsingPOST(req: ConfigDeleteReq) {}

/**
 * 查询评价配置列表（分页）
 * @param req req
 */
export function listEvaluationConfigUsingPOST(req: ListConfigReq) {}

/**
 * 评价配置上下线
 * @param req req
 */
export function evaluationConfigOnlineUsingPOST(req: ConfigOnlineReq) {}

/**
 * 编辑评价配置
 * @param req req
 */
export function updateEvaluationConfigUsingPOST(req: ConfigUpdateReq) {}

/**
 * 保存评价配置详情(项目、选项)
 * @param req req
 */
export function addEvaluationConfigDetailUsingPOST(
  req: EvaluationConfigDetailAddReq
) {}

/**
 * 查询评价配置详情(项目、选项)
 * @param req req
 */
export function getEvaluationConfigDetailUsingPOST(req: ConfigDetailQueryReq) {}

/**
 * 查看企业明细
 * @param req req
 */
export function listEvaluationDetailUsingPOST(req: ListEvaluationDetailReq) {}

/**
 * 查看结果
 * @param req req
 */
export function collectEvaluationResultUsingPOST(
  req: CollectEvaluationResultReq
) {}

/**
 * 司机黑名单新增
 * @param req req
 */
export function driverAddUsingPOST(req: driverAddUsingPOSTData) {}

/**
 * 司机查询
 * @param req req
 */
export function driverSearchUsingPOST(req: driverSearchUsingPOSTData) {}

/**
 * 运费贷司机黑名单列表
 * @param req req
 */
export function freightLoanBlackListUsingPOST(req: driverSearchUsingPOSTData) {}

/**
 * 司机黑名单移除
 * @param req req
 */
export function driverRemoveUsingPOST(req: driverRemoveUsingPOSTData) {}

/**
 * 根据id删除标记点
 * @param req req
 */
export function deleteMarkPointUsingPOST(req: id) {}

/**
 * 删除手机号
 * @param req req
 */
export function delPhoneUsingPOST(req: id) {}

/**
 * 根据id获取详情
 * @param req req
 */
export function getPointDetailUsingPOST(req: id) {}

/**
 * 根据id获取详情v1
 * @param req req
 */
export function getPointDetailV1UsingPOST(req: id) {}

/**
 * 标记点地址列表
 * @param req req
 */
export function listMarkPointUsingPOST(req: listMarkPointUsingPOSTData) {}

/**
 * 标记点地址列表v1
 * @param req req
 */
export function listMarkPointV1UsingPOST(req: listMarkPointV1UsingPOSTData) {}

/**
 * 手机号列表
 * @param req req
 */
export function listUserPhoneUsingPOST(req: listUserPhoneUsingPOSTData) {}

/**
 * 保存用户手机
 * @param req req
 */
export function savePhoneUsingPOST(req: savePhoneUsingPOSTData) {}

/**
 * 启用/停用手机号
 * @param req req
 */
export function switchStatusPhoneUsingPOST(
  req: switchStatusPhoneUsingPOSTData
) {}

/**
 * 批量调整比例
 * @param req req
 */
export function changeRateUsingPOST(req: ChangeRiteReq) {}

/**
 * 信息费退款列表
 * @param req req
 */
export function refundListUsingPOST(req: RefundListReq) {}

/**
 * 批量退款
 * @param req req
 */
export function submitRefundUsingPOST(req: SubmitEnrollReq) {}

/**
 * 信息费已退款列表
 * @param req req
 */
export function refundedListUsingPOST(req: RefundListReq) {}

/**
 * 信息费返利调整列表
 * @param req req
 */
export function reviewListUsingPOST(req: ReviewListReq) {}

/**
 * 批量提交复核
 * @param req req
 */
export function submitReviewUsingPOST(req: SubmitEnrollReq) {}

/**
 * 信息费已复核列表
 * @param req req
 */
export function reviewedListUsingPOST(req: ReviewListReq) {}

/**
 * 地址白名单-添加
 * @param req req
 */
export function addUsingPOST_1(req: MonitorAddressWhiteListAddReq) {}

/**
 * 地址白名单-删除
 * @param req req
 */
export function deleteUsingPOST(req: MonitorAddressWhiteListDeleteReq) {}

/**
 * 地址白名单列表（分页）
 * @param req req
 */
export function listUsingPOST_4(req: MonitorAddressWhiteListQueryReq) {}

/**
 * 获取异常点
 * @param regionPointReq regionPointReq
 */
export function listAbnormalPointUsingPOST(
  regionPointReq: listAbnormalPointUsingPOSTData
) {}

/**
 * 根据id删除标记点
 * @param req req
 */
export function deleteMarkPointUsingPOST_1(req: id) {}

/**
 * 根据id获取详情
 * @param req req
 */
export function getPointDetailUsingPOST_1(req: id) {}

/**
 * 根据id获取详情v1
 * @param req req
 */
export function getPointDetailV1UsingPOST_1(req: id) {}

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
) {}

/**
 * 线路列表
 * @param req req
 */
export function listLineUsingPOST(req: EtcLineReq) {}

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
) {}

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
) {}

/**
 * 刷新缓存字典
 * @param typeCode typeCode
 */
export function flushDictUsingGET(typeCode: string) {}

/**
 * 标记点地址类型字典
 * @param req req
 */
export function listGisAddressLabelDicUsingPOST(
  req: listGisAddressLabelDicUsingPOSTData
) {}

/**
 * 标记点地址列表
 * @param req req
 */
export function listMarkPointUsingPOST_1(req: listMarkPointUsingPOSTData) {}

/**
 * 标记点地址列表v1
 * @param req req
 */
export function listMarkPointV1UsingPOST_1(req: listMarkPointV1UsingPOSTData) {}

/**
 * 打点工具手机号登陆
 * @param req req
 */
export function loginByAuthCodeUsingPOST(req: loginByAuthCodeUsingPOSTData) {}

/**
 * 短信推送
 * @param req req
 */
export function mengWangSmsPushUsingPOST(req: MengWangSmsPushRequest) {}

/**
 * 手机号登陆发送验证码
 * @param req req
 */
export function sendAuthCodeUsingPOST(req: sendAuthCodeUsingPOSTData) {}

/**
  * 意向协议回调

  */
export function queryStockProtocolUrlUsingPOST() {}

/**
 * 统计微信阅读数
 * @param id id
 * @param sjbOpenId sjbOpenId
 */
export function statUsingGET(id: number, sjbOpenId: string) {}

/**
 * 详情
 * @param req req
 */
export function detailUsingPOST(req: CustomerApiDetailReq) {}

/**
 * 保存订阅（全量数据）
 * @param req req
 */
export function saveAllUsingPOST(req: CustomerApiSaveReq) {}

/**
 * 取消企业关联
 * @param req req
 */
export function queryUsingPOST(req: CustomerCompanyRelationCancelReq) {}

/**
 * 企业关联（分页）
 * @param req req
 */
export function pageUsingPOST(req: CustomerCompanyRelationPageReq) {}

/**
 * 查询企业
 * @param req req
 */
export function queryUsingPOST_1(req: CustomerCompanyRelationQueryReq) {}

/**
 * 保存企业关联
 * @param req req
 */
export function saveUsingPOST(req: CustomerCompanyRelationSaveReq) {}

/**
 * 开放平台启用禁用
 * @param req req
 */
export function enabledUsingPOST(req: CustomerInfoEnabledReq) {}

/**
 * 开放平台（分页）
 * @param req req
 */
export function pageUsingPOST_1(req: CustomerInfoQueryReq) {}

/**
 * 开放平台保存
 * @param req req
 */
export function saveUsingPOST_1(req: CustomerInfoSaveReq) {}

/**
 * 详情
 * @param req req
 */
export function detailUsingPOST_1(req: CustomerSubscribeDetailReq) {}

/**
 * 保存订阅（全量数据）
 * @param req req
 */
export function saveAllUsingPOST_1(req: CustomerSubscribeSaveReq) {}

/**
 * 开放平台编辑
 * @param req req
 */
export function updateUsingPOST(req: CustomerInfoUpdateReq) {}

/**
 * 运单拷贝
 * @param req req
 */
export function orderTrackCopyUsingPOST(req: OrderTrackCopyReq) {}

/**
 * 轨迹拷贝记录查询
 * @param req req
 */
export function orderTrackCopyRecordQueryUsingPOST(
  req: OrderTrackCopyRecordQueryReq
) {}

/**
 * 货源详情
 * @param req req
 */
export function detailUsingPOST_2(req: StockCodeQueryReq) {}

/**
 * 查看详情
 * @param req req
 */
export function releaseDetailUsingPOST(req: StockCodeQueryReq) {}

/**
 * 获取海报数据
 * @param stockCode stockCode
 */
export function stockPosterDataUsingGET(stockCode: string) {}

/**
 * 货源列表（分页）
 * @param req req
 */
export function listStockUsingPOST(req: StockListQueryReq) {}

/**
 * 查看海报（分享海报）
 * @param stockCode stockCode
 */
export function stockPosterUsingGET(stockCode: string) {}

/**
 * 货运险数据列表
 * @param req req
 */
export function listUsingPOST_5(req: StockInsuranceListReq) {}

/**
 * 查询签署的意向协议
 * @param req req
 */
export function queryStockProtocolUrlUsingPOST_1(
  req: InsuranceIntentionSignInfoQueryReq
) {}

/**
 * 货运险数据修改
 * @param req req
 */
export function updateUsingPOST_1(req: StockInsuranceUpdateReq) {}

/**
 * 系统字典查询
 * @param type type
 */
export function getSysDictUsingPOST(type: string) {}

/**
  * 用户权限

  */
export function listPermissonUsingGET() {}

/**
 * 行政区域
 * @param req req
 */
export function listRegionUsingPOST(req: RegionReq) {}

/**
  * 当前用户信息

  */
export function getUserUsingGET() {}

/**
  * 众树余额查询

  */
export function zsBalanceQueryUsingPOST() {}

/**
  * 公众号列表

  */
export function listWechatAppUsingPOST() {}

/**
 * 微信模板消息列表
 * @param request request
 */
export function listTemplateUsingPOST(request: TemplateReq) {}

/**
 * 发送模板消息
 * @param request request
 */
export function sendTemplateMsgUsingPOST(request: TemplateSendReq) {}

/**
 * 模板消息样例
 * @param request request
 */
export function getTemplateExampleUsingPOST(request: TemplateIdReq) {}

/**
 * 接单是否拦截
 * @param request request
 */
export function interceptUsingPOST(request: interceptUsingPOSTData) {}

/**
 * 操作日志列表
 * @param request request
 */
export function pagesUsingPOST_3(request: pagesUsingPOST_3Data) {}

/**
 * 操作日志列表
 * @param request request
 */
export function withdrawPagesUsingPOST(request: pagesUsingPOST_3Data) {}

/**
 * 接单拦截白名单列表
 * @param request request
 */
export function pagesUsingPOST_2(request: pagesUsingPOST_2Data) {}

/**
 * 导入提现白名单
 * @param request request
 */
export function withdrawImportUsingPOST(request: withdrawImportUsingPOSTData) {}

/**
 * 提现是否拦截
 * @param request request
 */
export function withdrawInterceptUsingPOST(request: interceptUsingPOSTData) {}

/**
 * 提现拦截白名单列表
 * @param request request
 */
export function withDrawPagesUsingPOST(request: pagesUsingPOST_2Data) {}
