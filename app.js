const BUILD_VERSION = "2026-11-20.1";

const LS_KEYS = { lang: "ECselect:lang", quoteList: "ECselect:quoteList", quoteProjectInfo: "ECselect:quoteProjectInfo" };
/* [ECselect] localStorage dùng chung origin với các PWA khác: mọi khóa của app này có tiền tố "ECselect:".
   Lần đầu mở bản mới: chép dữ liệu từ khóa cũ sang khóa mới (nếu khóa mới chưa có). Giữ nguyên khóa cũ. */
(function(){try{var P="ECselect:",E=[],F=[],i,k,K=[];var S={"lang": ["ecselect:lang", "lang"], "quoteList": ["ecselect:quoteList", "quoteList"], "quoteProjectInfo": ["ecselect:quoteProjectInfo", "quoteProjectInfo"]};
for(i=0;i<localStorage.length;i++){k=localStorage.key(i);if(k&&k.indexOf(P)!==0)K.push(k);}
K.forEach(function(k){var hit=E.indexOf(k)>=0||F.some(function(f){return k.indexOf(f)===0;});
if(hit&&localStorage.getItem(P+k)===null)localStorage.setItem(P+k,localStorage.getItem(k));});
Object.keys(S).forEach(function(n){if(localStorage.getItem(P+n)!==null)return;for(var j=0;j<S[n].length;j++){var v=localStorage.getItem(S[n][j]);if(v!==null){localStorage.setItem(P+n,v);break;}}});
}catch(e){}})();

// ---------------------------------------------------------------------
// i18n
// ---------------------------------------------------------------------
let LANG = localStorage.getItem(LS_KEYS.lang) || "vi";

const STR = {
  appTitle:      { vi: "Tra c\u1ee9u thi\u1ebft b\u1ecb gi\u1ea3i nhi\u1ec7t", en: "Cooling Equipment Lookup" },
  home:          { vi: "Trang ch\u1ee7", en: "Home" },
  back:          { vi: "Quay l\u1ea1i", en: "Back" },
  chooseSource:  { vi: "Ch\u1ecdn h\u00e3ng / d\u00f2ng s\u1ea3n ph\u1ea9m", en: "Choose a manufacturer / product line" },
  chooseBrand:   { vi: "Ch\u1ecdn h\u00e3ng s\u1ea3n xu\u1ea5t", en: "Choose a manufacturer" },
  chooseProductLine: { vi: "Ch\u1ecdn d\u00f2ng s\u1ea3n ph\u1ea9m", en: "Choose a product line" },
  productLines:  { vi: "d\u00f2ng s\u1ea3n ph\u1ea9m", en: "product lines" },
  modelsTotal:   { vi: "model", en: "models" },
  browseModels:  { vi: "Xem b\u1ea3ng th\u00f4ng s\u1ed1 \u0111\u1ea7y \u0111\u1ee7", en: "Browse full spec table" },
  findByCap:     { vi: "T\u00ecm model theo y\u00eau c\u1ea7u", en: "Find model by requirement" },
  refrigerant:   { vi: "M\u00f4i ch\u1ea5t l\u1ea1nh", en: "Refrigerant" },
  requiredHeatRej:{ vi: "T\u1ed5ng nhi\u1ec7t th\u1ea3i y\u00eau c\u1ea7u (kW)", en: "Required heat rejection (kW)" },
  condTemp:      { vi: "Nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 (\u00b0C)", en: "Condensing temperature (\u00b0C)" },
  wetBulbTemp:   { vi: "Nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt kh\u00f4ng kh\u00ed (\u00b0C)", en: "Air inlet wet bulb temp (\u00b0C)" },
  calculate:     { vi: "T\u00ednh & ch\u1ecdn model", en: "Calculate & select model" },
  result:        { vi: "K\u1ebft qu\u1ea3", en: "Result" },
  correctionFactor:{ vi: "H\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh (n\u1ed9i suy)", en: "Correction factor (interpolated)" },
  correctedLoad: { vi: "T\u1ea3i tr\u1ecdng hi\u1ec7u ch\u1ec9nh", en: "Corrected load" },
  selectedModel: { vi: "Model \u0111\u1ec1 xu\u1ea5t", en: "Suggested model" },
  outOfRange:    { vi: "C\u1eb7p nhi\u1ec7t \u0111\u1ed9 n\u00e0y n\u1eb1m ngo\u00e0i (ho\u1eb7c kh\u00f4ng h\u1ee3p l\u1ec7 trong) b\u1ea3ng h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh c\u1ee7a catalogue \u2014 kh\u00f4ng th\u1ec3 n\u1ed9i suy tin c\u1eady. Vui l\u00f2ng ki\u1ec3m tra l\u1ea1i \u0111i\u1ec1u ki\u1ec7n \u0111\u1ea7u v\u00e0o.", en: "This temperature pair is outside (or an invalid combination within) the catalogue's correction table \u2014 cannot interpolate reliably. Please check the input conditions." },
  noModelFits:   { vi: "Kh\u00f4ng c\u00f3 model \u0111\u01a1n n\u00e0o \u0111\u1ee7 c\u00f4ng su\u1ea5t \u2014 c\u1ea7n gh\u00e9p nhi\u1ec1u d\u00e0n ho\u1eb7c li\u00ean h\u1ec7 nh\u00e0 cung c\u1ea5p.", en: "No single model has enough capacity \u2014 multiple units or manufacturer consultation needed." },
  viewFullSpec:  { vi: "Xem th\u00f4ng s\u1ed1 \u0111\u1ea7y \u0111\u1ee7", en: "View full specification" },
  selectionProcedure: { vi: "Quy tr\u00ecnh ch\u1ecdn model (theo catalogue)", en: "Model selection procedure (per catalogue)" },
  usedGridPoints:{ vi: "\u0110i\u1ec3m l\u01b0\u1edbi d\u00f9ng \u0111\u1ec3 n\u1ed9i suy", en: "Grid points used for interpolation" },
  moreSourcesNote:{ vi: "S\u1ebd b\u1ed5 sung th\u00eam ngu\u1ed3n d\u1eef li\u1ec7u kh\u00e1c sau.", en: "More data sources will be added later." },
  model:         { vi: "Model", en: "Model" },
  dims:          { vi: "K\u00edch th\u01b0\u1edbc (D\u00d7R\u00d7C, mm)", en: "Dimensions (LxWxH, mm)" },
  shipWeight:    { vi: "Kh\u1ed1i l\u01b0\u1ee3ng \u0111\u00f3ng g\u00f3i (kg)", en: "Shipping weight (kg)" },
  operWeight:    { vi: "Kh\u1ed1i l\u01b0\u1ee3ng ho\u1ea1t \u0111\u1ed9ng (kg)", en: "Operating weight (kg)" },
  heatRejection: { vi: "Nhi\u1ec7t th\u1ea3i \u0111\u1ecbnh m\u1ee9c (kW)", en: "Nominal heat rejection (kW)" },
  fan:           { vi: "Qu\u1ea1t", en: "Fan" },
  pump:          { vi: "B\u01a1m tu\u1ea7n ho\u00e0n", en: "Circulating pump" },
  ammonia:       { vi: "L\u01b0\u1ee3ng NH3 n\u1ea1p (kg)", en: "Ammonia charge (kg)" },
  qty:           { vi: "SL", en: "Qty" },
  airFlow:       { vi: "L\u01b0u l\u01b0\u1ee3ng gi\u00f3", en: "Air flow" },
  power:         { vi: "C\u00f4ng su\u1ea5t", en: "Power" },
  flow:          { vi: "L\u01b0u l\u01b0\u1ee3ng", en: "Flow" },
  allModels:     { vi: "T\u1ea5t c\u1ea3 model", en: "All models" },
  dataSourceNote:{ vi: "D\u1eef li\u1ec7u \u0111\u01b0\u1ee3c tr\u00edch t\u1eeb catalogue nh\u00e0 cung c\u1ea5p (xem file g\u1ed1c \u0111\u1ec3 \u0111\u1ed1i chi\u1ebfu khi c\u1ea7n).", en: "Data transcribed from the supplier's catalogue (cross-check the original file when precision matters)." },
  designCondition:{ vi: "\u0110i\u1ec1u ki\u1ec7n thi\u1ebft k\u1ebf (c\u1ed1 \u0111\u1ecbnh)", en: "Design condition (fixed)" },
  requiredFlow:  { vi: "L\u01b0u l\u01b0\u1ee3ng n\u01b0\u1edbc y\u00eau c\u1ea7u (m\u00b3/h)", en: "Required water flow (m\u00b3/h)" },
  nominalFlow:   { vi: "L\u01b0u l\u01b0\u1ee3ng n\u01b0\u1edbc \u0111\u1ecbnh m\u1ee9c (m\u00b3/h)", en: "Nominal water flow (m\u00b3/h)" },
  catalogueNotes:{ vi: "Ghi ch\u00fa t\u1eeb catalogue", en: "Catalogue notes" },
  noCorrectionNote:{ vi: "T\u00e0i li\u1ec7u n\u00e0y kh\u00f4ng cung c\u1ea5p b\u1ea3ng h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh theo nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5/b\u1ea7u \u01b0\u1edbt \u2014 ch\u1ecdn model tr\u1ef1c ti\u1ebfp theo c\u00f4ng su\u1ea5t nhi\u1ec7t th\u1ea3i c\u01a1 b\u1ea3n.", en: "This catalogue does not publish a condensing/wet-bulb correction table \u2014 model is selected directly against the base heat rejection rating." },
  addToQuote:    { vi: "Th\u00eam v\u00e0o b\u00e1o c\u00e1o \u0111\u1ec3 h\u1ecfi gi\u00e1", en: "Add to quote report" },
  addedToQuote:  { vi: "\u0110\u00e3 th\u00eam v\u00e0o b\u00e1o c\u00e1o", en: "Added to report" },
  quoteReport:   { vi: "B\u00e1o c\u00e1o thi\u1ebft b\u1ecb \u0111\u00e3 ch\u1ecdn", en: "Selected equipment report" },
  quoteEmpty:    { vi: "Ch\u01b0a c\u00f3 thi\u1ebft b\u1ecb n\u00e0o trong b\u00e1o c\u00e1o. V\u00e0o trang th\u00f4ng s\u1ed1 c\u1ee7a m\u1ed9t model v\u00e0 b\u1ea5m \u201cTh\u00eam v\u00e0o b\u00e1o c\u00e1o\u201d.", en: "No equipment in the report yet. Open a model's spec page and tap \u201cAdd to quote report\u201d." },
  colBrand:      { vi: "H\u00e3ng", en: "Brand" },
  colModel:      { vi: "Model", en: "Model" },
  colSpec:       { vi: "Th\u00f4ng s\u1ed1 ch\u00ednh", en: "Key spec" },
  colQty:        { vi: "S\u1ed1 l\u01b0\u1ee3ng", en: "Quantity" },
  removeItem:    { vi: "X\u00f3a", en: "Remove" },
  exportCsv:     { vi: "Xu\u1ea5t file CSV (Excel)", en: "Export CSV (Excel)" },
  dataExport:    { vi: "Xuất dữ liệu", en: "Export data" },
  dataImport:    { vi: "Nhập dữ liệu", en: "Import data" },
  exportPrint:   { vi: "In / L\u01b0u PDF", en: "Print / Save PDF" },
  clearAll:      { vi: "X\u00f3a t\u1ea5t c\u1ea3", en: "Clear all" },
  quoteNoteLabel:{ vi: "Ghi ch\u00fa th\u00eam (t\u00f9y ch\u1ecdn)", en: "Additional note (optional)" },
  projectInfo:   { vi: "Th\u00f4ng tin d\u1ef1 \u00e1n", en: "Project information" },
  projectName:   { vi: "T\u00ean d\u1ef1 \u00e1n / c\u00f4ng tr\u00ecnh", en: "Project / site name" },
  preparedBy:    { vi: "Ng\u01b0\u1eddi l\u1eadp / li\u00ean h\u1ec7", en: "Prepared by / contact" },
  installLocation:{ vi: "\u0110\u1ecba \u0111i\u1ec3m l\u1eafp \u0111\u1eb7t", en: "Installation location" },
  quoteDeadline: { vi: "H\u1ea1n ch\u1ed3t nh\u1eadn b\u00e1o gi\u00e1", en: "Quote deadline" },
  reportDate:    { vi: "Ng\u00e0y l\u1eadp b\u00e1o c\u00e1o", en: "Report date" },
  colAccessories:{ vi: "Y\u00eau c\u1ea7u t\u00f9y ch\u1ecdn / ph\u1ee5 ki\u1ec7n", en: "Optional requirements / accessories" },
  accessoriesPlaceholder:{ vi: "VD: v\u1eadt li\u1ec7u SUS304, bi\u1ebfn t\u1ea7n, c\u00e1ch \u00e2m...", en: "e.g. SUS304 material, VFD, sound attenuation..." },
  commercialTerms:{ vi: "\u0110i\u1ec1u ki\u1ec7n th\u01b0\u01a1ng m\u1ea1i", en: "Commercial terms" },
  deliveryTerm:  { vi: "\u0110i\u1ec1u ki\u1ec7n giao h\u00e0ng (VD: FOB / CIF / DAP...)", en: "Delivery terms (e.g. FOB / CIF / DAP...)" },
  installationIncluded:{ vi: "K\u00e8m l\u1eafp \u0111\u1eb7t?", en: "Installation included?" },
  warrantyReq:   { vi: "Y\u00eau c\u1ea7u b\u1ea3o h\u00e0nh", en: "Warranty requirement" },
  fullSpecNote:  { vi: "\u0110\u1ea7y \u0111\u1ee7 th\u00f4ng s\u1ed1", en: "Full specification" },
  exportWord:    { vi: "Xu\u1ea5t file Word (.doc)", en: "Export Word (.doc)" },
  disclaimerLabel:{ vi: "L\u01b0u \u00fd", en: "Note" },
  disclaimerText:{ vi: "S\u1ed1 li\u1ec7u \u0111\u01b0\u1ee3c tr\u00edch t\u1eeb catalogue nh\u00e0 s\u1ea3n xu\u1ea5t. \u0110\u1ec1 ngh\u1ecb nh\u00e0 cung c\u1ea5p x\u00e1c nh\u1eadn l\u1ea1i th\u00f4ng s\u1ed1 v\u00e0 b\u00e1o gi\u00e1 theo \u0111i\u1ec1u ki\u1ec7n th\u1ef1c t\u1ebf c\u1ee7a d\u1ef1 \u00e1n tr\u01b0\u1edbc khi ch\u1ed1t.", en: "Data transcribed from the manufacturer's catalogue. Please have the supplier confirm the specifications and pricing against actual project conditions before finalizing." },
  companyName:   { vi: "\u0110\u01a1n v\u1ecb h\u1ecfi gi\u00e1 (c\u00f4ng ty)", en: "Requesting company" },
  preparedByPhone:{ vi: "S\u0110T li\u00ean h\u1ec7", en: "Contact phone" },
  preparedByEmail:{ vi: "Email li\u00ean h\u1ec7", en: "Contact email" },
  reqConditionLabel:{ vi: "\u0110i\u1ec1u ki\u1ec7n / y\u00eau c\u1ea7u thi\u1ebft k\u1ebf", en: "Design condition / requirement" },
  reqCapacity:   { vi: "C\u00f4ng su\u1ea5t y\u00eau c\u1ea7u (kW)", en: "Required capacity (kW)" },
  reqCondTemp:   { vi: "Nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 (\u00b0C)", en: "Condensing temperature (\u00b0C)" },
  reqWetBulb:    { vi: "Nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt (\u00b0C)", en: "Wet bulb temperature (\u00b0C)" },
  reqFlow:       { vi: "L\u01b0u l\u01b0\u1ee3ng y\u00eau c\u1ea7u (m\u00b3/h)", en: "Required flow (m\u00b3/h)" },
  reqOptionalNote:{ vi: "(t\u00f9y ch\u1ecdn \u2014 ghi l\u1ea1i \u0111i\u1ec1u ki\u1ec7n thi\u1ebft k\u1ebf d\u00f9ng \u0111\u1ec3 ch\u1ecdn model n\u00e0y)", en: "(optional \u2014 record the design condition used to select this model)" },
  docTitle:      { vi: "PHIẾU YÊU CẦU BÁO GIÁ THIẾT BỊ", en: "EQUIPMENT QUOTE REQUEST" },
  signatureLabel:{ vi: "Ng\u01b0\u1eddi l\u1eadp b\u00e1o c\u00e1o", en: "Prepared by" },
  appSub:        { vi: "Dàn ngưng bay hơi · Tháp giải nhiệt", en: "Evaporative condensers · Cooling towers" },
  heroLead:      { vi: "Chọn hãng và dòng sản phẩm, nhập điều kiện thiết kế để tìm model phù hợp, rồi thêm vào phiếu yêu cầu báo giá.", en: "Pick a manufacturer and product line, enter the design condition to find a matching model, then add it to the quote request." },
  statBrands:    { vi: "Hãng", en: "Brands" },
  statLines:     { vi: "Dòng sản phẩm", en: "Product lines" },
  statModels:    { vi: "Model", en: "Models" },
  equipList:     { vi: "Danh mục thiết bị", en: "Equipment list" },
  navHome:       { vi: "Trang chủ", en: "Home" },
  navReport:     { vi: "Báo cáo", en: "Report" },
  kindCondenser: { vi: "Dàn ngưng", en: "Condenser" },
  kindTower:     { vi: "Tháp giải nhiệt", en: "Cooling tower" },
  modelsFound:   { vi: "model trong dòng sản phẩm", en: "models in this line" },
  printAgain:    { vi: "In l\u1ea1i", en: "Print again" },
  closeWindow:   { vi: "\u0110\u00f3ng", en: "Close" }
};

