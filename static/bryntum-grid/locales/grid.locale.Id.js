/*!
 *
 * Bryntum Grid 5.6.11
 *
 * Copyright(c) 2024 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(u,r){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var m=r(),c=s?exports:u;for(var g in m)c[g]=m[g]}})(typeof self<"u"?self:void 0,()=>{var u={},r={exports:u},s=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,b=(a,e,n)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,f=(a,e)=>{for(var n in e)s(a,n,{get:e[n],enumerable:!0})},y=(a,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of c(e))!g.call(a,t)&&t!==n&&s(a,t,{get:()=>e[t],enumerable:!(l=m(e,t))||l.enumerable});return a},v=a=>y(s({},"__esModule",{value:!0}),a),P=(a,e,n)=>(b(a,typeof e!="symbol"?e+"":e,n),n),k={};f(k,{default:()=>w}),r.exports=v(k);var o=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,h=class d{static mergeLocales(...e){let n={};return e.forEach(l=>{Object.keys(l).forEach(t=>{typeof l[t]=="object"?n[t]={...n[t],...l[t]}:n[t]=l[t]})}),n}static trimLocale(e,n){let l=(t,i)=>{e[t]&&(i?e[t][i]&&delete e[t][i]:delete e[t])};Object.keys(n).forEach(t=>{Object.keys(n[t]).length>0?Object.keys(n[t]).forEach(i=>l(t,i)):l(t)})}static normalizeLocale(e,n){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!n)throw new Error('"config" parameter can not be empty');n.locale?n.name=e||n.name:n.localeName=e}else n=e;let l={};if(n.name||n.locale)l=Object.assign({localeName:n.name},n.locale),n.desc&&(l.localeDesc=n.desc),n.code&&(l.localeCode=n.code),n.path&&(l.localePath=n.path);else{if(!n.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);l=Object.assign({},n)}for(let t of["name","desc","code","path"])l[t]&&delete l[t];if(!l.localeName)throw new Error("Locale name can not be empty");return l}static get locales(){return o.bryntum.locales||{}}static set locales(e){o.bryntum.locales=e}static get localeName(){return o.bryntum.locale||"En"}static set localeName(e){o.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,n){let{locales:l}=o.bryntum,t=d.normalizeLocale(e,n),{localeName:i}=t;return!l[i]||n===!0?l[i]=t:l[i]=this.mergeLocales(l[i]||{},t||{}),l[i]}};P(h,"skipLocaleIntegrityCheck",!1);var p=h;o.bryntum=o.bryntum||{},o.bryntum.locales=o.bryntum.locales||{},p._$name="LocaleHelper";var S={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",Object:{Yes:"Ya",No:"Tidak",Cancel:"Batal",Ok:"OK",Week:"Minggu",None:"Tidak ada"},ColorPicker:{noColor:"Tidak ada warna"},Combo:{noResults:"Tidak ada hasil",recordNotCommitted:"Data tidak dapat ditambahkan",addNewValue:a=>`Tambahkan ${a}`},FilePicker:{file:"File"},Field:{badInput:"Nilai bidang tidak valid",patternMismatch:"Nilai harus cocok dengan pola tertentu",rangeOverflow:a=>`Nilai harus kurang dari atau sama dengan ${a.max}`,rangeUnderflow:a=>`Nilai harus lebih besar atau sama dengan ${a.min}`,stepMismatch:"Nilai harus cocok dengan langkah",tooLong:"Nilai harus lebih singkat",tooShort:"Nilai harus lebih panjang",typeMismatch:"Nilai harus dalam format khusus",valueMissing:"Bidang ini wajib diisi",invalidValue:"Nilai bidang tidak valid",minimumValueViolation:"Pelanggaran nilai minimum",maximumValueViolation:"Pelanggaran nilai maksimum",fieldRequired:"Bidang ini wajib diisi",validateFilter:"Nilai harus dipilih dari daftar"},DateField:{invalidDate:"Input data tidak valid"},DatePicker:{gotoPrevYear:"Buka tahun sebelumnya",gotoPrevMonth:"Buka bulan sebelumnya",gotoNextMonth:"Buka bulan berikutnya",gotoNextYear:"Buka tahun berikutnya"},NumberFormat:{locale:"id",currency:"IDR"},DurationField:{invalidUnit:"Unit tidak valid"},TimeField:{invalidTime:"Input waktu tidak valid"},TimePicker:{hour:"Jam",minute:"Menit",second:"Detik"},List:{loading:"Memuat...",selectAll:"Pilih Semua"},GridBase:{loadMask:"Memuat...",syncMask:"Menyimpan perubahan, mohon tunggu..."},PagingToolbar:{firstPage:"Buka halaman pertama",prevPage:"Buka halaman sebelumnya",page:"Halaman",nextPage:"Buka halaman berikutnya",lastPage:"Buka halaman terakhir",reload:"Muat ulang halaman saat ini",noRecords:"Tidak ada data untuk ditampilkan",pageCountTemplate:a=>`dari ${a.lastPage}`,summaryTemplate:a=>`Menampilkan data ${a.start} - ${a.end} dari ${a.allCount}`},PanelCollapser:{Collapse:"Ciutkan",Expand:"Perluas"},Popup:{close:"Tutup Sembulan"},UndoRedo:{Undo:"Urungkan",Redo:"Ulangi",UndoLastAction:"Urungkan tindakan terakhir",RedoLastAction:"Ulangi tindakan terakhir yang diurungkan",NoActions:"Tidak ada item dalam antrean yang diurungkan"},FieldFilterPicker:{equals:"sama dengan",doesNotEqual:"tidak sama dengan",isEmpty:"kosong",isNotEmpty:"tidak kosong",contains:"berisi",doesNotContain:"tidak berisi",startsWith:"diawali dengan",endsWith:"diakhiri dengan",isOneOf:"salah satu dari",isNotOneOf:"bukan salah satu dari",isGreaterThan:"lebih besar dari",isLessThan:"lebih kecil dari",isGreaterThanOrEqualTo:"lebih besar dari atau sama dengan",isLessThanOrEqualTo:"lebih kecil dari atau sama dengan",isBetween:"antara",isNotBetween:"bukan antara",isBefore:"adalah sebelum",isAfter:"adalah setelah",isToday:"adalah hari ini",isTomorrow:"adalah besok",isYesterday:"adalah kemarin",isThisWeek:"adalah minggu ini",isNextWeek:"adalah minggu depan",isLastWeek:"adalah minggu lalu",isThisMonth:"adalah bulan ini",isNextMonth:"adalah bulan depan",isLastMonth:"adalah bulan lalu",isThisYear:"adalah tahun ini",isNextYear:"adalah tahun depan",isLastYear:"adalah tahun lalu",isYearToDate:"adalah tahun berjalan",isTrue:"benar",isFalse:"salah",selectAProperty:"Pilih properti",selectAnOperator:"Pilih operator",caseSensitive:"Peka huruf besar/kecil",and:"dan",dateFormat:"D/M/YY",selectValue:"Pilih nilai",selectOneOrMoreValues:"Pilih satu nilai atau lebih",enterAValue:"Masukkan nilai",enterANumber:"Masukkan angka",selectADate:"Pilih tanggal",selectATime:"Pilih waktu"},FieldFilterPickerGroup:{addFilter:"Tambahkan filter"},DateHelper:{locale:"id",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milidetik",plural:"md",abbrev:"md"},{single:"detik",plural:"detik",abbrev:"dtk"},{single:"menit",plural:"menit",abbrev:"mnt"},{single:"jam",plural:"jam",abbrev:"j"},{single:"hari",plural:"hari",abbrev:"h"},{single:"minggu",plural:"minggu",abbrev:"m"},{single:"bulan",plural:"bulan",abbrev:"bln"},{single:"triwulan",plural:"triwulan",abbrev:"tw"},{single:"tahun",plural:"tahun",abbrev:"thn"},{single:"dekade",plural:"dekade",abbrev:"dek"}],unitAbbreviations:[["md"],["d","dtk"],["m","mnt"],["j","j"],["h"],["m","minggu"],["b","bln","bulan"],["tw","tri","triwulan"],["t","thn"],["dek"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:a=>a}},M=p.publishLocale(S),T=new String,N={localeName:"Id",localeDesc:"Bahasa Indonesia",localeCode:"id",ColumnPicker:{column:"Kolom",columnsMenu:"Kolom",hideColumn:"Sembunyikan kolom",hideColumnShort:"Sembunyikan",newColumns:"Kolom baru"},Filter:{applyFilter:"Terapkan filter",filter:"Filter",editFilter:"Edit filter",on:"Dengan",before:"Sebelum",after:"Sesudah",equals:"Sama dengan",lessThan:"Kurang dari",moreThan:"Lebih dari",removeFilter:"Hapus filter",disableFilter:"Nonaktifkan filter"},FilterBar:{enableFilterBar:"Tampilkan kolom filter",disableFilterBar:"Sembunyikan kolom filter"},Group:{group:"Kelompokkan",groupAscending:"Kelompokkan naik",groupDescending:"Kelompokkan turun",groupAscendingShort:"Naik",groupDescendingShort:"Turun",stopGrouping:"Hentikan pengelompokan",stopGroupingShort:"Hentikan"},HeaderMenu:{moveBefore:a=>`Pindahkan sebelum "${a}"`,moveAfter:a=>`Pindahkan setelah "${a}"`,collapseColumn:"Ciutkan kolom",expandColumn:"Perluas kolom"},ColumnRename:{rename:"Ganti nama"},MergeCells:{mergeCells:"Gabungkan sel",menuTooltip:"Gabungkan sel dengan nilai yang sama ketika disortir dengan kolom ini"},Search:{searchForValue:"Cari nilai"},Sort:{sort:"Sortir",sortAscending:"Sortir naik",sortDescending:"Sortir turun",multiSort:"Multi-sortir",removeSorter:"Hapus penyortir",addSortAscending:"Tambahkan penyortir naik",addSortDescending:"Tambahkan penyortir turun",toggleSortAscending:"Ubah ke naik",toggleSortDescending:"Ubah ke turun",sortAscendingShort:"Naik",sortDescendingShort:"Turun",removeSorterShort:"Hapus",addSortAscendingShort:"+ Naik",addSortDescendingShort:"+ Turun"},Split:{split:"Pisahkan",unsplit:"Gabungkan",horizontally:"Secara Horizontal",vertically:"Secara Vertikal",both:"Kedua-duanya"},Column:{columnLabel:a=>`kolom ${a.text?`${a.text}. `:""}SPASI untuk menu konteks${a.sortable?", ENTER untuk menyortir":""}`,cellLabel:T},Checkbox:{toggleRowSelect:"Aktifkan/nonaktifkan pilihan baris",toggleSelection:"Aktifkan/nonaktifkan pilihan et data keseluruhan"},RatingColumn:{cellLabel:a=>{var e;return`${a.text?a.text:""} ${(e=a.location)!=null&&e.record?` penilaian : ${a.location.record.get(a.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Pemuatan data gagal!",syncFailedMessage:"Sinkronisasi data gagal!",unspecifiedFailure:"Kegagalan tidak ditentukan",networkFailure:"Kesalahan jaringan",parseFailure:"Gagal mengurai respons server",serverResponse:"Respons server:",noRows:"Tidak ada data untuk ditampilkan",moveColumnLeft:"Pindahkan ke bagian kiri",moveColumnRight:"Pindahkan ke bagian kanan",moveColumnTo:a=>`Pindahkan kolom ke ${a}`},CellMenu:{removeRow:"Hapus"},RowCopyPaste:{copyRecord:"Salin",cutRecord:"Potong",pasteRecord:"Tempel",rows:"baris-baris",row:"baris"},CellCopyPaste:{copy:"Salin",cut:"Potong",paste:"Tempel"},PdfExport:{"Waiting for response from server":"Menunggu respons dari server...","Export failed":"Ekspor gagal","Server error":"Kesalahan server","Generating pages":"Membuat halaman...","Click to abort":"Batalkan"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Pengaturan ekspor",export:"Ekspor",printSettings:"Pengaturan Cetak",print:"Cetak",exporterType:"Mengontrol pemberian nomor halaman",cancel:"Batalkan",fileFormat:"Format file",rows:"Baris",alignRows:"Ratakan baris",columns:"Kolom",paperFormat:"Format kertas",orientation:"Orientasi",repeatHeader:"Ulangi header"},ExportRowsCombo:{all:"Semua baris",visible:"Baris yang dapat dilihat"},ExportOrientationCombo:{portrait:"Potret",landscape:"Lanskap"},SinglePageExporter:{singlepage:"Halaman tunggal"},MultiPageExporter:{multipage:"Multi-halaman",exportingPage:({currentPage:a,totalPages:e})=>`Mengekspor halaman ${a}/${e}`},MultiPageVerticalExporter:{multipagevertical:"Multi- halaman (vertikal)",exportingPage:({currentPage:a,totalPages:e})=>`Mengekspor halaman ${a}/${e}`},RowExpander:{loading:"Memuat",expand:"Perluas",collapse:"Ciutkan"},TreeGroup:{group:"Kelompokkan berdasarkan",stopGrouping:"Berhenti mengelompokkan",stopGroupingThisColumn:"Batal kelompokkan kolom ini"}},w=p.publishLocale(N);if(typeof r.exports=="object"&&typeof u=="object"){var C=(a,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Object.getOwnPropertyNames(e))!Object.prototype.hasOwnProperty.call(a,t)&&t!==n&&Object.defineProperty(a,t,{get:()=>e[t],enumerable:!(l=Object.getOwnPropertyDescriptor(e,t))||l.enumerable});return a};r.exports=C(r.exports,u)}return r.exports});
