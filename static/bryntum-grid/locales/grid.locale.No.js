/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(d,i){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],i);else if(typeof module=="object"&&module.exports)module.exports=i();else{var p=i(),m=s?exports:d;for(var c in p)m[c]=p[c]}})(typeof self<"u"?self:void 0,()=>{var d={},i={exports:d},s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,f=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r)s(e,t,{get:r[t],enumerable:!0})},y=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of m(r))!c.call(e,l)&&l!==t&&s(e,l,{get:()=>r[l],enumerable:!(n=p(r,l))||n.enumerable});return e},h=e=>y(s({},"__esModule",{value:!0}),e),S=(e,r,t)=>(f(e,typeof r!="symbol"?r+"":r,t),t),k={};b(k,{default:()=>N}),i.exports=h(k);var a=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,v=class g{static mergeLocales(...r){let t={};return r.forEach(n=>{Object.keys(n).forEach(l=>{typeof n[l]=="object"?t[l]={...t[l],...n[l]}:t[l]=n[l]})}),t}static trimLocale(r,t){let n=(l,o)=>{r[l]&&(o?r[l][o]&&delete r[l][o]:delete r[l])};Object.keys(t).forEach(l=>{Object.keys(t[l]).length>0?Object.keys(t[l]).forEach(o=>n(l,o)):n(l)})}static normalizeLocale(r,t){if(!r)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof r=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=r||t.name:t.localeName=r}else t=r;let n={};if(t.name||t.locale)n=Object.assign({localeName:t.name},t.locale),t.desc&&(n.localeDesc=t.desc),t.code&&(n.localeCode=t.code),t.path&&(n.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},t)}for(let l of["name","desc","code","path"])n[l]&&delete n[l];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return a.bryntum.locales||{}}static set locales(r){a.bryntum.locales=r}static get localeName(){return a.bryntum.locale||"En"}static set localeName(r){a.bryntum.locale=r||g.localeName}static get locale(){return g.localeName&&this.locales[g.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(r,t){let{locales:n}=a.bryntum,l=g.normalizeLocale(r,t),{localeName:o}=l;return!n[o]||t===!0?n[o]=l:n[o]=this.mergeLocales(n[o]||{},l||{}),n[o]}};S(v,"skipLocaleIntegrityCheck",!1);var u=v;a.bryntum=a.bryntum||{},a.bryntum.locales=a.bryntum.locales||{},u._$name="LocaleHelper";var F={localeName:"No",localeDesc:"Norsk",localeCode:"no",Object:{Yes:"Ja",No:"Nei",Cancel:"Avbryt",Ok:"OK",Week:"Uke",None:"Ingen"},ColorPicker:{noColor:"Ingen farge"},Combo:{noResults:"Ingen treff",recordNotCommitted:"Kunne ikke legge til oppføringen",addNewValue:e=>`Legg til ${e}`},FilePicker:{file:"Fil"},Field:{badInput:"Ugyldig feltverdi",patternMismatch:"Verdien skal samsvare med et bestemt mønster",rangeOverflow:e=>`Verdien må være mindre eller lik ${e.max}`,rangeUnderflow:e=>`Verdien må være større eller lik ${e.min}`,stepMismatch:"Verdien skal passe til trinnet",tooLong:"Verdien skal være kortere",tooShort:"Verdien skal være lengre",typeMismatch:"Verdien skal være i et bestemt format",valueMissing:"Dette feltet er obligatorisk",invalidValue:"Ugyldig feltverdi",minimumValueViolation:"Minimumsverdibrudd",maximumValueViolation:"Maksimumsverdibrudd",fieldRequired:"Dette feltet er obligatorisk",validateFilter:"Verdien skal velges fra listen"},DateField:{invalidDate:"Ugyldig datoinntasting"},DatePicker:{gotoPrevYear:"Gå til forrige år",gotoPrevMonth:"Gå til forrige måned",gotoNextMonth:"Gå til neste måned",gotoNextYear:"Gå til neste år"},NumberFormat:{locale:"no",currency:"NOK"},DurationField:{invalidUnit:"Ugyldig enhet"},TimeField:{invalidTime:"Ugyldig tidsinntasting"},TimePicker:{hour:"Time",minute:"Minutt",second:"Sekund"},List:{loading:"Laster...",selectAll:"Velg alle"},GridBase:{loadMask:"Laster...",syncMask:"Lagrer endringer, vennligst vent..."},PagingToolbar:{firstPage:"Gå til første side",prevPage:"Gå til forrige side",page:"Side",nextPage:"Gå til neste side",lastPage:"Gå til siste side",reload:"Last inn gjeldende side på nytt",noRecords:"Ingen oppføringer å vise",pageCountTemplate:e=>`av ${e.lastPage}`,summaryTemplate:e=>`Viser oppføringer ${e.start} - ${e.end} av ${e.allCount}`},PanelCollapser:{Collapse:"Skjul",Expand:"Utvid"},Popup:{close:"Lukk popup"},UndoRedo:{Undo:"Angre",Redo:"Gjøre om",UndoLastAction:"Angre siste handling",RedoLastAction:"Gjøre om siste handling",NoActions:"Ingen elementer I angrekøen"},FieldFilterPicker:{equals:"er lik",doesNotEqual:"er ikke lik",isEmpty:"er tom",isNotEmpty:"er ikke tom",contains:"inneholder",doesNotContain:"inneholder ikke",startsWith:"begynner med",endsWith:"slutter med",isOneOf:"er et av",isNotOneOf:"er ikke et av",isGreaterThan:"er større enn",isLessThan:"er mindre enn",isGreaterThanOrEqualTo:"er større enn eller lik",isLessThanOrEqualTo:"er mindre enn eller lik",isBetween:"er mellom",isNotBetween:"er ikke mellom",isBefore:"er før",isAfter:"er etter",isToday:"er i dag",isTomorrow:"er i morgen",isYesterday:"er i går",isThisWeek:"er denne uken",isNextWeek:"er neste uke",isLastWeek:"er siste uke",isThisMonth:"er denne måneden",isNextMonth:"er neste måned",isLastMonth:"er siste måned",isThisYear:"er i år",isNextYear:"er neste år",isLastYear:"er i fjor",isYearToDate:"er år til dags dato",isTrue:"er sant",isFalse:"er falsk",selectAProperty:"Velg egenskap",selectAnOperator:"Velg operatør",caseSensitive:"Skille mellom store og små bokstaver",and:"og",dateFormat:"D/M/YY",selectValue:"Velg verdi",selectOneOrMoreValues:"Velg én eller flere verdier",enterAValue:"Skriv inn en verdi",enterANumber:"Skriv inn et tall",selectADate:"Velg en dato",selectATime:"Velg tidspunkt"},FieldFilterPickerGroup:{addFilter:"Legg til filter"},DateHelper:{locale:"no",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisekund",plural:"ms",abbrev:"ms"},{single:"sekund",plural:"sekunder",abbrev:"s"},{single:"minutt",plural:"minutter",abbrev:"min"},{single:"time",plural:"timer",abbrev:"t"},{single:"dag",plural:"dager",abbrev:"d"},{single:"uke",plural:"uker",abbrev:"u"},{single:"måned",plural:"måneder",abbrev:"mån"},{single:"kvartal",plural:"kvartaler",abbrev:"k"},{single:"år",plural:"år",abbrev:"år"},{single:"tiår",plural:"tiår",abbrev:"tår"}],unitAbbreviations:[["mls"],["s","sek"],["m","min"],["t","t"],["d"],["u","uk"],["må","mån","mdr"],["k","kvart","kvt"],["å","år"],["dek"]],parsers:{L:"DD.MM.YYYY;",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e}},j=u.publishLocale(F),x=new String,L={localeName:"No",localeDesc:"Norsk",localeCode:"no",ColumnPicker:{column:"Kolonne",columnsMenu:"Kolonner",hideColumn:"Skjul kolonne",hideColumnShort:"Skjul",newColumns:"Nye kolonner"},Filter:{applyFilter:"Bruk filter",filter:"Filter",editFilter:"Rediger filter",on:"På",before:"Før",after:"Etter",equals:"Lik",lessThan:"Mindre enn",moreThan:"Flere enn",removeFilter:"Fjern filter",disableFilter:"Deaktiver filter"},FilterBar:{enableFilterBar:"Vis filterlinje",disableFilterBar:"Skjul filterlinje"},Group:{group:"Gruppere",groupAscending:"Gruppere stigende",groupDescending:"Gruppere synkende",groupAscendingShort:"Stigende",groupDescendingShort:"Synkende",stopGrouping:"Stopp gruppering",stopGroupingShort:"Stopp"},HeaderMenu:{moveBefore:e=>`Flytt før "${e}"`,moveAfter:e=>`Flytt etter "${e}"`,collapseColumn:"Skjul kolonne",expandColumn:"Utvid kolonne"},ColumnRename:{rename:"Gi nytt navn"},MergeCells:{mergeCells:"Slå sammen celler",menuTooltip:"Slå sammen celler med samme verdi når de sorteres etter denne kolonnen"},Search:{searchForValue:"Søk for verdi"},Sort:{sort:"Sortere",sortAscending:"Sortere stigende",sortDescending:"Sortere synkende",multiSort:"Multisortere",removeSorter:"Fjerne sorterer",addSortAscending:"Legge til sorterer",addSortDescending:"Legg til synkende sorterer",toggleSortAscending:"Endre til stigende",toggleSortDescending:"Endre til synkende",sortAscendingShort:"Stigende",sortDescendingShort:"Synkende",removeSorterShort:"Fjern",addSortAscendingShort:"+ stigende",addSortDescendingShort:"+ synkende"},Split:{split:"Del",unsplit:"Ikke delt",horizontally:"Horisontalt",vertically:"Vertikalt",both:"Begge"},Column:{columnLabel:e=>`${e.text?`${e.text} kolonne. `:""}MELLOMROM for kontekstmenyen${e.sortable?", ENTER for å sortere":""}`,cellLabel:x},Checkbox:{toggleRowSelect:"Veksle radvalg",toggleSelection:"Veksle valg av hele datasettet"},RatingColumn:{cellLabel:e=>{var r;return`${e.text?e.text:""} ${(r=e.location)!=null&&r.record?`vurdering : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Datainnlasting mislyktes!",syncFailedMessage:"Datasynkronisering mislyktes!",unspecifiedFailure:"Uspesifisert feil",networkFailure:"Nettverksfeil",parseFailure:"Klarte ikke å analysere serversvar",serverResponse:"Serversvar:",noRows:"Ingen oppføringer å vise",moveColumnLeft:"Flytt til venstre valg",moveColumnRight:"Flytt til høyre valg",moveColumnTo:e=>`Flytt kolonne til ${e}`},CellMenu:{removeRow:"Slett"},RowCopyPaste:{copyRecord:"Kopier",cutRecord:"Klipp ut",pasteRecord:"Lim",rows:"rader",row:"rad"},CellCopyPaste:{copy:"Kopier",cut:"Klipp",paste:"Lim inn"},PdfExport:{"Waiting for response from server":"Venter på svar fra server...","Export failed":"Eksport mislyktes","Server error":"Serverfeil","Generating pages":"Generer sider...","Click to abort":"Avbryt"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Eksportinnstillinger",export:"Eksport",printSettings:"Utskriftsinnstillinger",print:"Skriv ut",exporterType:"Kontrollere paginering",cancel:"Avbryt",fileFormat:"Filformat",rows:"Rader",alignRows:"Juster rader",columns:"Kolonner",paperFormat:"Papirformat",orientation:"Retning",repeatHeader:"Gjenta overskrift"},ExportRowsCombo:{all:"Alle rader",visible:"Synlige rader"},ExportOrientationCombo:{portrait:"Stående",landscape:"Liggende"},SinglePageExporter:{singlepage:"Enkel side"},MultiPageExporter:{multipage:"Flere sider",exportingPage:({currentPage:e,totalPages:r})=>`Eksporterer side ${e}/${r}`},MultiPageVerticalExporter:{multipagevertical:"Flere sider (vertikal)",exportingPage:({currentPage:e,totalPages:r})=>`Eksporterer side ${e}/${r}`},RowExpander:{loading:"Laster",expand:"Utvid",collapse:"Skjul"},TreeGroup:{group:"Grupper etter",stopGrouping:"Stopp gruppering",stopGroupingThisColumn:"Stopp gruppering av denne kolonnen"}},N=u.publishLocale(L);if(typeof i.exports=="object"&&typeof d=="object"){var P=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of Object.getOwnPropertyNames(r))!Object.prototype.hasOwnProperty.call(e,l)&&l!==t&&Object.defineProperty(e,l,{get:()=>r[l],enumerable:!(n=Object.getOwnPropertyDescriptor(r,l))||n.enumerable});return e};i.exports=P(i.exports,d)}return i.exports});