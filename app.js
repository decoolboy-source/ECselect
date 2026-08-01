const BUILD_VERSION = "2026-08-01.1";

// ---------------------------------------------------------------------
// i18n
// ---------------------------------------------------------------------
let LANG = localStorage.getItem("lang") || "vi";

const STR = {
  appTitle:      { vi: "Tra c\u1ee9u d\u00e0n ng\u01b0ng", en: "Condenser Lookup" },
  home:          { vi: "Trang ch\u1ee7", en: "Home" },
  back:          { vi: "\u2190 Quay l\u1ea1i", en: "\u2190 Back" },
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
  outOfRange:    { vi: "\u26a0\ufe0f C\u1eb7p nhi\u1ec7t \u0111\u1ed9 n\u00e0y n\u1eb1m ngo\u00e0i (ho\u1eb7c kh\u00f4ng h\u1ee3p l\u1ec7 trong) b\u1ea3ng h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh c\u1ee7a catalogue \u2014 kh\u00f4ng th\u1ec3 n\u1ed9i suy tin c\u1eady. Vui l\u00f2ng ki\u1ec3m tra l\u1ea1i \u0111i\u1ec1u ki\u1ec7n \u0111\u1ea7u v\u00e0o.", en: "\u26a0\ufe0f This temperature pair is outside (or an invalid combination within) the catalogue's correction table \u2014 cannot interpolate reliably. Please check the input conditions." },
  noModelFits:   { vi: "\u26a0\ufe0f Kh\u00f4ng c\u00f3 model \u0111\u01a1n n\u00e0o \u0111\u1ee7 c\u00f4ng su\u1ea5t \u2014 c\u1ea7n gh\u00e9p nhi\u1ec1u d\u00e0n ho\u1eb7c li\u00ean h\u1ec7 nh\u00e0 cung c\u1ea5p.", en: "\u26a0\ufe0f No single model has enough capacity \u2014 multiple units or manufacturer consultation needed." },
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
  addedToQuote:  { vi: "\u2713 \u0110\u00e3 th\u00eam v\u00e0o b\u00e1o c\u00e1o", en: "\u2713 Added to report" },
  quoteReport:   { vi: "B\u00e1o c\u00e1o thi\u1ebft b\u1ecb \u0111\u00e3 ch\u1ecdn", en: "Selected equipment report" },
  quoteEmpty:    { vi: "Ch\u01b0a c\u00f3 thi\u1ebft b\u1ecb n\u00e0o trong b\u00e1o c\u00e1o. V\u00e0o trang th\u00f4ng s\u1ed1 c\u1ee7a m\u1ed9t model v\u00e0 b\u1ea5m \u201cTh\u00eam v\u00e0o b\u00e1o c\u00e1o\u201d.", en: "No equipment in the report yet. Open a model's spec page and tap \u201cAdd to quote report\u201d." },
  colBrand:      { vi: "H\u00e3ng", en: "Brand" },
  colModel:      { vi: "Model", en: "Model" },
  colSpec:       { vi: "Th\u00f4ng s\u1ed1 ch\u00ednh", en: "Key spec" },
  colQty:        { vi: "S\u1ed1 l\u01b0\u1ee3ng", en: "Quantity" },
  removeItem:    { vi: "X\u00f3a", en: "Remove" },
  exportCsv:     { vi: "Xu\u1ea5t file CSV (Excel)", en: "Export CSV (Excel)" },
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
  signatureLabel:{ vi: "Ng\u01b0\u1eddi l\u1eadp b\u00e1o c\u00e1o", en: "Prepared by" }
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
const KIND_ICON = { coolingtower: "\ud83d\uddfc\ufe0f", condenser: "\ud83c\udf00" };
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
const QUOTE_KEY = "quoteList";

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
  const el = document.getElementById("quoteCount");
  if (el) el.textContent = String(loadQuoteList().length);
}

