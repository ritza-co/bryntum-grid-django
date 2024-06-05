/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(c,r){var i=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var p=r(),d=i?exports:c;for(var g in p)d[g]=p[g]}})(typeof self<"u"?self:void 0,()=>{var c={},r={exports:c},i=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,k=(e,t,l)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,v=(e,t)=>{for(var l in t)i(e,l,{get:t[l],enumerable:!0})},y=(e,t,l,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of d(t))!g.call(e,a)&&a!==l&&i(e,a,{get:()=>t[a],enumerable:!(s=p(t,a))||s.enumerable});return e},h=e=>y(i({},"__esModule",{value:!0}),e),f=(e,t,l)=>(k(e,typeof t!="symbol"?t+"":t,l),l),b={};v(b,{default:()=>N}),r.exports=h(b);var n=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,u=class m{static mergeLocales(...t){let l={};return t.forEach(s=>{Object.keys(s).forEach(a=>{typeof s[a]=="object"?l[a]={...l[a],...s[a]}:l[a]=s[a]})}),l}static trimLocale(t,l){let s=(a,o)=>{t[a]&&(o?t[a][o]&&delete t[a][o]:delete t[a])};Object.keys(l).forEach(a=>{Object.keys(l[a]).length>0?Object.keys(l[a]).forEach(o=>s(a,o)):s(a)})}static normalizeLocale(t,l){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!l)throw new Error('"config" parameter can not be empty');l.locale?l.name=t||l.name:l.localeName=t}else l=t;let s={};if(l.name||l.locale)s=Object.assign({localeName:l.name},l.locale),l.desc&&(s.localeDesc=l.desc),l.code&&(s.localeCode=l.code),l.path&&(s.localePath=l.path);else{if(!l.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);s=Object.assign({},l)}for(let a of["name","desc","code","path"])s[a]&&delete s[a];if(!s.localeName)throw new Error("Locale name can not be empty");return s}static get locales(){return n.bryntum.locales||{}}static set locales(t){n.bryntum.locales=t}static get localeName(){return n.bryntum.locale||"En"}static set localeName(t){n.bryntum.locale=t||m.localeName}static get locale(){return m.localeName&&this.locales[m.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,l){let{locales:s}=n.bryntum,a=m.normalizeLocale(t,l),{localeName:o}=a;return!s[o]||l===!0?s[o]=a:s[o]=this.mergeLocales(s[o]||{},a||{}),s[o]}};f(u,"skipLocaleIntegrityCheck",!1);var z=u;n.bryntum=n.bryntum||{},n.bryntum.locales=n.bryntum.locales||{},z._$name="LocaleHelper";var C={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",Object:{Yes:"Igen",No:"Nem",Cancel:"Mégse",Ok:"OK",Week:"Hét",None:"Nincs"},ColorPicker:{noColor:"Nincs szín"},Combo:{noResults:"Nincs eredmény",recordNotCommitted:"A bejegyzés nem adható hozzá",addNewValue:e=>`${e} hozzáadása`},FilePicker:{file:"Fájl"},Field:{badInput:"A mező értéke érvénytelen",patternMismatch:"Az értéknek illeszkednie kell egy adott mintába",rangeOverflow:e=>`Az érték legyen kisebb vagy egyenlő mint ${e.max}`,rangeUnderflow:e=>`Az érték legyen nagyobb vagy egyenlő mint ${e.min}`,stepMismatch:"Az értéknek illeszkednie kell a lépésbe",tooLong:"Az érték legyen rövidebb",tooShort:"Az érték legyen hosszabb",typeMismatch:"Az értéknek speciális formátumúnak kell lennie",valueMissing:"A mező kitöltése kötelező",invalidValue:"A mező értéke érvénytelen",minimumValueViolation:"Minimumérték hiba",maximumValueViolation:"Maximumérték hiba",fieldRequired:"A mező kitöltése kötelező",validateFilter:"Az értéket a listáról kell kiválasztani"},DateField:{invalidDate:"Érvénytelen dátumérték"},DatePicker:{gotoPrevYear:"Ugrás az előző évre",gotoPrevMonth:"Ugrás az előző hónapra",gotoNextMonth:"Ugrás a következő hónapra",gotoNextYear:"Ugrás a következő évre"},NumberFormat:{locale:"hu",currency:"HUF"},DurationField:{invalidUnit:"Érvénytelen egység"},TimeField:{invalidTime:"Érvénytelen időérték"},TimePicker:{hour:"Óra",minute:"Perc",second:"Másodperc"},List:{loading:"Betöltés...",selectAll:"Összes kiválasztása"},GridBase:{loadMask:"Betöltés...",syncMask:"Módosítások mentése, várjon..."},PagingToolbar:{firstPage:"Ugrás az első oldalra",prevPage:"Ugrás az előző oldalra",page:"Oldal",nextPage:"Ugrás a következő oldalra",lastPage:"Ugrás az utolsó oldalra",reload:"Aktuális oldal újratöltése",noRecords:"Nincs megjeleníthető bejegyzés",pageCountTemplate:e=>`/ ${e.lastPage}`,summaryTemplate:e=>`Megjelenített bejegyzések: ${e.start} - ${e.end} / ${e.allCount}`},PanelCollapser:{Collapse:"Összecsukás",Expand:"Kibontás"},Popup:{close:"Felugró ablak bezárása"},UndoRedo:{Undo:"Mégse",Redo:"Mégis",UndoLastAction:"Utolsó művelet visszavonása",RedoLastAction:"Utolsó művelet helyreállítása",NoActions:"Nincsen visszavonható művelet"},FieldFilterPicker:{equals:"egyenlő",doesNotEqual:"nem egyenlő",isEmpty:"üres",isNotEmpty:"nem üres",contains:"tartalmazza",doesNotContain:"nem tartalmazza",startsWith:"ezzel kezdődik",endsWith:"ezzel végződik",isOneOf:"ezek egyike",isNotOneOf:"nem ezek egyike",isGreaterThan:"nagyobb mint",isLessThan:"kisebb mint",isGreaterThanOrEqualTo:"nagyobb vagy egyenlő",isLessThanOrEqualTo:"kisebb vagy egyenlő",isBetween:"a következők közötti",isNotBetween:"nem a következők közötti",isBefore:"korábbi, mint",isAfter:"későbbi mint",isToday:"ma lesz",isTomorrow:"holnap lesz",isYesterday:"tegnap volt",isThisWeek:"ezen a héten lesz",isNextWeek:"következő héten lesz",isLastWeek:"múlt héten volt",isThisMonth:"ebben a hónapban lesz",isNextMonth:"következő hónapban lesz",isLastMonth:"múlt hónapban volt",isThisYear:"ebben az évben lesz",isNextYear:"következő évben lesz",isLastYear:"múlt évben volt",isYearToDate:"a dátum évében lesz",isTrue:"igaz",isFalse:"hamis",selectAProperty:"Jelöljön ki egy tulajdonságot",selectAnOperator:"Válasszon egy kezelőt",caseSensitive:"Kis- és nagybetűk felismerése",and:"és",dateFormat:"D/M/YY",selectValue:"Válasszon értéket",selectOneOrMoreValues:"Válasszon ki legalább egy értéket",enterAValue:"Adjon meg egy értéket",enterANumber:"Adjon meg egy számot",selectADate:"Válasszon ki egy dátumot",selectATime:"Válassz időt"},FieldFilterPickerGroup:{addFilter:"Szűrő hozzáadása"},DateHelper:{locale:"hu",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milliszekundum",plural:"ms",abbrev:"ms"},{single:"másodperc",plural:"másodpercs",abbrev:"mp"},{single:"perc",plural:"perc",abbrev:"p"},{single:"óra",plural:"óra",abbrev:"ó"},{single:"nap",plural:"nap",abbrev:"n"},{single:"hét",plural:"hét",abbrev:"h"},{single:"hónap",plural:"hónap",abbrev:"hó"},{single:"negyedév",plural:"negyedév",abbrev:"n.é."},{single:"év",plural:"év",abbrev:"év"},{single:"évtized",plural:"évtized",abbrev:"é.t."}],unitAbbreviations:[["ms"],["mp","mp"],["p","perc"],["ó","ó"],["n"],["h","h"],["h","hó","hn"],["né","n.év","n.é."],["é","év"],["évt."]],parsers:{L:"YYYY. MM. DD.",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},x=z.publishLocale(C),S=new String,j={localeName:"Hu",localeDesc:"Magyar",localeCode:"hu",ColumnPicker:{column:"Oszlop",columnsMenu:"Oszlopok",hideColumn:"Oszlop elrejtése",hideColumnShort:"Elrejtés",newColumns:"Új oszlopok"},Filter:{applyFilter:"Szűrő alkalmazása",filter:"Szűrő",editFilter:"Szűrő szerkesztése",on:"Feltétel",before:"Előtte",after:"Utána",equals:"Egyenlő",lessThan:"Kevesebb mint",moreThan:"Több mint",removeFilter:"Szűrő törlése",disableFilter:"Szűrő tiltása"},FilterBar:{enableFilterBar:"Szűrősáv megjelenítése",disableFilterBar:"Szűrősáv elrejtése"},Group:{group:"Csoportosítás",groupAscending:"Csoport növekvő",groupDescending:"Csoport csökkenő",groupAscendingShort:"Növekvő",groupDescendingShort:"Csökkenő",stopGrouping:"Csoportbontás",stopGroupingShort:"Befejezés"},HeaderMenu:{moveBefore:e=>`Áthelyezés elé "${e}"`,moveAfter:e=>`Áthelyezés mögé "${e}"`,collapseColumn:"Oszlop összecsukása",expandColumn:"Oszlop kibontása"},ColumnRename:{rename:"Átnevezés"},MergeCells:{mergeCells:"Cellák egyesítése",menuTooltip:"Azonos értékű cellák egyesítése az oszlop alapján történő rendezéskor"},Search:{searchForValue:"Érték keresése"},Sort:{sort:"Rendezés",sortAscending:"Növekvő sorrend",sortDescending:"Csökkenő sorrend",multiSort:"Többszörös rendezés",removeSorter:"Rendező törlése",addSortAscending:"Növekvő rendező hozzáadása",addSortDescending:"Csökkenő rendező hozzáadása",toggleSortAscending:"Váltás növekvőre",toggleSortDescending:"Váltás csökkenőre",sortAscendingShort:"Növekvő",sortDescendingShort:"Csökkenő",removeSorterShort:"Eltávolítás",addSortAscendingShort:"+ Növekvő",addSortDescendingShort:"+ Csökkenő"},Split:{split:"Szétválasztás",unsplit:"Egybeválasztás",horizontally:"Vízszintesen",vertically:"Függőlegesen",both:"Mindkettő"},Column:{columnLabel:e=>`${e.text?`${e.text} oszlop. `:""}SZÓKÖZ a helyi menühöz${e.sortable?", ENTER a rendezéshez":""}`,cellLabel:S},Checkbox:{toggleRowSelect:"Sorválasztás váltása",toggleSelection:"Teljes adatlap kiválasztásának váltása"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`értékelés : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Adatok betöltése sikertelen!",syncFailedMessage:"Adatszinkronizálás sikertelen!",unspecifiedFailure:"Ismeretlen hiba",networkFailure:"Hálózati hiba",parseFailure:"Szerverválasz értelmezési hiba",serverResponse:"Szerverválasz:",noRows:"Nincs megjeleníthető bejegyzés",moveColumnLeft:"Áthelyezés a bal oldalra",moveColumnRight:"Áthelyezés a jobb oldalra",moveColumnTo:e=>`Oszlop áthelyezése ide: ${e}`},CellMenu:{removeRow:"Törlés"},RowCopyPaste:{copyRecord:"Másolás",cutRecord:"Kivágás",pasteRecord:"Beillesztés",rows:"sorok",row:"sor"},CellCopyPaste:{copy:"Másolás",cut:"Kivágás",paste:"Beillesztés"},PdfExport:{"Waiting for response from server":"Várakozás a szerver válaszára...","Export failed":"Sikertelen exportálás","Server error":"Szerverhiba","Generating pages":"Oldalak létrehozása...","Click to abort":"Mégse"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Beállítások exportálása",export:"Exportálás",printSettings:"Nyomtatási beállítások",print:"Nyomtatás",exporterType:"Oldalszámozás szabályozása",cancel:"Mégse",fileFormat:"Fájlformátum",rows:"Sorok",alignRows:"Sorok igazítása",columns:"Oszlopok",paperFormat:"Papírformátum",orientation:"Tájolás",repeatHeader:"Fejléc ismétlése"},ExportRowsCombo:{all:"Összes sor",visible:"Látható sorok"},ExportOrientationCombo:{portrait:"Álló",landscape:"Fekvő"},SinglePageExporter:{singlepage:"Egy oldal"},MultiPageExporter:{multipage:"Több oldal",exportingPage:({currentPage:e,totalPages:t})=>`Oldal exportálása ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Több oldal (függőleges)",exportingPage:({currentPage:e,totalPages:t})=>`Oldal exportálása ${e}/${t}`},RowExpander:{loading:"Betöltés",expand:"Kibontás",collapse:"Összecsukás"},TreeGroup:{group:"Csoportosítás",stopGrouping:"Csoportosítás megszakítása",stopGroupingThisColumn:"Oszlop szétbontása"}},N=z.publishLocale(j);if(typeof r.exports=="object"&&typeof c=="object"){var O=(e,t,l,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,a)&&a!==l&&Object.defineProperty(e,a,{get:()=>t[a],enumerable:!(s=Object.getOwnPropertyDescriptor(t,a))||s.enumerable});return e};r.exports=O(r.exports,c)}return r.exports});
