/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(d,i){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],i);else if(typeof module=="object"&&module.exports)module.exports=i();else{var p=i(),v=s?exports:d;for(var m in p)v[m]=p[m]}})(typeof self<"u"?self:void 0,()=>{var d={},i={exports:d},s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,b=(e,a,o)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,k=(e,a)=>{for(var o in a)s(e,o,{get:a[o],enumerable:!0})},f=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of v(a))!m.call(e,r)&&r!==o&&s(e,r,{get:()=>a[r],enumerable:!(t=p(a,r))||t.enumerable});return e},z=e=>f(s({},"__esModule",{value:!0}),e),P=(e,a,o)=>(b(e,typeof a!="symbol"?a+"":a,o),o),u={};k(u,{default:()=>S}),i.exports=z(u);var l=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,g=class c{static mergeLocales(...a){let o={};return a.forEach(t=>{Object.keys(t).forEach(r=>{typeof t[r]=="object"?o[r]={...o[r],...t[r]}:o[r]=t[r]})}),o}static trimLocale(a,o){let t=(r,n)=>{a[r]&&(n?a[r][n]&&delete a[r][n]:delete a[r])};Object.keys(o).forEach(r=>{Object.keys(o[r]).length>0?Object.keys(o[r]).forEach(n=>t(r,n)):t(r)})}static normalizeLocale(a,o){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!o)throw new Error('"config" parameter can not be empty');o.locale?o.name=a||o.name:o.localeName=a}else o=a;let t={};if(o.name||o.locale)t=Object.assign({localeName:o.name},o.locale),o.desc&&(t.localeDesc=o.desc),o.code&&(t.localeCode=o.code),o.path&&(t.localePath=o.path);else{if(!o.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);t=Object.assign({},o)}for(let r of["name","desc","code","path"])t[r]&&delete t[r];if(!t.localeName)throw new Error("Locale name can not be empty");return t}static get locales(){return l.bryntum.locales||{}}static set locales(a){l.bryntum.locales=a}static get localeName(){return l.bryntum.locale||"En"}static set localeName(a){l.bryntum.locale=a||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,o){let{locales:t}=l.bryntum,r=c.normalizeLocale(a,o),{localeName:n}=r;return!t[n]||o===!0?t[n]=r:t[n]=this.mergeLocales(t[n]||{},r||{}),t[n]}};P(g,"skipLocaleIntegrityCheck",!1);var j=g;l.bryntum=l.bryntum||{},l.bryntum.locales=l.bryntum.locales||{},j._$name="LocaleHelper";var h={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",Object:{Yes:"Da",No:"Ne",Cancel:"Prekliči",Ok:"OK",Week:"Teden",None:"Brez"},ColorPicker:{noColor:"Brez barve"},Combo:{noResults:"Ni rezultatov",recordNotCommitted:"Zapisa ni bilo mogoče dodati",addNewValue:e=>` Dodajte ${e}`},FilePicker:{file:"Datoteka"},Field:{badInput:"Neveljavna vrednost polja",patternMismatch:"Vrednost se mora ujemati z določenim vzorcem",rangeOverflow:e=>` Vrednost mora biti manjša ali enaka ${e.max}`,rangeUnderflow:e=>` Vrednost mora biti večja ali enaka ${e.min}`,stepMismatch:"Vrednost mora ustrezati koraku",tooLong:"Vrednost naj bo krajša",tooShort:"Vrednost naj bo daljša",typeMismatch:"Vrednost mora biti v posebni obliki",valueMissing:"To polje je obvezno",invalidValue:"Neveljavna vrednost polja",minimumValueViolation:"Kršitev najmanjše vrednosti",maximumValueViolation:"Kršitev največje vrednosti",fieldRequired:"To polje je obvezno",validateFilter:"Vrednost mora biti izbrana s seznama"},DateField:{invalidDate:"Neveljaven vnos datuma"},DatePicker:{gotoPrevYear:"Pojdi na prejšnje leto",gotoPrevMonth:"Pojdi na prejšnji mesec",gotoNextMonth:"Pojdi na naslednji mesec",gotoNextYear:"Pojdi na naslednje leto"},NumberFormat:{locale:"sl",currency:"EUR"},DurationField:{invalidUnit:"Neveljavna enota"},TimeField:{invalidTime:"Neveljaven vnos časa"},TimePicker:{hour:"Ura",minute:"Minuta",second:"Drugi"},List:{loading:"Nalaganje...",selectAll:"Izberi vse"},GridBase:{loadMask:"Nalaganje...",syncMask:"Shranjevanje sprememb, prosim počakajte ..."},PagingToolbar:{firstPage:"Pojdi na prvo stran",prevPage:"Pojdi na prejšnjo stran",page:"Stran",nextPage:"Pojdi na naslednjo stran",lastPage:"Pojdi na zadnjo stran",reload:"Znova naloži trenutno stran",noRecords:"Ni zapisov za prikaz",pageCountTemplate:e=>`od ${e.lastPage}`,summaryTemplate:e=>` Prikaz zapisov ${e.start} - ${e.end} od ${e.allCount}`},PanelCollapser:{Collapse:"Strni",Expand:"Razširi"},Popup:{close:"Zapri pojavno okno"},UndoRedo:{Undo:"Razveljavi",Redo:"Ponovno uveljav",UndoLastAction:"Razveljavi zadnje dejanje",RedoLastAction:"Ponovi zadnje razveljavljeno dejanje",NoActions:"V čakalni vrsti za razveljavitev ni elementov"},FieldFilterPicker:{equals:"enako",doesNotEqual:"ni enako",isEmpty:"je prazno",isNotEmpty:"ni prazno",contains:"vsebuje",doesNotContain:"ne vsebuje",startsWith:"začne se z",endsWith:"konča se z",isOneOf:"je eden od",isNotOneOf:"ni eden od",isGreaterThan:"je večje kot",isLessThan:"je manjše kot",isGreaterThanOrEqualTo:"je večje ali enako",isLessThanOrEqualTo:"je manjše ali enako",isBetween:"je vmes",isNotBetween:"ni vmes",isBefore:"je pred",isAfter:"je potem",isToday:"je danes",isTomorrow:"je jutri",isYesterday:"je včeraj",isThisWeek:"je ta teden",isNextWeek:"je naslednji teden",isLastWeek:"je prejšnji teden",isThisMonth:"je ta mesec",isNextMonth:"je naslednji mesec",isLastMonth:"je prejšnji mesec",isThisYear:"je to leto",isNextYear:"je naslednje leto",isLastYear:"je prejšnje leto",isYearToDate:"je leto do danes",isTrue:"je res",isFalse:"je napačno",selectAProperty:"Izberite lastnost",selectAnOperator:"Izberite operaterja",caseSensitive:"Razlikuje med velikimi in malimi črkami",and:"in",dateFormat:"D/M/YY",selectValue:"Izberi vrednost",selectOneOrMoreValues:"Izberite eno ali več vrednosti",enterAValue:"Vnesite vrednost",enterANumber:"Vnesite številko",selectADate:"Izberite datum",selectATime:"Izberite čas"},FieldFilterPickerGroup:{addFilter:"Dodajte filter"},DateHelper:{locale:"sl",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisekunda",plural:"milisekunde",abbrev:"ms"},{single:"sekunda",plural:"sekunde",abbrev:"s"},{single:"minuta",plural:"minute",abbrev:"min"},{single:"ura",plural:"ure",abbrev:"ur"},{single:"dan",plural:"dnevi",abbrev:"d"},{single:"teden",plural:"tedni",abbrev:"t"},{single:"mesec",plural:"meseci",abbrev:"m"},{single:"četrtletje",plural:"četrtletja",abbrev:"četrt"},{single:"leto",plural:"leta",abbrev:"l"},{single:"desetletje",plural:"desetletja",abbrev:"des"}],unitAbbreviations:[["ms"],["s","sek"],["m","min"],["ur","ur"],["d"],["t","t"],["m","m","m"],["četrt","četrt","četrt"],["l","l"],["des"]],parsers:{L:"D. M. YYYY.",LT:"HH:mm ",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},x=j.publishLocale(h),y=new String,N={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",ColumnPicker:{column:"Stolpec",columnsMenu:"Stolpci",hideColumn:"Skrij stolpec",hideColumnShort:"Skrij",newColumns:"Novi stolpci"},Filter:{applyFilter:"Uporabi filter",filter:"Filter",editFilter:"Uredi filter",on:"Vklopljeno",before:"Prej",after:"Po",equals:"Enako",lessThan:"Manj kot",moreThan:"Več kot",removeFilter:"Odstrani filter",disableFilter:"Onemogoči filter"},FilterBar:{enableFilterBar:"Pokaži vrstico s filtri",disableFilterBar:"Skrij vrstico s filtri"},Group:{group:"Skupina",groupAscending:"Skupina narašča",groupDescending:"Skupina pada",groupAscendingShort:"Naraščajoče",groupDescendingShort:"Padajoče",stopGrouping:"Ustavi združevanje",stopGroupingShort:"Ustavi"},HeaderMenu:{moveBefore:e=>` Premakni pred"${e}"`,moveAfter:e=>` Premakni za "${e}"`,collapseColumn:"Strni stolpec",expandColumn:"Razširi stolpec"},ColumnRename:{rename:"Preimenuj"},MergeCells:{mergeCells:"Združi celice",menuTooltip:"Združi celice z isto vrednostjo, ko so razvrščene po tem stolpcu"},Search:{searchForValue:"Išči vrednost"},Sort:{sort:"Razvrsti",sortAscending:"Razvrsti naraščajoče",sortDescending:"Razvrsti padajoče",multiSort:"Več razvrstitev",removeSorter:"Odstrani razvrščevalnik",addSortAscending:"Dodaj naraščajoči razvrščevalnik",addSortDescending:"Dodaj padajoči razvrščevalnik",toggleSortAscending:"Spremeni v naraščajoče",toggleSortDescending:"Spremeni v padajoče",sortAscendingShort:"Naraščajoče",sortDescendingShort:"Padajoče",removeSorterShort:"Odstrani",addSortAscendingShort:"+Naraščajoče",addSortDescendingShort:"+Padajoče"},Split:{split:"Deljenje",unsplit:"Nedeljenje",horizontally:"Vodoravno",vertically:"Navpično",both:"Oboje"},Column:{columnLabel:e=>`${e.text?`${e.text} stolpec. `:""}PRESLEDNICA za kontekstni meni${e.sortable?", VNESI za razvrstitev":""}`,cellLabel:y},Checkbox:{toggleRowSelect:"Preklop izbire vrstice",toggleSelection:"Preklopi izbor celotnega nabora podatkov"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`ocena : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Nalaganje podatkov ni uspelo!",syncFailedMessage:"Sinhronizacija podatkov ni uspela!",unspecifiedFailure:"Nedoločena napaka",networkFailure:"Napaka omrežja",parseFailure:"Razčlenitev odgovora strežnika ni uspela",serverResponse:"Odziv strežnika:",noRows:"Ni zapisov za prikaz",moveColumnLeft:"Premakni se v levi odsek",moveColumnRight:"Premakni se v desni odsek",moveColumnTo:e=>` Premakni stolpec v ${e}`},CellMenu:{removeRow:"Izbriši"},RowCopyPaste:{copyRecord:"Kopiraj",cutRecord:"Izreži",pasteRecord:"Prilepi",rows:"vrstice",row:"vrstica"},CellCopyPaste:{copy:"Kopiraj",cut:"Izreži",paste:"Prilepi"},PdfExport:{"Waiting for response from server":"Čakanje na odgovor strežnika ...","Export failed":"Izvoz ni uspel","Server error":"Napaka strežnika","Generating pages":"Ustvarjanje strani ...","Click to abort":"Prekliči"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Izvozi nastavitve",export:"Izvozi",printSettings:"Nastavitve tiskanja",print:"Tiskaj",exporterType:"Nadzor številčenja strani",cancel:"Prekliči",fileFormat:"Oblika datoteke",rows:"Vrstice",alignRows:"Poravnaj vrstice",columns:"Stolpci",paperFormat:"Format papirja",orientation:"Orientacija",repeatHeader:"Ponovi glavo"},ExportRowsCombo:{all:"Vse vrstice",visible:"Vidne vrstice"},ExportOrientationCombo:{portrait:"Portret",landscape:"Pokrajina"},SinglePageExporter:{singlepage:"Ena stran"},MultiPageExporter:{multipage:"Več strani",exportingPage:({currentPage:e,totalPages:a})=>`Izvažanje strani ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Več strani (navpično)",exportingPage:({currentPage:e,totalPages:a})=>`Izvažanje strani ${e}/${a}`},RowExpander:{loading:"Nalaganje",expand:"Razširi",collapse:"Strni"},TreeGroup:{group:"Združi po",stopGrouping:"Prenehaj z združevanjem",stopGroupingThisColumn:"Prenehaj z združevanjem te stolpca"}},S=j.publishLocale(N);if(typeof i.exports=="object"&&typeof d=="object"){var O=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,r)&&r!==o&&Object.defineProperty(e,r,{get:()=>a[r],enumerable:!(t=Object.getOwnPropertyDescriptor(a,r))||t.enumerable});return e};i.exports=O(i.exports,d)}return i.exports});