// Project info + commercial terms header (persisted separately from the equipment list itself)
const PROJECT_INFO_KEY = "quoteProjectInfo";
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
function quoteFullSpecLines(src, m, requirement) {
  const lines = [];
  if (requirement && Object.keys(requirement).length) {
    const reqParts = [];
    if (requirement.load != null && requirement.load !== "") reqParts.push(`${t("reqCapacity")} ${requirement.load}`);
    if (requirement.flow != null && requirement.flow !== "") reqParts.push(`${t("reqFlow")} ${requirement.flow}`);
    if (requirement.condTemp != null && requirement.condTemp !== "") reqParts.push(`${t("reqCondTemp")} ${requirement.condTemp}`);
    if (requirement.wetBulb != null && requirement.wetBulb !== "") reqParts.push(`${t("reqWetBulb")} ${requirement.wetBulb}`);
    if (reqParts.length) lines.push(`${t("reqConditionLabel")}: ${reqParts.join(", ")}`);
  }
  if (src.kind === "condenser") {
    lines.push(`${t("heatRejection")}: ${m.heatRejection} kW`);
    lines.push(`${t("fan")}: ${t("qty")} ${m.fanQty} \u00d7 ${t("airFlow")} ${m.fanAirFlow} m\u00b3/h, ${t("power")} ${m.fanPower} kW`);
    if (m.pumpFlow != null) lines.push(`${t("pump")}: ${t("qty")} ${m.pumpQty || 1} \u00d7 ${t("flow")} ${m.pumpFlow} m\u00b3/h, ${t("power")} ${m.pumpPower} kW`);
    if (m.ammonia != null) lines.push(`${t("ammonia")}: ${m.ammonia} kg`);
    if (m.pipeDN) lines.push(`DN: ${m.pipeDN}`);
    lines.push(`${t("dims")}: ${m.A}\u00d7${m.B}\u00d7${m.H} mm`);
    lines.push(`${t("shipWeight")}: ${m.shipWeight} kg`);
    lines.push(`${t("operWeight")}: ${m.operWeight} kg`);
  } else if (src.kind === "coolingtower") {
    lines.push(`${t("nominalFlow")}: ${m.flow != null ? m.flow + " m\u00b3/h" : "\u2014"}`);
    lines.push(`${t("fan")}: ${t("qty")} ${m.fanQty} \u00d7 ${t("airFlow")} ${m.fanAirFlow} m\u00b3/h, ${t("power")} ${m.fanPower} kW`);
    if (m.pumpFlow != null) lines.push(`${t("pump")}: ${t("qty")} ${m.pumpQty || 1} \u00d7 ${t("flow")} ${m.pumpFlow} m\u00b3/h, ${t("power")} ${m.pumpPower} kW`);
    if (m.pipeDN) lines.push(`DN: ${m.pipeDN}`);
    lines.push(`${t("dims")}: ${m.A}\u00d7${m.B}\u00d7${m.H} mm`);
    lines.push(`${t("shipWeight")}: ${m.shipWeight} kg`);
    lines.push(`${t("operWeight")}: ${m.operWeight} kg`);
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
      <button class="card source-card" data-brand="${key}">
        <div class="brand-badge lg" style="background:${brand.color}">${brand.badge}</div>
        <div class="card-body">
          <div class="card-title-row">
            <span class="card-title">${brand.name}</span>
          </div>
          <div class="card-sub">${sources.length} ${t("productLines")} \u00b7 ${modelCount} ${t("modelsTotal")}</div>
          <div class="card-desc">${lineNames}</div>
        </div>
      </button>
    `;
  }).join("");

  appEl.innerHTML = `
    <h2>${t("chooseBrand")}</h2>
    <div class="card-grid">${cards}</div>
    <p class="muted">${t("moreSourcesNote")}</p>
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
    <button class="card source-card" data-source="${s.id}">
      ${brandBadgeHtml(s)}
      <div class="card-body">
        <div class="card-title-row">
          <span class="card-title">${s.name[LANG]}</span>
          <span class="card-kind-icon">${KIND_ICON[s.kind] || ""}</span>
        </div>
        <div class="card-sub">${s.models.length} ${t("modelsTotal")}</div>
        <div class="card-desc">${s.shortDesc[LANG]}</div>
      </div>
    </button>
  `).join("");

  appEl.innerHTML = `
    <button class="back-btn">${t("back")}</button>
    <div class="detail-header">
      <div class="brand-badge lg" style="background:${brand.color}">${brand.badge}</div>
      <div><h2 class="no-margin">${brand.name}</h2></div>
    </div>
    <h3>${t("chooseProductLine")}</h3>
    <div class="card-grid">${cards}</div>
  `;

  appEl.querySelector(".back-btn").addEventListener("click", () => render({ name: "home" }));
  appEl.querySelectorAll(".source-card").forEach(el => {
    el.addEventListener("click", () => render({ name: "source", sourceId: el.dataset.source }));
  });
}

function renderSource(sourceId) {
  const src = DATABASE.sources.find(s => s.id === sourceId);
  if (!src) return renderHome();

  let html = `<button class="back-btn">${t("back")}</button>
    <div class="detail-header">
      ${brandBadgeHtml(src, "lg")}
      <div>
        <h2>${src.name[LANG]}</h2>
        <p class="muted no-margin">${src.manufacturer}</p>
      </div>
    </div>`;

  if (src.kind === "condenser" && src.correctionTables) {
    html += `
      <div class="panel">
        <h3>${t("selectionProcedure")}</h3>
        <ol>${src.selectionProcedure[LANG].map(l => `<li>${l}</li>`).join("")}</ol>
      </div>
      <div class="panel">
        <h3>${t("findByCap")}</h3>
        <label>${t("refrigerant")}</label>
        <select id="refrig">
          ${Object.keys(src.correctionTables).map(k => `<option value="${k}">${REFRIG_LABELS[k] || k}</option>`).join("")}
        </select>
        <label>${t("requiredHeatRej")}</label>
        <input type="number" id="reqLoad" min="0" step="1" placeholder="e.g. 940">
        <label>${t("condTemp")}</label>
        <input type="number" id="condTemp" step="0.1" placeholder="e.g. 36">
        <label>${t("wetBulbTemp")}</label>
        <input type="number" id="wetBulb" step="0.1" placeholder="e.g. 29">
        <button class="primary-btn" id="calcCondBtn">${t("calculate")}</button>
        <div id="condResult"></div>
      </div>
      <div class="panel">
        <h3>${t("allModels")}</h3>
        ${renderCondenserTable(src)}
      </div>
    `;
  } else if (src.kind === "condenser" && !src.correctionTables) {
    html += `
      <div class="panel">
        <h3>${t("selectionProcedure")}</h3>
        <ol>${src.selectionProcedure[LANG].map(l => `<li>${l}</li>`).join("")}</ol>
      </div>
      <div class="panel">
        <h3>${t("findByCap")}</h3>
        <p class="muted small">${t("noCorrectionNote")}</p>
        <label>${t("requiredHeatRej")}</label>
        <input type="number" id="reqLoadDirect" min="0" step="1" placeholder="e.g. 900">
        <button class="primary-btn" id="calcCondDirectBtn">${t("calculate")}</button>
        <div id="condDirectResult"></div>
      </div>
      <div class="panel">
        <h3>${t("allModels")}</h3>
        ${renderCondenserTable(src)}
      </div>
    `;
  } else if (src.kind === "coolingtower") {
    html += `
      <div class="panel">
        <h3>${t("designCondition")}</h3>
        <p>${src.designCondition[LANG]}</p>
      </div>
      <div class="panel">
        <h3>${t("findByCap")}</h3>
        <label>${t("requiredFlow")}</label>
        <input type="number" id="reqFlow" min="0" step="1" placeholder="e.g. 250">
        <button class="primary-btn" id="calcTowerBtn">${t("calculate")}</button>
        <div id="towerResult"></div>
      </div>
      <div class="panel">
        <h3>${t("allModels")}</h3>
        ${renderTowerTable(src)}
      </div>
      <div class="panel">
        <h4>${t("catalogueNotes")}</h4>
        <ul>${src.notes[LANG].map(l => `<li>${l}</li>`).join("")}</ul>
      </div>
    `;
  }

  html += `<p class="muted small">${t("dataSourceNote")}</p>`;
  appEl.innerHTML = html;

  appEl.querySelector(".back-btn").addEventListener("click", () => render({ name: "brand", brandId: brandKeyOf(src) }));

  if (src.kind === "condenser" && src.correctionTables) {
    document.getElementById("calcCondBtn").addEventListener("click", () => calcCondenser(src));
  } else if (src.kind === "condenser" && !src.correctionTables) {
    document.getElementById("calcCondDirectBtn").addEventListener("click", () => calcCondenserDirect(src));
  } else if (src.kind === "coolingtower") {
    document.getElementById("calcTowerBtn").addEventListener("click", () => calcTower(src));
  }

  appEl.querySelectorAll(".model-row").forEach(el => {
    el.addEventListener("click", () => render({ name: "spec", sourceId: src.id, model: el.dataset.model }));
  });
}

function renderCondenserTable(src) {
  const rows = src.models.map(m => `
    <tr class="model-row" data-model="${m.model}">
      <td>${m.model}</td><td>${m.heatRejection}</td><td>${m.ammonia != null ? m.ammonia : "\u2014"}</td>
      <td>${m.A}\u00d7${m.B}\u00d7${m.H}</td><td>${m.operWeight}</td>
    </tr>`).join("");
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>${t("model")}</th><th>${t("heatRejection")}</th><th>NH3 (kg)</th><th>A\u00d7B\u00d7H (mm)</th><th>${t("operWeight")}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
}

function renderTowerTable(src) {
  const rows = src.models.map(m => `
    <tr class="model-row" data-model="${m.model}">
      <td>${m.model}</td><td>${m.flow != null ? m.flow : "\u2014"}</td>
      <td>${m.A}\u00d7${m.B}\u00d7${m.H}</td><td>${m.operWeight}</td>
    </tr>`).join("");
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>${t("model")}</th><th>${t("nominalFlow")}</th><th>${t("dims")}</th><th>${t("operWeight")}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
}

function calcCondenser(src) {
  const refrig = document.getElementById("refrig").value;
  const load = parseFloat(document.getElementById("reqLoad").value);
  const condT = parseFloat(document.getElementById("condTemp").value);
  const wb = parseFloat(document.getElementById("wetBulb").value);
  const resEl = document.getElementById("condResult");

  if (!load || load <= 0 || isNaN(condT) || isNaN(wb)) { resEl.innerHTML = ""; return; }

  const table = src.correctionTables[refrig];
  const interp = interpolate2D(table, condT, wb);

  if (!interp) {
    resEl.innerHTML = `<div class="result-box warn">${t("outOfRange")}</div>`;
    return;
  }

  const factor = interp.value;
  const corrected = load * factor;
  const sorted = [...src.models].sort((a, b) => a.heatRejection - b.heatRejection);
  const fit = sorted.find(m => m.heatRejection >= corrected);

  const c = interp.corners;
  const gridNote = `${t("usedGridPoints")}: (${c.ct0}\u00b0C,${c.wb0}\u00b0C)=${c.v00} \u00b7 (${c.ct0}\u00b0C,${c.wb1}\u00b0C)=${c.v01} \u00b7 (${c.ct1}\u00b0C,${c.wb0}\u00b0C)=${c.v10} \u00b7 (${c.ct1}\u00b0C,${c.wb1}\u00b0C)=${c.v11}`;

  let modelHtml;
  if (!fit) {
    modelHtml = `<div class="result-box warn">${t("noModelFits")}</div>`;
  } else {
    modelHtml = `
      <div class="result-box ok">
        <div><strong>${t("selectedModel")}:</strong> ${fit.model}</div>
        <div>${t("heatRejection")}: ${fit.heatRejection} kW</div>
        <button class="link-btn" id="viewSpecBtn">${t("viewFullSpec")} \u2192</button>
      </div>`;
  }

  resEl.innerHTML = `
    <div class="result-box info">
      <div>${t("correctionFactor")}: <strong>${factor.toFixed(3)}</strong></div>
      <div class="tiny muted">${gridNote}</div>
      <div>${t("correctedLoad")}: <strong>${corrected.toFixed(1)} kW</strong> (${load} \u00d7 ${factor.toFixed(3)})</div>
    </div>
    ${modelHtml}
  `;
  const btn = document.getElementById("viewSpecBtn");
  if (btn) btn.addEventListener("click", () => render({ name: "spec", sourceId: src.id, model: fit.model, reqInfo: { load, condTemp: condT, wetBulb: wb } }));
}

function calcCondenserDirect(src) {
  const load = parseFloat(document.getElementById("reqLoadDirect").value);
  const resEl = document.getElementById("condDirectResult");
  if (!load || load <= 0) { resEl.innerHTML = ""; return; }

  const sorted = [...src.models].sort((a, b) => a.heatRejection - b.heatRejection);
  const fit = sorted.find(m => m.heatRejection >= load);

  if (!fit) {
    resEl.innerHTML = `<div class="result-box warn">${t("noModelFits")}</div>`;
    return;
  }
  resEl.innerHTML = `
    <div class="result-box ok">
      <div><strong>${t("selectedModel")}:</strong> ${fit.model}</div>
      <div>${t("heatRejection")}: ${fit.heatRejection} kW</div>
      <button class="link-btn" id="viewSpecBtn">${t("viewFullSpec")} \u2192</button>
    </div>`;
  document.getElementById("viewSpecBtn").addEventListener("click", () =>
    render({ name: "spec", sourceId: src.id, model: fit.model, reqInfo: { load } }));
}

function calcTower(src) {
  const req = parseFloat(document.getElementById("reqFlow").value);
  const resEl = document.getElementById("towerResult");
  if (!req || req <= 0) { resEl.innerHTML = ""; return; }

  const sorted = [...src.models].sort((a, b) => a.flow - b.flow);
  const fit = sorted.find(m => m.flow >= req);

  if (!fit) {
    resEl.innerHTML = `<div class="result-box warn">${t("noModelFits")}</div>`;
    return;
  }
  resEl.innerHTML = `
    <div class="result-box ok">
      <div><strong>${t("selectedModel")}:</strong> ${fit.model}</div>
      <div>${t("nominalFlow")}: ${fit.flow} m\u00b3/h</div>
      <div>${t("dims")}: ${fit.A}\u00d7${fit.B}\u00d7${fit.H} mm</div>
      <div>${t("operWeight")}: ${fit.operWeight} kg</div>
      <button class="link-btn" id="viewSpecBtn">${t("viewFullSpec")} \u2192</button>
    </div>`;
  document.getElementById("viewSpecBtn").addEventListener("click", () =>
    render({ name: "spec", sourceId: src.id, model: fit.model, reqInfo: { flow: req } }));
}

function specRow(label, value) {
  return `<div class="spec-row"><div class="spec-label">${label}</div><div class="spec-value">${value}</div></div>`;
}
function specGrid(rowsHtml) {
  return `<div class="spec-grid">${rowsHtml.join("")}</div>`;
}

function renderSpec(sourceId, modelName, reqInfo) {
  const src = DATABASE.sources.find(s => s.id === sourceId);
  const m = src.models.find(mm => mm.model === modelName);
  const req = reqInfo || {};
  let html = `<button class="back-btn">${t("back")}</button>
    <div class="detail-header">
      ${brandBadgeHtml(src, "lg")}
      <div>
        <h2 class="no-margin">${m.model}</h2>
        <p class="muted no-margin">${src.name[LANG]}</p>
      </div>
    </div>`;

  if (src.kind === "condenser") {
    const rows = [
      specRow(t("heatRejection"), `${m.heatRejection} kW`),
      specRow(t("fan"), `${t("qty")} ${m.fanQty} \u00d7 ${t("airFlow")} ${m.fanAirFlow} m\u00b3/h, ${t("power")} ${m.fanPower} kW`)
    ];
    if (m.pumpFlow != null) rows.push(specRow(t("pump"), `${t("qty")} ${m.pumpQty || 1} \u00d7 ${t("flow")} ${m.pumpFlow} m\u00b3/h, ${t("power")} ${m.pumpPower} kW`));
    if (m.ammonia != null) rows.push(specRow(t("ammonia"), `${m.ammonia} kg`));
    if (m.pipeDN) rows.push(specRow("DN", m.pipeDN));
    rows.push(specRow(t("dims"), `${m.A}\u00d7${m.B}\u00d7${m.H} mm`));
    rows.push(specRow(t("shipWeight"), `${m.shipWeight} kg`));
    rows.push(specRow(t("operWeight"), `${m.operWeight} kg`));
    html += `<div class="panel nameplate">
      <span class="rivet tl"></span><span class="rivet tr"></span><span class="rivet bl"></span><span class="rivet br"></span>
      ${specGrid(rows)}
    </div>`;
  } else if (src.kind === "coolingtower") {
    const towerRows = [
      specRow(t("nominalFlow"), m.flow != null ? `${m.flow} m\u00b3/h` : "\u2014"),
      specRow(t("fan"), `${t("qty")} ${m.fanQty} \u00d7 ${t("airFlow")} ${m.fanAirFlow} m\u00b3/h, ${t("power")} ${m.fanPower} kW`)
    ];
    if (m.pumpFlow != null) towerRows.push(specRow(t("pump"), `${t("qty")} ${m.pumpQty || 1} \u00d7 ${t("flow")} ${m.pumpFlow} m\u00b3/h, ${t("power")} ${m.pumpPower} kW`));
    if (m.pipeDN) towerRows.push(specRow("DN", m.pipeDN));
    towerRows.push(specRow(t("dims"), `${m.A}\u00d7${m.B}\u00d7${m.H} mm`));
    towerRows.push(specRow(t("shipWeight"), `${m.shipWeight} kg`));
    towerRows.push(specRow(t("operWeight"), `${m.operWeight} kg`));
    html += `<div class="panel nameplate">
      <span class="rivet tl"></span><span class="rivet tr"></span><span class="rivet bl"></span><span class="rivet br"></span>
      ${specGrid(towerRows)}
      <h4>${t("designCondition")}</h4>
      <p>${src.designCondition[LANG]}</p>
    </div>`;
  }

  const reqInputsHtml = src.kind === "condenser"
    ? `
      <label>${t("reqCapacity")}</label>
      <input type="number" step="any" id="reqCapacityIn" value="${req.load != null ? req.load : ""}">
      <label>${t("reqCondTemp")}</label>
      <input type="number" step="any" id="reqCondTempIn" value="${req.condTemp != null ? req.condTemp : ""}">
      <label>${t("reqWetBulb")}</label>
      <input type="number" step="any" id="reqWetBulbIn" value="${req.wetBulb != null ? req.wetBulb : ""}">
    `
    : `
      <label>${t("reqFlow")}</label>
      <input type="number" step="any" id="reqFlowIn" value="${req.flow != null ? req.flow : ""}">
    `;

  html += `
    <div class="panel">
      <h3>${t("addToQuote")}</h3>
      <div class="qty-row">
        <label>${t("qty")}</label>
        <input type="number" id="quoteQty" min="1" step="1" value="1">
        <button class="primary-btn" id="addQuoteBtn">${t("addToQuote")}</button>
      </div>
      <h4>${t("reqConditionLabel")}</h4>
      <p class="muted small">${t("reqOptionalNote")}</p>
      ${reqInputsHtml}
      <div id="addQuoteMsg"></div>
    </div>
  `;

  appEl.innerHTML = html;
  appEl.querySelector(".back-btn").addEventListener("click", () => render({ name: "source", sourceId }));
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
    document.getElementById("addQuoteMsg").innerHTML = `<div class="result-box ok">${t("addedToQuote")}</div>`;
  });
}

// ---------------------------------------------------------------------
// Quote report view
// ---------------------------------------------------------------------
function renderReport() {
  const list = loadQuoteList();
  const proj = loadProjectInfo();
  const esc = (s) => String(s || "").replace(/"/g, "&quot;");
  let html = `<button class="back-btn">${t("back")}</button>
    <h2>${t("quoteReport")}</h2>`;

  html += `
    <div class="panel">
      <h3>${t("projectInfo")}</h3>
      <label>${t("companyName")}</label>
      <input type="text" id="projCompanyName" value="${esc(proj.companyName)}">
      <label>${t("projectName")}</label>
      <input type="text" id="projName" value="${esc(proj.projectName)}">
      <label>${t("preparedBy")}</label>
      <input type="text" id="projPreparedBy" value="${esc(proj.preparedBy)}">
      <label>${t("preparedByPhone")}</label>
      <input type="text" id="projPreparedByPhone" value="${esc(proj.preparedByPhone)}">
      <label>${t("preparedByEmail")}</label>
      <input type="text" id="projPreparedByEmail" value="${esc(proj.preparedByEmail)}">
      <label>${t("installLocation")}</label>
      <input type="text" id="projLocation" value="${esc(proj.installLocation)}">
      <label>${t("quoteDeadline")}</label>
      <input type="date" id="projDeadline" value="${proj.quoteDeadline || ""}">
    </div>
    <div class="panel">
      <h3>${t("commercialTerms")}</h3>
      <label>${t("deliveryTerm")}</label>
      <input type="text" id="projDeliveryTerm" value="${esc(proj.deliveryTerm)}">
      <label>${t("installationIncluded")}</label>
      <input type="text" id="projInstallIncluded" value="${esc(proj.installationIncluded)}">
      <label>${t("warrantyReq")}</label>
      <input type="text" id="projWarranty" value="${esc(proj.warrantyReq)}">
    </div>
  `;

  if (list.length === 0) {
    html += `<div class="panel empty-note">${t("quoteEmpty")}</div>`;
    appEl.innerHTML = html;
    appEl.querySelector(".back-btn").addEventListener("click", () => render({ name: "home" }));
    wireProjectInfoInputs();
    return;
  }

  const rows = list.map((it, idx) => {
    const src = DATABASE.sources.find(s => s.id === it.sourceId);
    const m = src ? src.models.find(mm => mm.model === it.model) : null;
    const brandName = src ? (BRANDS[brandKeyOf(src)] || {}).name || brandKeyOf(src) : it.sourceId;
    const specLines = (src && m) ? quoteFullSpecLines(src, m, it.requirement) : ["\u2014"];
    const specHtml = specLines.map(l => `<div>${l}</div>`).join("");
    return `
      <tr>
        <td>${idx + 1}</td>
        <td>${brandName}</td>
        <td>${it.model}</td>
        <td>${specHtml}</td>
        <td><input type="number" min="1" step="1" class="qty-input" data-idx="${idx}" value="${it.qty}"></td>
        <td><textarea rows="2" class="acc-input" data-idx="${idx}" placeholder="${t("accessoriesPlaceholder")}">${esc(it.accessories)}</textarea></td>
        <td><button class="remove-btn" data-idx="${idx}">${t("removeItem")}</button></td>
      </tr>`;
  }).join("");

  html += `
    <div class="panel">
      <div class="quote-table-wrap">
        <table>
          <thead><tr><th>#</th><th>${t("colBrand")}</th><th>${t("colModel")}</th><th>${t("fullSpecNote")}</th><th>${t("colQty")}</th><th>${t("colAccessories")}</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
    <div class="panel">
      <label>${t("quoteNoteLabel")}</label>
      <textarea id="quoteNote" rows="3" style="width:100%"></textarea>
    </div>
    <div class="panel" style="display:flex; gap:10px; flex-wrap:wrap;">
      <button class="primary-btn" id="exportCsvBtn">${t("exportCsv")}</button>
      <button class="primary-btn" id="exportPrintBtn">${t("exportPrint")}</button>
      <button class="primary-btn" id="exportWordBtn">${t("exportWord")}</button>
      <button class="remove-btn" id="clearAllBtn">${t("clearAll")}</button>
    </div>
  `;

  appEl.innerHTML = html;
  appEl.querySelector(".back-btn").addEventListener("click", () => render({ name: "home" }));
  wireProjectInfoInputs();

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

function exportQuoteCsv() {
  const rows = buildQuoteRows();
  const note = (document.getElementById("quoteNote") || {}).value || "";
  const proj = loadProjectInfo();
  const dateStr = new Date().toISOString().slice(0, 10);
  const lines = [];
  lines.push(csvEscape(t("quoteReport")));
  lines.push(csvEscape(t("reportDate") + ": " + dateStr));
  projectAndTermsLines(proj).forEach(l => lines.push(csvEscape(l)));
  lines.push("");
  const header = ["STT", t("colBrand"), t("colModel"), t("fullSpecNote"), t("colQty"), t("colAccessories")];
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
  const csvContent = "\uFEFF" + lines.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bao-cao-thiet-bi-${dateStr}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function vnDateBlock(d) {
  if (LANG !== "vi") return d.toLocaleDateString("en-US");
  return `ng\u00e0y ${d.getDate()} th\u00e1ng ${d.getMonth() + 1} n\u0103m ${d.getFullYear()}`;
}

// Shared print-quality CSS: Times New Roman, standard body/table/title sizes and A4
// margins following the common Vietnamese administrative-document convention (Thong tu
// 01/2011/TT-BNV) -- there isn't a single numbered TCVN standard for RFQ-style document
// layout specifically, so this follows that widely-used convention rather than a
// numbered TCVN.
function documentStyleBlock(pageMarginCss) {
  return `
    ${pageMarginCss || ""}
    body { font-family: 'Times New Roman', Times, serif; font-size: 13pt; color: #000; line-height: 1.4; }
    .letterhead-company { font-size: 13pt; font-weight: bold; text-transform: uppercase; }
    h1.doc-title { font-size: 15pt; font-weight: bold; text-align: center; text-transform: uppercase; margin: 18pt 0 6pt; letter-spacing: 0.5px; }
    .doc-date { text-align: right; font-size: 12pt; font-style: italic; margin-bottom: 10pt; }
    table.info-table { border-collapse: collapse; margin-bottom: 6pt; }
    table.info-table td { border: none; padding: 2pt 12pt 2pt 0; font-size: 13pt; vertical-align: top; }
    table.equip-table { border-collapse: collapse; width: 100%; margin-top: 10pt; }
    table.equip-table th, table.equip-table td { border: 1px solid #000; padding: 6pt; font-size: 12pt; text-align: left; vertical-align: top; }
    table.equip-table th { background: #e6e6e6; font-weight: bold; text-align: center; }
    .note-block { margin-top: 14pt; font-size: 12.5pt; }
    .disclaimer-block { margin-top: 16pt; font-size: 10.5pt; font-style: italic; color: #333; border-top: 1px solid #999; padding-top: 6pt; }
    table.signature-block { width: 100%; margin-top: 34pt; border-collapse: collapse; }
    table.signature-block td { border: none; text-align: center; font-size: 13pt; vertical-align: top; }
    .signature-role { font-weight: bold; text-transform: uppercase; }
    .signature-space { height: 56pt; }
  `;
}

function buildReportDocumentHtml() {
  const rows = buildQuoteRows();
  const note = (document.getElementById("quoteNote") || {}).value || "";
  const proj = loadProjectInfo();
  const now = new Date();
  const dateStr = now.toLocaleDateString(LANG === "vi" ? "vi-VN" : "en-US");
  const dateBlock = vnDateBlock(now);
  const esc = (s) => String(s || "").replace(/</g, "&lt;");
  const rowsHtml = rows.map(r => `
    <tr>
      <td>${r.stt}</td><td>${r.brandName}</td><td>${r.model}</td>
      <td>${r.specLines.map(l => esc(l)).join("<br>")}</td>
      <td style="text-align:center">${r.qty}</td>
      <td>${esc(r.accessories).replace(/\n/g, "<br>")}</td>
    </tr>`).join("");
  const termLines = projectAndTermsLines(proj);
  const infoRows = termLines.map(l => {
    const idx = l.indexOf(":");
    const label = idx >= 0 ? l.slice(0, idx) : l;
    const val = idx >= 0 ? l.slice(idx + 1).trim() : "";
    return `<tr><td><strong>${esc(label)}</strong></td><td>${esc(val)}</td></tr>`;
  }).join("");
  return { rowsHtml, infoRows, note, dateStr, dateBlock, companyName: esc(proj.companyName), preparedBy: esc(proj.preparedBy) };
}

function exportQuotePrint() {
  const { rowsHtml, infoRows, note, dateBlock, companyName, preparedBy } = buildReportDocumentHtml();
  const esc = (s) => String(s || "").replace(/</g, "&lt;");
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`
    <html><head><title>${t("quoteReport")}</title>
    <meta charset="UTF-8">
    <style>
      @page { size: A4; margin: 20mm 20mm 20mm 30mm; }
      body { padding: 0; }
      ${documentStyleBlock()}
    </style>
    </head><body>
    ${companyName ? `<div class="letterhead-company">${companyName}</div>` : ""}
    <h1 class="doc-title">${t("docTitle")}</h1>
    <div class="doc-date">${dateBlock}</div>
    ${infoRows ? `<table class="info-table"><tbody>${infoRows}</tbody></table>` : ""}
    <table class="equip-table">
      <thead><tr><th>#</th><th>${t("colBrand")}</th><th>${t("colModel")}</th><th>${t("fullSpecNote")}</th><th>${t("colQty")}</th><th>${t("colAccessories")}</th></tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>
    ${note.trim() ? `<div class="note-block"><strong>${t("quoteNoteLabel")}:</strong><br>${esc(note)}</div>` : ""}
    <div class="disclaimer-block"><strong>${t("disclaimerLabel")}:</strong> ${esc(t("disclaimerText"))}</div>
    <table class="signature-block"><tr>
      <td style="width:50%"></td>
      <td style="width:50%">
        <div class="signature-role">${t("signatureLabel")}</div>
        <div class="signature-space"></div>
        <div>${preparedBy}</div>
      </td>
    </tr></table>
    <script>window.onload = () => window.print();<\/script>
    </body></html>
  `);
  win.document.close();
}

function exportQuoteWord() {
  const { rowsHtml, infoRows, note, dateBlock, companyName, preparedBy } = buildReportDocumentHtml();
  const esc = (s) => String(s || "").replace(/</g, "&lt;");
  // Word recognizes HTML saved with a .doc extension and the mso namespaces below;
  // this is a plain client-side download (no server, no external library needed).
  // Real .docx (OOXML) generation would need an external JS library loaded over the
  // network, which would break this app's fully-offline PWA design -- flagged to user.
  const docHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="UTF-8">
    <title>${t("quoteReport")}</title>
    <!--[if gte mso 9]>
    <xml><w:WordDocument><w:View>Print</w:View></w:WordDocument></xml>
    <![endif]-->
    <style>
      @page WordSection1 { size: 21cm 29.7cm; margin: 2.0cm 2.0cm 2.0cm 3.0cm; mso-page-orientation: portrait; }
      div.WordSection1 { page: WordSection1; }
      ${documentStyleBlock()}
    </style>
    </head><body>
    <div class="WordSection1">
    ${companyName ? `<div class="letterhead-company">${companyName}</div>` : ""}
    <h1 class="doc-title">${t("docTitle")}</h1>
    <div class="doc-date">${dateBlock}</div>
    ${infoRows ? `<table class="info-table"><tbody>${infoRows}</tbody></table>` : ""}
    <table class="equip-table">
      <thead><tr><th>#</th><th>${t("colBrand")}</th><th>${t("colModel")}</th><th>${t("fullSpecNote")}</th><th>${t("colQty")}</th><th>${t("colAccessories")}</th></tr></thead>
      <tbody>${rowsHtml}</tbody>
    </table>
    ${note.trim() ? `<div class="note-block"><strong>${t("quoteNoteLabel")}:</strong><br>${esc(note)}</div>` : ""}
    <div class="disclaimer-block"><strong>${t("disclaimerLabel")}:</strong> ${esc(t("disclaimerText"))}</div>
    <table class="signature-block"><tr>
      <td style="width:50%"></td>
      <td style="width:50%">
        <div class="signature-role">${t("signatureLabel")}</div>
        <div class="signature-space"></div>
        <div>${preparedBy}</div>
      </td>
    </tr></table>
    </div>
    </body></html>
  `;
  const blob = new Blob(["\ufeff", docHtml], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const fileDateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `bao-cao-thiet-bi-${fileDateStr}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------------------------------------------------------------------
// Language toggle & init
// ---------------------------------------------------------------------
function refreshLangUI() {
  document.getElementById("langToggle").textContent = LANG === "vi" ? "EN" : "VI";
  document.getElementById("appTitle").textContent = t("appTitle");
}

document.getElementById("quoteToggle").addEventListener("click", () => render({ name: "report" }));

document.getElementById("langToggle").addEventListener("click", () => {
  LANG = LANG === "vi" ? "en" : "vi";
  localStorage.setItem("lang", LANG);
  refreshLangUI();
  render(currentView);
});

let currentView = { name: "home" };
const origRender = render;
render = function (view) { currentView = view; origRender(view); };

refreshLangUI();
refreshQuoteBadge();
render({ name: "home" });

document.getElementById("buildVersion").textContent = "build " + BUILD_VERSION;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => console.error("SW register failed", err));
  });
}
