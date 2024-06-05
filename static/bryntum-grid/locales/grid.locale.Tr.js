/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(u,n){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],n);else if(typeof module=="object"&&module.exports)module.exports=n();else{var c=n(),y=s?exports:u;for(var m in c)y[m]=c[m]}})(typeof self<"u"?self:void 0,()=>{var u={},n={exports:u},s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,k=(e,a,r)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,f=(e,a)=>{for(var r in a)s(e,r,{get:a[r],enumerable:!0})},h=(e,a,r,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of y(a))!m.call(e,t)&&t!==r&&s(e,t,{get:()=>a[t],enumerable:!(l=c(a,t))||l.enumerable});return e},v=e=>h(s({},"__esModule",{value:!0}),e),S=(e,a,r)=>(k(e,typeof a!="symbol"?a+"":a,r),r),g={};f(g,{default:()=>C}),n.exports=v(g);var o=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,b=class d{static mergeLocales(...a){let r={};return a.forEach(l=>{Object.keys(l).forEach(t=>{typeof l[t]=="object"?r[t]={...r[t],...l[t]}:r[t]=l[t]})}),r}static trimLocale(a,r){let l=(t,i)=>{a[t]&&(i?a[t][i]&&delete a[t][i]:delete a[t])};Object.keys(r).forEach(t=>{Object.keys(r[t]).length>0?Object.keys(r[t]).forEach(i=>l(t,i)):l(t)})}static normalizeLocale(a,r){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!r)throw new Error('"config" parameter can not be empty');r.locale?r.name=a||r.name:r.localeName=a}else r=a;let l={};if(r.name||r.locale)l=Object.assign({localeName:r.name},r.locale),r.desc&&(l.localeDesc=r.desc),r.code&&(l.localeCode=r.code),r.path&&(l.localePath=r.path);else{if(!r.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);l=Object.assign({},r)}for(let t of["name","desc","code","path"])l[t]&&delete l[t];if(!l.localeName)throw new Error("Locale name can not be empty");return l}static get locales(){return o.bryntum.locales||{}}static set locales(a){o.bryntum.locales=a}static get localeName(){return o.bryntum.locale||"En"}static set localeName(a){o.bryntum.locale=a||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,r){let{locales:l}=o.bryntum,t=d.normalizeLocale(a,r),{localeName:i}=t;return!l[i]||r===!0?l[i]=t:l[i]=this.mergeLocales(l[i]||{},t||{}),l[i]}};S(b,"skipLocaleIntegrityCheck",!1);var p=b;o.bryntum=o.bryntum||{},o.bryntum.locales=o.bryntum.locales||{},p._$name="LocaleHelper";var D={localeName:"Tr",localeDesc:"Türkçe",localeCode:"tr",Object:{Yes:"Evet",No:"Hayır",Cancel:"İptal et",Ok:"Tamam",Week:"Hafta",None:"Hiçbiri"},ColorPicker:{noColor:"Renk yok"},Combo:{noResults:"Sonuç bulunamadı",recordNotCommitted:"Kayıt eklenemedi",addNewValue:e=>`${e} ekle`},FilePicker:{file:"Dosya"},Field:{badInput:"Geçersiz alan değeri",patternMismatch:"Değer, belirli bir düzenle eşleşmelidir",rangeOverflow:e=>`Değer, şundan küçük veya şuna eşit olmalıdır ${e.max}`,rangeUnderflow:e=>`Değer, şundan büyük veya şuna eşit olmalıdır ${e.min}`,stepMismatch:"Değer adıma uymalı",tooLong:"Değer daha kısa olmalı",tooShort:"Değer daha uzun olmalı",typeMismatch:"Değerin özel bir biçimde olması gerekmektedir",valueMissing:"Bu değer zorunludur",invalidValue:"Geçersiz alan değeri",minimumValueViolation:"Minimum değer ihlali",maximumValueViolation:"Maksimum değer ihlali",fieldRequired:"Bu alan zorunludur",validateFilter:"Değer listeden seçilmelidir"},DateField:{invalidDate:"Geçersiz tarih girişi"},DatePicker:{gotoPrevYear:"Önceki yıla git",gotoPrevMonth:"Önceki aya git",gotoNextMonth:"Sonraki aya git",gotoNextYear:"Sonraki yıla git"},NumberFormat:{locale:"tr",currency:"TRY"},DurationField:{invalidUnit:"Geçersiz birim"},TimeField:{invalidTime:"Geçersiz zaman girişi"},TimePicker:{hour:"Saat",minute:"Dakika",second:"Saniye"},List:{loading:"Yükleniyor...",selectAll:"Tümünü Seç"},GridBase:{loadMask:"Yükleniyor...",syncMask:"Değişiklikler eşzamanlanıyor, lütfen bekleyin..."},PagingToolbar:{firstPage:"İlk sayfaya git",prevPage:"Önceki sayfaya git",page:"Sayfa",nextPage:"Sonraki sayfaya git",lastPage:"Son sayfaya git",reload:"Sayfayı yeniden yükle",noRecords:"Gösterilecek kayıt bulunamadı",pageCountTemplate:e=>`nın ${e.lastPage}`,summaryTemplate:e=>`Kayıtlar görüntüleniyor ${e.start} - ${e.end} ‘nın ${e.allCount}`},PanelCollapser:{Collapse:"Daralt",Expand:"Genişlet"},Popup:{close:"Açılır pencereyi kapat"},UndoRedo:{Undo:"Geri al",Redo:"Yinele",UndoLastAction:"Son eylemi geri al",RedoLastAction:"Son geri alınan eylemi yinele",NoActions:"Geri alma kuyruğunda öğe yok"},FieldFilterPicker:{equals:"eşittir",doesNotEqual:"eşit değildir",isEmpty:"boş",isNotEmpty:"boş değil",contains:"içerir",doesNotContain:"içermez",startsWith:"ile başlar",endsWith:"ile biter",isOneOf:"onlardan biri",isNotOneOf:"onlardan biri değil",isGreaterThan:"büyüktür",isLessThan:"küçüktür",isGreaterThanOrEqualTo:"büyük ya da eşittir",isLessThanOrEqualTo:"küçük ya da eşittir",isBetween:"arasındadır",isNotBetween:"arasında değildir",isBefore:"öncedir",isAfter:"sonradır",isToday:"bugündür",isTomorrow:"yarındır",isYesterday:"dündür",isThisWeek:"bu haftadır",isNextWeek:"gelecek haftadır",isLastWeek:"geçen haftadır",isThisMonth:"bu aydır",isNextMonth:"gelecek aydır",isLastMonth:"geçen aydır",isThisYear:"bu yıldır",isNextYear:"gelecek yıldır",isLastYear:"geçen yıldır",isYearToDate:"yıl başından günümüze kadardır",isTrue:"doğrudur",isFalse:"yanlıştır",selectAProperty:"Bir özellik seçin",selectAnOperator:"Bir işleç seçin",caseSensitive:"Büyük küçük harf duyarlı",and:"ve",dateFormat:"D/M/YY",selectValue:"Bir değer seçin",selectOneOrMoreValues:"Bir ya da daha fazla değer seçin",enterAValue:"Bir değer girin",enterANumber:"Bir sayı girin",selectADate:"Bir tarih seçin",selectATime:"Saat seç"},FieldFilterPickerGroup:{addFilter:"Filtre ekle"},DateHelper:{locale:"tr",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisaniye",plural:"ms",abbrev:"ms"},{single:"saniye",plural:"saniye",abbrev:"sn"},{single:"dakika",plural:"dakika",abbrev:"dak."},{single:"saat",plural:"saat",abbrev:"sa"},{single:"gün",plural:"gün",abbrev:"gün"},{single:"hafta",plural:"hafta",abbrev:"hafta"},{single:"ay",plural:"ay",abbrev:"ay"},{single:"mevsim",plural:"mevsim",abbrev:"mevsim"},{single:"yıl",plural:"yıl",abbrev:"yıl"},{single:"onyıl",plural:"onyıl",abbrev:"onyıl"}],unitAbbreviations:[["ms"],["sn","sn"],["d","dak"],["s","sa"],["gün"],["hft","hafta"],["ay","ay"],["mev","mevsim"],["y","yıl"],["onyıl"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let a={1:"-inci"}[e]||".";return e+a}}},F=p.publishLocale(D),x=new String,T={localeName:"Tr",localeDesc:"Türkçe",localeCode:"tr",ColumnPicker:{column:"Sütun",columnsMenu:"Sütun menüsü",hideColumn:"Sütunu gizle",hideColumnShort:"Gizle",newColumns:"Yeni sütunlar"},Filter:{applyFilter:"Filtre uygula",filter:"Filtre",editFilter:"Filtre düzenle",on:"Açık",before:"Önce",after:"Sonra",equals:"Eşittir",lessThan:"den az",moreThan:"den çok",removeFilter:"Filtreyi kaldır",disableFilter:"Filtreyi devre dışı bırak"},FilterBar:{enableFilterBar:"Filtre çubuğunu göster",disableFilterBar:"Filtre çubuğunu gizle"},Group:{group:"Gruplandır",groupAscending:"Küçükten büyüğe doğru gruplandır",groupDescending:"Büyükten küçüğe doğru gruplandır",groupAscendingShort:"Küçükten büyüğe",groupDescendingShort:"Büyükten küçüğe ",stopGrouping:"Gruplandırmayı durdur",stopGroupingShort:"Durdur"},HeaderMenu:{moveBefore:e=>`Önce taşı "${e}"`,moveAfter:e=>`Sonra taşı "${e}"`,collapseColumn:"Sütunu daralt",expandColumn:"Sütunu genişlet"},ColumnRename:{rename:"Yeniden adlandır"},MergeCells:{mergeCells:"Hücreleri birleştir",menuTooltip:"Bu sütuna göre sıralandığında aynı değere sahip hücreleri birleştir"},Search:{searchForValue:"Değer ara"},Sort:{sort:"Sırala",sortAscending:"Küçükten büyüğe doğru sırala",sortDescending:"Büyükten küçüğe doğru sırala",multiSort:"Çoklu sırala",removeSorter:"Sıralayıcıyı kaldır",addSortAscending:"Küçükten büyüğe doğru sıralayıcı ekle",addSortDescending:"Büyükten küçüğe doğru sıralayıcı ekle",toggleSortAscending:"Küçükten büyüğe doğru değiştir",toggleSortDescending:"Büyükten küçüğe doğru değiştir",sortAscendingShort:"Küçükten büyüğe",sortDescendingShort:"Büyükten küçüğe",removeSorterShort:"Kaldır",addSortAscendingShort:"+ Küçükten büyüğe",addSortDescendingShort:"+ Büyükten küçüğe"},Split:{split:"Bölünmüş",unsplit:"Bölünmemiş",horizontally:"Yatay",vertically:"Dikey",both:"Her İkisi"},Column:{columnLabel:e=>`${e.text?`${e.text} sütun. `:""}bağlam menüsü için SPACE’a dokunun${e.sortable?", sıralamak için ENTER’a bas":""}`,cellLabel:x},Checkbox:{toggleRowSelect:"Satır seçimini değiştir",toggleSelection:"Tüm veri kümesinin seçimini değiştir"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`değerlendirme : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Veri yükleme başarısız!",syncFailedMessage:"Veri senkronizasyonu başarısız!",unspecifiedFailure:"Belirtilmemiş hata",networkFailure:"Ağ hatası",parseFailure:"Sunucu yanıtı ayrıştırma başarısız",serverResponse:"Sunucu yanıtı:",noRows:"Gösterilecek kayıt bulunamadı",moveColumnLeft:"Sol sütuna taşı",moveColumnRight:"Sağ sütuna taşı",moveColumnTo:e=>`Sütunu şuraya taşı ${e}`},CellMenu:{removeRow:"Satır sil"},RowCopyPaste:{copyRecord:"Kopyala",cutRecord:"Kes",pasteRecord:"Yapıştır",rows:"sıralar",row:"sıra"},CellCopyPaste:{copy:"Kopyala",cut:"Kes",paste:"Yapıştır"},PdfExport:{"Waiting for response from server":"Sunucudan yanıt bekleniyor...","Export failed":"Dışarı aktarma başarısız","Server error":"Sunucu hatası","Generating pages":"Sayfalar oluşturuluyor...","Click to abort":"İptal et"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Dışarı aktarma ayarları",export:"Dışarı aktar",printSettings:"Yazdırma Ayarları",print:"Yazdır",exporterType:"Dışarı aktarma aracı türü",cancel:"İptal et",fileFormat:"Dosya biçimi",rows:"Satır",alignRows:"Satırları hizala",columns:"Sütun",paperFormat:"Sayfa formatı",orientation:"Yön",repeatHeader:"Başlığı tekrarla"},ExportRowsCombo:{all:"Tüm satırlar",visible:"Görünür satırlar"},ExportOrientationCombo:{portrait:"Dikey",landscape:"Yatay"},SinglePageExporter:{singlepage:"Tek sayfa"},MultiPageExporter:{multipage:"Birden fazla sayfa",exportingPage:({currentPage:e,totalPages:a})=>`Sayfa ${e}/${a} dışa aktarılıyor`},MultiPageVerticalExporter:{multipagevertical:"Birden fazla sayfa (dikey)",exportingPage:({currentPage:e,totalPages:a})=>`Sayfa ${e}/${a} dışa aktarılıyor`},RowExpander:{loading:"Yükleniyor",expand:"Genişlet",collapse:"Daralt"},TreeGroup:{group:"Grupla",stopGrouping:"Gruplamayı Durdur",stopGroupingThisColumn:"Bu Sütunun Gruplamasını Kaldır"}},C=p.publishLocale(T);if(typeof n.exports=="object"&&typeof u=="object"){var P=(e,a,r,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,t)&&t!==r&&Object.defineProperty(e,t,{get:()=>a[t],enumerable:!(l=Object.getOwnPropertyDescriptor(a,t))||l.enumerable});return e};n.exports=P(n.exports,u)}return n.exports});