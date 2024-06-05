/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(c,n){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],n);else if(typeof module=="object"&&module.exports)module.exports=n();else{var u=n(),d=s?exports:c;for(var m in u)d[m]=u[m]}})(typeof self<"u"?self:void 0,()=>{var c={},n={exports:c},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})},v=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of d(t))!m.call(e,o)&&o!==r&&s(e,o,{get:()=>t[o],enumerable:!(a=u(t,o))||a.enumerable});return e},C=e=>v(s({},"__esModule",{value:!0}),e),x=(e,t,r)=>(f(e,typeof t!="symbol"?t+"":t,r),r),b={};y(b,{default:()=>O}),n.exports=C(b);var i=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,h=class p{static mergeLocales(...t){let r={};return t.forEach(a=>{Object.keys(a).forEach(o=>{typeof a[o]=="object"?r[o]={...r[o],...a[o]}:r[o]=a[o]})}),r}static trimLocale(t,r){let a=(o,l)=>{t[o]&&(l?t[o][l]&&delete t[o][l]:delete t[o])};Object.keys(r).forEach(o=>{Object.keys(r[o]).length>0?Object.keys(r[o]).forEach(l=>a(o,l)):a(o)})}static normalizeLocale(t,r){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!r)throw new Error('"config" parameter can not be empty');r.locale?r.name=t||r.name:r.localeName=t}else r=t;let a={};if(r.name||r.locale)a=Object.assign({localeName:r.name},r.locale),r.desc&&(a.localeDesc=r.desc),r.code&&(a.localeCode=r.code),r.path&&(a.localePath=r.path);else{if(!r.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},r)}for(let o of["name","desc","code","path"])a[o]&&delete a[o];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return i.bryntum.locales||{}}static set locales(t){i.bryntum.locales=t}static get localeName(){return i.bryntum.locale||"En"}static set localeName(t){i.bryntum.locale=t||p.localeName}static get locale(){return p.localeName&&this.locales[p.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,r){let{locales:a}=i.bryntum,o=p.normalizeLocale(t,r),{localeName:l}=o;return!a[l]||r===!0?a[l]=o:a[l]=this.mergeLocales(a[l]||{},o||{}),a[l]}};x(h,"skipLocaleIntegrityCheck",!1);var g=h;i.bryntum=i.bryntum||{},i.bryntum.locales=i.bryntum.locales||{},g._$name="LocaleHelper";var N={localeName:"ZhCn",localeDesc:"中文（中国）",localeCode:"zh-CN",Object:{Yes:"是",No:"否",Cancel:"取消",Ok:"好",Week:"周",None:"无"},ColorPicker:{noColor:"无色"},Combo:{noResults:"无结果",recordNotCommitted:"无法添加记录",addNewValue:e=>`添加 ${e}`},FilePicker:{file:"文件"},Field:{badInput:"字段值无效",patternMismatch:"值应与特定模式相匹配",rangeOverflow:e=>`值必须小于或等于 ${e.max}`,rangeUnderflow:e=>`值必须大于或等于 ${e.min}`,stepMismatch:"值应符合步骤",tooLong:"值应更短",tooShort:"值应更长",typeMismatch:"值要采用特殊格式",valueMissing:"该字段为必填",invalidValue:"字段值无效",minimumValueViolation:"不符合最小值限制",maximumValueViolation:"不符合最大值限制",fieldRequired:"该字段为必填",validateFilter:"必须从列表中选择值"},DateField:{invalidDate:"日期输入无效"},DatePicker:{gotoPrevYear:"转至上一年",gotoPrevMonth:"转至上一月",gotoNextMonth:"转至下一月",gotoNextYear:"转至下一年"},NumberFormat:{locale:"zh-CN",currency:"CNY"},DurationField:{invalidUnit:"单位无效"},TimeField:{invalidTime:"时间输入无效"},TimePicker:{hour:"时",minute:"分",second:"秒"},List:{loading:"加载中……",selectAll:"全选"},GridBase:{loadMask:"加载中……",syncMask:"正在保存变更，请稍等……"},PagingToolbar:{firstPage:"转至第一页",prevPage:"转至上一页",page:"页",nextPage:"转至下一页",lastPage:"转至最后一页",reload:"重新载入当前页面",noRecords:"无记录显示",pageCountTemplate:e=>`的 ${e.lastPage}`,summaryTemplate:e=>`显示记录 ${e.start} - ${e.end} 的 ${e.allCount}`},PanelCollapser:{Collapse:"折叠",Expand:"展开"},Popup:{close:"关闭弹窗"},UndoRedo:{Undo:"撤销",Redo:"恢复",UndoLastAction:"撤销上个操作",RedoLastAction:"恢复上个撤销的操作",NoActions:"撤销队列中没有项目"},FieldFilterPicker:{equals:"等于",doesNotEqual:"不等于",isEmpty:"为空",isNotEmpty:"不为空",contains:"包含",doesNotContain:"不包含",startsWith:"开始为",endsWith:"结束为",isOneOf:"是之一",isNotOneOf:"不是之一",isGreaterThan:"大于",isLessThan:"小于",isGreaterThanOrEqualTo:"大于或等于",isLessThanOrEqualTo:"小于或等于",isBetween:"在之间",isNotBetween:"不在之间",isBefore:"在之前",isAfter:"在之后",isToday:"在今天",isTomorrow:"在明天",isYesterday:"在昨天",isThisWeek:"在本周",isNextWeek:"在下周",isLastWeek:"在上周",isThisMonth:"在本月",isNextMonth:"在下月",isLastMonth:"在上月",isThisYear:"在今年",isNextYear:"在明年",isLastYear:"在去年",isYearToDate:"是年初至今",isTrue:"为真",isFalse:"为假",selectAProperty:"选择一项属性",selectAnOperator:"选择操作员",caseSensitive:"区分大小写",and:"和",dateFormat:"年/月/日",selectValue:"选择一个值",selectOneOrMoreValues:"选择一个或多个值",enterAValue:"输入一个值",enterANumber:"输入一个数字",selectADate:"选择一个日期",selectATime:"选择时间"},FieldFilterPickerGroup:{addFilter:"增加过滤条件"},DateHelper:{locale:"zh-CN",weekStartDay:0,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"毫秒",plural:"毫秒",abbrev:"ms"},{single:"秒",plural:"秒",abbrev:"s"},{single:"分",plural:"分",abbrev:"min"},{single:"时",plural:"时",abbrev:"h"},{single:"天",plural:"天",abbrev:"d"},{single:"周",plural:"周",abbrev:"w"},{single:"月",plural:"月",abbrev:"mon"},{single:"季",plural:"季",abbrev:"q"},{single:"年",plural:"年",abbrev:"yr"},{single:"十年",plural:"十年",abbrev:"dec"}],unitAbbreviations:[["毫秒"],["s","秒"],["m","分"],["h","时"],["天"],["w","周"],["mo","月","月"],["q","季","季"],["y","年"],["十年"]],parsers:{L:"YYYY-MM-DD",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>"第"+e}},T=g.publishLocale(N),w=new String,P={localeName:"ZhCn",localeDesc:"中文（中国）",localeCode:"zh-CN",ColumnPicker:{column:"栏",columnsMenu:"栏",hideColumn:"隐藏栏",hideColumnShort:"隐藏",newColumns:"新栏"},Filter:{applyFilter:"应用筛选器",filter:"筛选器",editFilter:"编辑筛选器",on:"打开",before:"之前",after:"之后",equals:"等于",lessThan:"小于",moreThan:"大于",removeFilter:"去除筛选器",disableFilter:"禁用过滤器"},FilterBar:{enableFilterBar:"显示筛选条",disableFilterBar:"隐藏筛选条"},Group:{group:"组",groupAscending:"升序排列组",groupDescending:"降序排列组",groupAscendingShort:"升序",groupDescendingShort:"降序",stopGrouping:"停止分组",stopGroupingShort:"停止"},HeaderMenu:{moveBefore:e=>`移到"${e}"之前`,moveAfter:e=>`移到"${e}"之后`,collapseColumn:"折叠栏",expandColumn:"展开栏"},ColumnRename:{rename:"重命名"},MergeCells:{mergeCells:"合并单元格",menuTooltip:"按这一栏排序时，合并具有相同值的单元格"},Search:{searchForValue:"搜索值"},Sort:{sort:"分类",sortAscending:"按升序分类",sortDescending:"按降序分类",multiSort:"多项分类",removeSorter:"去除分类器",addSortAscending:"添加升序分类器",addSortDescending:"添加降序分类器",toggleSortAscending:"改为升序",toggleSortDescending:"改为降序",sortAscendingShort:"升序",sortDescendingShort:"降序",removeSorterShort:"去除",addSortAscendingShort:"+ 升序",addSortDescendingShort:"+ 降序"},Split:{split:"拆分",unsplit:"不拆分",horizontally:"水平",vertically:"垂直",both:"两者皆有"},Column:{columnLabel:e=>`${e.text?`${e.text} 栏.`:""}上下文菜单的空格${e.sortable?", 按回车键分类":""}`,cellLabel:w},Checkbox:{toggleRowSelect:"切换选择行",toggleSelection:"切换选择整个数据集"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`评分 : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"数据加载失败！",syncFailedMessage:"数据同步失败！",unspecifiedFailure:"未知错误",networkFailure:"网络错误",parseFailure:"解析服务器响应失败",serverResponse:"服务器响应：",noRows:"无记录显示",moveColumnLeft:"移到左边部分",moveColumnRight:"移到右边部分",moveColumnTo:e=>`将栏移到 ${e}`},CellMenu:{removeRow:"删除"},RowCopyPaste:{copyRecord:"复制",cutRecord:"剪切",pasteRecord:"粘贴",rows:"行",row:"行"},CellCopyPaste:{copy:"复制",cut:"剪切",paste:"粘贴"},PdfExport:{"Waiting for response from server":"等待服务器响应……","Export failed":"输出失败","Server error":"服务器错误","Generating pages":"生成页面……","Click to abort":"取消"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"输出设置",export:"输出",printSettings:"打印设置",print:"打印",exporterType:"控制分页",cancel:"取消",fileFormat:"文档格式",rows:"行",alignRows:"对齐行",columns:"栏",paperFormat:"纸张格式",orientation:"方向",repeatHeader:"重复页眉"},ExportRowsCombo:{all:"所有行",visible:"可见行"},ExportOrientationCombo:{portrait:"竖向",landscape:"横向"},SinglePageExporter:{singlepage:"单页"},MultiPageExporter:{multipage:"多页",exportingPage:({currentPage:e,totalPages:t})=>`导出第 ${e}/${t} 页`},MultiPageVerticalExporter:{multipagevertical:"多页（垂直）",exportingPage:({currentPage:e,totalPages:t})=>`导出第 ${e}/${t} 页`},RowExpander:{loading:"正在加载",expand:"展开",collapse:"折叠"},TreeGroup:{group:"按组",stopGrouping:"停止分组",stopGroupingThisColumn:"取消列分组"}},O=g.publishLocale(P);if(typeof n.exports=="object"&&typeof c=="object"){var S=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,o)&&o!==r&&Object.defineProperty(e,o,{get:()=>t[o],enumerable:!(a=Object.getOwnPropertyDescriptor(t,o))||a.enumerable});return e};n.exports=S(n.exports,c)}return n.exports});