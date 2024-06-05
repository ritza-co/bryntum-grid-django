/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(d,n){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],n);else if(typeof module=="object"&&module.exports)module.exports=n();else{var u=n(),m=s?exports:d;for(var c in u)m[c]=u[c]}})(typeof self<"u"?self:void 0,()=>{var d={},n={exports:d},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,b=(e,a,o)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,k=(e,a)=>{for(var o in a)s(e,o,{get:a[o],enumerable:!0})},f=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of m(a))!c.call(e,r)&&r!==o&&s(e,r,{get:()=>a[r],enumerable:!(t=u(a,r))||t.enumerable});return e},h=e=>f(s({},"__esModule",{value:!0}),e),z=(e,a,o)=>(b(e,typeof a!="symbol"?a+"":a,o),o),j={};k(j,{default:()=>N}),n.exports=h(j);var l=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,g=class p{static mergeLocales(...a){let o={};return a.forEach(t=>{Object.keys(t).forEach(r=>{typeof t[r]=="object"?o[r]={...o[r],...t[r]}:o[r]=t[r]})}),o}static trimLocale(a,o){let t=(r,i)=>{a[r]&&(i?a[r][i]&&delete a[r][i]:delete a[r])};Object.keys(o).forEach(r=>{Object.keys(o[r]).length>0?Object.keys(o[r]).forEach(i=>t(r,i)):t(r)})}static normalizeLocale(a,o){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!o)throw new Error('"config" parameter can not be empty');o.locale?o.name=a||o.name:o.localeName=a}else o=a;let t={};if(o.name||o.locale)t=Object.assign({localeName:o.name},o.locale),o.desc&&(t.localeDesc=o.desc),o.code&&(t.localeCode=o.code),o.path&&(t.localePath=o.path);else{if(!o.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);t=Object.assign({},o)}for(let r of["name","desc","code","path"])t[r]&&delete t[r];if(!t.localeName)throw new Error("Locale name can not be empty");return t}static get locales(){return l.bryntum.locales||{}}static set locales(a){l.bryntum.locales=a}static get localeName(){return l.bryntum.locale||"En"}static set localeName(a){l.bryntum.locale=a||p.localeName}static get locale(){return p.localeName&&this.locales[p.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,o){let{locales:t}=l.bryntum,r=p.normalizeLocale(a,o),{localeName:i}=r;return!t[i]||o===!0?t[i]=r:t[i]=this.mergeLocales(t[i]||{},r||{}),t[i]}};z(g,"skipLocaleIntegrityCheck",!1);var v=g;l.bryntum=l.bryntum||{},l.bryntum.locales=l.bryntum.locales||{},v._$name="LocaleHelper";var P={localeName:"Sr",localeDesc:"Srpski",localeCode:"sr",Object:{Yes:"Da",No:"Ne",Cancel:"Otkaži",Ok:"OK",Week:"Nedelja",None:"Ништа"},ColorPicker:{noColor:"Без боје"},Combo:{noResults:"Nema rezultata",recordNotCommitted:"Rezultati nisu mogli biti dodati",addNewValue:e=>`Dodaj ${e}`},FilePicker:{file:"Datoteka"},Field:{badInput:"Neispravna vrednost polja",patternMismatch:"Vrednost treba da odgovara određenom šablonu",rangeOverflow:e=>`Vrednost mora biti manja ili jednaka ${e.max}`,rangeUnderflow:e=>`Vrednost mora biti veća ili jednaka ${e.min}`,stepMismatch:"Vrednost treba da odgovara koraku",tooLong:"Vrednost treba da je kraća",tooShort:"Vrednost treba da je duža",typeMismatch:"Potrebno je da vrednost bude određenog formata",valueMissing:"Ovo polje je potrebno",invalidValue:"Neispravna vrednost polja",minimumValueViolation:"Minimalna vrednost prekršaja",maximumValueViolation:"Maksimalna vrednost prekršaja",fieldRequired:"Ovo polje je potrebno",validateFilter:"Vrednost mora da bude izabrana sa liste"},DateField:{invalidDate:"Neispravni unos datuma"},DatePicker:{gotoPrevYear:"Idi na prethodnu godinu",gotoPrevMonth:"Idi na prethodni mesec",gotoNextMonth:"Idi na sledeći mesec",gotoNextYear:"Idi na sledeću godinu"},NumberFormat:{locale:"sr",currency:"RSD"},DurationField:{invalidUnit:"Neispravna jedinica"},TimeField:{invalidTime:"Neispravan unos vremena"},TimePicker:{hour:"Sat",minute:"Minut",second:"Sekunda"},List:{loading:"Učitavanje...",selectAll:"Odaberi sve"},GridBase:{loadMask:"Učitavanje...",syncMask:"Promene se čuvaju, molim sačekajte..."},PagingToolbar:{firstPage:"Idi na prvu stranu",prevPage:"Idi na prethodnu stranu",page:"Strana",nextPage:"Idi na sledeću stranu",lastPage:"Idi na poslednju stranu",reload:"Ponovo učitaj trenutnu stranu",noRecords:"Nema zapisa za prikaz",pageCountTemplate:e=>`od ${e.lastPage}`,summaryTemplate:e=>`Prikazuju se zapisi ${e.start} - ${e.end} od ${e.allCount}`},PanelCollapser:{Collapse:"Skupi",Expand:"Raširi"},Popup:{close:"Zatvori iskačući prozor"},UndoRedo:{Undo:"Opozovi",Redo:"Ponovi",UndoLastAction:"Opozovi poslednju radnju",RedoLastAction:"Ponovi poslednju opozvanu radnju",NoActions:"Nema stavki u redu za opoziv"},FieldFilterPicker:{equals:"jednako",doesNotEqual:"nije jednako",isEmpty:"je prazno",isNotEmpty:"nije prazno",contains:"sadrži",doesNotContain:"ne sadrži",startsWith:"počinje sa",endsWith:"završava sa",isOneOf:"je jedan od",isNotOneOf:"nije jedan od",isGreaterThan:"je veći od",isLessThan:"je manji od",isGreaterThanOrEqualTo:"je veći ili jednak od",isLessThanOrEqualTo:"je manji ili jednak od",isBetween:"je između",isNotBetween:"nije između",isBefore:"je pre",isAfter:"je posle",isToday:"je danas",isTomorrow:"je sutra",isYesterday:"je juče",isThisWeek:"je ove nedelje",isNextWeek:"je sledeće nedelje",isLastWeek:"je prošle nedelje",isThisMonth:"je ovog meseca",isNextMonth:"je sledećeg meseca",isLastMonth:"je prošlog meseca",isThisYear:"je ove godine",isNextYear:"je sledeće godine",isLastYear:"je prošle godine",isYearToDate:"je od početka godine do danas",isTrue:"je tačan",isFalse:"je netačan",selectAProperty:"Izaberite svojstvo",selectAnOperator:"Izaberite operatora",caseSensitive:"Osetljivo na mala i velika slova",and:"i",dateFormat:"D/M/YY",selectValue:"Izaberite vrednost",selectOneOrMoreValues:"Izaberite jednu ili više vrednosti",enterAValue:"Unesite vrednost",enterANumber:"Unesite broj",selectADate:"Izaberite datum",selectATime:"Izaberite vreme"},FieldFilterPickerGroup:{addFilter:"Dodajte filter"},DateHelper:{locale:"sr",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisekund",plural:"milisekundi",abbrev:"ms"},{single:"sekunda",plural:"sekunde",abbrev:"s"},{single:"minut",plural:"minuta",abbrev:"min"},{single:"sat",plural:"sati",abbrev:""},{single:"dan",plural:"dana",abbrev:"d"},{single:"nedelja",plural:"nedelje",abbrev:"ned"},{single:"mesec",plural:"meseci",abbrev:"mes"},{single:"kvartal",plural:"kvartala",abbrev:"kv"},{single:"godina",plural:"godine",abbrev:"god"},{single:"dekada",plural:"dekade",abbrev:"dek"}],unitAbbreviations:[["ms"],["s","sek"],["m","min"],["sat","sati"],["d"],["ned","ned"],["mes","mes","mes"],["kv","kv","kv"],["g","god"],["dek"]],parsers:{L:"D.M.YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},x=v.publishLocale(P),y=new String,S={localeName:"Sr",localeDesc:"Srpski",localeCode:"sr",ColumnPicker:{column:"Kolona",columnsMenu:"Kolone",hideColumn:"Sakrij kolonu",hideColumnShort:"Sakrij",newColumns:"Nove kolone"},Filter:{applyFilter:"Primeni filter",filter:"Filter",editFilter:"Uredi filter",on:"Uključeno",before:"Pre",after:"Posle",equals:"Jednako",lessThan:"Manje od",moreThan:"Više od",removeFilter:"Ukloni filter",disableFilter:"Onemogući filter"},FilterBar:{enableFilterBar:"Prikaži traku sa filterima",disableFilterBar:"Sakrij traku sa filterima"},Group:{group:"Grupiši",groupAscending:"Grupiši uzlazno",groupDescending:"Grupiši silazno",groupAscendingShort:"Uzlazno",groupDescendingShort:"Silazno",stopGrouping:"Prekini grupisanje",stopGroupingShort:"Stani"},HeaderMenu:{moveBefore:e=>`Pomeri pre "${e}"`,moveAfter:e=>`Pomeri posle "${e}"`,collapseColumn:"Skupi kolonu",expandColumn:"Proširi kolonu"},ColumnRename:{rename:"Preimenuj"},MergeCells:{mergeCells:"Spoj ćelije",menuTooltip:"Spoj ćelije sa istim vrednostima sortirane prema ovoj koloni"},Search:{searchForValue:"Pretraži vrednost"},Sort:{sort:"Sortiraj",sortAscending:"Sortiraj uzlazno",sortDescending:"Sortiraj silazno",multiSort:"Višestruko sortiranje",removeSorter:"Ukloni sortiranje",addSortAscending:"Dodaj uzlazno sortiranje",addSortDescending:"Dodaj silazno sortiranje",toggleSortAscending:"Promeni u uzlazno",toggleSortDescending:"Promeni u sliazno",sortAscendingShort:"Uzlazno",sortDescendingShort:"Silazno",removeSorterShort:"Ukloni",addSortAscendingShort:"+ Uzlazno",addSortDescendingShort:"+ Silazno"},Split:{split:"Podeljeno",unsplit:"Nepodeljeno",horizontally:"Horizontalno",vertically:"Vertikalno",both:"Oboje"},Column:{columnLabel:e=>`${e.text?`${e.text} kolone. `:""}SPACE za kontekstni meni${e.sortable?", ENTER za sortiranje":""}`,cellLabel:y},Checkbox:{toggleRowSelect:"Naizmenični izbor reda",toggleSelection:"Naizmenični izbor kompletnog seta podataka"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`ocena : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Učitavanje podataka nije uspelo!",syncFailedMessage:"Sinhronizacija podataka nije uspela!",unspecifiedFailure:"Neodređena greška",networkFailure:"Greška mreže",parseFailure:"Raščlanjivanje odgovora servera nije uspelo",serverResponse:"Odgovor servera:",noRows:"Nema zapisa za prikaz",moveColumnLeft:"Pomeri u levi odeljak",moveColumnRight:"Pomeri u desni odeljak",moveColumnTo:e=>`Pomeri kolonu u ${e}`},CellMenu:{removeRow:"Obriši"},RowCopyPaste:{copyRecord:"Kopiraj",cutRecord:"Iseci",pasteRecord:"Umetni",rows:"redova",row:"red"},CellCopyPaste:{copy:"Kopiraj",cut:"Iseci",paste:"Umetni"},PdfExport:{"Waiting for response from server":"Čeka se na odgovor servera...","Export failed":"Izvoz nije uspeo","Server error":"Greška servera","Generating pages":"Generišem stranice...","Click to abort":"Otkaži"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Izvezi podešavanja",export:"Izvezi",printSettings:"Postavke štampe",print:"Štampa",exporterType:"Kontrola straničenja",cancel:"Otkaži",fileFormat:"Format datoteke",rows:"Redovi",alignRows:"Poravnaj redove",columns:"Kolone",paperFormat:"Format papira",orientation:"Orijentacija",repeatHeader:"Ponovi zaglavlje"},ExportRowsCombo:{all:"Svi redovi",visible:"Vidljivi redovi"},ExportOrientationCombo:{portrait:"Upravno",landscape:"Položeno"},SinglePageExporter:{singlepage:"Jedna strana"},MultiPageExporter:{multipage:"Više strana",exportingPage:({currentPage:e,totalPages:a})=>`Izvos stranice ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Više strana (uspravno)",exportingPage:({currentPage:e,totalPages:a})=>` Izvos stranice ${e}/${a}`},RowExpander:{loading:"Učitavanje",expand:"Raširi",collapse:"Skupi"},TreeGroup:{group:"Grupiši po",stopGrouping:"Prekini grupisanje",stopGroupingThisColumn:"Prekini grupisanje ove kolone"}},N=v.publishLocale(S);if(typeof n.exports=="object"&&typeof d=="object"){var O=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,r)&&r!==o&&Object.defineProperty(e,r,{get:()=>a[r],enumerable:!(t=Object.getOwnPropertyDescriptor(a,r))||t.enumerable});return e};n.exports=O(n.exports,d)}return n.exports});