function t(key) { return (STR[key] && STR[key][LANG]) || key; }

const REFRIG_LABELS = {
  R717: "R717 (NH3)",
  R404a: "R404a",
  R22_R134A: "R22 / R134a"
};

// Original colored monogram badges per manufacturer (not the real
// trademarked logos) so sources are visually distinguishable at a glance.
const BRANDS = {
  wxr:       { badge: "WXR", color: "#f5a623", name: "W.X.R\u00ae (Wanxiang Refrigeration)" },
  hengan:    { badge: "HA",  color: "#ff6b4a", name: "Heng An Cooling" },
  oceanblue: { badge: "OB",  color: "#3ecbe0", name: "OceanBlue (Yantai OceanBlue Refrigeration)" },
  evapco:    { badge: "EVP", color: "#00a19a", name: "EVAPCO, Inc." },
  bac:       { badge: "BAC", color: "#1e6fd9", name: "Baltimore Aircoil (BAC)" },
  liangchi:  { badge: "LC",  color: "#c62828", name: "Liang Chi" }
};
const BRAND_ORDER = ["wxr", "hengan", "oceanblue", "evapco", "bac", "liangchi"];
function brandKeyOf(src) {
  const prefix = src.id.split("-")[0];
  return BRANDS[prefix] ? prefix : "other";
}
function brandsInUse() {
  const keys = Array.from(new Set(DATABASE.sources.map(brandKeyOf)));
  keys.sort((a, b) => {
    const ia = BRAND_ORDER.indexOf(a), ib = BRAND_ORDER.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  return keys;
}
function kindChip(kind) {
  const key = kind === "coolingtower" ? "kindTower" : kind === "condenser" ? "kindCondenser" : null;
  return key ? `<span class="ui-chip">${uiIcon(kind === "coolingtower" ? "wind" : "fan")}${t(key)}</span>` : "";
}
const CHEVRON = uiIcon("chevron-right", "ui-card-chevron");
// \u0110\u1ea7u trang d\u00f9ng chung: n\u00fat quay l\u1ea1i (t\u00f9y ch\u1ecdn) + huy hi\u1ec7u + ti\u00eau \u0111\u1ec1 + d\u00f2ng ph\u1ee5
function pageHead(opts) {
  return `
    ${opts.back ? `<button type="button" class="ui-btn-link ui-back">${uiIcon("arrow-left", "ui-icon-sm")}${t("back")}</button>` : ""}
    <div class="ui-page-head">
      ${opts.badge || ""}
      <div class="ui-page-head-text">
        <h1 class="ui-title">${opts.title}</h1>
        ${opts.sub ? `<p class="ui-subtitle">${opts.sub}</p>` : ""}
      </div>
    </div>`;
}
function sectionTitle(icon, text, count) {
  return `<h2 class="ui-section-title">${uiIcon(icon)}<span>${text}</span>${count != null ? `<span class="ui-count-text">${count}</span>` : ""}</h2>`;
}
function alertBox(kind, html) {
  const icon = kind === "ok" ? "circle-check" : kind === "warn" ? "triangle-alert" : "info";
  return `<div class="ui-alert ui-alert-${kind}">${uiIcon(icon)}<div class="ui-alert-body">${html}</div></div>`;
}
function metaItem(icon, text) { return `<span class="ui-meta-item">${uiIcon(icon)}${text}</span>`; }
function field(label, inputHtml) {
  return `<label class="ui-field"><span class="ui-label">${label}</span>${inputHtml}</label>`;
}
function brandOf(src) {
  const prefix = src.id.split("-")[0];
  return BRANDS[prefix] || { badge: "EQ", color: "#c9d1d9" };
}
function brandBadgeHtml(src, size) {
  const b = brandOf(src);
  const cls = size === "lg" ? "brand-badge lg" : "brand-badge";
  return `<div class="${cls}" style="background:${b.color}">${b.badge}</div>`;
}

// ---------------------------------------------------------------------
// Bilinear interpolation over an irregular-but-sorted 2D grid
// table = { wetBulb: [numbers...], rows: [{condTemp, values[]}] }
// Returns { value, corners:{c0,c1,w0,w1,v00,v01,v10,v11} } or null if
// out of range / falls on an invalid (null) cell.
// ---------------------------------------------------------------------
function interpolate2D(table, condTemp, wetBulb) {
  const rows = table.rows;
  const cts = rows.map(r => r.condTemp);
  const wbs = table.wetBulb;

  if (condTemp < cts[0] || condTemp > cts[cts.length - 1]) return null;
  if (wetBulb < wbs[0] || wetBulb > wbs[wbs.length - 1]) return null;

  let riLow = 0, riHigh = 0;
  const ctExactIdx = cts.indexOf(condTemp);
  if (ctExactIdx !== -1) {
    riLow = riHigh = ctExactIdx;
  } else {
    for (let i = 0; i < cts.length - 1; i++) {
      if (cts[i] <= condTemp && condTemp <= cts[i + 1]) { riLow = i; riHigh = i + 1; break; }
    }
  }

  let wiLow = 0, wiHigh = 0;
  const wbExactIdx = wbs.indexOf(wetBulb);
  if (wbExactIdx !== -1) {
    wiLow = wiHigh = wbExactIdx;
  } else {
    for (let j = 0; j < wbs.length - 1; j++) {
      if (wbs[j] <= wetBulb && wetBulb <= wbs[j + 1]) { wiLow = j; wiHigh = j + 1; break; }
    }
  }

  const v00 = rows[riLow].values[wiLow];
  const v01 = rows[riLow].values[wiHigh];
  const v10 = rows[riHigh].values[wiLow];
  const v11 = rows[riHigh].values[wiHigh];
  if (v00 == null || v01 == null || v10 == null || v11 == null) return null;

  const ct0 = cts[riLow], ct1 = cts[riHigh];
  const wb0 = wbs[wiLow], wb1 = wbs[wiHigh];
  const tc = ct1 === ct0 ? 0 : (condTemp - ct0) / (ct1 - ct0);
  const tw = wb1 === wb0 ? 0 : (wetBulb - wb0) / (wb1 - wb0);

  const vTop = v00 + (v01 - v00) * tw;
  const vBot = v10 + (v11 - v10) * tw;
  const value = vTop + (vBot - vTop) * tc;

  return { value, corners: { ct0, ct1, wb0, wb1, v00, v01, v10, v11 } };
}

// ---------------------------------------------------------------------
// Quote / report list (persisted in localStorage)
// ---------------------------------------------------------------------
const QUOTE_KEY = LS_KEYS.quoteList;

function loadQuoteList() {
  try {
    const raw = localStorage.getItem(QUOTE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveQuoteList(list) {
  try { localStorage.setItem(QUOTE_KEY, JSON.stringify(list)); } catch (e) {}
}
function addToQuoteList(sourceId, model, qty, requirement) {
  const list = loadQuoteList();
  const existing = list.find(it => it.sourceId === sourceId && it.model === model);
  if (existing) {
    existing.qty = (parseInt(existing.qty, 10) || 0) + (parseInt(qty, 10) || 1);
    if (requirement && Object.keys(requirement).length) existing.requirement = requirement;
  } else {
    list.push({ sourceId, model, qty: parseInt(qty, 10) || 1, accessories: "", requirement: requirement || null });
  }
  saveQuoteList(list);
  refreshQuoteBadge();
}
function removeFromQuoteList(index) {
  const list = loadQuoteList();
  list.splice(index, 1);
  saveQuoteList(list);
  refreshQuoteBadge();
}
function updateQuoteQty(index, qty) {
  const list = loadQuoteList();
  if (list[index]) list[index].qty = Math.max(1, parseInt(qty, 10) || 1);
  saveQuoteList(list);
}
function updateQuoteAccessories(index, text) {
  const list = loadQuoteList();
  if (list[index]) list[index].accessories = text;
  saveQuoteList(list);
}
function clearQuoteList() {
  saveQuoteList([]);
  refreshQuoteBadge();
}
function refreshQuoteBadge() {
  const n = String(loadQuoteList().length);
  ["quoteCount", "quoteCountMobile"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = n;
  });
}

// Project info + commercial terms header (persisted separately from the equipment list itself)
const PROJECT_INFO_KEY = LS_KEYS.quoteProjectInfo;
const PROJECT_INFO_DEFAULTS = {
  companyName: "", projectName: "", preparedBy: "", preparedByPhone: "", preparedByEmail: "",
  installLocation: "", quoteDeadline: "",
  deliveryTerm: "", installationIncluded: "", warrantyReq: ""
};
function loadProjectInfo() {
  try {
    const raw = localStorage.getItem(PROJECT_INFO_KEY);
    return raw ? Object.assign({}, PROJECT_INFO_DEFAULTS, JSON.parse(raw)) : Object.assign({}, PROJECT_INFO_DEFAULTS);
  } catch (e) { return Object.assign({}, PROJECT_INFO_DEFAULTS); }
}
function saveProjectInfo(info) {
  try { localStorage.setItem(PROJECT_INFO_KEY, JSON.stringify(info)); } catch (e) {}
}
function updateProjectInfoField(field, value) {
  const info = loadProjectInfo();
  info[field] = value;
  saveProjectInfo(info);
}
// full, non-abbreviated spec lines per model, reusing whatever fields that model kind has
// (mirrors what renderSpec shows on the model's own detail page). "requirement" is the
// optional design condition the user entered when this item was added to the report.
// Định dạng số cho báo cáo theo ngôn ngữ: VI 1.250,5 / EN 1,250.5
function fmtNum(v) {
  if (v == null || v === "") return v;
  const n = typeof v === "number" ? v : (/^-?\d+(\.\d+)?$/.test(String(v).trim()) ? parseFloat(v) : NaN);
  if (isNaN(n)) return v;
  return n.toLocaleString(LANG === "vi" ? "vi-VN" : "en-US", { maximumFractionDigits: 3 });
}

function quoteFullSpecLines(src, m, requirement) {
  const f = fmtNum;
  const lines = [];
  if (requirement && Object.keys(requirement).length) {
    const reqParts = [];
    if (requirement.load != null && requirement.load !== "") reqParts.push(`${t("reqCapacity")} ${f(requirement.load)}`);
    if (requirement.flow != null && requirement.flow !== "") reqParts.push(`${t("reqFlow")} ${f(requirement.flow)}`);
    if (requirement.condTemp != null && requirement.condTemp !== "") reqParts.push(`${t("reqCondTemp")} ${f(requirement.condTemp)}`);
    if (requirement.wetBulb != null && requirement.wetBulb !== "") reqParts.push(`${t("reqWetBulb")} ${f(requirement.wetBulb)}`);
    if (reqParts.length) lines.push(`${t("reqConditionLabel")}: ${reqParts.join(", ")}`);
  }
  if (src.kind === "condenser") {
    lines.push(`${t("heatRejection")}: ${f(m.heatRejection)} kW`);
    lines.push(`${t("fan")}: ${t("qty")} ${f(m.fanQty)} \u00d7 ${t("airFlow")} ${f(m.fanAirFlow)} m\u00b3/h, ${t("power")} ${f(m.fanPower)} kW`);
    if (m.pumpFlow != null) lines.push(`${t("pump")}: ${t("qty")} ${f(m.pumpQty || 1)} \u00d7 ${t("flow")} ${f(m.pumpFlow)} m\u00b3/h, ${t("power")} ${f(m.pumpPower)} kW`);
    if (m.ammonia != null) lines.push(`${t("ammonia")}: ${f(m.ammonia)} kg`);
    if (m.pipeDN) lines.push(`DN: ${m.pipeDN}`);
    lines.push(`${t("dims")}: ${f(m.A)}\u00d7${f(m.B)}\u00d7${f(m.H)} mm`);
    lines.push(`${t("shipWeight")}: ${f(m.shipWeight)} kg`);
    lines.push(`${t("operWeight")}: ${f(m.operWeight)} kg`);
  } else if (src.kind === "coolingtower") {
    lines.push(`${t("nominalFlow")}: ${m.flow != null ? f(m.flow) + " m\u00b3/h" : "\u2014"}`);
    lines.push(`${t("fan")}: ${t("qty")} ${f(m.fanQty)} \u00d7 ${t("airFlow")} ${f(m.fanAirFlow)} m\u00b3/h, ${t("power")} ${f(m.fanPower)} kW`);
    if (m.pumpFlow != null) lines.push(`${t("pump")}: ${t("qty")} ${f(m.pumpQty || 1)} \u00d7 ${t("flow")} ${f(m.pumpFlow)} m\u00b3/h, ${t("power")} ${f(m.pumpPower)} kW`);
    if (m.pipeDN) lines.push(`DN: ${m.pipeDN}`);
    lines.push(`${t("dims")}: ${f(m.A)}\u00d7${f(m.B)}\u00d7${f(m.H)} mm`);
    lines.push(`${t("shipWeight")}: ${f(m.shipWeight)} kg`);
    lines.push(`${t("operWeight")}: ${f(m.operWeight)} kg`);
    lines.push(`${t("designCondition")}: ${src.designCondition[LANG]}`);
  }
  return lines;
}

// ---------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------
const appEl = document.getElementById("app");

function render(view) {
  window.scrollTo(0, 0);
  if (view.name === "home") return renderHome();
  if (view.name === "brand") return renderBrand(view.brandId);
  if (view.name === "source") return renderSource(view.sourceId);
  if (view.name === "spec") return renderSpec(view.sourceId, view.model, view.reqInfo);
  if (view.name === "report") return renderReport();
}

function renderHome() {
  const brandKeys = brandsInUse();
  const cards = brandKeys.map(key => {
    const brand = BRANDS[key] || { badge: "EQ", color: "#c9d1d9", name: key };
    const sources = DATABASE.sources.filter(s => brandKeyOf(s) === key);
    const modelCount = sources.reduce((sum, s) => sum + s.models.length, 0);
    const lineNames = sources.map(s => s.name[LANG]).join(", ");
    return `
      <button type="button" class="ui-card source-card" data-brand="${key}">
        <div class="brand-badge lg" style="background:${brand.color}">${brand.badge}</div>
        <div class="ui-card-body">
          <div class="ui-card-title">${brand.name}</div>
          <div class="ui-card-meta">${metaItem("layers", `${sources.length} ${t("productLines")}`)}${metaItem("boxes", `${modelCount} ${t("modelsTotal")}`)}</div>
          <div class="ui-card-desc">${lineNames}</div>
        </div>
        ${CHEVRON}
      </button>`;
  }).join("");

  const totalLines = DATABASE.sources.length;
  const totalModels = DATABASE.sources.reduce((sum, s) => sum + s.models.length, 0);
  const stat = (icon, value, label) => `<div class="ui-stat"><span class="ui-stat-value">${value}</span><span class="ui-stat-label">${uiIcon(icon)}${label}</span></div>`;
  appEl.innerHTML = `
    <section class="ui-hero">
      <div>
        <h1 class="ui-title">${t("appTitle")}</h1>
        <p class="ui-hero-lead">${t("heroLead")}</p>
      </div>
      <div class="ui-stats">
        ${stat("factory", brandKeys.length, t("statBrands"))}
        ${stat("layers", totalLines, t("statLines"))}
        ${stat("boxes", totalModels, t("statModels"))}
      </div>
    </section>
    <p class="ui-section-label">${t("chooseBrand")}</p>
    <div class="ui-card-grid">${cards}</div>
    <p class="ui-muted ui-small" style="margin:16px 0 0">${t("moreSourcesNote")}</p>
  `;

  appEl.querySelectorAll(".source-card").forEach(el => {
    el.addEventListener("click", () => render({ name: "brand", brandId: el.dataset.brand }));
  });
}

function renderBrand(brandId) {
  const brand = BRANDS[brandId] || { badge: "EQ", color: "#c9d1d9", name: brandId };
  const sources = DATABASE.sources.filter(s => brandKeyOf(s) === brandId);
  if (!sources.length) return renderHome();

  const cards = sources.map(s => `
    <button type="button" class="ui-card source-card" data-source="${s.id}">
      ${brandBadgeHtml(s)}
      <div class="ui-card-body">
        <div class="ui-card-title">${s.name[LANG]}</div>
        <div class="ui-card-meta">${kindChip(s.kind)}${metaItem("boxes", `${s.models.length} ${t("modelsTotal")}`)}</div>
        <div class="ui-card-desc">${s.shortDesc[LANG]}</div>
      </div>
      ${CHEVRON}
    </button>
  `).join("");

  appEl.innerHTML = `
    ${pageHead({ back: true, badge: `<div class="brand-badge lg" style="background:${brand.color}">${brand.badge}</div>`, title: brand.name, sub: `${sources.length} ${t("productLines")}` })}
    <p class="ui-section-label" style="margin-top:0">${t("chooseProductLine")}</p>
    <div class="ui-card-grid">${cards}</div>
  `;

  appEl.querySelector(".ui-back").addEventListener("click", () => render({ name: "home" }));
  appEl.querySelectorAll(".source-card").forEach(el => {
    el.addEventListener("click", () => render({ name: "source", sourceId: el.dataset.source }));
  });
}

function numInput(id, opts) {
  const o = opts || {};
  return `<input class="ui-input" type="number" inputmode="decimal" id="${id}"${o.min != null ? ` min="${o.min}"` : ""} step="${o.step || "any"}"${o.placeholder ? ` placeholder="${o.placeholder}"` : ""}${o.value != null ? ` value="${o.value}"` : ""}>`;
}

// Bố cục chung: cột trái (PC) = nhập điều kiện + quy trình chọn; cột phải = bảng model.
// Điện thoại: xếp 1 cột theo đúng thứ tự đó.
function renderSource(sourceId) {
  const src = DATABASE.sources.find(s => s.id === sourceId);
  if (!src) return renderHome();

  let finder = "", info = "", table = "", notes = "";
  if (src.kind === "condenser" && src.correctionTables) {
    finder = `
      ${field(t("refrigerant"), `<select id="refrig" class="ui-select">
        ${Object.keys(src.correctionTables).map(k => `<option value="${k}">${REFRIG_LABELS[k] || k}</option>`).join("")}
      </select>`)}
      ${field(t("requiredHeatRej"), numInput("reqLoad", { min: 0, step: 1, placeholder: "940" }))}
      ${field(t("condTemp"), numInput("condTemp", { step: 0.1, placeholder: "36" }))}
      ${field(t("wetBulbTemp"), numInput("wetBulb", { step: 0.1, placeholder: "29" }))}
      <button type="button" class="ui-btn ui-btn-primary ui-btn-block" id="calcCondBtn">${uiIcon("calculator")}${t("calculate")}</button>
      <div id="condResult"></div>`;
    info = procedurePanel(src);
    table = renderCondenserTable(src);
  } else if (src.kind === "condenser") {
    finder = `
      <p class="ui-muted ui-small" style="margin:0 0 12px">${t("noCorrectionNote")}</p>
      ${field(t("requiredHeatRej"), numInput("reqLoadDirect", { min: 0, step: 1, placeholder: "900" }))}
      <button type="button" class="ui-btn ui-btn-primary ui-btn-block" id="calcCondDirectBtn">${uiIcon("calculator")}${t("calculate")}</button>
      <div id="condDirectResult"></div>`;
    info = procedurePanel(src);
    table = renderCondenserTable(src);
  } else if (src.kind === "coolingtower") {
    finder = `
      ${field(t("requiredFlow"), numInput("reqFlow", { min: 0, step: 1, placeholder: "250" }))}
      <button type="button" class="ui-btn ui-btn-primary ui-btn-block" id="calcTowerBtn">${uiIcon("calculator")}${t("calculate")}</button>
      <div id="towerResult"></div>`;
    info = `
      <div class="ui-panel">
        ${sectionTitle("thermometer", t("designCondition"))}
        <p class="ui-small ui-muted" style="margin:0">${src.designCondition[LANG]}</p>
      </div>`;
    table = renderTowerTable(src);
    notes = `
      <div class="ui-panel">
        ${sectionTitle("book-open", t("catalogueNotes"))}
        <ul class="ui-list">${src.notes[LANG].map(l => `<li>${l}</li>`).join("")}</ul>
      </div>`;
  }

  appEl.innerHTML = `
    ${pageHead({ back: true, badge: brandBadgeHtml(src, "lg"), title: src.name[LANG], sub: `${src.manufacturer} ${kindChip(src.kind)}` })}
    <div class="ui-split">
      <aside class="ui-aside ui-stack">
        <div class="ui-panel ui-panel-accent">
          ${sectionTitle("search", t("findByCap"))}
          ${finder}
        </div>
        ${info}
      </aside>
      <section class="ui-stack">
        <div class="ui-panel">
          ${sectionTitle("list", t("allModels"), src.models.length)}
          ${table}
        </div>
        ${notes}
        <p class="ui-muted ui-small" style="margin:0">${t("dataSourceNote")}</p>
      </section>
    </div>
  `;

  appEl.querySelector(".ui-back").addEventListener("click", () => render({ name: "brand", brandId: brandKeyOf(src) }));

  if (src.kind === "condenser" && src.correctionTables) {
    document.getElementById("calcCondBtn").addEventListener("click", () => calcCondenser(src));
  } else if (src.kind === "condenser") {
    document.getElementById("calcCondDirectBtn").addEventListener("click", () => calcCondenserDirect(src));
  } else if (src.kind === "coolingtower") {
    document.getElementById("calcTowerBtn").addEventListener("click", () => calcTower(src));
  }

  appEl.querySelectorAll(".model-row").forEach(el => {
    el.addEventListener("click", () => render({ name: "spec", sourceId: src.id, model: el.dataset.model }));
  });
}

function procedurePanel(src) {
  return `
    <div class="ui-panel">
      ${sectionTitle("list-checks", t("selectionProcedure"))}
      <ol class="ui-list">${src.selectionProcedure[LANG].map(l => `<li>${l}</li>`).join("")}</ol>
    </div>`;
}

function renderCondenserTable(src) {
  const rows = src.models.map(m => `
    <tr class="ui-row-link model-row" data-model="${m.model}">
      <td>${m.model}</td><td class="ui-num">${m.heatRejection}</td><td class="ui-num">${m.ammonia != null ? m.ammonia : "—"}</td>
      <td>${m.A}×${m.B}×${m.H}</td><td class="ui-num">${m.operWeight}</td>
    </tr>`).join("");
  return `
    <div class="ui-table-wrap"><table class="ui-table ui-table-data ui-table-sticky-first">
      <thead><tr><th>${t("model")}</th><th class="ui-num">${t("heatRejection")}</th><th class="ui-num">NH3 (kg)</th><th>A×B×H (mm)</th><th class="ui-num">${t("operWeight")}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
}

function renderTowerTable(src) {
  const rows = src.models.map(m => `
    <tr class="ui-row-link model-row" data-model="${m.model}">
      <td>${m.model}</td><td class="ui-num">${m.flow != null ? m.flow : "—"}</td>
      <td>${m.A}×${m.B}×${m.H}</td><td class="ui-num">${m.operWeight}</td>
    </tr>`).join("");
  return `
    <div class="ui-table-wrap"><table class="ui-table ui-table-data ui-table-sticky-first">
      <thead><tr><th>${t("model")}</th><th class="ui-num">${t("nominalFlow")}</th><th>${t("dims")}</th><th class="ui-num">${t("operWeight")}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
}

// Tô dòng model được chọn trong bảng (hoặc bỏ tô khi không có)
function highlightFit(model) {
  appEl.querySelectorAll("tr.model-row").forEach(tr => {
    tr.classList.toggle("ui-row-hit", !!model && tr.dataset.model === model);
  });
}

function fitAlert(fit, lines) {
  return `
    ${alertBox("ok", `
      <div class="ui-result-label">${t("selectedModel")}</div>
      <div class="ui-result-model">${fit.model}</div>
      ${lines.map(l => `<div>${l}</div>`).join("")}
      <button type="button" class="ui-btn-link" id="viewSpecBtn">${t("viewFullSpec")}${uiIcon("arrow-right", "ui-icon-sm")}</button>`)}`;
}

function calcCondenser(src) {
  const refrig = document.getElementById("refrig").value;
  const load = parseFloat(document.getElementById("reqLoad").value);
  const condT = parseFloat(document.getElementById("condTemp").value);
  const wb = parseFloat(document.getElementById("wetBulb").value);
  const resEl = document.getElementById("condResult");

  if (!load || load <= 0 || isNaN(condT) || isNaN(wb)) { resEl.innerHTML = ""; highlightFit(null); return; }

  const table = src.correctionTables[refrig];
  const interp = interpolate2D(table, condT, wb);

  if (!interp) {
    resEl.innerHTML = alertBox("warn", t("outOfRange"));
    highlightFit(null);
    return;
  }

  const factor = interp.value;
  const corrected = load * factor;
  const sorted = [...src.models].sort((a, b) => a.heatRejection - b.heatRejection);
  const fit = sorted.find(m => m.heatRejection >= corrected);

  const c = interp.corners;
  const gridNote = `${t("usedGridPoints")}: (${c.ct0}°C,${c.wb0}°C)=${c.v00} · (${c.ct0}°C,${c.wb1}°C)=${c.v01} · (${c.ct1}°C,${c.wb0}°C)=${c.v10} · (${c.ct1}°C,${c.wb1}°C)=${c.v11}`;

  const modelHtml = fit
    ? fitAlert(fit, [`${t("heatRejection")}: <strong>${fit.heatRejection} kW</strong>`])
    : alertBox("warn", t("noModelFits"));

  resEl.innerHTML = `
    ${alertBox("info", `
      <div>${t("correctionFactor")}: <strong>${factor.toFixed(3)}</strong></div>
      <div>${t("correctedLoad")}: <strong>${corrected.toFixed(1)} kW</strong> (${load} × ${factor.toFixed(3)})</div>
      <div class="ui-tiny ui-mono" style="margin-top:4px;opacity:.8">${gridNote}</div>`)}
    ${modelHtml}
  `;
  highlightFit(fit ? fit.model : null);
  const btn = document.getElementById("viewSpecBtn");
  if (btn) btn.addEventListener("click", () => render({ name: "spec", sourceId: src.id, model: fit.model, reqInfo: { load, condTemp: condT, wetBulb: wb } }));
}

function calcCondenserDirect(src) {
  const load = parseFloat(document.getElementById("reqLoadDirect").value);
  const resEl = document.getElementById("condDirectResult");
  if (!load || load <= 0) { resEl.innerHTML = ""; highlightFit(null); return; }

  const sorted = [...src.models].sort((a, b) => a.heatRejection - b.heatRejection);
  const fit = sorted.find(m => m.heatRejection >= load);

  if (!fit) {
    resEl.innerHTML = alertBox("warn", t("noModelFits"));
    highlightFit(null);
    return;
  }
  resEl.innerHTML = fitAlert(fit, [`${t("heatRejection")}: <strong>${fit.heatRejection} kW</strong>`]);
  highlightFit(fit.model);
  document.getElementById("viewSpecBtn").addEventListener("click", () =>
    render({ name: "spec", sourceId: src.id, model: fit.model, reqInfo: { load } }));
}

function calcTower(src) {
  const req = parseFloat(document.getElementById("reqFlow").value);
  const resEl = document.getElementById("towerResult");
  if (!req || req <= 0) { resEl.innerHTML = ""; highlightFit(null); return; }

  const sorted = [...src.models].sort((a, b) => a.flow - b.flow);
  const fit = sorted.find(m => m.flow >= req);

  if (!fit) {
    resEl.innerHTML = alertBox("warn", t("noModelFits"));
    highlightFit(null);
    return;
  }
  resEl.innerHTML = fitAlert(fit, [
    `${t("nominalFlow")}: <strong>${fit.flow} m³/h</strong>`,
    `${t("dims")}: ${fit.A}×${fit.B}×${fit.H} mm`,
    `${t("operWeight")}: ${fit.operWeight} kg`
  ]);
  highlightFit(fit.model);
  document.getElementById("viewSpecBtn").addEventListener("click", () =>
    render({ name: "spec", sourceId: src.id, model: fit.model, reqInfo: { flow: req } }));
}

function specRow(label, value, icon, wide) {
  return `<div class="ui-spec-row${wide ? " ui-spec-wide" : ""}">
    <span class="ui-spec-icon">${uiIcon(icon || "info")}</span>
    <div class="ui-spec-text"><div class="ui-spec-label">${label}</div><div class="ui-spec-value">${value}</div></div>
  </div>`;
}
function specGrid(rowsHtml) {
  return `<div class="ui-spec-grid">${rowsHtml.join("")}</div>`;
}

// PC: thông số bên trái, khung "Thêm vào báo cáo" bên phải. Điện thoại: xếp dọc.
function renderSpec(sourceId, modelName, reqInfo) {
  const src = DATABASE.sources.find(s => s.id === sourceId);
  const m = src.models.find(mm => mm.model === modelName);
  const req = reqInfo || {};

  const rows = [];
  if (src.kind === "condenser") rows.push(specRow(t("heatRejection"), `${m.heatRejection} kW`, "thermometer"));
  if (src.kind === "coolingtower") rows.push(specRow(t("nominalFlow"), m.flow != null ? `${m.flow} m³/h` : "—", "waves"));
  rows.push(specRow(t("fan"), `${t("qty")} ${m.fanQty} × ${t("airFlow")} ${m.fanAirFlow} m³/h, ${t("power")} ${m.fanPower} kW`, "fan", true));
  if (m.pumpFlow != null) rows.push(specRow(t("pump"), `${t("qty")} ${m.pumpQty || 1} × ${t("flow")} ${m.pumpFlow} m³/h, ${t("power")} ${m.pumpPower} kW`, "droplets", true));
  if (src.kind === "condenser" && m.ammonia != null) rows.push(specRow(t("ammonia"), `${m.ammonia} kg`, "snowflake"));
  if (m.pipeDN) rows.push(specRow("DN", m.pipeDN, "cog"));
  rows.push(specRow(t("dims"), `${m.A}×${m.B}×${m.H} mm`, "ruler"));
  rows.push(specRow(t("shipWeight"), `${m.shipWeight} kg`, "package"));
  rows.push(specRow(t("operWeight"), `${m.operWeight} kg`, "weight"));

  const designCond = src.kind === "coolingtower"
    ? `<hr class="ui-divider">${sectionTitle("thermometer", t("designCondition"))}<p class="ui-small ui-muted" style="margin:0">${src.designCondition[LANG]}</p>`
    : "";

  const reqInputsHtml = src.kind === "condenser"
    ? field(t("reqCapacity"), numInput("reqCapacityIn", { value: req.load }))
      + field(t("reqCondTemp"), numInput("reqCondTempIn", { value: req.condTemp }))
      + field(t("reqWetBulb"), numInput("reqWetBulbIn", { value: req.wetBulb }))
    : field(t("reqFlow"), numInput("reqFlowIn", { value: req.flow }));

  appEl.innerHTML = `
    ${pageHead({ back: true, badge: brandBadgeHtml(src, "lg"), title: `<span class="ui-mono">${m.model}</span>`, sub: `${src.name[LANG]} ${kindChip(src.kind)}` })}
    <div class="ui-split ui-split-end">
      <section class="ui-stack">
        <div class="ui-panel nameplate">
          ${sectionTitle("box", t("fullSpecNote"))}
          ${specGrid(rows)}
          ${designCond}
        </div>
      </section>
      <aside class="ui-aside ui-stack">
        <div class="ui-panel ui-panel-accent">
          ${sectionTitle("clipboard-check", t("addToQuote"))}
          ${field(t("qty"), `<input class="ui-input" type="number" inputmode="numeric" id="quoteQty" min="1" step="1" value="1">`)}
          <hr class="ui-divider">
          <p class="ui-label" style="margin:0 0 2px;color:var(--ui-text)">${t("reqConditionLabel")}</p>
          <p class="ui-muted ui-small" style="margin:0 0 12px">${t("reqOptionalNote")}</p>
          ${reqInputsHtml}
          <button type="button" class="ui-btn ui-btn-primary ui-btn-block" id="addQuoteBtn" style="margin-top:6px">${uiIcon("plus")}${t("addToQuote")}</button>
          <div id="addQuoteMsg"></div>
        </div>
      </aside>
    </div>
  `;

  appEl.querySelector(".ui-back").addEventListener("click", () => render({ name: "source", sourceId }));
  document.getElementById("addQuoteBtn").addEventListener("click", () => {
    const qty = document.getElementById("quoteQty").value;
    const requirement = {};
    if (src.kind === "condenser") {
      const load = document.getElementById("reqCapacityIn").value;
      const condTemp = document.getElementById("reqCondTempIn").value;
      const wetBulb = document.getElementById("reqWetBulbIn").value;
      if (load !== "") requirement.load = load;
      if (condTemp !== "") requirement.condTemp = condTemp;
      if (wetBulb !== "") requirement.wetBulb = wetBulb;
    } else if (src.kind === "coolingtower") {
      const flow = document.getElementById("reqFlowIn").value;
      if (flow !== "") requirement.flow = flow;
    }
    addToQuoteList(sourceId, m.model, qty, Object.keys(requirement).length ? requirement : null);
    document.getElementById("addQuoteMsg").innerHTML = alertBox("ok", `${t("addedToQuote")}
        <div><button type="button" class="ui-btn-link" id="goReportBtn">${t("navReport")}${uiIcon("arrow-right", "ui-icon-sm")}</button></div>`);
    document.getElementById("goReportBtn").addEventListener("click", () => render({ name: "report" }));
  });
}

// ---------------------------------------------------------------------
// Quote report view
// ---------------------------------------------------------------------
// PC: danh sách thiết bị + thông tin dự án bên trái, cột xuất file bên phải.
// Điện thoại: bảng thiết bị chuyển thành thẻ "nhãn: giá trị", nút xuất ở cuối trang.
function renderReport() {
  const list = loadQuoteList();
  const proj = loadProjectInfo();
  const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const txt = (id, val, type) => `<input class="ui-input" type="${type || "text"}" id="${id}" value="${esc(val)}">`;

  const projPanel = `
    <div class="ui-panel">
      ${sectionTitle("factory", t("projectInfo"))}
      <div class="ui-form-grid">
        ${field(t("companyName"), txt("projCompanyName", proj.companyName))}
        ${field(t("projectName"), txt("projName", proj.projectName))}
        ${field(t("preparedBy"), txt("projPreparedBy", proj.preparedBy))}
        ${field(t("preparedByPhone"), txt("projPreparedByPhone", proj.preparedByPhone, "tel"))}
        ${field(t("preparedByEmail"), txt("projPreparedByEmail", proj.preparedByEmail, "email"))}
        ${field(t("installLocation"), txt("projLocation", proj.installLocation))}
        ${field(t("quoteDeadline"), txt("projDeadline", proj.quoteDeadline, "date"))}
      </div>
      <hr class="ui-divider">
      ${sectionTitle("file-text", t("commercialTerms"))}
      <div class="ui-form-grid">
        ${field(t("deliveryTerm"), txt("projDeliveryTerm", proj.deliveryTerm))}
        ${field(t("installationIncluded"), txt("projInstallIncluded", proj.installationIncluded))}
        ${field(t("warrantyReq"), txt("projWarranty", proj.warrantyReq))}
      </div>
    </div>`;

  let equipPanel;
  if (list.length === 0) {
    equipPanel = `<div class="ui-panel ui-empty"><div class="ui-empty-icon">${uiIcon("clipboard-list")}</div>${t("quoteEmpty")}</div>`;
  } else {
    const rows = list.map((it, idx) => {
      const src = DATABASE.sources.find(s => s.id === it.sourceId);
      const m = src ? src.models.find(mm => mm.model === it.model) : null;
      const brandName = src ? (BRANDS[brandKeyOf(src)] || {}).name || brandKeyOf(src) : it.sourceId;
      const specLines = (src && m) ? quoteFullSpecLines(src, m, it.requirement) : ["—"];
      const specHtml = specLines.map(l => `<div>${l}</div>`).join("");
      return `
        <tr>
          <td class="ui-num">${idx + 1}</td>
          <td data-label="${t("colBrand")}">${brandName}</td>
          <td data-label="${t("colModel")}" class="ui-mono report-model"><strong>${it.model}</strong></td>
          <td data-label="${t("fullSpecNote")}" class="ui-small report-spec">${specHtml}</td>
          <td data-label="${t("colQty")}"><input class="ui-input qty-input" type="number" inputmode="numeric" min="1" step="1" data-idx="${idx}" value="${it.qty}"></td>
          <td data-label="${t("colAccessories")}"><textarea rows="2" class="ui-textarea acc-input" data-idx="${idx}" placeholder="${t("accessoriesPlaceholder")}">${esc(it.accessories)}</textarea></td>
          <td><button type="button" class="ui-btn ui-btn-danger ui-btn-sm remove-btn" data-idx="${idx}">${uiIcon("trash-2", "ui-icon-sm")}${t("removeItem")}</button></td>
        </tr>`;
    }).join("");
    equipPanel = `
      <div class="ui-panel">
        ${sectionTitle("clipboard-list", t("equipList"), list.length)}
        <div class="ui-table-wrap">
          <table class="ui-table ui-table-stack">
            <thead><tr><th class="ui-num">#</th><th>${t("colBrand")}</th><th>${t("colModel")}</th><th>${t("fullSpecNote")}</th><th>${t("colQty")}</th><th>${t("colAccessories")}</th><th></th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        ${field(t("quoteNoteLabel"), `<textarea id="quoteNote" rows="3" class="ui-textarea"></textarea>`).replace('class="ui-field"', 'class="ui-field" style="margin-top:16px"')}
      </div>`;
  }

  const exportPanel = list.length ? `
    <div class="ui-panel ui-panel-accent">
      ${sectionTitle("file-down", t("docTitle"))}
      <div class="ui-stack" style="gap:10px">
        <button type="button" class="ui-btn ui-btn-primary ui-btn-block" id="exportPrintBtn">${uiIcon("printer")}${t("exportPrint")}</button>
        <button type="button" class="ui-btn ui-btn-block" id="exportWordBtn">${uiIcon("file-text")}${t("exportWord")}</button>
        <button type="button" class="ui-btn ui-btn-block" id="exportCsvBtn">${uiIcon("file-spreadsheet")}${t("exportCsv")}</button>
      </div>
    </div>` : "";

  appEl.innerHTML = `
    ${pageHead({ back: true, title: t("quoteReport") })}
    <div class="ui-split ui-split-end">
      <section class="ui-stack">
        ${equipPanel}
        ${projPanel}
      </section>
      <aside class="ui-aside ui-stack">
        ${exportPanel}
        <div class="ui-panel">
          <div class="ui-btn-row">
            <button type="button" class="ui-btn" id="dataExportBtn" style="flex:1">${uiIcon("download")}${t("dataExport")}</button>
            <button type="button" class="ui-btn" id="dataImportBtn" style="flex:1">${uiIcon("upload")}${t("dataImport")}</button>
          </div>
          ${list.length ? `<button type="button" class="ui-btn ui-btn-danger ui-btn-block" id="clearAllBtn" style="margin-top:10px">${uiIcon("trash-2")}${t("clearAll")}</button>` : ""}
        </div>
      </aside>
    </div>
  `;

  appEl.querySelector(".ui-back").addEventListener("click", () => render({ name: "home" }));
  wireProjectInfoInputs();
  document.getElementById("dataExportBtn").addEventListener("click", dataExport);
  document.getElementById("dataImportBtn").addEventListener("click", dataImport);
  if (!list.length) return;

  appEl.querySelectorAll(".qty-input").forEach(inp => {
    inp.addEventListener("change", () => {
      updateQuoteQty(parseInt(inp.dataset.idx, 10), inp.value);
    });
  });
  appEl.querySelectorAll(".acc-input").forEach(inp => {
    inp.addEventListener("change", () => {
      updateQuoteAccessories(parseInt(inp.dataset.idx, 10), inp.value);
    });
  });
  appEl.querySelectorAll(".remove-btn[data-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      removeFromQuoteList(parseInt(btn.dataset.idx, 10));
      renderReport();
    });
  });
  document.getElementById("clearAllBtn").addEventListener("click", () => {
    clearQuoteList();
    renderReport();
  });
  document.getElementById("exportCsvBtn").addEventListener("click", () => exportQuoteCsv());
  document.getElementById("exportPrintBtn").addEventListener("click", () => exportQuotePrint());
  document.getElementById("exportWordBtn").addEventListener("click", () => exportQuoteWord());
}

function wireProjectInfoInputs() {
  const map = {
    projCompanyName: "companyName",
    projName: "projectName",
    projPreparedBy: "preparedBy",
    projPreparedByPhone: "preparedByPhone",
    projPreparedByEmail: "preparedByEmail",
    projLocation: "installLocation",
    projDeadline: "quoteDeadline",
    projDeliveryTerm: "deliveryTerm",
    projInstallIncluded: "installationIncluded",
    projWarranty: "warrantyReq"
  };
  Object.keys(map).forEach(elId => {
    const el = document.getElementById(elId);
    if (el) el.addEventListener("change", () => updateProjectInfoField(map[elId], el.value));
  });
}

function buildQuoteRows() {
  const list = loadQuoteList();
  return list.map((it, idx) => {
    const src = DATABASE.sources.find(s => s.id === it.sourceId);
    const m = src ? src.models.find(mm => mm.model === it.model) : null;
    const brandName = src ? (BRANDS[brandKeyOf(src)] || {}).name || brandKeyOf(src) : it.sourceId;
    const specLines = (src && m) ? quoteFullSpecLines(src, m, it.requirement) : [];
    return { stt: idx + 1, brandName, model: it.model, specLines, qty: it.qty, accessories: it.accessories || "" };
  });
}

function csvEscape(val) {
  const s = String(val == null ? "" : val);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function projectAndTermsLines(proj) {
  const lines = [];
  if (proj.companyName) lines.push(t("companyName") + ": " + proj.companyName);
  if (proj.projectName) lines.push(t("projectName") + ": " + proj.projectName);
  if (proj.preparedBy) lines.push(t("preparedBy") + ": " + proj.preparedBy);
  if (proj.preparedByPhone) lines.push(t("preparedByPhone") + ": " + proj.preparedByPhone);
  if (proj.preparedByEmail) lines.push(t("preparedByEmail") + ": " + proj.preparedByEmail);
  if (proj.installLocation) lines.push(t("installLocation") + ": " + proj.installLocation);
  if (proj.quoteDeadline) lines.push(t("quoteDeadline") + ": " + proj.quoteDeadline);
  if (proj.deliveryTerm) lines.push(t("deliveryTerm") + ": " + proj.deliveryTerm);
  if (proj.installationIncluded) lines.push(t("installationIncluded") + ": " + proj.installationIncluded);
  if (proj.warrantyReq) lines.push(t("warrantyReq") + ": " + proj.warrantyReq);
  return lines;
}

// ---------------------------------------------------------------------
// Chuẩn trình bày phiếu yêu cầu báo giá (dùng chung cho In/PDF, Word, CSV)
// Theo chuẩn văn bản nhóm A của công ty (chữ đen, không dùng màu nhấn của app):
// - Font: Times New Roman (bản tiếng Việt) / Arial (bản tiếng Anh), một file một ngôn ngữ.
// - Cỡ chữ: tên văn bản 14 - mục cấp 1 12 - thân bài 11 - chữ trong bảng 10 -
//   ghi chú dưới bảng 10 nghiêng - chú thích bảng 10 - footer 9.
// - Giãn dòng 1,15; cách sau đoạn 6pt.
// - A4, lề trên 25 / dưới 20 / trái 30 / phải 15 mm; header 8 mm, footer 9 mm.
// - Bảng: viền 0,5pt, tiêu đề đậm nền D9D9D9, lặp tiêu đề khi sang trang,
//   STT căn giữa, số căn phải, dòng không ngắt qua trang.
// - Footer: trái = tên văn bản, phải = "Trang x/y".
// - Ngày dd/mm/yyyy; số: VI 1.250,5 / EN 1,250.5.
// - Tên file: [TenNgan]_[YYYYMMDD], không dấu, không hậu tố Rev.
// ---------------------------------------------------------------------
const DOC_PAGE = { top: "25mm", bottom: "20mm", left: "30mm", right: "15mm", header: "8mm", footer: "9mm" };

function pad2(n) { return String(n).padStart(2, "0"); }
function fmtDate(d) { return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`; }
function fmtIsoDate(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
  return m ? `${m[3]}/${m[2]}/${m[1]}` : (s || "");
}
function fileStamp(d) { return `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`; }
function reportFileName(ext) {
  const base = LANG === "vi" ? "YeuCauBaoGia_ThietBiGiaiNhiet" : "RFQ_CoolingEquipment";
  return `${base}_${fileStamp(new Date())}.${ext}`;
}
function docFontFamily() {
  return LANG === "vi" ? "'Times New Roman', Times, serif" : "Arial, Helvetica, sans-serif";
}

function exportQuoteCsv() {
  const rows = buildQuoteRows();
  const note = (document.getElementById("quoteNote") || {}).value || "";
  const proj = loadProjectInfo();
  const lines = [];
  lines.push(csvEscape(t("docTitle")));
  lines.push(csvEscape(t("reportDate") + ": " + fmtDate(new Date())));
  projectAndTermsLines(proj).forEach(l => lines.push(csvEscape(l)));
  lines.push("");
  const header = [LANG === "vi" ? "STT" : "No.", t("colBrand"), t("colModel"), t("fullSpecNote"), t("colQty"), t("colAccessories")];
  lines.push(header.map(csvEscape).join(","));
  rows.forEach(r => {
    lines.push([r.stt, r.brandName, r.model, r.specLines.join("\n"), r.qty, r.accessories].map(csvEscape).join(","));
  });
  if (note.trim()) {
    lines.push("");
    lines.push(csvEscape(t("quoteNoteLabel") + ": " + note));
  }
  lines.push("");
  lines.push(csvEscape(t("disclaimerLabel") + ": " + t("disclaimerText")));
  const csvContent = "﻿" + lines.join("\r\n");
  downloadBlob(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }), reportFileName("csv"));
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function vnDateBlock(d) {
  if (LANG !== "vi") return `Date: ${fmtDate(d)}`;
  return `Ngày ${pad2(d.getDate())} tháng ${pad2(d.getMonth() + 1)} năm ${d.getFullYear()}`;
}

function documentStyleBlock() {
  return `
    body { font-family: ${docFontFamily()}; font-size: 11pt; color: #000; line-height: 1.15; }
    p { margin: 0 0 6pt; }
    table.doc-header-row { width: 100%; border-collapse: collapse; margin-bottom: 6pt; }
    table.doc-header-row td { border: none; padding: 0; vertical-align: top; }
    .letterhead-company { font-size: 12pt; font-weight: bold; text-transform: uppercase; }
    .doc-date { font-size: 11pt; font-style: italic; white-space: nowrap; text-align: right; }
    h1.doc-title { font-size: 14pt; font-weight: bold; text-align: center; text-transform: uppercase; margin: 12pt 0 12pt; }
    h2.doc-h1 { font-size: 12pt; font-weight: bold; text-transform: uppercase; margin: 12pt 0 6pt; }
    table.info-columns { width: 100%; border-collapse: collapse; margin-bottom: 6pt; }
    table.info-columns td { border: none; padding: 0; vertical-align: top; }
    table.info-columns table { border-collapse: collapse; }
    table.info-columns table td { padding: 1pt 8pt 1pt 0; font-size: 11pt; }
    .doc-caption { font-size: 10pt; margin: 6pt 0 3pt; }
    table.equip-table { border-collapse: collapse; width: 100%; table-layout: fixed; }
    table.equip-table thead { display: table-header-group; }
    table.equip-table tr { page-break-inside: avoid; break-inside: avoid; }
    table.equip-table th, table.equip-table td { border: 0.5pt solid #000; padding: 3pt 4pt; font-size: 10pt; line-height: 1.15; text-align: left; vertical-align: top; word-wrap: break-word; }
    table.equip-table th { background: #D9D9D9; font-weight: bold; text-align: center; vertical-align: middle; }
    table.equip-table td.c { text-align: center; }
    table.equip-table td.r { text-align: right; }
    .doc-note-under { font-size: 10pt; font-style: italic; margin-top: 3pt; }
    table.signature-block { width: 100%; margin-top: 18pt; border-collapse: collapse; page-break-inside: avoid; }
    table.signature-block td { border: none; text-align: center; font-size: 11pt; vertical-align: top; }
    .signature-role { font-weight: bold; text-transform: uppercase; }
    .signature-hint { font-style: italic; font-size: 10pt; }
    .signature-space { height: 54pt; }
  `;
}

function buildReportDocumentHtml() {
  const rows = buildQuoteRows();
  const note = (document.getElementById("quoteNote") || {}).value || "";
  const proj = loadProjectInfo();
  const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const rowsHtml = rows.map(r => `
    <tr>
      <td class="c">${r.stt}</td><td>${esc(r.brandName)}</td><td>${esc(r.model)}</td>
      <td>${r.specLines.map(l => esc(l)).join("<br>")}</td>
      <td class="r">${fmtNum(r.qty)}</td>
      <td>${esc(r.accessories).replace(/\n/g, "<br>")}</td>
    </tr>`).join("");

  // Hai cột cân đối: trái = đơn vị / dự án / địa điểm / hạn; phải = liên hệ + điều kiện thương mại
  const leftPairs = [
    [t("companyName"), proj.companyName],
    [t("projectName"), proj.projectName],
    [t("installLocation"), proj.installLocation],
    [t("quoteDeadline"), fmtIsoDate(proj.quoteDeadline)]
  ];
  const rightPairs = [
    [t("preparedBy"), proj.preparedBy],
    [t("preparedByPhone"), proj.preparedByPhone],
    [t("preparedByEmail"), proj.preparedByEmail],
    [t("deliveryTerm"), proj.deliveryTerm],
    [t("installationIncluded"), proj.installationIncluded],
    [t("warrantyReq"), proj.warrantyReq]
  ];
  const pairRows = (pairs) => pairs.filter(p => p[1]).map(p =>
    `<tr><td><strong>${esc(p[0].replace(/\s*\((VD|e\.g\.)[^)]*\)\s*$/i, ""))}:</strong></td><td>${esc(p[1])}</td></tr>`).join("");

  return {
    rowsHtml, note: esc(note), dateBlock: vnDateBlock(new Date()),
    companyName: esc(proj.companyName),
    preparedBy: esc(proj.preparedBy),
    leftRows: pairRows(leftPairs), rightRows: pairRows(rightPairs)
  };
}

function documentBodyHtml(doc) {
  const { rowsHtml, note, dateBlock, companyName, preparedBy, leftRows, rightRows } = doc;
  const vi = LANG === "vi";
  let sec = 0;
  const h1 = (text) => `<h2 class="doc-h1">${++sec}. ${text}</h2>`;
  return `
    <table class="doc-header-row"><tr>
      <td class="letterhead-company">${companyName || "&nbsp;"}</td>
      <td class="doc-date">${dateBlock}</td>
    </tr></table>
    <h1 class="doc-title">${t("docTitle")}</h1>
    ${(leftRows || rightRows) ? `
    ${h1(t("projectInfo"))}
    <table class="info-columns"><tr>
      <td style="width:50%"><table>${leftRows}</table></td>
      <td style="width:50%"><table>${rightRows}</table></td>
    </tr></table>` : ""}
    ${h1(t("equipList"))}
    <p class="doc-caption">${vi ? "Bảng 1. Danh mục thiết bị yêu cầu báo giá" : "Table 1. Equipment requested for quotation"}</p>
    <table class="equip-table">
      <colgroup>
        <col style="width:7%"><col style="width:14%"><col style="width:12%">
        <col style="width:35%"><col style="width:9%"><col style="width:23%">
      </colgroup>
      <thead><tr><th>${vi ? "STT" : "No."}</th><th>${t("colBrand")}</th><th>${t("colModel")}</th><th>${t("fullSpecNote")}</th><th>${t("colQty")}</th><th>${t("colAccessories")}</th></tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>
    <p class="doc-note-under"><strong>${t("disclaimerLabel")}:</strong> ${t("disclaimerText")}</p>
    ${note.trim() ? `${h1(t("quoteNoteLabel").replace(/\s*\(.*\)$/, ""))}<p>${note.replace(/\n/g, "<br>")}</p>` : ""}
    <table class="signature-block"><tr>
      <td style="width:50%"></td>
      <td style="width:50%">
        <div class="signature-role">${t("signatureLabel")}</div>
        <div class="signature-hint">${vi ? "(Ký, ghi rõ họ tên)" : "(Signature and full name)"}</div>
        <div class="signature-space"></div>
        <div><strong>${preparedBy}</strong></div>
      </td>
    </tr></table>
  `;
}

function footerLeftText() {
  return LANG === "vi" ? "Phiếu yêu cầu báo giá thiết bị" : "Equipment quote request";
}

function exportQuotePrint() {
  const doc = buildReportDocumentHtml();
  const win = window.open("", "_blank");
  if (!win) return;
  const pageWord = LANG === "vi" ? "Trang" : "Page";
  const p = DOC_PAGE;
  win.document.write(`<!DOCTYPE html>
    <html lang="${LANG}"><head><meta charset="UTF-8">
    <title>${reportFileName("pdf").replace(/\.pdf$/, "")}</title>
    <style>
      @page {
        size: A4;
        margin: ${p.top} ${p.right} ${p.bottom} ${p.left};
        @bottom-left { content: "${footerLeftText()}"; font-family: ${docFontFamily()}; font-size: 9pt; }
        @bottom-right { content: "${pageWord} " counter(page) "/" counter(pages); font-family: ${docFontFamily()}; font-size: 9pt; }
      }
      html { background: #e9eaec; }
      body { margin: 0; padding: 0 0 24px; }
      .doc-toolbar {
        position: sticky; top: 0; z-index: 10;
        display: flex; gap: 8px; justify-content: flex-end;
        background: #f6f6f6; border-bottom: 1px solid #ccc;
        padding: 10px 16px;
      }
      .doc-toolbar button {
        font-family: Arial, sans-serif; font-size: 13px; padding: 8px 14px; min-height: 36px;
        border-radius: 6px; border: 1px solid #999; background: #fff; color: #000; cursor: pointer;
      }
      .doc-toolbar button.primary { background: #222; color: #fff; border-color: #222; }
      .doc-body {
        background: #fff; box-sizing: border-box;
        width: 210mm; max-width: 100%; min-height: 297mm;
        margin: 16px auto; padding: ${p.top} ${p.right} ${p.bottom} ${p.left};
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
      }
      @media (max-width: 210mm) { .doc-body { padding: 16px; min-height: 0; margin: 0; } }
      @media print {
        html { background: #fff; }
        .doc-toolbar { display: none; }
        .doc-body { width: auto; min-height: 0; margin: 0; padding: 0; box-shadow: none; }
      }
      ${documentStyleBlock()}
    </style>
    </head><body>
    <div class="doc-toolbar">
      <button class="primary" id="printAgainBtn">${t("printAgain")}</button>
      <button id="closeWinBtn">${t("closeWindow")}</button>
    </div>
    <div class="doc-body">
      ${documentBodyHtml(doc)}
    </div>
    <script>
      document.getElementById("printAgainBtn").addEventListener("click", () => window.print());
      document.getElementById("closeWinBtn").addEventListener("click", () => window.close());
      window.onload = () => window.print();
    <\/script>
    </body></html>
  `);
  win.document.close();
}

function exportQuoteWord() {
  const doc = buildReportDocumentHtml();
  const p = DOC_PAGE;
  const pageWord = LANG === "vi" ? "Trang" : "Page";
  // Word mở được HTML lưu đuôi .doc kèm namespace mso; footer dùng trường PAGE / NUMPAGES.
  // Khối footer được đẩy ra ngoài trang (margin-left rất lớn) để không hiện trong thân văn bản.
  const docHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="UTF-8">
    <title>${t("docTitle")}</title>
    <!--[if gte mso 9]>
    <xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml>
    <![endif]-->
    <style>
      @page WordSection1 {
        size: 21cm 29.7cm;
        margin: ${p.top} ${p.right} ${p.bottom} ${p.left};
        mso-header-margin: ${p.header}; mso-footer-margin: ${p.footer};
        mso-footer: f1;
        mso-page-orientation: portrait;
      }
      div.WordSection1 { page: WordSection1; }
      p.MsoFooter { font-family: ${docFontFamily()}; font-size: 9pt; margin: 0; tab-stops: right 165mm; }
      table#hdrftr { margin: 0 0 0 9in; }
      ${documentStyleBlock()}
    </style>
    </head><body>
    <div class="WordSection1">
    ${documentBodyHtml(doc)}
    </div>
    <table id="hdrftr" border="0" cellspacing="0" cellpadding="0"><tr><td>
      <div style="mso-element:footer" id="f1">
        <p class="MsoFooter">${footerLeftText()}<span style="mso-tab-count:1"></span>${pageWord} <span style="mso-field-code:' PAGE '">1</span>/<span style="mso-field-code:' NUMPAGES '">1</span></p>
      </div>
    </td></tr></table>
    </body></html>
  `;
  downloadBlob(new Blob(["﻿", docHtml], { type: "application/msword" }), reportFileName("doc"));
}

// ---------------------------------------------------------------------
// Language toggle & init
// ---------------------------------------------------------------------
function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function refreshLangUI() {
  document.documentElement.lang = LANG;
  document.title = t("appTitle");
  setText("langLabel", LANG === "vi" ? "EN" : "VI");
  setText("appSub", t("appSub"));
  setText("appTitle", t("appTitle"));
  setText("quoteLabel", t("navReport"));
  setText("navQuoteLabel", t("navReport"));
  setText("navHomeLabel", t("navHome"));
}
// Đánh dấu mục đang mở trên thanh dưới (điện thoại)
function refreshNavState(view) {
  const onReport = view && view.name === "report";
  document.getElementById("navHome").toggleAttribute("aria-current", !onReport);
  if (!onReport) document.getElementById("navHome").setAttribute("aria-current", "page");
  document.getElementById("navQuote").toggleAttribute("aria-current", onReport);
  if (onReport) document.getElementById("navQuote").setAttribute("aria-current", "page");
}

document.getElementById("quoteToggle").addEventListener("click", () => render({ name: "report" }));
document.getElementById("navQuote").addEventListener("click", () => render({ name: "report" }));
document.getElementById("navHome").addEventListener("click", () => render({ name: "home" }));
document.getElementById("homeBrand").addEventListener("click", () => render({ name: "home" }));

document.getElementById("langToggle").addEventListener("click", () => {
  LANG = LANG === "vi" ? "en" : "vi";
  localStorage.setItem(LS_KEYS.lang, LANG);
  refreshLangUI();
  render(currentView);
});

let currentView = { name: "home" };
const origRender = render;
render = function (view) { currentView = view; refreshNavState(view); origRender(view); };

uiIconsMount();
refreshLangUI();
refreshQuoteBadge();
render({ name: "home" });

document.getElementById("buildVersion").textContent = "build " + BUILD_VERSION;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(err => console.error("SW register failed", err));
  });
}

// ---------------------------------------------------------------------
// Xuất/Nhập dữ liệu (data-io.js): một phiếu dự án = danh sách thiết bị + thông tin dự án.
// Xử lý hoàn toàn trên trình duyệt, không gửi dữ liệu đi đâu.
// ---------------------------------------------------------------------
const DATA_IO = Object.assign({ app: "ECselect", schemaVersion: 1 }, DataIO.singleProjectAdapter({
  listKey: QUOTE_KEY,
  objKeys: { projectInfo: PROJECT_INFO_KEY },
  itemId: it => String(it.sourceId) + "|" + String(it.model)
}));
function dataExport() { DataIO.exportData(DATA_IO); }
function dataImport() { DataIO.importData(DATA_IO); }
