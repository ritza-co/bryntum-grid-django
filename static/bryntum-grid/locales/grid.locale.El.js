/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(c,n){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],n);else if(typeof module=="object"&&module.exports)module.exports=n();else{var u=n(),d=s?exports:c;for(var m in u)d[m]=u[m]}})(typeof self<"u"?self:void 0,()=>{var c={},n={exports:c},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,h=(e,o,t)=>o in e?s(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,y=(e,o)=>{for(var t in o)s(e,t,{get:o[t],enumerable:!0})},v=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of d(o))!m.call(e,r)&&r!==t&&s(e,r,{get:()=>o[r],enumerable:!(a=u(o,r))||a.enumerable});return e},x=e=>v(s({},"__esModule",{value:!0}),e),C=(e,o,t)=>(h(e,typeof o!="symbol"?o+"":o,t),t),b={};y(b,{default:()=>O}),n.exports=x(b);var i=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,f=class p{static mergeLocales(...o){let t={};return o.forEach(a=>{Object.keys(a).forEach(r=>{typeof a[r]=="object"?t[r]={...t[r],...a[r]}:t[r]=a[r]})}),t}static trimLocale(o,t){let a=(r,l)=>{o[r]&&(l?o[r][l]&&delete o[r][l]:delete o[r])};Object.keys(t).forEach(r=>{Object.keys(t[r]).length>0?Object.keys(t[r]).forEach(l=>a(r,l)):a(r)})}static normalizeLocale(o,t){if(!o)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof o=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=o||t.name:t.localeName=o}else t=o;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let r of["name","desc","code","path"])a[r]&&delete a[r];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return i.bryntum.locales||{}}static set locales(o){i.bryntum.locales=o}static get localeName(){return i.bryntum.locale||"En"}static set localeName(o){i.bryntum.locale=o||p.localeName}static get locale(){return p.localeName&&this.locales[p.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(o,t){let{locales:a}=i.bryntum,r=p.normalizeLocale(o,t),{localeName:l}=r;return!a[l]||t===!0?a[l]=r:a[l]=this.mergeLocales(a[l]||{},r||{}),a[l]}};C(f,"skipLocaleIntegrityCheck",!1);var g=f;i.bryntum=i.bryntum||{},i.bryntum.locales=i.bryntum.locales||{},g._$name="LocaleHelper";var P={localeName:"El",localeDesc:"Ελληνικά",localeCode:"el",Object:{Yes:"Ναι",No:"Όχι",Cancel:"Ακύρωση",Ok:"ΟΚ",Week:"Εβδομάδα",None:"Κανένα"},ColorPicker:{noColor:"Χωρίς χρώμα"},Combo:{noResults:"Κανένα αποτέλεσμα",recordNotCommitted:"Δεν είναι δυνατή η προσθήκη της εγγραφής",addNewValue:e=>`Προσθήκη ${e}`},FilePicker:{file:"Αρχείο"},Field:{badInput:"Μη έγκυρη τιμή πεδίου",patternMismatch:"Η τιμή πρέπει να ακολουθεί ένα συγκεκριμένο μοτίβο",rangeOverflow:e=>`Η τιμή πρέπει να είναι μικρότερη από ή ίση με ${e.max}`,rangeUnderflow:e=>`Η τιμή πρέπει να είναι μεγαλύτερη από ή ίση με ${e.min}`,stepMismatch:"Η τιμή πρέπει να ταιριάζει με το βήμα",tooLong:"Η τιμή πρέπει να είναι μικρότερη",tooShort:"Η τιμή πρέπει να είναι μεγαλύτερη",typeMismatch:"Η τιμή πρέπει να έχει συγκεκριμένη μορφή",valueMissing:"Το συγκεκριμένο πεδίο είναι υποχρεωτικό",invalidValue:"Μη έγκυρη τιμή πεδίου",minimumValueViolation:"Παραβίαση ως προς την ελάχιστη τιμή",maximumValueViolation:"Παραβίαση ως προς τη μέγιστη τιμή",fieldRequired:"Το συγκεκριμένο πεδίο είναι υποχρεωτικό",validateFilter:"Η τιμή πρέπει να επιλεγεί από τη λίστα"},DateField:{invalidDate:"Μη έγκυρη ημερομηνία εισόδου"},DatePicker:{gotoPrevYear:"Μετάβαση στο προηγούμενο έτος",gotoPrevMonth:"Μετάβαση στον προηγούμενο μήνα",gotoNextMonth:"Μετάβαση στον επόμενο μήνα",gotoNextYear:"Μετάβαση στο επόμενο έτος"},NumberFormat:{locale:"el",currency:"EUR"},DurationField:{invalidUnit:"Μη έγκυρη μονάδα"},TimeField:{invalidTime:"Μη έγκυρη είσοδος ώρα"},TimePicker:{hour:"Ώρες",minute:"Λεπτά",second:"Δευτερόλεπτο"},List:{loading:"Φορτώνει...",selectAll:"Επιλογή όλων"},GridBase:{loadMask:"Φορτώνει...",syncMask:"Αποθήκευση αλλαγών, παρακαλώ περιμένετε..."},PagingToolbar:{firstPage:"Μετάβαση στην πρώτη σελίδα",prevPage:"Μετάβαση στην προηγούμενη σελίδα",page:"Σελίδα",nextPage:"Μετάβαση στην επόμενη σελίδα",lastPage:"Μετάβαση στην τελευταία σελίδα",reload:"Επαναφόρτωση της τρέχουσας σελίδας",noRecords:"Δεν υπάρχουν καταγραφές",pageCountTemplate:e=>`από ${e.lastPage}`,summaryTemplate:e=>`Εμφάνιση καταγραφών ${e.start} - ${e.end} από ${e.allCount}`},PanelCollapser:{Collapse:"Σύμπτυξη",Expand:"Ανάπτυξη"},Popup:{close:"Κλείσιμο Αναδυόμενου Παραθύρου"},UndoRedo:{Undo:"Αναίρεση",Redo:"Επανάληψη",UndoLastAction:"Αναίρεση της τελευταίας ενέργειας",RedoLastAction:"Επανάληψη της τελευταίας αναιρεμένης ενέργειας",NoActions:"Δεν υπάρχουν αντικείμενα στην ουρά αναίρεσης"},FieldFilterPicker:{equals:"ισούται με",doesNotEqual:"δεν ισούται με",isEmpty:"είναι κενό",isNotEmpty:"δεν είναι κενό",contains:"περιέχει",doesNotContain:"δεν περιέχει",startsWith:"αρχίζει με",endsWith:"τελειώνει με",isOneOf:"είναι ένα από",isNotOneOf:"δεν είναι ένα από",isGreaterThan:"είναι μεγαλύτερο από",isLessThan:"είναι μικρότερο από",isGreaterThanOrEqualTo:"είναι μεγαλύτερο από ή ίσο με",isLessThanOrEqualTo:"είναι μικρότερο ή ίσο με",isBetween:"βρίσκεται μεταξύ",isNotBetween:"δεν βρίσκεται μεταξύ",isBefore:"προηγείται του",isAfter:"έπεται του",isToday:"είναι σήμερα",isTomorrow:"είναι αύριο",isYesterday:"είναι χθες",isThisWeek:"είναι αυτήν την εβδομάδα",isNextWeek:"είναι την επόμενη εβδομάδα",isLastWeek:"είναι την προηγούμενη εβδομάδα",isThisMonth:"είναι αυτόν το μήνα",isNextMonth:"είναι τον επόμενο μήνα",isLastMonth:"είναι τον προηγούμενο μήνα",isThisYear:"είναι αυτόν το χρόνο",isNextYear:"είναι τον επόμενο χρόνο",isLastYear:"είναι τον προηγούμενο χρόνο",isYearToDate:"είναι μέχρι σήμερα",isTrue:"είναι αληθές",isFalse:"είναι ψευδές",selectAProperty:"Επιλέξτε μια ιδιότητα",selectAnOperator:"Επιλέξτε έναν τελεστή",caseSensitive:"Με διάκριση πεζών-κεφαλαίων",and:"και",dateFormat:"D/M/YY",selectValue:"Επιλέξτε μια τιμή",selectOneOrMoreValues:"Επιλέξτε μία ή περισσότερες τιμές",enterAValue:"Εισαγάγετε μια τιμή",enterANumber:"Εισαγάγετε έναν αριθμό",selectADate:"Επιλέξτε μια ημερομηνία",selectATime:"Επιλέξτε ώρα"},FieldFilterPickerGroup:{addFilter:"Προσθήκη φίλτρου"},DateHelper:{locale:"el",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"ΧιλιοστότουΔευτερολέπτου",plural:"ΧιλιοστάτουΔευτερολέπτου",abbrev:"Χιλ.τουΔευτ."},{single:"δευτερόλεπτο",plural:"δευτερόλεπτα",abbrev:"δευτ."},{single:"λεπτό",plural:"λεπτά",abbrev:"λεπ."},{single:"ώρα",plural:"ώρες",abbrev:"ώρ."},{single:"ημέρα",plural:"ημέρες",abbrev:"ημ."},{single:"εβδομάδα",plural:"εβδομάδες",abbrev:"εβδ."},{single:"μήνας",plural:"μήνες",abbrev:"μήν."},{single:"τρίμηνο",plural:"τρίμηνα",abbrev:"τρίμ."},{single:"έτος",plural:"έτη",abbrev:"έτ."},{single:"δεκαετία",plural:"δεκαετίες",abbrev:"δεκ."}],unitAbbreviations:[["χιλ.τουδευτ."],["δ.","δευτ."],["λ.","λεπ."],["ω","ώρ."],["ημ."],["εβ","εβδ."],["μ","μην."],["τρίμ."],["ε","έτ."],["δεκ."]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let o=e[e.length-1],t={1:"ος",2:"ο"}[o]||"η";return e+t}}},T=g.publishLocale(P),w=new String,N={localeName:"El",localeDesc:"Ελληνικά",localeCode:"el",ColumnPicker:{column:"Στήλη",columnsMenu:"Στήλες",hideColumn:"Απόκρυψη στήλης",hideColumnShort:"Απόκρυψη",newColumns:"Νέες στήλες"},Filter:{applyFilter:"Εφαρμογή φίλτρου",filter:"Φίλτρο",editFilter:"Επεξεργασία φίλτρου",on:"Ενεργό",before:"Πριν",after:"Μετά",equals:"Ίσο με",lessThan:"Μικρότερο από",moreThan:"Μεγαλύτερο από",removeFilter:"Κατάργηση φίλτρου",disableFilter:"Απενεργοποίηση φίλτρου"},FilterBar:{enableFilterBar:"Εμφάνιση μπάρας φίλτρου",disableFilterBar:"Απόκρυψη μπάρας φίλτρου"},Group:{group:"Ομάδα",groupAscending:"Αύξουσα σειρά ως προς την ομάδα",groupDescending:"Φθίνουσα σειρά ως προς την ομάδα",groupAscendingShort:"Αύξουσα σειρά",groupDescendingShort:"Φθίνουσα σειρά",stopGrouping:"Διακοπή ομαδοποίησης",stopGroupingShort:"Διακοπή"},HeaderMenu:{moveBefore:e=>`Μετακίνηση πριν από "${e}"`,moveAfter:e=>`Μετακίνηση μετά από "${e}"`,collapseColumn:"Σύμπτυξη στήλης",expandColumn:"Ανάπτυξη στήλης"},ColumnRename:{rename:"Μετονομασία"},MergeCells:{mergeCells:"Συγχώνευση κελιών",menuTooltip:"Συγχώνευση κελιών με την ίδια τιμή κατά την ταξινόμηση με βάση αυτή τη στήλη"},Search:{searchForValue:"Αναζήτηση τιμής"},Sort:{sort:"Ταξινόμηση",sortAscending:"Αύξουσα ταξινόμηση",sortDescending:"Φθίνουσα ταξινόμηση",multiSort:"Πολλαπλή ταξινόμηση",removeSorter:"Αφαίρεση ταξινομητή",addSortAscending:"Προσθήκη αύξοντα ταξινομητή",addSortDescending:"Προσθήκη φθίνοντα ταξινομητή",toggleSortAscending:"Αλλαγή σε αύξουσα",toggleSortDescending:"Αλλαγή σε φθίνουσα",sortAscendingShort:"Αύξουσα",sortDescendingShort:"Φθίνουσα",removeSorterShort:"Κατάργηση",addSortAscendingShort:"+ Αύξουσα",addSortDescendingShort:"+ Φθίνουσα"},Split:{split:"Διαίρεση",unsplit:"Μη διαίρεση",horizontally:"Οριζόντια",vertically:"Κατακόρυφα",both:"Και τα δύο"},Column:{columnLabel:e=>`${e.text?`${e.text} στήλη. `:""}SPACE για το μενού περιβάλλοντος${e.sortable?", πατήστε ENTER για ταξινόμηση":""}`,cellLabel:w},Checkbox:{toggleRowSelect:"Εναλλαγή επιλογής γραμμής",toggleSelection:"Εναλλαγή επιλογής ολόκληρου του συνόλου δεδομένων"},RatingColumn:{cellLabel:e=>{var o;return`${e.text?e.text:""} ${(o=e.location)!=null&&o.record?`εκτίμηση : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Η φόρτωση δεδομένων απέτυχε!",syncFailedMessage:"Ο συγχρονισμός δεδομένων απέτυχε!",unspecifiedFailure:"Απροσδιόριστο σφάλμα",networkFailure:"Σφάλμα δικτύου",parseFailure:"Αποτυχία ανάλυσης απόκρισης διακομιστή",serverResponse:"Απόκριση διακομιστή:",noRows:"Δεν υπάρχουν εγγραφές προς προβολή",moveColumnLeft:"Μετακίνηση στο αριστερό τμήμα",moveColumnRight:"Μετακίνηση στο δεξιό τμήμα",moveColumnTo:e=>`Μετακίνηση στήλης σε ${e}`},CellMenu:{removeRow:"Διαγραφή"},RowCopyPaste:{copyRecord:"Αντιγραφή",cutRecord:"Αποκοπή",pasteRecord:"Επικόλληση",rows:"σειρές",row:"σειρά"},CellCopyPaste:{copy:"Αντιγραφή",cut:"Αποκοπή",paste:"Επικόλληση"},PdfExport:{"Waiting for response from server":"Αναμονή απόκρισης από τον διακομιστή...","Export failed":"Η εξαγωγή απέτυχε","Server error":"Σφάλμα διακομιστή","Generating pages":"Δημιουργία σελίδων...","Click to abort":"Ακύρωση"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Εξαγωγή ρυθμίσεων",export:"Εξαγωγή",printSettings:"Ρυθμίσεις εκτύπωσης",print:"Εκτύπωση",exporterType:"Έλεγχος σελιδοποίησης",cancel:"Ακύρωση",fileFormat:"Μορφοποίηση αρχείου",rows:"Γραμμές",alignRows:"Ευθυγράμμιση γραμμών",columns:"Στήλες",paperFormat:"Διαμόρφωση χαρτιού",orientation:"Προσανατολισμός",repeatHeader:"Επανάληψη κεφαλίδας"},ExportRowsCombo:{all:"Όλες οι γραμμές",visible:"Ορατές γραμμές"},ExportOrientationCombo:{portrait:"Πορτρέτο",landscape:"Τοπίο"},SinglePageExporter:{singlepage:"Μονή σελίδα"},MultiPageExporter:{multipage:"Πολλαπλές σελίδες",exportingPage:({currentPage:e,totalPages:o})=>`Εξαγωγή της σελίδας ${e}/${o}`},MultiPageVerticalExporter:{multipagevertical:"Πολλαπλές σελίδες (κάθετο)",exportingPage:({currentPage:e,totalPages:o})=>`Εξαγωγή της σελίδας ${e}/${o}`},RowExpander:{loading:"Φόρτωση",expand:"Ανάπτυξη",collapse:"Σύμπτυξη"},TreeGroup:{group:"Ομαδοποίηση κατά",stopGrouping:"Διακοπή ομαδοποίησης",stopGroupingThisColumn:"Απο-ομαδοποίηση στήλης"}},O=g.publishLocale(N);if(typeof n.exports=="object"&&typeof c=="object"){var S=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Object.getOwnPropertyNames(o))!Object.prototype.hasOwnProperty.call(e,r)&&r!==t&&Object.defineProperty(e,r,{get:()=>o[r],enumerable:!(a=Object.getOwnPropertyDescriptor(o,r))||a.enumerable});return e};n.exports=S(n.exports,c)}return n.exports});
