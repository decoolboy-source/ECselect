// ============================================================================
// EQUIPMENT DATABASE
// Extracted from supplier catalogues. Each "source" is one catalogue/product
// line. Add new sources to this array to extend the app later.
// ============================================================================

// Heat-emission correction tables shared by the plate (WXRB) and coil
// (WXRD) evaporative condenser lines — confirmed identical across both
// catalogue sections (Graph 2/3 for WXRB and Graph 5/6 for WXRD).
const SHARED_CORRECTION_R717 = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
  rows: [
    { condTemp: 29, values: [0.72,0.78,0.86,0.96,1.01,1.09,1.18,1.30,1.43,1.60,1.84,2.16,2.66,null,null,null,null,null,null,null] },
    { condTemp: 30, values: [0.68,0.73,0.81,0.88,0.94,1.00,1.07,1.15,1.27,1.40,1.59,1.79,2.13,null,null,null,null,null,null,null] },
    { condTemp: 31, values: [0.64,0.68,0.74,0.82,0.86,0.91,0.97,1.04,1.12,1.22,1.36,1.52,1.74,2.06,null,null,null,null,null,null] },
    { condTemp: 32, values: [0.61,0.65,0.69,0.74,0.80,0.84,0.89,0.95,1.02,1.10,1.20,1.34,1.49,1.70,2.02,null,null,null,null,null] },
    { condTemp: 33, values: [0.57,0.61,0.65,0.70,0.73,0.78,0.82,0.87,0.92,0.99,1.07,1.16,1.29,1.45,1.66,1.97,null,null,null,null] },
    { condTemp: 34, values: [0.55,0.58,0.62,0.66,0.69,0.72,0.76,0.80,0.86,0.90,0.96,1.04,1.14,1.27,1.42,1.63,null,null,null,null] },
    { condTemp: 35, values: [0.52,0.54,0.58,0.62,0.64,0.67,0.70,0.73,0.78,0.83,0.88,0.94,1.02,1.11,1.23,1.37,1.59,1.86,2.16,2.49] },
    { condTemp: 36, values: [0.50,0.52,0.55,0.59,0.61,0.63,0.66,0.69,0.72,0.75,0.81,0.86,0.92,1.00,1.09,1.22,1.35,1.54,1.76,2.05] },
    { condTemp: 37, values: [0.47,0.49,0.52,0.55,0.57,0.59,0.61,0.64,0.67,0.70,0.73,0.79,0.84,0.90,0.97,1.06,1.21,1.32,1.52,1.71] },
    { condTemp: 38, values: [0.45,0.47,0.49,0.53,0.55,0.56,0.58,0.60,0.62,0.65,0.68,0.72,0.76,0.82,0.88,0.96,1.04,1.19,1.35,1.50] },
    { condTemp: 39, values: [0.43,0.45,0.47,0.50,0.52,0.53,0.55,0.58,0.60,0.62,0.66,0.69,0.73,0.78,0.85,0.93,1.02,1.18,1.28,null] },
    { condTemp: 40, values: [0.42,0.43,0.45,0.48,0.49,0.50,0.52,0.53,0.55,0.58,0.60,0.62,0.66,0.69,0.74,0.80,0.86,0.95,1.02,1.17] },
    { condTemp: 41, values: [0.40,0.41,0.43,0.45,0.46,0.47,0.49,0.50,0.51,0.54,0.56,0.58,0.61,0.64,0.67,0.71,0.76,0.83,0.92,1.01] },
    { condTemp: 42, values: [0.39,0.40,0.41,0.43,0.44,0.45,0.47,0.48,0.49,0.51,0.53,0.55,0.57,0.60,0.62,0.66,0.70,0.76,0.82,0.91] },
    { condTemp: 43, values: [0.37,0.38,0.39,0.41,0.42,0.43,0.44,0.45,0.46,0.48,0.50,0.51,0.53,0.55,0.58,0.61,0.65,0.69,0.72,0.80] },
    { condTemp: 44, values: [0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.44,0.46,0.47,0.49,0.51,0.52,0.54,0.57,0.60,0.64,0.68,0.71] },
    { condTemp: 45, values: [0.34,0.35,0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.44,0.46,0.47,0.49,0.51,0.53,0.56,0.59,0.63,0.67] }
  ]
};

// Cross-checked against a second, independent scan of the same graph
// (Graph 6, WXRD page) — values matched exactly, no discrepancies found.
const SHARED_CORRECTION_R404A = {
  wetBulb: [10,12,14,16,18,19,20,21,22,23,24,25,26,28,30,32],
  rows: [
    { condTemp: 29, values: [0.86,0.94,1.03,1.15,1.37,1.43,1.55,1.68,1.92,2.10,2.25,3.10,null,null,null,null] },
    { condTemp: 31, values: [0.77,0.83,0.90,0.99,1.10,1.17,1.24,1.34,1.47,1.62,1.83,2.20,2.48,null,null,null] },
    { condTemp: 33, values: [0.69,0.73,0.79,0.86,0.94,1.00,1.02,1.10,1.20,1.28,1.40,1.56,1.75,2.38,null,null] },
    { condTemp: 35, values: [0.62,0.66,0.70,0.76,0.83,0.90,0.93,1.00,1.07,1.18,1.25,1.38,1.68,2.10,null,null] },
    { condTemp: 37, values: [0.57,0.60,0.63,0.67,0.72,0.76,0.78,0.82,0.85,0.90,0.96,1.02,1.10,1.30,1.56,1.89] },
    { condTemp: 39, values: [0.55,0.57,0.59,0.62,0.65,0.68,0.70,0.75,0.79,0.85,0.88,0.95,1.10,1.26,1.46,null] },
    { condTemp: 41, values: [0.48,0.49,0.52,0.54,0.57,0.61,0.63,0.66,0.68,0.71,0.75,0.78,0.85,0.95,1.10,1.19] },
    { condTemp: 43, values: [0.44,0.46,0.48,0.50,0.52,0.54,0.55,0.57,0.59,0.61,0.63,0.66,0.68,0.75,0.78,0.86] },
    { condTemp: 45, values: [0.41,0.42,0.44,0.46,0.48,0.49,0.50,0.52,0.53,0.55,0.56,0.58,0.61,0.63,0.66,0.74] }
  ]
};

// Heng An's own heat-rejection correction tables (ZHX/ZNX evaporative
// condensers share these). Transcribed from the catalogue; a few cells
// in the source scan were visually inconsistent (duplicated digits) —
// flagged to the user, cross-check against the original PDF for
// mission-critical sizing.
const HENGAN_CORRECTION_R717 = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  rows: [
    { condTemp: 29, values: [0.72,0.78,0.86,0.96,1.01,1.09,1.18,1.30,1.43,1.60,1.84,2.16,2.66,null,null,null,null,null,null] },
    { condTemp: 30, values: [0.68,0.73,0.81,0.88,0.94,1.00,1.07,1.15,1.27,1.40,1.59,1.79,2.13,null,null,null,null,null,null] },
    { condTemp: 31, values: [0.64,0.68,0.74,0.82,0.86,0.91,0.97,1.04,1.12,1.22,1.36,1.52,1.74,2.06,null,null,null,null,null] },
    { condTemp: 32, values: [0.61,0.65,0.69,0.74,0.80,0.84,0.89,0.95,1.02,1.10,1.20,1.34,1.49,1.70,2.02,null,null,null,null] },
    { condTemp: 33, values: [0.57,0.61,0.65,0.70,0.73,0.78,0.82,0.87,0.92,0.99,1.07,1.16,1.29,1.45,1.66,1.96,null,null,null] },
    { condTemp: 34, values: [0.55,0.58,0.62,0.66,0.69,0.72,0.76,0.80,0.86,0.90,0.96,1.04,1.14,1.27,1.42,1.63,null,null,null] },
    { condTemp: 35, values: [0.52,0.54,0.58,0.62,0.64,0.67,0.70,0.73,0.78,0.83,0.88,0.94,1.02,1.11,1.23,1.37,1.59,1.86,2.16] },
    { condTemp: 36, values: [0.50,0.52,0.55,0.59,0.61,0.63,0.66,0.69,0.72,0.75,0.81,0.86,0.92,1.00,1.09,1.22,1.35,1.54,1.76] },
    { condTemp: 37, values: [0.47,0.49,0.52,0.55,0.57,0.59,0.61,0.64,0.67,0.70,0.73,0.79,0.84,0.90,0.97,1.06,1.21,1.32,1.52] },
    { condTemp: 38, values: [0.45,0.47,0.49,0.53,0.55,0.56,0.58,0.60,0.62,0.65,0.68,0.72,0.76,0.82,0.88,0.96,1.04,1.19,1.35] },
    { condTemp: 39, values: [0.43,0.45,0.47,0.50,0.52,0.53,0.54,0.56,0.58,0.61,0.63,0.67,0.70,0.74,0.80,0.86,0.95,1.02,1.18] },
    { condTemp: 40, values: [0.42,0.43,0.45,0.48,0.49,0.50,0.52,0.53,0.55,0.58,0.60,0.62,0.66,0.69,0.73,0.78,0.85,0.93,1.01] },
    { condTemp: 41, values: [0.40,0.41,0.43,0.45,0.46,0.47,0.49,0.50,0.52,0.54,0.58,0.58,0.61,0.64,0.67,0.71,0.76,0.83,0.92] },
    { condTemp: 42, values: [0.39,0.40,0.41,0.43,0.44,0.45,0.47,0.48,0.49,0.51,0.55,0.55,0.57,0.60,0.62,0.66,0.70,0.74,0.82] },
    { condTemp: 43, values: [0.37,0.38,0.39,0.41,0.42,0.43,0.44,0.45,0.46,0.48,0.51,0.51,0.53,0.55,0.58,0.61,0.65,0.69,0.72] },
    { condTemp: 44, values: [0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.44,0.46,0.49,0.49,0.50,0.52,0.54,0.57,0.60,0.64,0.68] },
    { condTemp: 45, values: [0.34,0.35,0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.46,0.46,0.47,0.49,0.51,0.53,0.56,0.59,0.63] }
  ]
};
const HENGAN_CORRECTION_R22_R134A = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 29, values: [0.89,0.97,1.07,1.19,1.30,1.35,1.46,1.61,1.77,1.98,2.28,2.68,3.30,null,null,null,null,null] },
    { condTemp: 32, values: [0.76,0.81,0.86,0.92,0.99,1.04,1.10,1.18,1.26,1.36,1.49,1.66,1.85,2.11,2.50,null,null,null] },
    { condTemp: 35, values: [0.64,0.66,0.72,0.77,0.79,0.83,0.87,0.91,0.97,1.03,1.09,1.17,1.26,1.38,1.53,1.70,1.97,2.29] },
    { condTemp: 38, values: [0.56,0.58,0.62,0.66,0.68,0.69,0.72,0.74,0.77,0.81,0.84,0.89,0.94,1.02,1.09,1.19,1.29,1.48] },
    { condTemp: 40, values: [0.52,0.53,0.56,0.60,0.61,0.62,0.64,0.66,0.68,0.72,0.74,0.77,0.82,0.86,0.91,0.97,1.05,1.15] },
    { condTemp: 41, values: [0.50,0.51,0.53,0.56,0.57,0.58,0.61,0.62,0.64,0.67,0.69,0.72,0.76,0.79,0.83,0.88,0.94,1.03] },
    { condTemp: 43, values: [0.46,0.47,0.48,0.51,0.52,0.53,0.55,0.56,0.57,0.60,0.62,0.63,0.66,0.68,0.72,0.76,0.81,0.86] }
  ]
};

// OceanBlue's own heat-rejection correction tables (ECB/ECE/ECBP share
// these). The worked example in the catalogue (R717, 335+90kW x2 sets,
// 35C/28C -> factor 1.37 -> 1164.5kW -> ECB1200) reproduces exactly
// against this table.
const OCEANBLUE_CORRECTION_R717 = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 29, values: [0.72,0.78,0.86,0.96,1.01,1.09,1.18,1.30,1.43,1.60,1.84,2.16,2.66,null,null,null,null,null] },
    { condTemp: 32, values: [0.61,0.65,0.69,0.74,0.80,0.84,0.89,0.95,1.02,1.10,1.20,1.34,1.49,1.70,2.02,null,null,null] },
    { condTemp: 35, values: [0.52,0.54,0.58,0.62,0.64,0.67,0.70,0.73,0.78,0.83,0.88,0.94,1.02,1.11,1.23,1.37,1.59,1.85] },
    { condTemp: 38, values: [0.45,0.47,0.50,0.53,0.55,0.56,0.58,0.60,0.62,0.65,0.68,0.72,0.76,0.82,0.88,0.96,1.04,1.19] },
    { condTemp: 40, values: [0.42,0.43,0.45,0.48,0.49,0.50,0.52,0.53,0.55,0.58,0.60,0.62,0.66,0.69,0.73,0.78,0.85,0.93] },
    { condTemp: 41, values: [0.40,0.41,0.43,0.45,0.46,0.47,0.49,0.50,0.52,0.54,0.56,0.58,0.61,0.64,0.67,0.71,0.76,0.83] },
    { condTemp: 43, values: [0.37,0.38,0.39,0.41,0.42,0.43,0.44,0.45,0.46,0.48,0.50,0.51,0.53,0.53,0.58,0.61,0.65,0.69] }
  ]
};
const OCEANBLUE_CORRECTION_R22_R134A = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 29, values: [0.89,0.97,1.07,1.19,1.30,1.35,1.46,1.61,1.77,1.98,2.28,2.68,3.30,null,null,null,null,null] },
    { condTemp: 32, values: [0.76,0.81,0.86,0.92,0.99,1.04,1.10,1.18,1.26,1.36,1.49,1.66,1.85,2.11,2.50,null,null,null] },
    { condTemp: 35, values: [0.64,0.66,0.72,0.77,0.79,0.83,0.87,0.91,0.97,1.03,1.09,1.17,1.26,1.38,1.53,1.70,1.97,2.29] },
    { condTemp: 38, values: [0.56,0.58,0.62,0.66,0.68,0.69,0.72,0.74,0.77,0.81,0.84,0.89,0.94,1.02,1.09,1.19,1.29,1.48] },
    { condTemp: 40, values: [0.52,0.53,0.56,0.60,0.61,0.62,0.64,0.66,0.68,0.72,0.74,0.77,0.82,0.86,0.91,0.97,1.05,1.15] },
    { condTemp: 41, values: [0.50,0.51,0.53,0.56,0.57,0.58,0.61,0.62,0.64,0.67,0.69,0.72,0.76,0.79,0.83,0.88,0.94,1.03] },
    { condTemp: 43, values: [0.46,0.47,0.48,0.51,0.52,0.53,0.55,0.56,0.57,0.60,0.62,0.63,0.66,0.68,0.72,0.76,0.81,0.86] }
  ]
};

// EVAPCO C-ATC / C-ATW correction tables (Table 1a/2a, S.I. Units, from
// Bulletin 167). Condensing temp (rows) x wet bulb temp (columns).
const EVAPCO_CORRECTION_R22_R134A = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 30, values: [0.95,1.03,1.12,1.23,1.31,1.40,1.51,1.63,1.79,1.99,2.24,2.56,3.00,null,null,null,null,null] },
    { condTemp: 32, values: [0.84,0.90,0.97,1.06,1.12,1.18,1.25,1.32,1.43,1.55,1.70,1.88,2.11,null,null,null,null,null] },
    { condTemp: 34, values: [0.76,0.81,0.86,0.93,0.98,1.02,1.07,1.12,1.19,1.28,1.36,1.48,1.61,1.80,2.06,null,null,null] },
    { condTemp: 35, values: [0.71,0.76,0.81,0.87,0.91,0.95,0.99,1.03,1.08,1.15,1.23,1.30,1.39,1.53,1.69,1.90,2.15,2.47] },
    { condTemp: 36, values: [0.69,0.73,0.77,0.82,0.86,0.89,0.92,0.96,1.01,1.07,1.13,1.20,1.28,1.39,1.53,1.70,1.91,2.17] },
    { condTemp: 38, values: [0.63,0.66,0.69,0.73,0.76,0.78,0.81,0.83,0.86,0.90,0.94,0.99,1.05,1.12,1.21,1.31,1.44,1.59] },
    { condTemp: 40, values: [0.58,0.60,0.62,0.65,0.67,0.70,0.72,0.74,0.76,0.80,0.83,0.87,0.91,0.96,1.02,1.09,1.18,1.29] },
    { condTemp: 42, values: [0.53,0.55,0.57,0.60,0.61,0.63,0.64,0.66,0.68,0.71,0.74,0.76,0.80,0.84,0.88,0.93,0.99,1.06] },
    { condTemp: 44, values: [0.49,0.50,0.52,0.54,0.56,0.56,0.58,0.59,0.61,0.63,0.65,0.67,0.70,0.73,0.76,0.79,0.83,0.86] }
  ]
};
const EVAPCO_CORRECTION_R717 = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 30, values: [1.07,1.15,1.25,1.38,1.47,1.57,1.69,1.83,2.00,2.23,2.50,2.86,3.36,null,null,null,null,null] },
    { condTemp: 32, values: [0.94,1.01,1.09,1.19,1.26,1.32,1.40,1.49,1.60,1.74,1.90,2.11,2.36,null,null,null,null,null] },
    { condTemp: 34, values: [0.85,0.90,0.97,1.04,1.09,1.14,1.20,1.26,1.34,1.43,1.54,1.66,1.81,2.02,2.31,null,null,null] },
    { condTemp: 35, values: [0.80,0.85,0.91,0.97,1.02,1.06,1.11,1.15,1.21,1.29,1.37,1.46,1.56,1.71,1.89,2.13,2.41,2.77] },
    { condTemp: 36, values: [0.77,0.81,0.86,0.92,0.96,1.00,1.04,1.07,1.13,1.19,1.26,1.34,1.43,1.56,1.71,1.90,2.14,2.43] },
    { condTemp: 38, values: [0.70,0.74,0.78,0.82,0.85,0.86,0.90,0.93,0.96,1.01,1.06,1.11,1.18,1.26,1.35,1.47,1.62,1.78] },
    { condTemp: 40, values: [0.65,0.67,0.70,0.73,0.76,0.78,0.80,0.83,0.86,0.89,0.93,0.97,1.02,1.08,1.14,1.22,1.32,1.44] },
    { condTemp: 42, values: [0.59,0.62,0.64,0.67,0.68,0.70,0.72,0.74,0.77,0.80,0.83,0.86,0.89,0.94,0.98,1.04,1.11,1.19] },
    { condTemp: 44, values: [0.54,0.56,0.59,0.61,0.62,0.63,0.65,0.66,0.68,0.70,0.73,0.75,0.78,0.82,0.85,0.89,0.92,0.97] }
  ]
};

// EVAPCO ATC-E correction tables (Table 1/2, from Bulletin 153B-Metric).
// Validated against the catalogue's own worked example: 1300kW total,
// R717, 36C cond / 26C wet bulb -> Table 2 factor 1.39 -> 1807kW ->
// ATC-423E-1g (kW Base 1824), reproduced exactly.
const ATCE_CORRECTION_R22_R134A = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 30, values: [1.07,1.15,1.25,1.38,1.47,1.57,1.69,1.83,2.00,2.23,2.50,2.86,3.36,null,null,null,null,null] },
    { condTemp: 32, values: [0.94,1.01,1.09,1.19,1.26,1.32,1.40,1.49,1.60,1.74,1.90,2.11,2.36,null,null,null,null,null] },
    { condTemp: 34, values: [0.85,0.90,0.97,1.04,1.09,1.14,1.20,1.26,1.34,1.43,1.54,1.66,1.81,2.02,2.31,null,null,null] },
    { condTemp: 35, values: [0.80,0.85,0.91,0.97,1.02,1.06,1.11,1.15,1.21,1.29,1.37,1.46,1.56,1.71,1.89,2.13,2.41,2.77] },
    { condTemp: 36, values: [0.77,0.81,0.86,0.92,0.96,1.00,1.04,1.07,1.13,1.19,1.26,1.34,1.43,1.56,1.71,1.90,2.14,2.43] },
    { condTemp: 38, values: [0.70,0.74,0.78,0.82,0.86,0.90,0.93,0.96,1.01,1.06,1.11,1.18,1.26,1.35,1.47,1.62,1.78,null] },
    { condTemp: 40, values: [0.65,0.67,0.70,0.73,0.76,0.78,0.80,0.83,0.86,0.89,0.93,0.97,1.02,1.08,1.14,1.22,1.32,1.44] },
    { condTemp: 42, values: [0.59,0.62,0.64,0.67,0.68,0.70,0.72,0.74,0.77,0.80,0.83,0.86,0.89,0.94,0.98,1.04,1.11,1.19] },
    { condTemp: 44, values: [0.54,0.56,0.59,0.61,0.62,0.63,0.65,0.66,0.68,0.70,0.73,0.75,0.78,0.82,0.85,0.89,0.92,0.97] }
  ]
};
const ATCE_CORRECTION_R717 = {
  wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  rows: [
    { condTemp: 30, values: [0.95,1.03,1.12,1.23,1.31,1.40,1.51,1.63,1.79,1.99,2.24,2.56,3.00,null,null,null,null,null] },
    { condTemp: 32, values: [0.84,0.90,0.97,1.06,1.12,1.18,1.25,1.32,1.43,1.55,1.70,1.88,2.11,null,null,null,null,null] },
    { condTemp: 34, values: [0.76,0.81,0.86,0.93,0.98,1.02,1.07,1.12,1.19,1.28,1.36,1.48,1.61,1.80,2.06,null,null,null] },
    { condTemp: 35, values: [0.71,0.76,0.81,0.87,0.91,0.95,0.99,1.03,1.08,1.15,1.23,1.30,1.39,1.53,1.69,1.90,2.15,2.47] },
    { condTemp: 36, values: [0.69,0.73,0.77,0.82,0.86,0.89,0.92,0.96,1.01,1.07,1.13,1.20,1.28,1.39,1.53,1.70,1.91,2.17] },
    { condTemp: 38, values: [0.63,0.66,0.69,0.73,0.76,0.78,0.81,0.83,0.86,0.90,0.94,0.99,1.05,1.12,1.21,1.31,1.44,1.59] },
    { condTemp: 40, values: [0.58,0.60,0.62,0.65,0.67,0.70,0.72,0.74,0.76,0.80,0.83,0.87,0.91,0.96,1.02,1.09,1.18,1.29] },
    { condTemp: 42, values: [0.53,0.55,0.57,0.60,0.61,0.63,0.64,0.66,0.68,0.71,0.74,0.76,0.80,0.84,0.88,0.93,0.99,1.06] }
  ]
};

const DATABASE = {
  sources: [
    // ------------------------------------------------------------------
    // SOURCE 2: WXR RB Plate Evaporative Condenser (WXRB series)
    // From: WXR_Catalogue-202308.pdf
    // ------------------------------------------------------------------
    {
      id: "wxr-wxrb",
      kind: "condenser",
      manufacturer: "W.X.R\u00ae (Wanxiang Refrigeration Shanghai Co., Ltd)",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u t\u1ea5m WXRB", en: "WXRB Plate Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i ki\u1ec3u t\u1ea5m, hi\u1ec7u su\u1ea5t trao \u0111\u1ed5i nhi\u1ec7t cao, d\u00f9ng cho h\u1ec7 NH3/R404a.",
        en: "High-efficiency plate-type evaporative condenser for NH3/R404a systems."
      },
      // model selection procedure copied from the catalogue, shown to the user
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh m\u00f4i ch\u1ea5t l\u1ea1nh, nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt kh\u00f4ng kh\u00ed y\u00eau c\u1ea7u.",
          "T\u00ednh t\u1ed5ng nhi\u1ec7t th\u1ea3i (nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5) \u0111i qua d\u00e0n ng\u01b0ng.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh theo b\u1ea3ng h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh (theo m\u00f4i ch\u1ea5t l\u1ea1nh).",
          "Nh\u00e2n t\u1ed5ng nhi\u1ec7t th\u1ea3i v\u1edbi h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh \u0111\u1ec3 ra t\u1ea3i tr\u1ecdng hi\u1ec7u ch\u1ec9nh.",
          "Tra b\u1ea3ng th\u00f4ng s\u1ed1 k\u1ef9 thu\u1eadt v\u00e0 ch\u1ecdn model c\u00f3 c\u00f4ng su\u1ea5t \u0111\u1ecbnh m\u1ee9c b\u1eb1ng ho\u1eb7c l\u1edbn h\u01a1n g\u1ea7n nh\u1ea5t."
        ],
        en: [
          "Determine the required refrigerant, condensing temperature and wet bulb temperature.",
          "Calculate total heat rejection that goes through system to condenser.",
          "Refer to the correction graph to select correction factor.",
          "Multiply by correction factor.",
          "Look up the technical data table and select model which one size up or equal."
        ]
      },
      // Graph 1: Technical data
      // model, nominal heat rejection (kW), fan qty, fan air flow rate (m3/h) per fan,
      // fan power (kW) per fan, pump flow rate (m3/h) [total], pump power (kW) [total, per pump if array],
      // ammonia charge (kg), shipping weight (kg), operating weight (kg), dims A/B/H (mm)
      models: [
        { model: "WXRB-300B", heatRejection: 300,  fanQty: 1, fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 45,  pumpPower: 1.1, ammonia: 12.0, shipWeight: 2050,  operWeight: 3000,  A: 1265, B: 2230, H: 3935 },
        { model: "WXRB-400",  heatRejection: 400,  fanQty: 1, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 45,  pumpPower: 1.1, ammonia: 20.0, shipWeight: 2350,  operWeight: 3500,  A: 1575, B: 2230, H: 3935 },
        { model: "WXRB-500",  heatRejection: 500,  fanQty: 1, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 65,  pumpPower: 1.5, ammonia: 20.0, shipWeight: 2660,  operWeight: 4000,  A: 1825, B: 2230, H: 3935 },
        { model: "WXRB-600",  heatRejection: 600,  fanQty: 1, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 65,  pumpPower: 1.5, ammonia: 24.0, shipWeight: 3000,  operWeight: 4600,  A: 2155, B: 2230, H: 3935 },
        { model: "WXRB-700",  heatRejection: 700,  fanQty: 1, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 1.5, ammonia: 28.0, shipWeight: 3300,  operWeight: 5150,  A: 2435, B: 2230, H: 3935 },
        { model: "WXRB-800B", heatRejection: 800,  fanQty: 1, fanAirFlow: 88000, fanPower: 7.5, pumpFlow: 100, pumpPower: 2.2, ammonia: 32.0, shipWeight: 4180,  operWeight: 6150,  A: 3380, B: 1625, H: 3955 },
        { model: "WXRB-900B", heatRejection: 900,  fanQty: 1, fanAirFlow: 90000, fanPower: 7.5, pumpFlow: 100, pumpPower: 2.2, ammonia: 36.0, shipWeight: 4500,  operWeight: 6900,  A: 3610, B: 1825, H: 3955 },
        { model: "WXRB-1000", heatRejection: 1000, fanQty: 2, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, ammonia: 40.1, shipWeight: 4800,  operWeight: 7400,  A: 3170, B: 2230, H: 4175 },
        { model: "WXRB-1100", heatRejection: 1100, fanQty: 2, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, ammonia: 44.0, shipWeight: 5100,  operWeight: 7950,  A: 3420, B: 2230, H: 4175 },
        { model: "WXRB-1200", heatRejection: 1200, fanQty: 2, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 48.1, shipWeight: 5400,  operWeight: 8500,  A: 3670, B: 2230, H: 4175 },
        { model: "WXRB-1300", heatRejection: 1300, fanQty: 2, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 52.1, shipWeight: 5750,  operWeight: 9050,  A: 3900, B: 2230, H: 4175 },
        { model: "WXRB-1400", heatRejection: 1400, fanQty: 2, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 56.0, shipWeight: 6050,  operWeight: 9600,  A: 4130, B: 2230, H: 4175 },
        { model: "WXRB-1500", heatRejection: 1500, fanQty: 3, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 150, pumpPower: 3.0, ammonia: 60.0, shipWeight: 6950,  operWeight: 10800, A: 4665, B: 2230, H: 4175 },
        { model: "WXRB-1600", heatRejection: 1600, fanQty: 3, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 150, pumpPower: 3.0, ammonia: 64.1, shipWeight: 7250,  operWeight: 11350, A: 4915, B: 2230, H: 4175 },
        { model: "WXRB-1700", heatRejection: 1700, fanQty: 3, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, ammonia: 68.0, shipWeight: 7600,  operWeight: 11900, A: 5165, B: 2230, H: 4175 },
        { model: "WXRB-1800", heatRejection: 1800, fanQty: 3, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, ammonia: 72.0, shipWeight: 8050,  operWeight: 12750, A: 5415, B: 2230, H: 4175 },
        { model: "WXRB-1900", heatRejection: 1900, fanQty: 3, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, ammonia: 76.1, shipWeight: 8400,  operWeight: 13300, A: 5645, B: 2230, H: 4175 },
        { model: "WXRB-2000", heatRejection: 2000, fanQty: 3, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 80.0, shipWeight: 8750,  operWeight: 13850, A: 5875, B: 2230, H: 4175 },
        { model: "WXRB-2100", heatRejection: 2100, fanQty: 3, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 84.0, shipWeight: 9050,  operWeight: 14400, A: 6205, B: 2230, H: 4175 },
        { model: "WXRB-2200", heatRejection: 2200, fanQty: 4, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 238, pumpPower: 5.5, ammonia: 88.1, shipWeight: 9900,  operWeight: 15600, A: 6760, B: 2230, H: 4175 },
        { model: "WXRB-2300", heatRejection: 2300, fanQty: 4, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 238, pumpPower: 5.5, ammonia: 92.0, shipWeight: 10250, operWeight: 16150, A: 7010, B: 2230, H: 4175 },
        { model: "WXRB-2400", heatRejection: 2400, fanQty: 4, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 238, pumpPower: 5.5, ammonia: 96.0, shipWeight: 10550, operWeight: 16700, A: 7260, B: 2230, H: 4175 },
        { model: "WXRB-2500", heatRejection: 2500, fanQty: 4, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 100.1,shipWeight: 10850, operWeight: 17250, A: 7490, B: 2230, H: 4175 },
        { model: "WXRB-2600", heatRejection: 2600, fanQty: 4, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 104.0,shipWeight: 11160, operWeight: 17750, A: 7720, B: 2230, H: 4175 },
        { model: "WXRB-2700", heatRejection: 2700, fanQty: 4, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 108.0, shipWeight: 11500, operWeight: 18300, A: 7950, B: 2230, H: 4175 },
        { model: "WXRB-2800", heatRejection: 2800, fanQty: 4, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 112.0, shipWeight: 11800, operWeight: 18850, A: 8180, B: 2230, H: 4175 },
        { model: "WXRB-2900", heatRejection: 2900, fanQty: 5, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 116.0, shipWeight: 12800, operWeight: 20200, A: 8755, B: 2230, H: 4175 },
        { model: "WXRB-3000", heatRejection: 3000, fanQty: 5, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 120.0, shipWeight: 13000, operWeight: 20650, A: 9005, B: 2230, H: 4175 },
        { model: "WXRB-3100", heatRejection: 3100, fanQty: 5, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 124.1, shipWeight: 13350, operWeight: 21200, A: 9235, B: 2230, H: 4175 },
        { model: "WXRB-3200", heatRejection: 3200, fanQty: 5, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 128.0, shipWeight: 13650, operWeight: 21750, A: 9465, B: 2230, H: 4175 },
        { model: "WXRB-3300", heatRejection: 3300, fanQty: 5, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 136.1, shipWeight: 14250, operWeight: 22750, A: 9925, B: 2230, H: 4175 },
        { model: "WXRB-3400", heatRejection: 3400, fanQty: 5, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 140.0, shipWeight: 14600, operWeight: 23300, A: 10155,B: 2230, H: 4175 },
        { model: "WXRB-3600", heatRejection: 3600, fanQty: 6, fanAirFlow: 62000, fanPower: 4.0, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 144.0, shipWeight: 15500, operWeight: 24600, A: 10750,B: 2230, H: 4175 },
        { model: "WXRB-3700", heatRejection: 3700, fanQty: 6, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 148.1, shipWeight: 15800, operWeight: 25150, A: 10980,B: 2230, H: 4175 },
        { model: "WXRB-3800", heatRejection: 3800, fanQty: 6, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 152.0, shipWeight: 16250, operWeight: 25800, A: 11210,B: 2230, H: 4175 },
        { model: "WXRB-3900", heatRejection: 3900, fanQty: 6, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 156.0, shipWeight: 16550, operWeight: 26350, A: 11440,B: 2230, H: 4175 },
        { model: "WXRB-4000", heatRejection: 4000, fanQty: 6, fanAirFlow: 74000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 160.0, shipWeight: 16900, operWeight: 26850, A: 11670,B: 2230, H: 4175 }
      ],
      // Correction tables (Graph 2 / Graph 3). "-" cells in the original
      // catalogue (combinations outside the valid working range) are stored
      // as null.
      correctionTables: {
        R717: {
          wetBulb: [10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
          rows: [
            { condTemp: 29, values: [0.72,0.78,0.86,0.96,1.01,1.09,1.18,1.30,1.43,1.60,1.84,2.16,2.66,null,null,null,null,null,null,null] },
            { condTemp: 30, values: [0.68,0.73,0.81,0.88,0.94,1.00,1.07,1.15,1.27,1.40,1.59,1.79,2.13,null,null,null,null,null,null,null] },
            { condTemp: 31, values: [0.64,0.68,0.74,0.82,0.86,0.91,0.97,1.04,1.12,1.22,1.36,1.52,1.74,2.06,null,null,null,null,null,null] },
            { condTemp: 32, values: [0.61,0.65,0.69,0.74,0.80,0.84,0.89,0.95,1.02,1.10,1.20,1.34,1.49,1.70,2.02,null,null,null,null,null] },
            { condTemp: 33, values: [0.57,0.61,0.65,0.70,0.73,0.78,0.82,0.87,0.92,0.99,1.07,1.16,1.29,1.45,1.66,1.97,null,null,null,null] },
            { condTemp: 34, values: [0.55,0.58,0.62,0.66,0.69,0.72,0.76,0.80,0.86,0.90,0.96,1.04,1.14,1.27,1.42,1.63,null,null,null,null] },
            { condTemp: 35, values: [0.52,0.54,0.58,0.62,0.64,0.67,0.70,0.73,0.78,0.83,0.88,0.94,1.02,1.11,1.23,1.37,1.59,1.86,2.16,2.49] },
            { condTemp: 36, values: [0.50,0.52,0.55,0.59,0.61,0.63,0.66,0.69,0.72,0.75,0.81,0.86,0.92,1.00,1.09,1.22,1.35,1.54,1.76,2.05] },
            { condTemp: 37, values: [0.47,0.49,0.52,0.55,0.57,0.59,0.61,0.64,0.67,0.70,0.73,0.79,0.84,0.90,0.97,1.06,1.21,1.32,1.52,1.71] },
            { condTemp: 38, values: [0.45,0.47,0.49,0.53,0.55,0.56,0.58,0.60,0.62,0.65,0.68,0.72,0.76,0.82,0.88,0.96,1.04,1.19,1.35,1.50] },
            { condTemp: 39, values: [0.43,0.45,0.47,0.50,0.52,0.53,0.55,0.58,0.60,0.62,0.66,0.69,0.73,0.78,0.85,0.93,1.02,1.18,1.28,null] },
            { condTemp: 40, values: [0.42,0.43,0.45,0.48,0.49,0.50,0.52,0.53,0.55,0.58,0.60,0.62,0.66,0.69,0.74,0.80,0.86,0.95,1.02,1.17] },
            { condTemp: 41, values: [0.40,0.41,0.43,0.45,0.46,0.47,0.49,0.50,0.51,0.54,0.56,0.58,0.61,0.64,0.67,0.71,0.76,0.83,0.92,1.01] },
            { condTemp: 42, values: [0.39,0.40,0.41,0.43,0.44,0.45,0.47,0.48,0.49,0.51,0.53,0.55,0.57,0.60,0.62,0.66,0.70,0.76,0.82,0.91] },
            { condTemp: 43, values: [0.37,0.38,0.39,0.41,0.42,0.43,0.44,0.45,0.46,0.48,0.50,0.51,0.53,0.55,0.58,0.61,0.65,0.69,0.72,0.80] },
            { condTemp: 44, values: [0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.44,0.46,0.47,0.49,0.51,0.52,0.54,0.57,0.60,0.64,0.68,0.71] },
            { condTemp: 45, values: [0.34,0.35,0.36,0.37,0.38,0.39,0.40,0.41,0.42,0.43,0.44,0.46,0.47,0.49,0.51,0.53,0.56,0.59,0.63,0.67] }
          ]
        },
        // R404a table uses a coarser wet-bulb grid in the source catalogue
        // (fewer columns than the R717 table) and only odd condensing
        // temperatures. Values transcribed as printed; "-" -> null.
        // NOTE: flagged to user for verification against original scan (see chat).
        R404a: {
          wetBulb: [10,12,14,16,18,19,20,21,22,23,24,25,26,28,30,32],
          rows: [
            { condTemp: 29, values: [0.86,0.94,1.03,1.15,1.37,1.43,1.55,1.68,1.92,2.10,2.25,3.10,null,null,null,null] },
            { condTemp: 31, values: [0.77,0.83,0.90,0.99,1.10,1.17,1.24,1.34,1.47,1.62,1.83,2.20,2.48,null,null,null] },
            { condTemp: 33, values: [0.69,0.73,0.79,0.86,0.94,1.00,1.02,1.10,1.20,1.28,1.40,1.56,1.75,2.38,null,null] },
            { condTemp: 35, values: [0.62,0.66,0.70,0.76,0.83,0.90,0.93,1.00,1.07,1.18,1.25,1.38,1.68,2.10,null,null] },
            { condTemp: 37, values: [0.57,0.60,0.63,0.67,0.72,0.76,0.78,0.82,0.85,0.90,0.96,1.02,1.10,1.30,1.56,1.89] },
            { condTemp: 39, values: [0.55,0.57,0.59,0.62,0.65,0.68,0.70,0.75,0.79,0.85,0.88,0.95,1.10,1.26,1.46,null] },
            { condTemp: 41, values: [0.48,0.49,0.52,0.54,0.57,0.61,0.63,0.66,0.68,0.71,0.75,0.78,0.85,0.95,1.10,1.19] },
            { condTemp: 43, values: [0.44,0.46,0.48,0.50,0.52,0.54,0.55,0.57,0.59,0.61,0.63,0.66,0.68,0.75,0.78,0.86] },
            { condTemp: 45, values: [0.41,0.42,0.44,0.46,0.48,0.49,0.50,0.52,0.53,0.55,0.56,0.58,0.61,0.63,0.66,0.74] }
          ]
        }
      }
    },

    // ------------------------------------------------------------------
    // SOURCE 3: WXRD Coil Evaporative Condenser
    // From: WXR_Catalogue-202308.pdf (Graph 4/5/6, pages 11-12)
    // Correction tables shared with WXRB (see SHARED_CORRECTION_* above).
    // ------------------------------------------------------------------
    {
      id: "wxr-wxrd",
      kind: "condenser",
      manufacturer: "W.X.R\u00ae (Wanxiang Refrigeration Shanghai Co., Ltd)",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u \u1ed1ng (coil) WXRD", en: "WXRD Coil Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i ki\u1ec3u \u1ed1ng, gi\u1ea3m nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 h\u01a1n so v\u1edbi gi\u1ea3i nhi\u1ec7t b\u1eb1ng gi\u00f3/n\u01b0\u1edbc th\u00f4ng th\u01b0\u1eddng.",
        en: "Coil-type evaporative condenser offering lower condensing temperatures than conventional air/water-cooled systems."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh m\u00f4i ch\u1ea5t l\u1ea1nh, nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt kh\u00f4ng kh\u00ed y\u00eau c\u1ea7u.",
          "T\u00ednh t\u1ed5ng nhi\u1ec7t th\u1ea3i (nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5) \u0111i qua d\u00e0n ng\u01b0ng.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh theo b\u1ea3ng h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh (theo m\u00f4i ch\u1ea5t l\u1ea1nh).",
          "Nh\u00e2n t\u1ed5ng nhi\u1ec7t th\u1ea3i v\u1edbi h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh \u0111\u1ec3 ra t\u1ea3i tr\u1ecdng hi\u1ec7u ch\u1ec9nh.",
          "Tra b\u1ea3ng th\u00f4ng s\u1ed1 k\u1ef9 thu\u1eadt v\u00e0 ch\u1ecdn model c\u00f3 c\u00f4ng su\u1ea5t \u0111\u1ecbnh m\u1ee9c b\u1eb1ng ho\u1eb7c l\u1edbn h\u01a1n g\u1ea7n nh\u1ea5t."
        ],
        en: [
          "Determine the required refrigerant, condensing temperature and wet bulb temperature.",
          "Calculate total heat rejection that goes through system to condenser.",
          "Refer to the correction graph to select correction factor.",
          "Multiply by correction factor.",
          "Look up the technical data table and select model which one size up or equal."
        ]
      },
      // model, nominal heat rejection (kW), fan qty, fan air flow rate (m3/h) per fan,
      // fan power (kW) per fan, pump flow rate (m3/h), pump power (kW) (per pump if pumpQty > 1),
      // ammonia charge (kg), shipping weight (kg), operating weight (kg), dims A/B/H (mm)
      models: [
        { model: "WXRD-300B",  heatRejection: 300,  fanQty: 1,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 65,  pumpPower: 1.5, ammonia: 26,  shipWeight: 2020,  operWeight: 3200,  A: 1624,  B: 2230, H: 4235 },
        { model: "WXRD-400B",  heatRejection: 400,  fanQty: 1,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 1.5, ammonia: 31,  shipWeight: 2250,  operWeight: 3670,  A: 1924,  B: 2230, H: 4235 },
        { model: "WXRD-500B",  heatRejection: 500,  fanQty: 1,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 1.5, ammonia: 37,  shipWeight: 2560,  operWeight: 4290,  A: 2308,  B: 2230, H: 4235 },
        { model: "WXRD-600B",  heatRejection: 600,  fanQty: 2,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, ammonia: 44,  shipWeight: 3480,  operWeight: 5510,  A: 2730,  B: 2230, H: 4255 },
        { model: "WXRD-700B",  heatRejection: 700,  fanQty: 2,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, ammonia: 52,  shipWeight: 3800,  operWeight: 6150,  A: 3170,  B: 2230, H: 4255 },
        { model: "WXRD-800B",  heatRejection: 800,  fanQty: 2,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, ammonia: 60,  shipWeight: 3950,  operWeight: 6410,  A: 3250,  B: 2230, H: 4255 },
        { model: "WXRD-900B",  heatRejection: 900,  fanQty: 2,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 100, pumpPower: 2.2, ammonia: 68,  shipWeight: 4560,  operWeight: 7620,  A: 4030,  B: 2230, H: 4255 },
        { model: "WXRD-1000B", heatRejection: 1000, fanQty: 2,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 73,  shipWeight: 4910,  operWeight: 8270,  A: 4384,  B: 2230, H: 4255 },
        { model: "WXRD-1100B", heatRejection: 1100, fanQty: 2,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 84,  shipWeight: 5240,  operWeight: 8910,  A: 4850,  B: 2230, H: 4255 },
        { model: "WXRD-1200B", heatRejection: 1200, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 92,  shipWeight: 6020,  operWeight: 10000, A: 5196,  B: 2230, H: 4255 },
        { model: "WXRD-1300B", heatRejection: 1300, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, ammonia: 100, shipWeight: 6340,  operWeight: 10630, A: 5616,  B: 2230, H: 4255 },
        { model: "WXRD-1400B", heatRejection: 1400, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, ammonia: 108, shipWeight: 6700,  operWeight: 10680, A: 5196,  B: 2230, H: 5000 },
        { model: "WXRD-1500B", heatRejection: 1500, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, ammonia: 115, shipWeight: 7020,  operWeight: 11270, A: 5616,  B: 2230, H: 5000 },
        { model: "WXRD-1600B", heatRejection: 1600, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, ammonia: 123, shipWeight: 7340,  operWeight: 11860, A: 5876,  B: 2230, H: 5000 },
        { model: "WXRD-1700B", heatRejection: 1700, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 130, shipWeight: 7800,  operWeight: 12600, A: 6206,  B: 2230, H: 5000 },
        { model: "WXRD-1800B", heatRejection: 1800, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 137, shipWeight: 8570,  operWeight: 13640, A: 6582,  B: 2230, H: 5000 },
        { model: "WXRD-1900B", heatRejection: 1900, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 143, shipWeight: 8890,  operWeight: 14230, A: 6942,  B: 2230, H: 5000 },
        { model: "WXRD-2000B", heatRejection: 2000, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 145, shipWeight: 9200,  operWeight: 14810, A: 7262,  B: 2230, H: 5000 },
        { model: "WXRD-2100B", heatRejection: 2100, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 150, shipWeight: 9520,  operWeight: 15400, A: 7622,  B: 2230, H: 5000 },
        { model: "WXRD-2200B", heatRejection: 2200, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, ammonia: 159, shipWeight: 9830,  operWeight: 15990, A: 7982,  B: 2230, H: 5000 },
        { model: "WXRD-2300B", heatRejection: 2300, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 168, shipWeight: 10150, operWeight: 16580, A: 8382,  B: 2230, H: 5000 },
        { model: "WXRD-2400B", heatRejection: 2400, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 170, shipWeight: 10930, operWeight: 17630, A: 8688,  B: 2230, H: 5000 },
        { model: "WXRD-2500B", heatRejection: 2500, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 178, shipWeight: 11240, operWeight: 18220, A: 9108,  B: 2230, H: 5000 },
        { model: "WXRD-2600B", heatRejection: 2600, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 183, shipWeight: 11560, operWeight: 18810, A: 9438,  B: 2230, H: 5000 },
        { model: "WXRD-2700B", heatRejection: 2700, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 187, shipWeight: 11880, operWeight: 19400, A: 9798,  B: 2230, H: 5000 },
        { model: "WXRD-2800B", heatRejection: 2800, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, ammonia: 190, shipWeight: 12040, operWeight: 19700, A: 9958,  B: 2230, H: 5000 },
        { model: "WXRD-2900B", heatRejection: 2900, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 193, shipWeight: 12670, operWeight: 20460, A: 10074, B: 2230, H: 5000 },
        { model: "WXRD-3000B", heatRejection: 3000, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 205, shipWeight: 13070, operWeight: 21130, A: 10434, B: 2230, H: 5000 },
        { model: "WXRD-3100B", heatRejection: 3100, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 217, shipWeight: 13380, operWeight: 21720, A: 10754, B: 2230, H: 5000 },
        { model: "WXRD-3200B", heatRejection: 3200, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, ammonia: 233, shipWeight: 14670, operWeight: 23720, A: 5876,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-3400B", heatRejection: 3400, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, ammonia: 239, shipWeight: 15590, operWeight: 25820, A: 6206,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-3600B", heatRejection: 3600, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, ammonia: 260, shipWeight: 17130, operWeight: 27270, A: 6582,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-3800B", heatRejection: 3800, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, ammonia: 286, shipWeight: 17770, operWeight: 28450, A: 6942,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-4000B", heatRejection: 4000, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, ammonia: 290, shipWeight: 18400, operWeight: 29620, A: 7262,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-4200B", heatRejection: 4200, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, ammonia: 300, shipWeight: 19030, operWeight: 30800, A: 7622,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-4400B", heatRejection: 4400, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, ammonia: 318, shipWeight: 19660, operWeight: 31980, A: 7982,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-4600B", heatRejection: 4600, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, ammonia: 336, shipWeight: 20300, operWeight: 33160, A: 8382,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-4800B", heatRejection: 4800, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, ammonia: 340, shipWeight: 21850, operWeight: 35260, A: 8688,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-5000B", heatRejection: 5000, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, ammonia: 356, shipWeight: 22480, operWeight: 36430, A: 9108,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-5200B", heatRejection: 5200, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, ammonia: 374, shipWeight: 23120, operWeight: 37620, A: 9438,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-5600B", heatRejection: 5600, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, ammonia: 386, shipWeight: 24080, operWeight: 39390, A: 9958,  B: "2230\u00d72", H: 5000 },
        { model: "WXRD-5800B", heatRejection: 5800, fanQty: 12, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, ammonia: 410, shipWeight: 25330, operWeight: 40910, A: 10074, B: "2230\u00d72", H: 5000 },
        { model: "WXRD-6000B", heatRejection: 6000, fanQty: 12, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, ammonia: 434, shipWeight: 26130, operWeight: 42250, A: 10434, B: "2230\u00d72", H: 5000 },
        { model: "WXRD-6200B", heatRejection: 6200, fanQty: 12, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, ammonia: 466, shipWeight: 26760, operWeight: 43430, A: 10754, B: "2230\u00d72", H: 5000 }
      ],
      correctionTables: {
        R717: SHARED_CORRECTION_R717,
        R404a: SHARED_CORRECTION_R404A
      }
    },

    // ------------------------------------------------------------------
    // SOURCE 4: WXC Closed Circuit Cooling Tower
    // From: WXR_Catalogue-202308.pdf (Graph 7/8, pages 13-14)
    // Rated at a fixed design condition (no correction graph provided in
    // catalogue) — model is chosen directly by nominal water flow.
    // ------------------------------------------------------------------
    {
      id: "wxr-wxc",
      kind: "coolingtower",
      manufacturer: "W.X.R\u00ae (Wanxiang Refrigeration Shanghai Co., Ltd)",
      name: { vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t kh\u00e9p k\u00edn WXC", en: "WXC Closed Circuit Cooling Tower" },
      shortDesc: {
        vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t v\u00f2ng kh\u00e9p k\u00edn, n\u01b0\u1edbc tu\u1ea7n ho\u00e0n t\u00e1ch bi\u1ec7t ho\u00e0n to\u00e0n v\u1edbi m\u00f4i tr\u01b0\u1eddng ngo\u00e0i, ch\u1ed1ng c\u1eb7n b\u1eabn v\u00e0 \u00e2n m\u00f2n.",
        en: "Closed-loop cooling tower with circulation water fully isolated from the outside environment, resisting scale and fouling."
      },
      designCondition: {
        vi: "Nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt kh\u00f4ng kh\u00ed 28\u00b0C, nhi\u1ec7t \u0111\u1ed9 n\u01b0\u1edbc v\u00e0o 37\u00b0C, nhi\u1ec7t \u0111\u1ed9 n\u01b0\u1edbc ra 32\u00b0C. L\u01b0u l\u01b0\u1ee3ng \u0111\u1ecbnh m\u1ee9c trong b\u1ea3ng l\u00e0 c\u00f4ng su\u1ea5t l\u00e0m m\u00e1t \u1edf \u0111i\u1ec1u ki\u1ec7n n\u00e0y.",
        en: "Wet bulb temperature 28\u00b0C, inlet water temperature 37\u00b0C, outlet water temperature 32\u00b0C. The nominal flow rate in the table is the cooling capacity at this condition."
      },
      notes: {
        vi: [
          "S\u1ed1 li\u1ec7u tr\u00ean c\u00f3 th\u1ec3 thay \u0111\u1ed5i do c\u1ea3i ti\u1ebfn c\u00f4ng ngh\u1ec7 \u2014 vui l\u00f2ng ki\u1ec3m tra l\u1ea1i th\u00f4ng s\u1ed1 m\u1edbi nh\u1ea5t t\u1eeb WXR tr\u01b0\u1edbc khi mua.",
          "D\u00f2ng th\u00e1p gi\u1ea3i nhi\u1ec7t WXC kh\u00f4ng gi\u1edbi h\u1ea1n \u1edf c\u00e1c model tr\u00ean, li\u00ean h\u1ec7 nh\u00e0 cung c\u1ea5p n\u1ebfu c\u1ea7n y\u00eau c\u1ea7u kh\u00e1c."
        ],
        en: [
          "Above data may change due to the innovation of technology, please refer to the latest details parameters provided by WXR.",
          "WXC series closed circuit cooling tower is not limited to the above models, please contact us for other requirements."
        ]
      },
      // model, nominal water flow (m3/h) at design condition, fan qty, fan air flow (m3/h) per fan,
      // fan power (kW) per fan, pump flow (m3/h), pump power (kW) (per pump if pumpQty > 1),
      // shipping weight (kg), operating weight (kg), dims A/B/H (mm)
      models: [
        { model: "WXC-036", flow: 36,  fanQty: 1,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 65,  pumpPower: 1.5, shipWeight: 2020,  operWeight: 3550,  A: 1624,  B: 2230, H: 4235 },
        { model: "WXC-048", flow: 48,  fanQty: 1,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 1.5, shipWeight: 2250,  operWeight: 4050,  A: 1924,  B: 2230, H: 4235 },
        { model: "WXC-059", flow: 59,  fanQty: 1,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 1.5, shipWeight: 2560,  operWeight: 4750,  A: 2308,  B: 2230, H: 4235 },
        { model: "WXC-063", flow: 63,  fanQty: 2,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, shipWeight: 3480,  operWeight: 5900,  A: 2730,  B: 2230, H: 4255 },
        { model: "WXC-073", flow: 73,  fanQty: 2,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, shipWeight: 3850,  operWeight: 6700,  A: 3170,  B: 2230, H: 4700 },
        { model: "WXC-077", flow: 77,  fanQty: 2,  fanAirFlow: 52800, fanPower: 4.0, pumpFlow: 100, pumpPower: 2.2, shipWeight: 4000,  operWeight: 7000,  A: 3250,  B: 2230, H: 4700 },
        { model: "WXC-105", flow: 105, fanQty: 2,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 100, pumpPower: 2.2, shipWeight: 4650,  operWeight: 8350,  A: 4030,  B: 2230, H: 4700 },
        { model: "WXC-116", flow: 116, fanQty: 2,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, shipWeight: 5000,  operWeight: 9100,  A: 4384,  B: 2230, H: 4700 },
        { model: "WXC-127", flow: 127, fanQty: 2,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, shipWeight: 5350,  operWeight: 9800,  A: 4850,  B: 2230, H: 4700 },
        { model: "WXC-137", flow: 137, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, shipWeight: 6000,  operWeight: 10900, A: 5196,  B: 2230, H: 4700 },
        { model: "WXC-148", flow: 148, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, shipWeight: 6340,  operWeight: 11500, A: 5616,  B: 2230, H: 4700 },
        { model: "WXC-156", flow: 156, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, shipWeight: 6650,  operWeight: 12160, A: 5876,  B: 2230, H: 4700 },
        { model: "WXC-166", flow: 166, fanQty: 3,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, shipWeight: 7200,  operWeight: 13000, A: 6206,  B: 2230, H: 4700 },
        { model: "WXC-175", flow: 175, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, shipWeight: 7700,  operWeight: 13850, A: 6582,  B: 2230, H: 4700 },
        { model: "WXC-185", flow: 185, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, shipWeight: 8000,  operWeight: 14500, A: 6942,  B: 2230, H: 4700 },
        { model: "WXC-194", flow: 194, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, shipWeight: 8250,  operWeight: 15100, A: 7262,  B: 2230, H: 4700 },
        { model: "WXC-204", flow: 204, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, shipWeight: 8550,  operWeight: 15700, A: 7622,  B: 2230, H: 4700 },
        { model: "WXC-215", flow: 215, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, shipWeight: 8850,  operWeight: 16300, A: 7982,  B: 2230, H: 4700 },
        { model: "WXC-223", flow: 223, fanQty: 4,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, shipWeight: 9050,  operWeight: 16900, A: 8382,  B: 2230, H: 4700 },
        { model: "WXC-233", flow: 233, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, shipWeight: 9650,  operWeight: 17800, A: 8688,  B: 2230, H: 4700 },
        { model: "WXC-243", flow: 243, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, shipWeight: 9910,  operWeight: 18410, A: 9108,  B: 2230, H: 4700 },
        { model: "WXC-252", flow: 252, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, shipWeight: 10200, operWeight: 19050, A: 9438,  B: 2230, H: 4700 },
        { model: "WXC-262", flow: 262, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, shipWeight: 10500, operWeight: 19700, A: 9798,  B: 2230, H: 4700 },
        { model: "WXC-267", flow: 267, fanQty: 5,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 2, shipWeight: 10650, operWeight: 19970, A: 9958,  B: 2230, H: 4700 },
        { model: "WXC-271", flow: 271, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, shipWeight: 11100, operWeight: 20600, A: 10074, B: 2230, H: 4700 },
        { model: "WXC-281", flow: 281, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, shipWeight: 11450, operWeight: 21300, A: 10434, B: 2230, H: 4700 },
        { model: "WXC-291", flow: 291, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, shipWeight: 11750, operWeight: 21900, A: 10754, B: 2230, H: 4700 },
        { model: "WXC-312", flow: 312, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 2, shipWeight: 13300, operWeight: 24320, A: 5876,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-332", flow: 332, fanQty: 6,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, shipWeight: 14400, operWeight: 26000, A: 6206,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-351", flow: 351, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, shipWeight: 15400, operWeight: 27700, A: 6582,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-370", flow: 370, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, shipWeight: 16000, operWeight: 29000, A: 6942,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-389", flow: 389, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, shipWeight: 16500, operWeight: 30200, A: 7262,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-408", flow: 408, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, shipWeight: 17100, operWeight: 31400, A: 7622,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-429", flow: 429, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 238, pumpPower: 5.5, pumpQty: 2, shipWeight: 17700, operWeight: 32600, A: 7982,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-447", flow: 447, fanQty: 8,  fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, shipWeight: 18100, operWeight: 33800, A: 8382,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-466", flow: 466, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, shipWeight: 19300, operWeight: 35600, A: 8688,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-485", flow: 485, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, shipWeight: 19820, operWeight: 36820, A: 9108,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-504", flow: 504, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3.0, pumpQty: 4, shipWeight: 20400, operWeight: 38100, A: 9438,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-533", flow: 533, fanQty: 10, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, shipWeight: 21300, operWeight: 39940, A: 9958,  B: "2230\u00d72", H: 4700 },
        { model: "WXC-543", flow: 543, fanQty: 12, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, shipWeight: 22200, operWeight: 41200, A: 10074, B: "2230\u00d72", H: 4700 },
        { model: "WXC-562", flow: 562, fanQty: 12, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, shipWeight: 22900, operWeight: 41600, A: 10434, B: "2230\u00d72", H: 4700 },
        { model: "WXC-581", flow: 581, fanQty: 12, fanAirFlow: 60000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4.0, pumpQty: 4, shipWeight: 23500, operWeight: 43800, A: 10754, B: "2230\u00d72", H: 4700 }
      ]
    },

    // ------------------------------------------------------------------
    // SOURCE 5: Heng An ZHX Combined-Flow Evaporative Condenser
    // From: Heng_An_Cooling_Company_Products_Catalogs.pdf (p.25-26)
    // Using the China-market table. No ammonia-charge column published
    // in this catalogue (unlike WXR).
    // ------------------------------------------------------------------
    {
      id: "hengan-zhx",
      kind: "condenser",
      manufacturer: "Heng An Cooling (Weifang Heng An Radiator Group)",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u ph\u1ee9c h\u1ee3p l\u01b0u ZHX (Heng An)", en: "Heng An ZHX Combined-Flow Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i, gi\u00f3 v\u00e0 n\u01b0\u1edbc c\u00f9ng chi\u1ec1u, gi\u1ea3m \u0111i\u1ec3m kh\u00f4 tr\u00ean b\u1ec1 m\u1eb7t \u1ed1ng.",
        en: "Combined-flow evaporative condenser with parallel air/water paths to reduce coil dry-spot scaling."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh t\u1ed5ng nhi\u1ec7t th\u1ea3i h\u1ec7 th\u1ed1ng (nhi\u1ec7t l\u1ea1nh + c\u00f4ng su\u1ea5t tr\u1ee5c n\u00e9n).",
          "X\u00e1c \u0111\u1ecbnh m\u00f4i ch\u1ea5t, nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh R theo b\u1ea3ng.",
          "T\u1ea3i hi\u1ec7u ch\u1ec9nh = t\u1ed5ng nhi\u1ec7t th\u1ea3i \u00d7 R.",
          "Ch\u1ecdn model c\u00f3 c\u00f4ng su\u1ea5t \u0111\u1ecbnh m\u1ee9c b\u1eb1ng ho\u1eb7c l\u1edbn h\u01a1n g\u1ea7n nh\u1ea5t."
        ],
        en: [
          "Confirm total system heat rejection (refrigeration capacity + compressor shaft power).",
          "Confirm refrigerant, condensation temperature, and wet bulb temperature.",
          "Look up correction coefficient R from the table.",
          "Corrected Heat Rejection = Total Heat Rejection x R.",
          "Select the model with rated capacity equal to or greater than the corrected value."
        ]
      },
      models: [
        { model: "ZHX-320",  heatRejection: 320,  fanQty: 1, fanAirFlow: 46000, fanPower: 3,   pumpFlow: 32,  pumpPower: 1.1, pipeDN: "DN80",  shipWeight: 2950,  operWeight: 3880,  A: 1785, B: 2380, H: 4220 },
        { model: "ZHX-380",  heatRejection: 380,  fanQty: 1, fanAirFlow: 58000, fanPower: 4,   pumpFlow: 45,  pumpPower: 1.5, pipeDN: "DN80",  shipWeight: 3150,  operWeight: 4290,  A: 1785, B: 2380, H: 4220 },
        { model: "ZHX-475",  heatRejection: 475,  fanQty: 1, fanAirFlow: 60000, fanPower: 4,   pumpFlow: 45,  pumpPower: 1.5, pipeDN: "DN100", shipWeight: 3680,  operWeight: 5100,  A: 1925, B: 2380, H: 4220 },
        { model: "ZHX-595",  heatRejection: 595,  fanQty: 1, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 2.2, pipeDN: "DN100", shipWeight: 3850,  operWeight: 5500,  A: 1925, B: 2980, H: 4240 },
        { model: "ZHX-735",  heatRejection: 735,  fanQty: 1, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 65,  pumpPower: 2.2, pipeDN: "DN100", shipWeight: 4950,  operWeight: 7980,  A: 1925, B: 2980, H: 4870 },
        { model: "ZHX-850",  heatRejection: 850,  fanQty: 2, fanAirFlow: 65000, fanPower: 5.5, pumpFlow: 100, pumpPower: 3,   pipeDN: "DN100", shipWeight: 5280,  operWeight: 8250,  A: 3490, B: 2380, H: 4240 },
        { model: "ZHX-1050", heatRejection: 1050, fanQty: 2, fanAirFlow: 72000, fanPower: 7.5, pumpFlow: 100, pumpPower: 3,   pipeDN: "DN100", shipWeight: 5580,  operWeight: 8900,  A: 3490, B: 2380, H: 4240 },
        { model: "ZHX-1285", heatRejection: 1285, fanQty: 2, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 130, pumpPower: 4,   pipeDN: "2-DN100", shipWeight: 6550,  operWeight: 9850,  A: 3770, B: 2980, H: 4870 },
        { model: "ZHX-1490", heatRejection: 1490, fanQty: 2, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 150, pumpPower: 4,   pipeDN: "2-DN100", shipWeight: 6890,  operWeight: 10900, A: 5610, B: 2580, H: 4910 },
        { model: "ZHX-2010", heatRejection: 2010, fanQty: 3, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 180, pumpPower: 5.5, pipeDN: "2-DN100", shipWeight: 7350,  operWeight: 11200, A: 5610, B: 2580, H: 4910 },
        { model: "ZHX-2245", heatRejection: 2245, fanQty: 3, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 180, pumpPower: 5.5, pipeDN: "2-DN100", shipWeight: 7880,  operWeight: 11800, A: 5610, B: 2980, H: 4910 },
        { model: "ZHX-2450", heatRejection: 2450, fanQty: 3, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 200, pumpPower: 3, pumpQty: 2, pipeDN: "2-DN125", shipWeight: 8320, operWeight: 12300, A: 5610, B: 3420, H: 4910 },
        { model: "ZHX-2600", heatRejection: 2600, fanQty: 4, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 200, pumpPower: 3, pumpQty: 2, pipeDN: "2-DN100", shipWeight: 8860, operWeight: 13260, A: 5610, B: 3420, H: 4910 },
        { model: "ZHX-3000", heatRejection: 3000, fanQty: 4, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 260, pumpPower: 4, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 10600, operWeight: 13900, A: 7050, B: 2980, H: 4910 },
        { model: "ZHX-3400", heatRejection: 3400, fanQty: 4, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 260, pumpPower: 4, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 12500, operWeight: 15800, A: 7450, B: 3520, H: 4910 },
        { model: "ZHX-4200", heatRejection: 4200, fanQty: 4, fanAirFlow: 120000, fanPower: 11, pumpFlow: 300, pumpPower: 4, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 13900, operWeight: 18900, A: 7450, B: 3520, H: 4910 },
        { model: "ZHX-4600", heatRejection: 4600, fanQty: 5, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 360, pumpPower: 5.5, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 15600, operWeight: 20500, A: 8600, B: 3520, H: 4910 },
        { model: "ZHX-5000", heatRejection: 5000, fanQty: 5, fanAirFlow: 120000, fanPower: 11, pumpFlow: 360, pumpPower: 5.5, pumpQty: 2, pipeDN: "4-DN125", shipWeight: 16900, operWeight: 23900, A: 8600, B: 3520, H: 4910 }
      ],
      correctionTables: { R717: HENGAN_CORRECTION_R717, R22_R134A: HENGAN_CORRECTION_R22_R134A }
    },

    // ------------------------------------------------------------------
    // SOURCE 6: Heng An ZNX Counter-Flow Evaporative Condenser
    // From: Heng_An_Cooling_Company_Products_Catalogs.pdf (p.27-28)
    // ------------------------------------------------------------------
    {
      id: "hengan-znx",
      kind: "condenser",
      manufacturer: "Heng An Cooling (Weifang Heng An Radiator Group)",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u ng\u01b0\u1ee3c d\u00f2ng ZNX (Heng An)", en: "Heng An ZNX Counter-Flow Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i ki\u1ec3u ng\u01b0\u1ee3c d\u00f2ng, kh\u00f4ng d\u00f9ng t\u1ea5m t\u1ea3n nhi\u1ec7t, \u0111\u1ecba kh\u00f4ng gian nh\u1ecf.",
        en: "Counter-flow evaporative condenser, no infill fill needed, compact footprint."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh t\u1ed5ng nhi\u1ec7t th\u1ea3i h\u1ec7 th\u1ed1ng (nhi\u1ec7t l\u1ea1nh + c\u00f4ng su\u1ea5t tr\u1ee5c n\u00e9n).",
          "X\u00e1c \u0111\u1ecbnh m\u00f4i ch\u1ea5t, nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh R theo b\u1ea3ng.",
          "T\u1ea3i hi\u1ec7u ch\u1ec9nh = t\u1ed5ng nhi\u1ec7t th\u1ea3i \u00d7 R.",
          "Ch\u1ecdn model c\u00f3 c\u00f4ng su\u1ea5t \u0111\u1ecbnh m\u1ee9c b\u1eb1ng ho\u1eb7c l\u1edbn h\u01a1n g\u1ea7n nh\u1ea5t."
        ],
        en: [
          "Confirm total system heat rejection (refrigeration capacity + compressor shaft power).",
          "Confirm refrigerant, condensation temperature, and wet bulb temperature.",
          "Look up correction coefficient R from the table.",
          "Corrected Heat Rejection = Total Heat Rejection x R.",
          "Select the model with rated capacity equal to or greater than the corrected value."
        ]
      },
      models: [
        { model: "ZNX-320", heatRejection: 320, fanQty: 1, fanAirFlow: 65000, fanPower: 4,   pumpFlow: 28,  pumpPower: 0.75, pipeDN: "DN80", shipWeight: 1610, operWeight: 2420, A: 1925, B: 1840, H: 3650 },
        { model: "ZNX-380", heatRejection: 380, fanQty: 1, fanAirFlow: 65000, fanPower: 4,   pumpFlow: 36,  pumpPower: 1.1,  pipeDN: "DN80", shipWeight: 1790, operWeight: 2580, A: 1925, B: 1840, H: 3650 },
        { model: "ZNX-475", heatRejection: 475, fanQty: 1, fanAirFlow: 72000, fanPower: 5.5, pumpFlow: 53,  pumpPower: 1.1,  pipeDN: "DN80", shipWeight: 2250, operWeight: 3220, A: 1925, B: 1840, H: 3840 },
        { model: "ZNX-595", heatRejection: 595, fanQty: 1, fanAirFlow: 78000, fanPower: 5.5, pumpFlow: 70,  pumpPower: 1.5,  pipeDN: "DN80", shipWeight: 2410, operWeight: 3530, A: 2470, B: 1840, H: 4010 },
        { model: "ZNX-735", heatRejection: 735, fanQty: 1, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 70,  pumpPower: 1.5,  pipeDN: "DN80", shipWeight: 2690, operWeight: 3820, A: 2470, B: 1840, H: 4010 },
        { model: "ZNX-850", heatRejection: 850, fanQty: 2, fanAirFlow: 77000, fanPower: 5.5, pumpFlow: 120, pumpPower: 3,    pipeDN: "DN100", shipWeight: 4890, operWeight: 7520, A: 3770, B: 1840, H: 4310 },
        { model: "ZNX-1050", heatRejection: 1050, fanQty: 2, fanAirFlow: 77000, fanPower: 5.5, pumpFlow: 120, pumpPower: 3, pipeDN: "DN100", shipWeight: 5120, operWeight: 7750, A: 3770, B: 1840, H: 4310 },
        { model: "ZNX-1285", heatRejection: 1285, fanQty: 2, fanAirFlow: 80000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3, pipeDN: "2-DN100", shipWeight: 6320, operWeight: 9020, A: 3770, B: 2380, H: 4510 },
        { model: "ZNX-1490", heatRejection: 1490, fanQty: 2, fanAirFlow: 125000, fanPower: 11, pumpFlow: 150, pumpPower: 3, pipeDN: "2-DN100", shipWeight: 6490, operWeight: 9190, A: 3770, B: 2380, H: 4590 },
        { model: "ZNX-1765", heatRejection: 1765, fanQty: 3, fanAirFlow: 77000, fanPower: 5.5, pumpFlow: 233, pumpPower: 5.5, pipeDN: "2-DN100", shipWeight: 8400, operWeight: 12450, A: 5610, B: 2380, H: 4550 },
        { model: "ZNX-2010", heatRejection: 2010, fanQty: 3, fanAirFlow: 80000, fanPower: 5.5, pumpFlow: 233, pumpPower: 5.5, pipeDN: "4-DN100", shipWeight: 9420, operWeight: 13460, A: 6046, B: 2380, H: 4550 },
        { model: "ZNX-2245", heatRejection: 2245, fanQty: 3, fanAirFlow: 80000, fanPower: 5.5, pumpFlow: 233, pumpPower: 5.5, pipeDN: "4-DN100", shipWeight: 9780, operWeight: 13820, A: 6046, B: 2380, H: 4630 },
        { model: "ZNX-2450", heatRejection: 2450, fanQty: 2, fanAirFlow: 125000, fanPower: 11, pumpFlow: 300, pumpPower: 3, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 13780, operWeight: 19670, A: 6046, B: 2980, H: 4830 },
        { model: "ZNX-2600", heatRejection: 2600, fanQty: 2, fanAirFlow: 180000, fanPower: 15, pumpFlow: 300, pumpPower: 3, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 14320, operWeight: 20210, A: 6046, B: 2980, H: 4830 },
        { model: "ZNX-2850", heatRejection: 2850, fanQty: 3, fanAirFlow: 125000, fanPower: 11, pumpFlow: 360, pumpPower: 4, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 16310, operWeight: 24050, A: 7240, B: 2980, H: 4830 },
        { model: "ZNX-3400", heatRejection: 3400, fanQty: 3, fanAirFlow: 140000, fanPower: 11, pumpFlow: 466, pumpPower: 5.5, pumpQty: 2, pipeDN: "4-DN100", shipWeight: 20220, operWeight: 29890, A: 8630, B: 3490, H: 4970 },
        { model: "ZNX-4200", heatRejection: 4200, fanQty: 3, fanAirFlow: 140000, fanPower: 11, pumpFlow: 466, pumpPower: 5.5, pumpQty: 2, pipeDN: "4-DN125", shipWeight: 22480, operWeight: 32280, A: 8630, B: 3490, H: 4970 },
        { model: "ZNX-5000", heatRejection: 5000, fanQty: 3, fanAirFlow: 180000, fanPower: 15, pumpFlow: 466, pumpPower: 5.5, pumpQty: 2, pipeDN: "4-DN125", shipWeight: 24750, operWeight: 35710, A: 9026, B: 3490, H: 4970 }
      ],
      correctionTables: { R717: HENGAN_CORRECTION_R717, R22_R134A: HENGAN_CORRECTION_R22_R134A }
    },

    // ------------------------------------------------------------------
    // SOURCE 7: Heng An BHX Combined-Flow Closed Circuit Cooling Tower
    // From: Heng_An_Cooling_Company_Products_Catalogs.pdf (p.11-12)
    // China-market table. Direct lookup by nominal water flow (m3/h),
    // no correction table published for this series.
    // ------------------------------------------------------------------
    {
      id: "hengan-bhx",
      kind: "coolingtower",
      manufacturer: "Heng An Cooling (Weifang Heng An Radiator Group)",
      name: { vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t kh\u00e9p k\u00edn ki\u1ec3u ph\u1ee9c h\u1ee3p l\u01b0u BHX (Heng An)", en: "Heng An BHX Combined-Flow Closed Circuit Cooling Tower" },
      shortDesc: {
        vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t khep k\u00edn, gi\u00f3 v\u00e0 n\u01b0\u1edbc phun c\u00f9ng chi\u1ec1u, gi\u1ea3m \u0111i\u1ec3m kh\u00f4 tr\u00ean b\u1ec1 m\u1eb7t \u1ed1ng.",
        en: "Closed circuit cooling tower with parallel air/spray-water flow to reduce coil dry spots."
      },
      designCondition: {
        vi: "Nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt 28.2\u00b0C, n\u01b0\u1edbc v\u00e0o 37\u00b0C, n\u01b0\u1edbc ra 32\u00b0C.",
        en: "Wet bulb temperature 28.2\u00b0C, inlet water temperature 37\u00b0C, outlet water temperature 32\u00b0C."
      },
      notes: {
        vi: ["S\u1ed1 li\u1ec7u ch\u1ec9 mang t\u00ednh tham kh\u1ea3o, kh\u00f4ng d\u00f9ng \u0111\u1ec3 ch\u1ebf t\u1ea1o; ki\u1ec3m tra l\u1ea1i khi mua h\u00e0ng."],
        en: ["Data is for reference only, not for construction; reconfirm at time of purchase."]
      },
      models: [
        { model: "BHX-30", flow: 30, fanQty: 1, fanAirFlow: 35000, fanPower: 3,   pumpFlow: 36,  pumpPower: 1.1, shipWeight: 2390, operWeight: 3790, A: 1925, B: 2380, H: 4220 },
        { model: "BHX-40", flow: 40, fanQty: 1, fanAirFlow: 45000, fanPower: 4,   pumpFlow: 45,  pumpPower: 1.1, shipWeight: 2510, operWeight: 3910, A: 1925, B: 2380, H: 4220 },
        { model: "BHX-50", flow: 50, fanQty: 1, fanAirFlow: 65000, fanPower: 5.5, pumpFlow: 45,  pumpPower: 1.1, shipWeight: 2760, operWeight: 4340, A: 1925, B: 2580, H: 4220 },
        { model: "BHX-60", flow: 60, fanQty: 1, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 65,  pumpPower: 1.5, shipWeight: 3290, operWeight: 5140, A: 1925, B: 2900, H: 4220 },
        { model: "BHX-70", flow: 70, fanQty: 1, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 65,  pumpPower: 1.5, shipWeight: 3680, operWeight: 5530, A: 1925, B: 2900, H: 4965 },
        { model: "BHX-80", flow: 80, fanQty: 2, fanAirFlow: 45000, fanPower: 4,   pumpFlow: 84,  pumpPower: 2.2, shipWeight: 4230, operWeight: 7650, A: 3770, B: 2200, H: 4220 },
        { model: "BHX-90", flow: 90, fanQty: 2, fanAirFlow: 45000, fanPower: 4,   pumpFlow: 84,  pumpPower: 2.2, shipWeight: 4510, operWeight: 7930, A: 3770, B: 2200, H: 4720 },
        { model: "BHX-100", flow: 100, fanQty: 2, fanAirFlow: 45000, fanPower: 4, pumpFlow: 84,  pumpPower: 2.2, shipWeight: 4620, operWeight: 8040, A: 3770, B: 2200, H: 4965 },
        { model: "BHX-110", flow: 110, fanQty: 3, fanAirFlow: 40000, fanPower: 3, pumpFlow: 120, pumpPower: 3,   shipWeight: 6170, operWeight: 10170, A: 4240, B: 2200, H: 4720 },
        { model: "BHX-125", flow: 125, fanQty: 3, fanAirFlow: 45000, fanPower: 4, pumpFlow: 120, pumpPower: 3,   shipWeight: 6510, operWeight: 10510, A: 4240, B: 2200, H: 4965 },
        { model: "BHX-135", flow: 135, fanQty: 4, fanAirFlow: 45000, fanPower: 3, pumpFlow: 120, pumpPower: 3,   shipWeight: 7100, operWeight: 11950, A: 5610, B: 2200, H: 4220 },
        { model: "BHX-150", flow: 150, fanQty: 4, fanAirFlow: 40000, fanPower: 3, pumpFlow: 120, pumpPower: 3,   shipWeight: 7310, operWeight: 12160, A: 5610, B: 2200, H: 4730 },
        { model: "BHX-165", flow: 165, fanQty: 4, fanAirFlow: 45000, fanPower: 4, pumpFlow: 120, pumpPower: 3,   shipWeight: 7590, operWeight: 12440, A: 5610, B: 2200, H: 4965 },
        { model: "BHX-180", flow: 183, fanQty: 4, fanAirFlow: 45000, fanPower: 4, pumpFlow: 170, pumpPower: 4,   shipWeight: 8920, operWeight: 15580, A: 7450, B: 2200, H: 4220 },
        { model: "BHX-200", flow: 200, fanQty: 4, fanAirFlow: 45000, fanPower: 4, pumpFlow: 230, pumpPower: 5.5, shipWeight: 9330, operWeight: 15990, A: 7450, B: 2200, H: 4720 },
        { model: "BHX-225", flow: 226, fanQty: 4, fanAirFlow: 45000, fanPower: 4, pumpFlow: 230, pumpPower: 5.5, shipWeight: 9550, operWeight: 16210, A: 7450, B: 2200, H: 4965 },
        { model: "BHX-250", flow: 250, fanQty: 5, fanAirFlow: 45000, fanPower: 4, pumpFlow: 230, pumpPower: 5.5, shipWeight: 11650, operWeight: 19090, A: 9300, B: 2200, H: 4720 },
        { model: "BHX-265", flow: 265, fanQty: 5, fanAirFlow: 45000, fanPower: 4, pumpFlow: 230, pumpPower: 5.5, shipWeight: 12350, operWeight: 19790, A: 9300, B: 2200, H: 4965 },
        { model: "BHX-280", flow: 280, fanQty: 6, fanAirFlow: 45000, fanPower: 4, pumpFlow: 230, pumpPower: 5.5, shipWeight: 12490, operWeight: 19930, A: 9300, B: 2200, H: 4965 }
      ]
    },

    // ------------------------------------------------------------------
    // SOURCE 8: Heng An BNX Counter-Flow Closed Circuit Cooling Tower
    // From: Heng_An_Cooling_Company_Products_Catalogs.pdf (p.15-16)
    // ------------------------------------------------------------------
    {
      id: "hengan-bnx",
      kind: "coolingtower",
      manufacturer: "Heng An Cooling (Weifang Heng An Radiator Group)",
      name: { vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t kh\u00e9p k\u00edn ki\u1ec3u ng\u01b0\u1ee3c d\u00f2ng BNX (Heng An)", en: "Heng An BNX Counter-Flow Closed Circuit Cooling Tower" },
      shortDesc: {
        vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t kh\u00e9p k\u00edn ki\u1ec3u ng\u01b0\u1ee3c d\u00f2ng, kh\u00f4ng d\u00f9ng t\u1ea5m t\u1ea3n nhi\u1ec7t, ph\u00f9 h\u1ee3p ch\u1ea5t l\u1ecfng nhi\u1ec7t \u0111\u1ed9 cao.",
        en: "Counter-flow closed circuit cooling tower, no infill fill, suitable for high-temperature fluids."
      },
      designCondition: {
        vi: "Nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt 28.2\u00b0C, n\u01b0\u1edbc v\u00e0o 37\u00b0C, n\u01b0\u1edbc ra 32\u00b0C.",
        en: "Wet bulb temperature 28.2\u00b0C, inlet water temperature 37\u00b0C, outlet water temperature 32\u00b0C."
      },
      notes: {
        vi: ["S\u1ed1 li\u1ec7u ch\u1ec9 mang t\u00ednh tham kh\u1ea3o, kh\u00f4ng d\u00f9ng \u0111\u1ec3 ch\u1ebf t\u1ea1o; ki\u1ec3m tra l\u1ea1i khi mua h\u00e0ng."],
        en: ["Data is for reference only, not for construction; reconfirm at time of purchase."]
      },
      models: [
        { model: "BNX-10", flow: 12, fanQty: 1, fanAirFlow: 18000, fanPower: 1.5, pumpFlow: 23, pumpPower: 0.55, shipWeight: 890,  operWeight: 1660,  A: 1230, B: 1150, H: 3440 },
        { model: "BNX-20", flow: 21, fanQty: 1, fanAirFlow: 30000, fanPower: 2.2, pumpFlow: 28, pumpPower: 0.75, shipWeight: 1370, operWeight: 2480,  A: 1925, B: 1150, H: 3650 },
        { model: "BNX-30", flow: 33, fanQty: 1, fanAirFlow: 45000, fanPower: 3,   pumpFlow: 28, pumpPower: 0.75, shipWeight: 1990, operWeight: 3620,  A: 1925, B: 1840, H: 3840 },
        { model: "BNX-40", flow: 43, fanQty: 1, fanAirFlow: 60000, fanPower: 4,   pumpFlow: 45, pumpPower: 1.1,  shipWeight: 2120, operWeight: 3790,  A: 1925, B: 1840, H: 4220 },
        { model: "BNX-50", flow: 51, fanQty: 1, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 65, pumpPower: 1.5,  shipWeight: 2420, operWeight: 4490,  A: 2470, B: 1840, H: 4220 },
        { model: "BNX-60", flow: 61, fanQty: 1, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 65, pumpPower: 1.5,  shipWeight: 2690, operWeight: 4760,  A: 2470, B: 1840, H: 4450 },
        { model: "BNX-70", flow: 70, fanQty: 1, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 84, pumpPower: 2.2, shipWeight: 3650, operWeight: 6080,  A: 2790, B: 1840, H: 4450 },
        { model: "BNX-80", flow: 80, fanQty: 2, fanAirFlow: 65000, fanPower: 4,   pumpFlow: 84, pumpPower: 2.2,  shipWeight: 4150, operWeight: 7480,  A: 3770, B: 1840, H: 4220 },
        { model: "BNX-90", flow: 90, fanQty: 2, fanAirFlow: 65000, fanPower: 4,   pumpFlow: 84, pumpPower: 2.2,  shipWeight: 4680, operWeight: 8010,  A: 3770, B: 1840, H: 4450 },
        { model: "BNX-100", flow: 100, fanQty: 2, fanAirFlow: 65000, fanPower: 4, pumpFlow: 84,  pumpPower: 2.2, shipWeight: 5120, operWeight: 8450,  A: 3770, B: 1840, H: 4450 },
        { model: "BNX-110", flow: 110, fanQty: 2, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 120, pumpPower: 3, shipWeight: 5360, operWeight: 9430,  A: 3770, B: 2200, H: 4220 },
        { model: "BNX-125", flow: 125, fanQty: 2, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 120, pumpPower: 3, shipWeight: 5980, operWeight: 10050, A: 3770, B: 2200, H: 4450 },
        { model: "BNX-135", flow: 135, fanQty: 2, fanAirFlow: 87000, fanPower: 5.5, pumpFlow: 170, pumpPower: 4, shipWeight: 6230, operWeight: 11270, A: 4846, B: 2200, H: 4350 },
        { model: "BNX-150", flow: 150, fanQty: 2, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 170, pumpPower: 4, shipWeight: 6560, operWeight: 11590, A: 4846, B: 2200, H: 4650 },
        { model: "BNX-165", flow: 165, fanQty: 3, fanAirFlow: 65000, fanPower: 4, pumpFlow: 170, pumpPower: 4, shipWeight: 7850, operWeight: 13730, A: 5610, B: 2200, H: 4350 },
        { model: "BNX-180", flow: 183, fanQty: 3, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 170, pumpPower: 4, shipWeight: 8450, operWeight: 14330, A: 5610, B: 2200, H: 4650 },
        { model: "BNX-200", flow: 200, fanQty: 3, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 170, pumpPower: 4, shipWeight: 9180, operWeight: 15380, A: 6046, B: 2200, H: 4650 },
        { model: "BNX-225", flow: 225, fanQty: 3, fanAirFlow: 87000, fanPower: 7.5, pumpFlow: 230, pumpPower: 5.5, shipWeight: 9780, operWeight: 17340, A: 7230, B: 2200, H: 4650 },
        { model: "BNX-250", flow: 250, fanQty: 4, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 120, pumpPower: 3, pumpQty: 2, shipWeight: 10860, operWeight: 18520, A: 7450, B: 2200, H: 4650 },
        { model: "BNX-265", flow: 265, fanQty: 4, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 170, pumpPower: 4, pumpQty: 2, shipWeight: 11480, operWeight: 20880, A: 9030, B: 2200, H: 4965 },
        { model: "BNX-280", flow: 280, fanQty: 4, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 170, pumpPower: 4, pumpQty: 2, shipWeight: 11720, operWeight: 21120, A: 9030, B: 2200, H: 4965 }
      ]
    },

    // ------------------------------------------------------------------
    // SOURCE 9: OceanBlue ECB Cross-Flow Evaporative Condenser
    // From: OCEANBLUE_Evaporative_Condenser__NEW_.pdf (p.7-9)
    // ------------------------------------------------------------------
    {
      id: "oceanblue-ecb",
      kind: "condenser",
      manufacturer: "Yantai OceanBlue Refrigeration Engineering Co., Ltd",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u d\u00f2ng ch\u00e9o ECB (OceanBlue)", en: "OceanBlue ECB Cross-Flow Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i ki\u1ec3u d\u00f2ng ch\u00e9o, d\u00f9ng cho kho l\u1ea1nh, nh\u00e0 m\u00e1y b\u01b0\u1edbm.",
        en: "Cross-flow evaporative condenser, widely used for cold storage and ice plants."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh t\u1ed5ng c\u00f4ng su\u1ea5t l\u1ea1nh + c\u00f4ng su\u1ea5t tr\u1ee5c n\u00e9n c\u1ee7a c\u00e1c m\u00e1y n\u00e9n.",
          "X\u00e1c \u0111\u1ecbnh nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt s\u1eed d\u1ee5ng.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh R theo b\u1ea3ng t\u01b0\u01a1ng \u1ee9ng v\u1edbi m\u00f4i ch\u1ea5t.",
          "T\u1ed5ng c\u00f4ng su\u1ea5t ng\u01b0ng t\u1ee5 c\u1ea7n = (t\u1ed5ng l\u1ea1nh + tr\u1ee5c n\u00e9n) \u00d7 R.",
          "Ch\u1ecdn model OceanBlue c\u00f3 c\u00f4ng su\u1ea5t ng\u01b0ng t\u1ee5 \u2265 gi\u00e1 tr\u1ecb v\u1eeba t\u00ednh."
        ],
        en: [
          "Confirm total cooling capacity and motor shaft power of the compressors.",
          "Confirm the condensing temperature and wet bulb temperature.",
          "Look up correction factor R from the table for the refrigerant used.",
          "Total required condensing capacity = (cooling capa. + motor capa.) x R.",
          "Select an OceanBlue model with condensing capacity >= the calculated value."
        ]
      },
      models: [
        { model: "ECB300",  heatRejection: 300,  fanQty: 2, fanAirFlow: 56000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN80/DN65",  shipWeight: 2350,  operWeight: 3600,  A: 2460, B: 1850, H: 3715 },
        { model: "ECB350",  heatRejection: 350,  fanQty: 2, fanAirFlow: 56000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN80/DN65",  shipWeight: 2490,  operWeight: 3850,  A: 2460, B: 1950, H: 3715 },
        { model: "ECB400",  heatRejection: 400,  fanQty: 2, fanAirFlow: 56000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN80/DN65",  shipWeight: 2630,  operWeight: 4100,  A: 2460, B: 2100, H: 3715 },
        { model: "ECB450",  heatRejection: 450,  fanQty: 2, fanAirFlow: 60000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 2840,  operWeight: 4240,  A: 2460, B: 2150, H: 3940 },
        { model: "ECB500",  heatRejection: 500,  fanQty: 2, fanAirFlow: 60000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 3110,  operWeight: 4910,  A: 2700, B: 2250, H: 3715 },
        { model: "ECB550",  heatRejection: 550,  fanQty: 2, fanAirFlow: 60000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 3270,  operWeight: 4980,  A: 2700, B: 2200, H: 3940 },
        { model: "ECB600",  heatRejection: 600,  fanQty: 2, fanAirFlow: 60000, fanPower: 2.2, pumpFlow: 12.5, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 3440,  operWeight: 5250,  A: 2700, B: 2250, H: 3940 },
        { model: "ECB650",  heatRejection: 650,  fanQty: 3, fanAirFlow: 90000, fanPower: 2.2, pumpFlow: 13.9, pumpPower: 3,   pipeDN: "DN100/DN65", shipWeight: 3790,  operWeight: 5680,  A: 3690, B: 2100, H: 4240 },
        { model: "ECB700",  heatRejection: 700,  fanQty: 3, fanAirFlow: 90000, fanPower: 2.2, pumpFlow: 13.9, pumpPower: 3,   pipeDN: "DN100/DN65", shipWeight: 3960,  operWeight: 5910,  A: 3690, B: 2150, H: 4240 },
        { model: "ECB750",  heatRejection: 750,  fanQty: 3, fanAirFlow: 90000, fanPower: 2.2, pumpFlow: 13.9, pumpPower: 3,   pipeDN: "DN100/DN65", shipWeight: 4300,  operWeight: 6700,  A: 3690, B: 2200, H: 4240 },
        { model: "ECB800",  heatRejection: 800,  fanQty: 3, fanAirFlow: 90000, fanPower: 2.2, pumpFlow: 13.9, pumpPower: 3,   pipeDN: "DN100/DN65", shipWeight: 4470,  operWeight: 6950,  A: 3690, B: 2250, H: 4240 },
        { model: "ECB850",  heatRejection: 850,  fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 13.9, pumpPower: 3,  pipeDN: "DN100/DN65", shipWeight: 4850,  operWeight: 7350,  A: 4240, B: 2150, H: 4240 },
        { model: "ECB900",  heatRejection: 900,  fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 24.7, pumpPower: 4,  pipeDN: "DN100/DN65", shipWeight: 5010,  operWeight: 7920,  A: 4240, B: 2200, H: 4295 },
        { model: "ECB950",  heatRejection: 950,  fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 24.7, pumpPower: 4,  pipeDN: "DN100/DN65", shipWeight: 5230,  operWeight: 8270,  A: 4240, B: 2250, H: 4295 },
        { model: "ECB1000", heatRejection: 1000, fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 24.7, pumpPower: 4, pipeDN: "DN125/DN80", shipWeight: 5450,  operWeight: 8980,  A: 5000, B: 2150, H: 4295 },
        { model: "ECB1050", heatRejection: 1050, fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 24.7, pumpPower: 4, pipeDN: "DN125/DN80", shipWeight: 5610,  operWeight: 9260,  A: 5000, B: 2200, H: 4295 },
        { model: "ECB1100", heatRejection: 1100, fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 24.7, pumpPower: 4, pipeDN: "DN125/DN80", shipWeight: 5770,  operWeight: 9430,  A: 5000, B: 2200, H: 4295 },
        { model: "ECB1150", heatRejection: 1150, fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 24.7, pumpPower: 4, pipeDN: "DN125/DN80", shipWeight: 5920,  operWeight: 9700,  A: 5000, B: 2250, H: 4295 },
        { model: "ECB1200", heatRejection: 1200, fanQty: 4, fanAirFlow: 120000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN125/DN80", shipWeight: 6280, operWeight: 10160, A: 5600, B: 2200, H: 4320 },
        { model: "ECB1250", heatRejection: 1250, fanQty: 5, fanAirFlow: 140000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 6430, operWeight: 10400, A: 5600, B: 2200, H: 4320 },
        { model: "ECB1300", heatRejection: 1300, fanQty: 5, fanAirFlow: 140000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 6590, operWeight: 10580, A: 5600, B: 2200, H: 4320 },
        { model: "ECB1350", heatRejection: 1350, fanQty: 6, fanAirFlow: 168000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 6740, operWeight: 10840, A: 5600, B: 2200, H: 4450 },
        { model: "ECB1400", heatRejection: 1400, fanQty: 6, fanAirFlow: 168000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 6900, operWeight: 11130, A: 5600, B: 2250, H: 4450 },
        { model: "ECB1450", heatRejection: 1450, fanQty: 6, fanAirFlow: 168000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 7070, operWeight: 11320, A: 5600, B: 2250, H: 4500 },
        { model: "ECB1500", heatRejection: 1500, fanQty: 6, fanAirFlow: 168000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 7230, operWeight: 11470, A: 5600, B: 2250, H: 4500 },
        { model: "ECB1600", heatRejection: 1600, fanQty: 6, fanAirFlow: 168000, fanPower: 2.2, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 7500, operWeight: 11780, A: 5600, B: 2250, H: 4570 },
        { model: "ECB1700", heatRejection: 1700, fanQty: 3, fanAirFlow: 180000, fanPower: 4,   pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN100x2/DN65x2", shipWeight: 8150, operWeight: 13900, A: 5600, B: 2900, H: 4520 },
        { model: "ECB1800", heatRejection: 1800, fanQty: 3, fanAirFlow: 225000, fanPower: 5.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN100x2/DN65x2", shipWeight: 8410, operWeight: 14670, A: 5600, B: 3100, H: 4520 },
        { model: "ECB1900", heatRejection: 1900, fanQty: 3, fanAirFlow: 225000, fanPower: 5.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN100x2/DN65x2", shipWeight: 8670, operWeight: 15060, A: 5600, B: 3100, H: 4520 },
        { model: "ECB2000", heatRejection: 2000, fanQty: 3, fanAirFlow: 255000, fanPower: 7.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9180, operWeight: 16350, A: 5600, B: 3500, H: 4520 },
        { model: "ECB2100", heatRejection: 2100, fanQty: 3, fanAirFlow: 255000, fanPower: 7.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9420, operWeight: 16860, A: 5600, B: 3500, H: 4520 },
        { model: "ECB2200", heatRejection: 2200, fanQty: 3, fanAirFlow: 255000, fanPower: 7.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9650, operWeight: 17190, A: 5600, B: 3500, H: 4520 },
        { model: "ECB2300", heatRejection: 2300, fanQty: 3, fanAirFlow: 255000, fanPower: 7.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9910, operWeight: 17580, A: 5600, B: 3600, H: 4520 },
        { model: "ECB2400", heatRejection: 2400, fanQty: 3, fanAirFlow: 255000, fanPower: 7.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 10180, operWeight: 18020, A: 5600, B: 3600, H: 4570 }
      ],
      correctionTables: { R717: OCEANBLUE_CORRECTION_R717, R22_R134A: OCEANBLUE_CORRECTION_R22_R134A }
    },

    // ------------------------------------------------------------------
    // SOURCE 10: OceanBlue ECE Counter-Flow Evaporative Condenser
    // From: OCEANBLUE_Evaporative_Condenser__NEW_.pdf (p.10-13)
    // ------------------------------------------------------------------
    {
      id: "oceanblue-ece",
      kind: "condenser",
      manufacturer: "Yantai OceanBlue Refrigeration Engineering Co., Ltd",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u ng\u01b0\u1ee3c d\u00f2ng ECE (OceanBlue)", en: "OceanBlue ECE Counter-Flow Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i ki\u1ec3u ng\u01b0\u1ee3c d\u00f2ng.",
        en: "Counter-flow evaporative condenser."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh t\u1ed5ng c\u00f4ng su\u1ea5t l\u1ea1nh + c\u00f4ng su\u1ea5t tr\u1ee5c n\u00e9n c\u1ee7a c\u00e1c m\u00e1y n\u00e9n.",
          "X\u00e1c \u0111\u1ecbnh nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt s\u1eed d\u1ee5ng.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh R theo b\u1ea3ng t\u01b0\u01a1ng \u1ee9ng v\u1edbi m\u00f4i ch\u1ea5t.",
          "T\u1ed5ng c\u00f4ng su\u1ea5t ng\u01b0ng t\u1ee5 c\u1ea7n = (t\u1ed5ng l\u1ea1nh + tr\u1ee5c n\u00e9n) \u00d7 R.",
          "Ch\u1ecdn model OceanBlue c\u00f3 c\u00f4ng su\u1ea5t ng\u01b0ng t\u1ee5 \u2265 gi\u00e1 tr\u1ecb v\u1eeba t\u00ednh."
        ],
        en: [
          "Confirm total cooling capacity and motor shaft power of the compressors.",
          "Confirm the condensing temperature and wet bulb temperature.",
          "Look up correction factor R from the table for the refrigerant used.",
          "Total required condensing capacity = (cooling capa. + motor capa.) x R.",
          "Select an OceanBlue model with condensing capacity >= the calculated value."
        ]
      },
      models: [
        { model: "ECE300", heatRejection: 300, fanQty: 3, fanAirFlow: 40000, fanPower: 3,   pumpFlow: 6.2, pumpPower: 1.1, pipeDN: "DN80/DN65", shipWeight: 1800, operWeight: 2870, A: 2100, B: 1300, H: 3200 },
        { model: "ECE350", heatRejection: 350, fanQty: 3, fanAirFlow: 50000, fanPower: 3,   pumpFlow: 7,   pumpPower: 1.5, pipeDN: "DN80/DN65", shipWeight: 1960, operWeight: 3160, A: 2100, B: 1450, H: 3200 },
        { model: "ECE400", heatRejection: 400, fanQty: 4, fanAirFlow: 60000, fanPower: 3,   pumpFlow: 7,   pumpPower: 1.5, pipeDN: "DN80/DN65", shipWeight: 2130, operWeight: 3500, A: 2100, B: 1650, H: 3300 },
        { model: "ECE450", heatRejection: 450, fanQty: 4, fanAirFlow: 60000, fanPower: 3,   pumpFlow: 7,   pumpPower: 1.5, pipeDN: "DN100/DN65", shipWeight: 2300, operWeight: 3820, A: 2460, B: 1550, H: 3400 },
        { model: "ECE500", heatRejection: 500, fanQty: 4, fanAirFlow: 60000, fanPower: 3,   pumpFlow: 12.4, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 2460, operWeight: 4120, A: 2460, B: 1700, H: 3400 },
        { model: "ECE550", heatRejection: 550, fanQty: 5, fanAirFlow: 65000, fanPower: 5.5, pumpFlow: 12.4, pumpPower: 2.2, pipeDN: "DN80x2/DN50x2", shipWeight: 2630, operWeight: 4530, A: 2460, B: 1950, H: 3400 },
        { model: "ECE600", heatRejection: 600, fanQty: 5, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 12.4, pumpPower: 2.2, pipeDN: "DN80x2/DN50x2", shipWeight: 2950, operWeight: 5000, A: 2460, B: 2100, H: 3400 },
        { model: "ECE650", heatRejection: 650, fanQty: 5, fanAirFlow: 75000, fanPower: 5.5, pumpFlow: 12.4, pumpPower: 2.2, pipeDN: "DN80x2/DN50x2", shipWeight: 3120, operWeight: 5280, A: 2460, B: 2200, H: 3400 },
        { model: "ECE700", heatRejection: 700, fanQty: 7, fanAirFlow: 85000, fanPower: 5.5, pumpFlow: 13.9, pumpPower: 3, pipeDN: "DN80x2/DN50x2", shipWeight: 3310, operWeight: 5480, A: 2700, B: 2200, H: 3500 },
        { model: "ECE750", heatRejection: 750, fanQty: 7, fanAirFlow: 85000, fanPower: 5.5, pumpFlow: 13.9, pumpPower: 3, pipeDN: "DN80x2/DN50x2", shipWeight: 3500, operWeight: 5670, A: 2700, B: 2000, H: 3740 },
        { model: "ECE800", heatRejection: 800, fanQty: 7, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 13.9, pumpPower: 3, pipeDN: "DN100x2/DN65x2", shipWeight: 3600, operWeight: 5880, A: 2700, B: 2100, H: 3740 },
        { model: "ECE850", heatRejection: 850, fanQty: 7, fanAirFlow: 100000, fanPower: 7.5, pumpFlow: 13.9, pumpPower: 3, pipeDN: "DN100x2/DN65x2", shipWeight: 3840, operWeight: 6230, A: 2700, B: 2200, H: 3740 },
        { model: "ECE900", heatRejection: 900, fanQty: 4, fanAirFlow: 120000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 4100, operWeight: 7530, A: 3690, B: 2050, H: 3650 },
        { model: "ECE950", heatRejection: 950, fanQty: 4, fanAirFlow: 120000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 4270, operWeight: 7780, A: 3690, B: 2150, H: 3650 },
        { model: "ECE1000", heatRejection: 1000, fanQty: 4, fanAirFlow: 120000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 4400, operWeight: 7880, A: 3690, B: 2250, H: 3650 },
        { model: "ECE1050", heatRejection: 1050, fanQty: 5, fanAirFlow: 130000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 4610, operWeight: 8520, A: 3690, B: 2000, H: 3740 },
        { model: "ECE1100", heatRejection: 1100, fanQty: 5, fanAirFlow: 130000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 5130, operWeight: 9240, A: 3690, B: 2050, H: 3740 },
        { model: "ECE1150", heatRejection: 1150, fanQty: 5, fanAirFlow: 150000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 5300, operWeight: 9300, A: 4240, B: 2200, H: 3800 },
        { model: "ECE1200", heatRejection: 1200, fanQty: 5, fanAirFlow: 150000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 5550, operWeight: 9560, A: 4240, B: 2250, H: 3800 },
        { model: "ECE1250", heatRejection: 1250, fanQty: 5, fanAirFlow: 150000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 5730, operWeight: 9660, A: 4240, B: 2050, H: 4000 },
        { model: "ECE1300", heatRejection: 1300, fanQty: 5, fanAirFlow: 150000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 5980, operWeight: 10020, A: 4240, B: 2100, H: 4000 },
        { model: "ECE1350", heatRejection: 1350, fanQty: 5, fanAirFlow: 150000, fanPower: 4, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 6160, operWeight: 10210, A: 4240, B: 2200, H: 4000 },
        { model: "ECE1400", heatRejection: 1400, fanQty: 7, fanAirFlow: 170000, fanPower: 7.5, pumpFlow: 24.7, pumpPower: 4, pumpQty: 2, pipeDN: "DN100x2/DN65x2", shipWeight: 6540, operWeight: 10730, A: 5000, B: 2250, H: 3800 },
        { model: "ECE1450", heatRejection: 1450, fanQty: 7, fanAirFlow: 170000, fanPower: 7.5, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 6720, operWeight: 10970, A: 5000, B: 2000, H: 4000 },
        { model: "ECE1500", heatRejection: 1500, fanQty: 7, fanAirFlow: 170000, fanPower: 7.5, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 6900, operWeight: 11540, A: 5000, B: 2050, H: 4000 },
        { model: "ECE1600", heatRejection: 1600, fanQty: 7, fanAirFlow: 170000, fanPower: 7.5, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 7520, operWeight: 12520, A: 5000, B: 2200, H: 4000 },
        { model: "ECE1700", heatRejection: 1700, fanQty: 7, fanAirFlow: 200000, fanPower: 7.5, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 7910, operWeight: 13250, A: 5600, B: 2100, H: 4000 },
        { model: "ECE1800", heatRejection: 1800, fanQty: 3, fanAirFlow: 225000, fanPower: 5.5, pumpFlow: 27.8, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 8640, operWeight: 14250, A: 5600, B: 2200, H: 4000 },
        { model: "ECE1900", heatRejection: 1900, fanQty: 3, fanAirFlow: 225000, fanPower: 5.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 8890, operWeight: 14680, A: 5600, B: 2250, H: 4000 },
        { model: "ECE2000", heatRejection: 2000, fanQty: 3, fanAirFlow: 225000, fanPower: 5.5, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9240, operWeight: 15340, A: 5600, B: 2150, H: 4250 },
        { model: "ECE2100", heatRejection: 2100, fanQty: 2, fanAirFlow: 266000, fanPower: 11, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9680, operWeight: 16100, A: 5600, B: 2200, H: 4250 },
        { model: "ECE2200", heatRejection: 2200, fanQty: 2, fanAirFlow: 266000, fanPower: 11, pumpFlow: 39.7, pumpPower: 7.5, pipeDN: "DN125x2/DN80x2", shipWeight: 9970, operWeight: 16690, A: 5600, B: 2250, H: 4250 },
        { model: "ECE2300", heatRejection: 2300, fanQty: 2, fanAirFlow: 266000, fanPower: 11, pumpFlow: 49.4, pumpPower: 4, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 10250, operWeight: 17300, A: 5600, B: 2750, H: 4050 },
        { model: "ECE2400", heatRejection: 2400, fanQty: 2, fanAirFlow: 300000, fanPower: 11, pumpFlow: 49.4, pumpPower: 4, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 10580, operWeight: 17930, A: 5600, B: 2850, H: 4050 },
        { model: "ECE2500", heatRejection: 2500, fanQty: 2, fanAirFlow: 300000, fanPower: 11, pumpFlow: 49.4, pumpPower: 4, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 10880, operWeight: 18500, A: 5600, B: 3000, H: 4050 },
        { model: "ECE2600", heatRejection: 2600, fanQty: 2, fanAirFlow: 340000, fanPower: 15, pumpFlow: 49.4, pumpPower: 4, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 11230, operWeight: 19130, A: 5600, B: 3100, H: 4050 },
        { model: "ECE2700", heatRejection: 2700, fanQty: 2, fanAirFlow: 340000, fanPower: 15, pumpFlow: 49.4, pumpPower: 4, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 11580, operWeight: 19820, A: 5600, B: 2750, H: 4250 },
        { model: "ECE2800", heatRejection: 2800, fanQty: 2, fanAirFlow: 340000, fanPower: 15, pumpFlow: 55.6, pumpPower: 5.5, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 11870, operWeight: 20400, A: 5600, B: 2850, H: 4250 },
        { model: "ECE2900", heatRejection: 2900, fanQty: 2, fanAirFlow: 380000, fanPower: 15, pumpFlow: 55.6, pumpPower: 5.5, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 12170, operWeight: 21000, A: 5600, B: 2900, H: 4250 },
        { model: "ECE3000", heatRejection: 3000, fanQty: 2, fanAirFlow: 380000, fanPower: 15, pumpFlow: 55.6, pumpPower: 5.5, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 12460, operWeight: 21600, A: 5600, B: 3000, H: 4250 }
      ],
      correctionTables: { R717: OCEANBLUE_CORRECTION_R717, R22_R134A: OCEANBLUE_CORRECTION_R22_R134A }
    },

    // ------------------------------------------------------------------
    // SOURCE 11: OceanBlue ECBP Plate Evaporative Condenser
    // From: OCEANBLUE_Evaporative_Condenser__NEW_.pdf (p.14-17)
    // ------------------------------------------------------------------
    {
      id: "oceanblue-ecbp",
      kind: "condenser",
      manufacturer: "Yantai OceanBlue Refrigeration Engineering Co., Ltd",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ki\u1ec3u t\u1ea5m ECBP (OceanBlue)", en: "OceanBlue ECBP Plate Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i d\u00f9ng t\u1ea5m trao \u0111\u1ed5i nhi\u1ec7t, h\u1ec7 s\u1ed1 truy\u1ec1n nhi\u1ec7t cao h\u01a1n ki\u1ec3u \u1ed1ng.",
        en: "Plate-type evaporative condenser, higher heat transfer coefficient than traditional coils."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh t\u1ed5ng c\u00f4ng su\u1ea5t l\u1ea1nh + c\u00f4ng su\u1ea5t tr\u1ee5c n\u00e9n c\u1ee7a c\u00e1c m\u00e1y n\u00e9n.",
          "X\u00e1c \u0111\u1ecbnh nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt s\u1eed d\u1ee5ng.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh R theo b\u1ea3ng t\u01b0\u01a1ng \u1ee9ng v\u1edbi m\u00f4i ch\u1ea5t.",
          "T\u1ed5ng c\u00f4ng su\u1ea5t ng\u01b0ng t\u1ee5 c\u1ea7n = (t\u1ed5ng l\u1ea1nh + tr\u1ee5c n\u00e9n) \u00d7 R.",
          "Ch\u1ecdn model OceanBlue c\u00f3 c\u00f4ng su\u1ea5t ng\u01b0ng t\u1ee5 \u2265 gi\u00e1 tr\u1ecb v\u1eeba t\u00ednh."
        ],
        en: [
          "Confirm total cooling capacity and motor shaft power of the compressors.",
          "Confirm the condensing temperature and wet bulb temperature.",
          "Look up correction factor R from the table for the refrigerant used.",
          "Total required condensing capacity = (cooling capa. + motor capa.) x R.",
          "Select an OceanBlue model with condensing capacity >= the calculated value."
        ]
      },
      models: [
        { model: "ECBP300",  heatRejection: 300,  fanQty: 4, fanAirFlow: 55000, fanPower: 4,   pumpFlow: 53,  pumpPower: 1.1, pipeDN: "DN80/DN65",  shipWeight: 2100,  operWeight: 3050,  A: 1280, B: 2200, H: 3950 },
        { model: "ECBP400",  heatRejection: 400,  fanQty: 4, fanAirFlow: 60000, fanPower: 4,   pumpFlow: 53,  pumpPower: 1.1, pipeDN: "DN80/DN65",  shipWeight: 2380,  operWeight: 3600,  A: 1400, B: 2250, H: 4200 },
        { model: "ECBP500",  heatRejection: 500,  fanQty: 4, fanAirFlow: 60000, fanPower: 4,   pumpFlow: 70,  pumpPower: 1.5, pipeDN: "DN80/DN65",  shipWeight: 2650,  operWeight: 3980,  A: 1700, B: 2250, H: 4200 },
        { model: "ECBP600",  heatRejection: 600,  fanQty: 1, fanAirFlow: 65000, fanPower: 5.5, pumpFlow: 70,  pumpPower: 1.5, pipeDN: "DN100/DN65", shipWeight: 3080,  operWeight: 4720,  A: 1980, B: 2250, H: 4200 },
        { model: "ECBP700",  heatRejection: 700,  fanQty: 2, fanAirFlow: 90000, fanPower: 4,   pumpFlow: 70,  pumpPower: 1.5, pipeDN: "DN100/DN65", shipWeight: 3560,  operWeight: 5500,  A: 2290, B: 2200, H: 4200 },
        { model: "ECBP800",  heatRejection: 800,  fanQty: 2, fanAirFlow: 110000, fanPower: 4,  pumpFlow: 100, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 4010,  operWeight: 6200,  A: 2650, B: 2200, H: 4200 },
        { model: "ECBP900",  heatRejection: 900,  fanQty: 2, fanAirFlow: 110000, fanPower: 4,  pumpFlow: 100, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 4380,  operWeight: 6720,  A: 2880, B: 2200, H: 4200 },
        { model: "ECBP1000", heatRejection: 1000, fanQty: 2, fanAirFlow: 120000, fanPower: 4, pumpFlow: 100, pumpPower: 2.2, pipeDN: "DN100/DN65", shipWeight: 4830,  operWeight: 7490,  A: 3160, B: 2250, H: 4200 },
        { model: "ECBP1100", heatRejection: 1100, fanQty: 2, fanAirFlow: 120000, fanPower: 4, pumpFlow: 100, pumpPower: 2.2, pipeDN: "DN125/DN80", shipWeight: 5100,  operWeight: 7910,  A: 3470, B: 2250, H: 4200 },
        { model: "ECBP1200", heatRejection: 1200, fanQty: 2, fanAirFlow: 130000, fanPower: 5.5, pumpFlow: 150, pumpPower: 3, pipeDN: "DN125/DN80", shipWeight: 5560,  operWeight: 8670,  A: 3750, B: 2250, H: 4200 },
        { model: "ECBP1300", heatRejection: 1300, fanQty: 3, fanAirFlow: 165000, fanPower: 4, pumpFlow: 150, pumpPower: 3, pipeDN: "DN125/DN80", shipWeight: 5880,  operWeight: 9120,  A: 4050, B: 2200, H: 4200 },
        { model: "ECBP1400", heatRejection: 1400, fanQty: 3, fanAirFlow: 165000, fanPower: 4, pumpFlow: 150, pumpPower: 3, pipeDN: "DN125/DN80", shipWeight: 6130,  operWeight: 9650,  A: 4330, B: 2200, H: 4200 },
        { model: "ECBP1500", heatRejection: 1500, fanQty: 3, fanAirFlow: 180000, fanPower: 4, pumpFlow: 150, pumpPower: 3, pipeDN: "DN125/DN80", shipWeight: 6710,  operWeight: 10600, A: 4640, B: 2250, H: 4200 },
        { model: "ECBP1600", heatRejection: 1600, fanQty: 3, fanAirFlow: 180000, fanPower: 4, pumpFlow: 150, pumpPower: 3, pipeDN: "DN125/DN80", shipWeight: 6990,  operWeight: 10950, A: 5010, B: 2250, H: 4200 },
        { model: "ECBP1700", heatRejection: 1700, fanQty: 3, fanAirFlow: 195000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4, pipeDN: "DN125/DN80", shipWeight: 7570,  operWeight: 11820, A: 5320, B: 2250, H: 4200 },
        { model: "ECBP1800", heatRejection: 1800, fanQty: 3, fanAirFlow: 195000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4, pipeDN: "DN125/DN80", shipWeight: 7750,  operWeight: 12250, A: 5600, B: 2250, H: 4200 },
        { model: "ECBP1900", heatRejection: 1900, fanQty: 3, fanAirFlow: 195000, fanPower: 5.5, pumpFlow: 180, pumpPower: 4, pipeDN: "DN100x2/DN65x2", shipWeight: 8040, operWeight: 12750, A: 5910, B: 2250, H: 4200 },
        { model: "ECBP2000", heatRejection: 2000, fanQty: 4, fanAirFlow: 240000, fanPower: 4, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 8820, operWeight: 13960, A: 6100, B: 2250, H: 4200 },
        { model: "ECBP2100", heatRejection: 2100, fanQty: 4, fanAirFlow: 240000, fanPower: 4, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 9100, operWeight: 14500, A: 6400, B: 2250, H: 4200 },
        { model: "ECBP2200", heatRejection: 2200, fanQty: 4, fanAirFlow: 240000, fanPower: 4, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 9370, operWeight: 14830, A: 6780, B: 2250, H: 4200 },
        { model: "ECBP2300", heatRejection: 2300, fanQty: 4, fanAirFlow: 260000, fanPower: 5.5, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 10350, operWeight: 16560, A: 7090, B: 2250, H: 4200 },
        { model: "ECBP2400", heatRejection: 2400, fanQty: 4, fanAirFlow: 260000, fanPower: 5.5, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN100x2/DN65x2", shipWeight: 10700, operWeight: 17200, A: 7370, B: 2250, H: 4200 },
        { model: "ECBP2500", heatRejection: 2500, fanQty: 5, fanAirFlow: 300000, fanPower: 4, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN125x2/DN80x2", shipWeight: 10850, operWeight: 17530, A: 7680, B: 2250, H: 4200 },
        { model: "ECBP2600", heatRejection: 2600, fanQty: 5, fanAirFlow: 300000, fanPower: 4, pumpFlow: 233, pumpPower: 5.5, pipeDN: "DN125x2/DN80x2", shipWeight: 11150, operWeight: 17950, A: 7950, B: 2250, H: 4200 },
        { model: "ECBP2700", heatRejection: 2700, fanQty: 5, fanAirFlow: 300000, fanPower: 4, pumpFlow: 300, pumpPower: 3, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 11580, operWeight: 18600, A: 8262, B: 2250, H: 4200 },
        { model: "ECBP2800", heatRejection: 2800, fanQty: 5, fanAirFlow: 325000, fanPower: 5.5, pumpFlow: 300, pumpPower: 3, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 12260, operWeight: 19500, A: 8540, B: 2250, H: 4200 },
        { model: "ECBP2900", heatRejection: 2900, fanQty: 5, fanAirFlow: 325000, fanPower: 5.5, pumpFlow: 300, pumpPower: 3, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 12540, operWeight: 20100, A: 8850, B: 2250, H: 4200 },
        { model: "ECBP3000", heatRejection: 3000, fanQty: 5, fanAirFlow: 325000, fanPower: 5.5, pumpFlow: 300, pumpPower: 3, pumpQty: 2, pipeDN: "DN125x2/DN80x2", shipWeight: 12850, operWeight: 20520, A: 9130, B: 2250, H: 4200 }
      ],
      correctionTables: { R717: OCEANBLUE_CORRECTION_R717, R22_R134A: OCEANBLUE_CORRECTION_R22_R134A }
    },

    // ------------------------------------------------------------------
    // SOURCE 12: EVAPCO C-ATC Containerized Evaporative Condenser
    // From: Evapco_C-ATC___C-ATW_Bulletin_167_0409_1.pdf
    // heatRejection = Table 3a "kW Base" (matches the catalogue's own
    // Heat of Rejection selection method with Table 1a/2a factors).
    // A/B = Steel Support plan dimensions (length/width, mm) grouped by
    // model range; H = operating height from the engineering table.
    // fanAirFlow stored per-fan (total CFM/fanQty), converted m3/s->m3/h.
    // pumpFlow converted L/s->m3/h. ammonia = R-717 operating charge (kg);
    // multiply by 1.93 for R-22 or 1.98 for R-134a per the catalogue note.
    // ------------------------------------------------------------------
    {
      id: "evapco-catc",
      kind: "condenser",
      manufacturer: "EVAPCO, Inc.",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i d\u1ea1ng container h\u00f3a C-ATC (EVAPCO)", en: "EVAPCO C-ATC Containerized Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i h\u00fat gi\u00f3 c\u01b0\u1ee1ng b\u1ee9c, \u0111\u00f3ng g\u00f3i v\u1eeba container 20'/40', d\u00f9ng cho NH3/R22/R134a.",
        en: "Induced-draft evaporative condenser engineered to ship inside a 20'/40' shipping container, for NH3/R-22/R-134a systems."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh m\u00f4i ch\u1ea5t l\u1ea1nh, nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt kh\u00f4ng kh\u00ed y\u00eau c\u1ea7u.",
          "T\u00ednh t\u1ed5ng nhi\u1ec7t th\u1ea3i = t\u1ea3i bay h\u01a1i + t\u1ea3i m\u00e1y n\u00e9n.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh theo b\u1ea3ng h\u1ec7 s\u1ed1 (Table 1a/2a) theo m\u00f4i ch\u1ea5t l\u1ea1nh.",
          "Nh\u00e2n t\u1ed5ng nhi\u1ec7t th\u1ea3i v\u1edbi h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh \u0111\u1ec3 ra t\u1ea3i tr\u1ecdng hi\u1ec7u ch\u1ec9nh.",
          "Ch\u1ecdn model c\u00f3 c\u00f4ng su\u1ea5t (kW Base, Table 3a) b\u1eb1ng ho\u1eb7c l\u1edbn h\u01a1n g\u1ea7n nh\u1ea5t."
        ],
        en: [
          "Determine the refrigerant, condensing temperature and required wet bulb temperature.",
          "Calculate total heat of rejection = evaporator load + compressor load.",
          "Refer to the correction factor table (Table 1a/2a) for the refrigerant used.",
          "Multiply total heat of rejection by the correction factor to get the corrected heat rejection load.",
          "Select the smallest model (kW Base, Table 3a) equal to or greater than the corrected load."
        ]
      },
      models: [
        { model: "C-ATC-181", heatRejection: 780,  fanQty: 1, fanAirFlow: 60480, fanPower: 5.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 66,  shipWeight: 3420, operWeight: 4140,  A: 2731, B: 2240, H: 3423 },
        { model: "C-ATC-193", heatRejection: 832,  fanQty: 1, fanAirFlow: 66600, fanPower: 7.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 66,  shipWeight: 3420, operWeight: 4150,  A: 2731, B: 2240, H: 3423 },
        { model: "C-ATC-208", heatRejection: 896,  fanQty: 1, fanAirFlow: 64440, fanPower: 7.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 84,  shipWeight: 3890, operWeight: 4650,  A: 2731, B: 2240, H: 3613 },
        { model: "C-ATC-220", heatRejection: 948,  fanQty: 1, fanAirFlow: 62640, fanPower: 7.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 104, shipWeight: 4380, operWeight: 5180,  A: 2731, B: 2240, H: 3804 },
        { model: "C-ATC-225", heatRejection: 970,  fanQty: 1, fanAirFlow: 72360, fanPower: 11,   pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 84,  shipWeight: 3950, operWeight: 4710,  A: 2731, B: 2240, H: 3613 },
        { model: "C-ATC-241", heatRejection: 1039, fanQty: 1, fanAirFlow: 70200, fanPower: 11,   pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 104, shipWeight: 4440, operWeight: 5240,  A: 2731, B: 2240, H: 3804 },
        { model: "C-ATC-251", heatRejection: 1082, fanQty: 1, fanAirFlow: 68040, fanPower: 11,   pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", ammonia: 122, shipWeight: 4930, operWeight: 5760,  A: 2731, B: 2240, H: 3994 },
        { model: "C-ATC-264", heatRejection: 1138, fanQty: 1, fanAirFlow: 91800, fanPower: 11,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 84,  shipWeight: 4210, operWeight: 5240,  A: 3651, B: 2240, H: 3423 },
        { model: "C-ATC-282", heatRejection: 1215, fanQty: 1, fanAirFlow: 89280, fanPower: 11,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 111, shipWeight: 4850, operWeight: 5930,  A: 3651, B: 2240, H: 3613 },
        { model: "C-ATC-304", heatRejection: 1310, fanQty: 1, fanAirFlow: 86400, fanPower: 11,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 138, shipWeight: 5470, operWeight: 6600,  A: 3651, B: 2240, H: 3804 },
        { model: "C-ATC-316", heatRejection: 1362, fanQty: 1, fanAirFlow: 93600, fanPower: 15,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 138, shipWeight: 5500, operWeight: 6630,  A: 3651, B: 2240, H: 3804 },
        { model: "C-ATC-338", heatRejection: 1457, fanQty: 1, fanAirFlow: 90720, fanPower: 15,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 163, shipWeight: 6150, operWeight: 7330,  A: 3651, B: 2240, H: 3994 },
        { model: "C-ATC-329", heatRejection: 1418, fanQty: 1, fanAirFlow: 96480, fanPower: 11,   pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", ammonia: 159, shipWeight: 6300, operWeight: 7580,  A: 4261, B: 2240, H: 3915 },
        { model: "C-ATC-351", heatRejection: 1513, fanQty: 1, fanAirFlow: 104760,fanPower: 15,   pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", ammonia: 159, shipWeight: 6320, operWeight: 7610,  A: 4261, B: 2240, H: 3915 },
        { model: "C-ATC-367", heatRejection: 1582, fanQty: 1, fanAirFlow: 101520,fanPower: 15,   pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", ammonia: 191, shipWeight: 7070, operWeight: 8410,  A: 4261, B: 2240, H: 4105 },
        { model: "C-ATC-373", heatRejection: 1608, fanQty: 1, fanAirFlow: 108000,fanPower: 18.5, pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", ammonia: 191, shipWeight: 7080, operWeight: 8430,  A: 4261, B: 2240, H: 4105 },
        { model: "C-ATC-362", heatRejection: 1560, fanQty: 2, fanAirFlow: 60840, fanPower: 5.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 125, shipWeight: 6340, operWeight: 7920,  A: 5486, B: 2240, H: 3632 },
        { model: "C-ATC-387", heatRejection: 1668, fanQty: 2, fanAirFlow: 66780, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 125, shipWeight: 6350, operWeight: 7940,  A: 5486, B: 2240, H: 3632 },
        { model: "C-ATC-415", heatRejection: 1789, fanQty: 2, fanAirFlow: 64800, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 166, shipWeight: 7310, operWeight: 8970,  A: 5486, B: 2240, H: 3823 },
        { model: "C-ATC-442", heatRejection: 1905, fanQty: 2, fanAirFlow: 62820, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 204, shipWeight: 8260, operWeight: 10000, A: 5486, B: 2240, H: 4013 },
        { model: "C-ATC-453", heatRejection: 1952, fanQty: 2, fanAirFlow: 72540, fanPower: 11,   pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 166, shipWeight: 7420, operWeight: 9080,  A: 5486, B: 2240, H: 3823 },
        { model: "C-ATC-462", heatRejection: 1991, fanQty: 2, fanAirFlow: 60840, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 243, shipWeight: 9240, operWeight: 11050, A: 5486, B: 2240, H: 4204 },
        { model: "C-ATC-482", heatRejection: 2077, fanQty: 2, fanAirFlow: 70380, fanPower: 11,   pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 204, shipWeight: 8380, operWeight: 10120, A: 5486, B: 2240, H: 4013 },
        { model: "C-ATC-504", heatRejection: 2172, fanQty: 2, fanAirFlow: 68220, fanPower: 11,   pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", ammonia: 243, shipWeight: 9360, operWeight: 11170, A: 5486, B: 2240, H: 4204 }
      ],
      correctionTables: { R717: EVAPCO_CORRECTION_R717, R22_R134A: EVAPCO_CORRECTION_R22_R134A }
    },

    // ------------------------------------------------------------------
    // SOURCE 13: EVAPCO C-ATW Containerized Closed Circuit Cooler
    // From: Evapco_C-ATC___C-ATW_Bulletin_167_0409_1.pdf
    // Rated at a fixed design condition (37.7C in / 32.2C out / 25.6C WB),
    // no correction graph published -> direct lookup by required water
    // flow, same "coolingtower" pattern as WXC/BHX/BNX.
    // flow = nominal water flow at design condition (LPS -> m3/h x3.6).
    // NOTE: for 4 of the 133-size models (133-3H/4I/5I/6I) the "Nominal
    // Tonnage" table in the catalogue only publishes flow for a
    // different fan/pump suffix combination (133-3I/4J/5J/6J) than the
    // one shown in the engineering dimensions table -- flow is left
    // null for those 4 and flagged; cross-check with EVAPCO/Spectrum
    // software before final selection.
    // ------------------------------------------------------------------
    {
      id: "evapco-catw",
      kind: "coolingtower",
      manufacturer: "EVAPCO, Inc.",
      name: { vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t kh\u00e9p k\u00edn d\u1ea1ng container h\u00f3a C-ATW (EVAPCO)", en: "EVAPCO C-ATW Containerized Closed Circuit Cooler" },
      shortDesc: {
        vi: "Th\u00e1p gi\u1ea3i nhi\u1ec7t v\u00f2ng kh\u00e9p k\u00edn, \u0111\u00f3ng g\u00f3i v\u1eeba container 20'/40', n\u01b0\u1edbc tu\u1ea7n ho\u00e0n t\u00e1ch bi\u1ec7t v\u1edbi m\u00f4i tr\u01b0\u1eddng ngo\u00e0i.",
        en: "Closed-loop cooler engineered to ship inside a 20'/40' shipping container, with process fluid isolated from the outside environment."
      },
      designCondition: {
        vi: "Nhi\u1ec7t \u0111\u1ed9 n\u01b0\u1edbc v\u00e0o 37.7\u00b0C, nhi\u1ec7t \u0111\u1ed9 n\u01b0\u1edbc ra 32.2\u00b0C, nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt 25.6\u00b0C. L\u01b0u l\u01b0\u1ee3ng \u0111\u1ecbnh m\u1ee9c trong b\u1ea3ng l\u00e0 c\u00f4ng su\u1ea5t l\u00e0m m\u00e1t \u1edf \u0111i\u1ec1u ki\u1ec7n n\u00e0y.",
        en: "Inlet water temperature 37.7\u00b0C, outlet water temperature 32.2\u00b0C, wet bulb temperature 25.6\u00b0C. The nominal flow rate in the table is the cooling capacity at this condition."
      },
      notes: {
        vi: [
          "N\u1ebfu kh\u00f4ng d\u00f9ng glycol, ph\u1ea3i duy tr\u00ec l\u01b0u l\u01b0\u1ee3ng t\u1ed1i thi\u1ec3u qua d\u00e0n \u0111\u1ec3 tr\u00e1nh \u0111\u00f3ng b\u0103ng khi nhi\u1ec7t \u0111\u1ed9 n\u01b0\u1edbc trong d\u00e0n xu\u1ed1ng d\u01b0\u1edbi 10\u00b0C.",
          "4 model C-ATW-133-3H/4I/5I/6I: catalogue g\u1ed1c kh\u00f4ng c\u00f4ng b\u1ed1 l\u01b0u l\u01b0\u1ee3ng \u0111\u1ecbnh m\u1ee9c ri\u00eang cho c\u1ea5u h\u00ecnh qu\u1ea1t/b\u01a1m n\u00e0y (b\u1ea3ng \"Nominal Tonnage\" ch\u1ec9 c\u00f3 133-3I/4J/5J/6J) \u2014 vui l\u00f2ng li\u00ean h\u1ec7 EVAPCO ho\u1eb7c d\u00f9ng ph\u1ea7n m\u1ec1m Spectrum \u0111\u1ec3 x\u00e1c nh\u1eadn tr\u01b0\u1edbc khi ch\u1ecdn."
        ],
        en: [
          "If glycol is not used, a minimum flow rate must be maintained through the coil to protect against freezing when coil water temperature drops below 50\u00b0F (10\u00b0C).",
          "For 4 models (C-ATW-133-3H/4I/5I/6I): the catalogue's \"Nominal Tonnage\" table only publishes a nominal flow rating for a different fan/pump suffix combination (133-3I/4J/5J/6J) than shown in the engineering dimensions table \u2014 please confirm with EVAPCO or the Spectrum selection software before final selection."
        ]
      },
      models: [
        { model: "C-ATW-67-3H",  flow: 54.36,  fanQty: 1, fanAirFlow: 61200, fanPower: 5.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 3420, operWeight: 4560,  A: 2731, B: 2240, H: 3423 },
        { model: "C-ATW-67-3I",  flow: 61.56,  fanQty: 1, fanAirFlow: 68400, fanPower: 7.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 3420, operWeight: 4560,  A: 2731, B: 2240, H: 3423 },
        { model: "C-ATW-67-4I",  flow: 73.44,  fanQty: 1, fanAirFlow: 64800, fanPower: 7.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 3890, operWeight: 5200,  A: 2731, B: 2240, H: 3613 },
        { model: "C-ATW-67-4J",  flow: 84.60,  fanQty: 1, fanAirFlow: 72000, fanPower: 11,   pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 3950, operWeight: 5260,  A: 2731, B: 2240, H: 3613 },
        { model: "C-ATW-67-5I",  flow: 80.64,  fanQty: 1, fanAirFlow: 61200, fanPower: 7.5,  pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 4380, operWeight: 5860,  A: 2731, B: 2240, H: 3804 },
        { model: "C-ATW-67-5J",  flow: 92.88,  fanQty: 1, fanAirFlow: 72000, fanPower: 11,   pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 4440, operWeight: 5910,  A: 2731, B: 2240, H: 3804 },
        { model: "C-ATW-67-6J",  flow: 97.20,  fanQty: 1, fanAirFlow: 68400, fanPower: 11,   pumpFlow: 92.88,  pumpPower: 1.5, pipeDN: "200mm", shipWeight: 4930, operWeight: 6570,  A: 2731, B: 2240, H: 3994 },
        { model: "C-ATW-89-3J",  flow: 95.04,  fanQty: 1, fanAirFlow: 93600, fanPower: 11,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 4210, operWeight: 5790,  A: 3651, B: 2240, H: 3423 },
        { model: "C-ATW-89-4J",  flow: 111.60, fanQty: 1, fanAirFlow: 90000, fanPower: 11,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 4850, operWeight: 6650,  A: 3651, B: 2240, H: 3613 },
        { model: "C-ATW-89-5J",  flow: 122.04, fanQty: 1, fanAirFlow: 86400, fanPower: 11,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 5470, operWeight: 7500,  A: 3651, B: 2240, H: 3804 },
        { model: "C-ATW-89-5K",  flow: 133.20, fanQty: 1, fanAirFlow: 93600, fanPower: 15,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 5500, operWeight: 7530,  A: 3651, B: 2240, H: 3804 },
        { model: "C-ATW-89-6K",  flow: 138.96, fanQty: 1, fanAirFlow: 90000, fanPower: 15,   pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 6150, operWeight: 8400,  A: 3651, B: 2240, H: 3994 },
        { model: "C-ATW-103-5J", flow: 135.72, fanQty: 1, fanAirFlow: 97200, fanPower: 11,   pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 6300, operWeight: 8630,  A: 4261, B: 2240, H: 3915 },
        { model: "C-ATW-103-5K", flow: 148.32, fanQty: 1, fanAirFlow: 104400,fanPower: 15,   pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 6320, operWeight: 8650,  A: 4261, B: 2240, H: 3915 },
        { model: "C-ATW-103-6K", flow: 154.08, fanQty: 1, fanAirFlow: 100800,fanPower: 15,   pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 7070, operWeight: 9660,  A: 4261, B: 2240, H: 4105 },
        { model: "C-ATW-103-6L", flow: 164.88, fanQty: 1, fanAirFlow: 108000,fanPower: 18.5, pumpFlow: 136.08, pumpPower: 2.2, pipeDN: "250mm", shipWeight: 7080, operWeight: 9670,  A: 4261, B: 2240, H: 4105 },
        { model: "C-ATW-133-3H", flow: null,   fanQty: 2, fanAirFlow: 61200, fanPower: 5.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 6340, operWeight: 8740,  A: 5486, B: 2240, H: 3632 },
        { model: "C-ATW-133-3I", flow: 138.24, fanQty: 2, fanAirFlow: 66600, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 6350, operWeight: 8750,  A: 5486, B: 2240, H: 3632 },
        { model: "C-ATW-133-4I", flow: null,   fanQty: 2, fanAirFlow: 64800, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 7310, operWeight: 10040, A: 5486, B: 2240, H: 3823 },
        { model: "C-ATW-133-4J", flow: 178.20, fanQty: 2, fanAirFlow: 72000, fanPower: 11,   pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 7420, operWeight: 10160, A: 5486, B: 2240, H: 3823 },
        { model: "C-ATW-133-5I", flow: null,   fanQty: 2, fanAirFlow: 63000, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 8260, operWeight: 11340, A: 5486, B: 2240, H: 4013 },
        { model: "C-ATW-133-5J", flow: 193.32, fanQty: 2, fanAirFlow: 70200, fanPower: 11,   pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 8380, operWeight: 11450, A: 5486, B: 2240, H: 4013 },
        { model: "C-ATW-133-6I", flow: null,   fanQty: 2, fanAirFlow: 61200, fanPower: 7.5,  pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 9240, operWeight: 12650, A: 5486, B: 2240, H: 4204 },
        { model: "C-ATW-133-6J", flow: 201.60, fanQty: 2, fanAirFlow: 68400, fanPower: 11,   pumpFlow: 181.44, pumpPower: 4,   pipeDN: "300mm", shipWeight: 9360, operWeight: 12760, A: 5486, B: 2240, H: 4204 }
      ]
    },

    // ------------------------------------------------------------------
    // SOURCE 14: EVAPCO ATC-E Evaporative Condenser
    // From: ATC-E_CONDENSER_CATALOGUE (Bulletin 153B-Metric), "-1g" =
    // standard 1.0g IBC seismic design.
    // heatRejection = Table 3 "kW Base" (the full 216-model standard
    // selection list). Engineering dimensions/weights/fan/pump data come
    // from the per-range "Engineering Dimensions & Data" tables (7-16 in
    // the bulletin, covering ATC-50E-1g up to ATC-967E-1g).
    // IMPORTANT: this source only includes the 137 models where the
    // engineering-data table row and the Table 3 kW Base list agreed on
    // the exact model name after transcription from the scanned bulletin
    // (no digital text layer). 21 rows that could not be cross-validated
    // this way were dropped rather than guessed, and the largest frame
    // sizes (ATC-858E-1g and up, roughly >600 ammonia tons) were not
    // attempted in this pass -- see chat notes. Cross-check final
    // selections against EVAPCO's iES program or the original bulletin.
    // A = per-model Length L (mm), B = frame width constant per
    // Steel Support table (mm), H = per-model Height (mm); Upper/Lower/
    // Coil sub-dimensions were dropped for schema simplicity.
    // ------------------------------------------------------------------
    {
      id: "evapco-atce",
      kind: "condenser",
      manufacturer: "EVAPCO, Inc.",
      name: { vi: "D\u00e0n ng\u01b0ng b\u1eb1ng h\u01a1i ATC-E (EVAPCO)", en: "EVAPCO ATC-E Evaporative Condenser" },
      shortDesc: {
        vi: "D\u00e0n ng\u01b0ng bay h\u01a1i h\u00fat gi\u00f3 c\u01b0\u1ee1ng b\u1ee9c, thi\u1ebft k\u1ebf ti\u00eau chu\u1ea9n IBC (\u0111\u1ecba ch\u1ea5n 1.0g), d\u00f9ng cho NH3/R22/R134a.",
        en: "Induced-draft evaporative condenser with standard IBC 1.0g seismic design, for NH3/R-22/R-134a systems."
      },
      selectionProcedure: {
        vi: [
          "X\u00e1c \u0111\u1ecbnh m\u00f4i ch\u1ea5t l\u1ea1nh, nhi\u1ec7t \u0111\u1ed9 ng\u01b0ng t\u1ee5 v\u00e0 nhi\u1ec7t \u0111\u1ed9 b\u1ea7u \u01b0\u1edbt kh\u00f4ng kh\u00ed y\u00eau c\u1ea7u.",
          "T\u00ednh t\u1ed5ng nhi\u1ec7t th\u1ea3i = t\u1ea3i bay h\u01a1i + t\u1ea3i m\u00e1y n\u00e9n.",
          "Tra h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh theo b\u1ea3ng h\u1ec7 s\u1ed1 (Table 1/2) theo m\u00f4i ch\u1ea5t l\u1ea1nh.",
          "Nh\u00e2n t\u1ed5ng nhi\u1ec7t th\u1ea3i v\u1edbi h\u1ec7 s\u1ed1 hi\u1ec7u ch\u1ec9nh \u0111\u1ec3 ra t\u1ea3i tr\u1ecdng hi\u1ec7u ch\u1ec9nh.",
          "Ch\u1ecdn model c\u00f3 c\u00f4ng su\u1ea5t (kW Base, Table 3) b\u1eb1ng ho\u1eb7c l\u1edbn h\u01a1n g\u1ea7n nh\u1ea5t."
        ],
        en: [
          "Determine the refrigerant, condensing temperature and required wet bulb temperature.",
          "Calculate total heat of rejection = evaporator load + compressor load.",
          "Refer to the correction factor table (Table 1/2) for the refrigerant used.",
          "Multiply total heat of rejection by the correction factor to get the corrected heat rejection load.",
          "Select the smallest model (kW Base, Table 3) equal to or greater than the corrected load."
        ]
      },
      models: [
        { model: "ATC-50E-1g", heatRejection: 215, fanQty: 1, fanAirFlow: 20160, fanPower: 2.2, pumpFlow: 30.6, pumpPower: 0.55, pipeDN: "150mm", ammonia: 23, shipWeight: 1195, operWeight: 1730, A: 1826, B: 1226, H: 2619 },
        { model: "ATC-65E-1g", heatRejection: 280, fanQty: 1, fanAirFlow: 21240, fanPower: 4, pumpFlow: 30.6, pumpPower: 0.55, pipeDN: "150mm", ammonia: 30, shipWeight: 1365, operWeight: 1915, A: 1826, B: 1226, H: 2810 },
        { model: "ATC-80E-1g", heatRejection: 345, fanQty: 1, fanAirFlow: 20520, fanPower: 4, pumpFlow: 30.6, pumpPower: 0.55, pipeDN: "150mm", ammonia: 37, shipWeight: 1550, operWeight: 2115, A: 1826, B: 1226, H: 3000 },
        { model: "ATC-90E-1g", heatRejection: 388, fanQty: 2, fanAirFlow: 18000, fanPower: 2.2, pumpFlow: 45.36, pumpPower: 0.75, pipeDN: "150mm", ammonia: 34, shipWeight: 1725, operWeight: 2500, A: 2731, B: 1226, H: 2619 },
        { model: "ATC-105E-1g", heatRejection: 452, fanQty: 2, fanAirFlow: 16740, fanPower: 2.2, pumpFlow: 45.36, pumpPower: 0.75, pipeDN: "150mm", ammonia: 44, shipWeight: 1975, operWeight: 2765, A: 2731, B: 1226, H: 2810 },
        { model: "ATC-120E-1g", heatRejection: 517, fanQty: 2, fanAirFlow: 16200, fanPower: 2.2, pumpFlow: 45.36, pumpPower: 0.75, pipeDN: "150mm", ammonia: 54, shipWeight: 2240, operWeight: 3055, A: 2731, B: 1226, H: 3000 },
        { model: "ATC-135E-1g", heatRejection: 582, fanQty: 2, fanAirFlow: 21420, fanPower: 2.2, pumpFlow: 61.2, pumpPower: 1.1, pipeDN: "200mm", ammonia: 59, shipWeight: 2440, operWeight: 3490, A: 3651, B: 1226, H: 2810 },
        { model: "ATC-150E-1g", heatRejection: 646, fanQty: 2, fanAirFlow: 20160, fanPower: 2.2, pumpFlow: 61.2, pumpPower: 1.1, pipeDN: "200mm", ammonia: 72, shipWeight: 2805, operWeight: 3880, A: 3651, B: 1226, H: 3000 },
        { model: "ATC-165E-1g", heatRejection: 711, fanQty: 2, fanAirFlow: 21960, fanPower: 4, pumpFlow: 61.2, pumpPower: 1.1, pipeDN: "200mm", ammonia: 72, shipWeight: 2810, operWeight: 3885, A: 3651, B: 1226, H: 3000 },
        { model: "ATC-170E-1g", heatRejection: 732, fanQty: 1, fanAirFlow: 50400, fanPower: 4, pumpFlow: 77.04, pumpPower: 1.5, pipeDN: "200mm", ammonia: 88, shipWeight: 3505, operWeight: 4685, A: 2578, B: 2283, H: 3423 },
        { model: "ATC-187E-1g", heatRejection: 806, fanQty: 1, fanAirFlow: 57600, fanPower: 5.5, pumpFlow: 77.04, pumpPower: 1.5, pipeDN: "200mm", ammonia: 88, shipWeight: 3530, operWeight: 4710, A: 2578, B: 2283, H: 3423 },
        { model: "ATC-199E-1g", heatRejection: 859, fanQty: 1, fanAirFlow: 63360, fanPower: 7.5, pumpFlow: 77.04, pumpPower: 1.5, pipeDN: "200mm", ammonia: 88, shipWeight: 3535, operWeight: 4715, A: 2578, B: 2283, H: 3423 },
        { model: "ATC-218E-1g", heatRejection: 937, fanQty: 1, fanAirFlow: 65160, fanPower: 5.5, pumpFlow: 93.24, pumpPower: 1.5, pipeDN: "200mm", ammonia: 95, shipWeight: 4170, operWeight: 5540, A: 2731, B: 2578, H: 3629 },
        { model: "ATC-221E-1g", heatRejection: 950, fanQty: 1, fanAirFlow: 69480, fanPower: 7.5, pumpFlow: 77.04, pumpPower: 1.5, pipeDN: "200mm", ammonia: 109, shipWeight: 4005, operWeight: 5225, A: 2578, B: 2283, H: 3613 },
        { model: "ATC-233E-1g", heatRejection: 1004, fanQty: 1, fanAirFlow: 71640, fanPower: 7.5, pumpFlow: 93.24, pumpPower: 1.5, pipeDN: "200mm", ammonia: 95, shipWeight: 4175, operWeight: 5545, A: 2731, B: 2578, H: 3629 },
        { model: "ATC-238E-1g", heatRejection: 1025, fanQty: 1, fanAirFlow: 68760, fanPower: 11, pumpFlow: 77.04, pumpPower: 1.5, pipeDN: "200mm", ammonia: 109, shipWeight: 4065, operWeight: 5285, A: 2578, B: 2283, H: 3613 },
        { model: "ATC-246E-1g", heatRejection: 1060, fanQty: 1, fanAirFlow: 92880, fanPower: 11, pumpFlow: 113.4, pumpPower: 2.2, pipeDN: "250mm", ammonia: 85, shipWeight: 4250, operWeight: 5815, A: 3188, B: 2578, H: 3439 },
        { model: "ATC-247E-1g", heatRejection: 1064, fanQty: 1, fanAirFlow: 66600, fanPower: 11, pumpFlow: 77.04, pumpPower: 1.5, pipeDN: "200mm", ammonia: 130, shipWeight: 4530, operWeight: 5790, A: 2578, B: 2283, H: 3804 },
        { model: "ATC-253E-1g", heatRejection: 1090, fanQty: 1, fanAirFlow: 80640, fanPower: 11, pumpFlow: 93.24, pumpPower: 1.5, pipeDN: "200mm", ammonia: 95, shipWeight: 4230, operWeight: 5600, A: 2731, B: 2578, H: 3629 },
        { model: "ATC-258E-1g", heatRejection: 1112, fanQty: 1, fanAirFlow: 69480, fanPower: 7.5, pumpFlow: 93.24, pumpPower: 1.5, pipeDN: "200mm", ammonia: 118, shipWeight: 4745, operWeight: 6155, A: 2731, B: 2578, H: 3820 },
        { model: "ATC-269E-1g", heatRejection: 1159, fanQty: 1, fanAirFlow: 79560, fanPower: 7.5, pumpFlow: 113.4, pumpPower: 2.2, pipeDN: "250mm", ammonia: 111, shipWeight: 4810, operWeight: 6425, A: 3188, B: 2578, H: 3629 },
        { model: "ATC-280E-1g", heatRejection: 1207, fanQty: 1, fanAirFlow: 78480, fanPower: 11, pumpFlow: 93.24, pumpPower: 1.5, pipeDN: "200mm", ammonia: 118, shipWeight: 4805, operWeight: 6215, A: 2731, B: 2578, H: 3820 },
        { model: "ATC-294E-1g", heatRejection: 1268, fanQty: 1, fanAirFlow: 90360, fanPower: 11, pumpFlow: 113.4, pumpPower: 2.2, pipeDN: "250mm", ammonia: 111, shipWeight: 4860, operWeight: 6475, A: 3188, B: 2578, H: 3629 },
        { model: "ATC-XE298E-1g", heatRejection: 1284, fanQty: 1, fanAirFlow: 94320, fanPower: 7.5, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 113, shipWeight: 5620, operWeight: 8285, A: 3651, B: 2991, H: 4112 },
        { model: "ATC-305E-1g", heatRejection: 1315, fanQty: 1, fanAirFlow: 82080, fanPower: 15, pumpFlow: 93.24, pumpPower: 1.5, pipeDN: "200mm", ammonia: 140, shipWeight: 5390, operWeight: 6845, A: 2731, B: 2578, H: 4010 },
        { model: "ATC-325E-1g", heatRejection: 1400, fanQty: 1, fanAirFlow: 87480, fanPower: 15, pumpFlow: 113.4, pumpPower: 2.2, pipeDN: "250mm", ammonia: 137, shipWeight: 5540, operWeight: 7205, A: 3188, B: 2578, H: 3820 },
        { model: "ATC-XE333E-1g", heatRejection: 1434, fanQty: 1, fanAirFlow: 92880, fanPower: 7.5, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 148, shipWeight: 6475, operWeight: 9205, A: 3651, B: 2991, H: 4328 },
        { model: "ATC-XC346E-1g", heatRejection: 1490, fanQty: 1, fanAirFlow: 118800, fanPower: 15, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 113, shipWeight: 5705, operWeight: 8370, A: 3651, B: 2991, H: 4112 },
        { model: "ATC-355E-1g", heatRejection: 1529, fanQty: 1, fanAirFlow: 91800, fanPower: 15, pumpFlow: 113.4, pumpPower: 2.2, pipeDN: "250mm", ammonia: 163, shipWeight: 6215, operWeight: 7930, A: 3188, B: 2578, H: 4010 },
        { model: "ATC-XE356E-1g", heatRejection: 1533, fanQty: 1, fanAirFlow: 91440, fanPower: 7.5, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 183, shipWeight: 7280, operWeight: 10080, A: 3651, B: 2991, H: 4543 },
        { model: "ATC-358E-1g", heatRejection: 1544, fanQty: 1, fanAirFlow: 96480, fanPower: 11, pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 156, shipWeight: 6000, operWeight: 7950, A: 3651, B: 2578, H: 3931 },
        { model: "ATC-XC360E-1g", heatRejection: 1551, fanQty: 1, fanAirFlow: 128160, fanPower: 18.5, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 113, shipWeight: 5720, operWeight: 8380, A: 3651, B: 2991, H: 4112 },
        { model: "ATC-369E-1g", heatRejection: 1591, fanQty: 1, fanAirFlow: 97920, fanPower: 18.5, pumpFlow: 113.4, pumpPower: 2.2, pipeDN: "250mm", ammonia: 163, shipWeight: 6230, operWeight: 7940, A: 3188, B: 2578, H: 4010 },
        { model: "ATC-371E-1g", heatRejection: 1598, fanQty: 1, fanAirFlow: 93600, fanPower: 11, pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 186, shipWeight: 6745, operWeight: 8750, A: 3651, B: 2578, H: 3931 },
        { model: "ATC-379E-1g", heatRejection: 1632, fanQty: 1, fanAirFlow: 104400, fanPower: 15, pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 156, shipWeight: 6030, operWeight: 7980, A: 3651, B: 2578, H: 3931 },
        { model: "ATC-385E-1g", heatRejection: 1659, fanQty: 1, fanAirFlow: 120600, fanPower: 15, pumpFlow: 181.8, pumpPower: 4, pipeDN: "250mm", ammonia: 147, shipWeight: 8205, operWeight: 10150, A: 4261, B: 2578, H: 3740 },
        { model: "ATC-XE387E-1g", heatRejection: 1667, fanQty: 1, fanAirFlow: 104760, fanPower: 11, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 183, shipWeight: 7340, operWeight: 10140, A: 3651, B: 2991, H: 4543 },
        { model: "ATC-XC388E-1g", heatRejection: 1671, fanQty: 1, fanAirFlow: 117000, fanPower: 15, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 148, shipWeight: 6560, operWeight: 9290, A: 3651, B: 2991, H: 4328 },
        { model: "ATC-392E-1g", heatRejection: 1687, fanQty: 1, fanAirFlow: 101520, fanPower: 15, pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 186, shipWeight: 6770, operWeight: 8775, A: 3651, B: 2578, H: 4121 },
        { model: "ATC-398E-1g", heatRejection: 1714, fanQty: 1, fanAirFlow: 106920, fanPower: 15, pumpFlow: 136.44, pumpPower: 2.2, pipeDN: "250mm", ammonia: 181, shipWeight: 6815, operWeight: 9080, A: 4261, B: 2578, H: 3931 },
        { model: "ATC-XC402E-1g", heatRejection: 1731, fanQty: 1, fanAirFlow: 126000, fanPower: 18.5, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 148, shipWeight: 6575, operWeight: 9305, A: 3651, B: 2991, H: 4328 },
        { model: "ATC-409E-1g", heatRejection: 1760, fanQty: 1, fanAirFlow: 108000, fanPower: 18.5, pumpFlow: 124.92, pumpPower: 2.2, pipeDN: "250mm", ammonia: 186, shipWeight: 6785, operWeight: 8790, A: 3651, B: 2578, H: 4121 },
        { model: "ATC-423E-1g", heatRejection: 1824, fanQty: 1, fanAirFlow: 117000, fanPower: 15, pumpFlow: 136.44, pumpPower: 2.2, pipeDN: "250mm", ammonia: 181, shipWeight: 6845, operWeight: 9110, A: 4261, B: 2578, H: 3931 },
        { model: "ATC-XC427E-1g", heatRejection: 1839, fanQty: 1, fanAirFlow: 124200, fanPower: 18.5, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 183, shipWeight: 7380, operWeight: 10225, A: 3651, B: 2991, H: 4543 },
        { model: "ATC-428E-1g", heatRejection: 1845, fanQty: 1, fanAirFlow: 125280, fanPower: 11, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 182, shipWeight: 7510, operWeight: 10595, A: 3651, B: 3607, H: 4328 },
        { model: "ATC-442E-1g", heatRejection: 1902, fanQty: 1, fanAirFlow: 124560, fanPower: 18.5, pumpFlow: 136.44, pumpPower: 2.2, pipeDN: "250mm", ammonia: 181, shipWeight: 6860, operWeight: 9120, A: 4261, B: 2578, H: 4121 },
        { model: "ATC-XC443E-1g", heatRejection: 1908, fanQty: 1, fanAirFlow: 132120, fanPower: 22, pumpFlow: 155.52, pumpPower: 4, pipeDN: "300mm", ammonia: 183, shipWeight: 7405, operWeight: 10200, A: 3651, B: 2991, H: 4759 },
        { model: "ATC-XE448E-1g", heatRejection: 1930, fanQty: 1, fanAirFlow: 124560, fanPower: 7.5, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 220, shipWeight: 9260, operWeight: 13385, A: 5486, B: 2991, H: 4328 },
        { model: "ATC-456E-1g", heatRejection: 1965, fanQty: 1, fanAirFlow: 137880, fanPower: 15, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 182, shipWeight: 7540, operWeight: 10625, A: 3651, B: 3607, H: 4328 },
        { model: "ATC-457E-1g", heatRejection: 1967, fanQty: 1, fanAirFlow: 120600, fanPower: 18.5, pumpFlow: 136.44, pumpPower: 2.2, pipeDN: "250mm", ammonia: 216, shipWeight: 7720, operWeight: 10050, A: 4261, B: 2578, H: 4121 },
        { model: "ATC-XE472E-1g", heatRejection: 2033, fanQty: 1, fanAirFlow: 122760, fanPower: 7.5, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 273, shipWeight: 10490, operWeight: 14715, A: 5486, B: 2991, H: 4543 },
        { model: "ATC-473E-1g", heatRejection: 2036, fanQty: 1, fanAirFlow: 127080, fanPower: 22, pumpFlow: 136.44, pumpPower: 2.2, pipeDN: "250mm", ammonia: 216, shipWeight: 7745, operWeight: 10075, A: 4261, B: 2578, H: 4121 },
        { model: "ATC-474E-1g", heatRejection: 2043, fanQty: 1, fanAirFlow: 147240, fanPower: 18.5, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 182, shipWeight: 7550, operWeight: 10635, A: 3651, B: 3607, H: 4328 },
        { model: "ATC-486E-1g", heatRejection: 2092, fanQty: 2, fanAirFlow: 72000, fanPower: 7.5, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 187, shipWeight: 7995, operWeight: 10650, A: 5486, B: 2578, H: 3842 },
        { model: "ATC-XE492E-1g", heatRejection: 2119, fanQty: 1, fanAirFlow: 142560, fanPower: 11, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 220, shipWeight: 9345, operWeight: 13445, A: 5486, B: 2991, H: 4328 },
        { model: "ATC-503E-1g", heatRejection: 2166, fanQty: 1, fanAirFlow: 133920, fanPower: 15, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 225, shipWeight: 8525, operWeight: 11695, A: 3651, B: 3607, H: 4543 },
        { model: "ATC-XC504E-1g", heatRejection: 2171, fanQty: 1, fanAirFlow: 171360, fanPower: 18.5, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 166, shipWeight: 8095, operWeight: 12115, A: 5486, B: 2991, H: 4112 },
        { model: "ATC-508E-1g", heatRejection: 2186, fanQty: 2, fanAirFlow: 88380, fanPower: 7.5, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 165, shipWeight: 7955, operWeight: 11230, A: 6401, B: 2578, H: 3651 },
        { model: "ATC-XE516E-1g", heatRejection: 2222, fanQty: 1, fanAirFlow: 154440, fanPower: 15, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 273, shipWeight: 10550, operWeight: 14775, A: 5486, B: 2991, H: 4543 },
        { model: "ATC-523E-1g", heatRejection: 2253, fanQty: 1, fanAirFlow: 142560, fanPower: 18.5, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 225, shipWeight: 8540, operWeight: 11705, A: 3651, B: 3607, H: 4543 },
        { model: "ATC-XC525E-1g", heatRejection: 2261, fanQty: 1, fanAirFlow: 182160, fanPower: 22, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 166, shipWeight: 8120, operWeight: 12140, A: 5486, B: 2991, H: 4112 },
        { model: "ATC-527E-1g", heatRejection: 2272, fanQty: 2, fanAirFlow: 81000, fanPower: 11, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 187, shipWeight: 8110, operWeight: 10970, A: 5486, B: 2578, H: 3842 },
        { model: "ATC-XE528E-1g", heatRejection: 2274, fanQty: 1, fanAirFlow: 156960, fanPower: 11, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 220, shipWeight: 9350, operWeight: 13470, A: 5486, B: 2991, H: 4328 },
        { model: "ATC-539E-1g", heatRejection: 2320, fanQty: 1, fanAirFlow: 150480, fanPower: 22, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 225, shipWeight: 8565, operWeight: 11730, A: 3651, B: 3607, H: 4543 },
        { model: "ATC-545E-1g", heatRejection: 2347, fanQty: 1, fanAirFlow: 148320, fanPower: 22, pumpFlow: 204.48, pumpPower: 4, pipeDN: "300mm", ammonia: 211, shipWeight: 8590, operWeight: 12220, A: 4261, B: 3607, H: 4480 },
        { model: "ATC-XE553E-1g", heatRejection: 2382, fanQty: 1, fanAirFlow: 154440, fanPower: 15, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 273, shipWeight: 10580, operWeight: 14800, A: 5486, B: 2991, H: 4543 },
        { model: "ATC-556E-1g", heatRejection: 2394, fanQty: 1, fanAirFlow: 148320, fanPower: 15, pumpFlow: 204.48, pumpPower: 4, pipeDN: "300mm", ammonia: 262, shipWeight: 9690, operWeight: 13415, A: 4261, B: 3607, H: 4696 },
        { model: "ATC-557E-1g", heatRejection: 2399, fanQty: 2, fanAirFlow: 79740, fanPower: 7.5, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 218, shipWeight: 9105, operWeight: 12485, A: 6401, B: 2578, H: 3842 },
        { model: "ATC-XC558E-1g", heatRejection: 2403, fanQty: 1, fanAirFlow: 168840, fanPower: 18.5, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 220, shipWeight: 9360, operWeight: 13485, A: 5486, B: 2991, H: 4328 },
        { model: "ATC-578E-1g", heatRejection: 2491, fanQty: 2, fanAirFlow: 78660, fanPower: 11, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 232, shipWeight: 9165, operWeight: 12105, A: 5486, B: 2578, H: 4032 },
        { model: "ATC-XC579E-1g", heatRejection: 2494, fanQty: 1, fanAirFlow: 163080, fanPower: 18.5, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 273, shipWeight: 10590, operWeight: 14815, A: 5486, B: 2991, H: 4543 },
        { model: "ATC-581E-1g", heatRejection: 2504, fanQty: 1, fanAirFlow: 159840, fanPower: 18.5, pumpFlow: 204.48, pumpPower: 4, pipeDN: "300mm", ammonia: 262, shipWeight: 9700, operWeight: 13430, A: 4261, B: 3607, H: 4696 },
        { model: "ATC-583E-1g", heatRejection: 2510, fanQty: 1, fanAirFlow: 157680, fanPower: 30, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 269, shipWeight: 9705, operWeight: 12955, A: 3651, B: 3607, H: 4759 },
        { model: "ATC-XE596E-1g", heatRejection: 2567, fanQty: 2, fanAirFlow: 94320, fanPower: 7.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 225, shipWeight: 11360, operWeight: 16685, A: 7366, B: 2991, H: 4416 },
        { model: "ATC-598E-1g", heatRejection: 2575, fanQty: 2, fanAirFlow: 79560, fanPower: 15, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 278, shipWeight: 10280, operWeight: 13310, A: 5486, B: 2578, H: 4223 },
        { model: "ATC-601E-1g", heatRejection: 2591, fanQty: 1, fanAirFlow: 154800, fanPower: 18.5, pumpFlow: 204.48, pumpPower: 4, pipeDN: "300mm", ammonia: 313, shipWeight: 11065, operWeight: 14885, A: 4261, B: 3607, H: 4912 },
        { model: "ATC-XE608E-1g", heatRejection: 2619, fanQty: 1, fanAirFlow: 163800, fanPower: 18.5, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 326, shipWeight: 11890, operWeight: 16210, A: 5486, B: 2991, H: 4759 },
        { model: "ATC-609E-1g", heatRejection: 2621, fanQty: 2, fanAirFlow: 86040, fanPower: 11, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 218, shipWeight: 9215, operWeight: 12595, A: 6401, B: 2578, H: 3842 },
        { model: "ATC-XC611E-1g", heatRejection: 2632, fanQty: 1, fanAirFlow: 197640, fanPower: 30, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 220, shipWeight: 9455, operWeight: 13580, A: 5486, B: 2991, H: 4328 },
        { model: "ATC-620E-1g", heatRejection: 2668, fanQty: 1, fanAirFlow: 162720, fanPower: 22, pumpFlow: 204.48, pumpPower: 4, pipeDN: "300mm", ammonia: 313, shipWeight: 11085, operWeight: 14910, A: 4261, B: 3607, H: 4912 },
        { model: "ATC-630E-1g", heatRejection: 2713, fanQty: 2, fanAirFlow: 82440, fanPower: 15, pumpFlow: 181.8, pumpPower: 4, pipeDN: "300mm", ammonia: 278, shipWeight: 10335, operWeight: 13365, A: 5486, B: 2578, H: 4223 },
        { model: "ATC-639E-1g", heatRejection: 2752, fanQty: 2, fanAirFlow: 98460, fanPower: 11, pumpQty: 2, pumpFlow: 249.84, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 252, shipWeight: 10570, operWeight: 14350, A: 3651, B: 5286, H: 3842 },
        { model: "ATC-XC641E-1g", heatRejection: 2761, fanQty: 1, fanAirFlow: 194760, fanPower: 30, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 273, shipWeight: 10685, operWeight: 14910, A: 5486, B: 2991, H: 4543 },
        { model: "ATC-642E-1g", heatRejection: 2765, fanQty: 1, fanAirFlow: 187200, fanPower: 15, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 271, shipWeight: 10745, operWeight: 15390, A: 5486, B: 3607, H: 4632 },
        { model: "ATC-647E-1g", heatRejection: 2785, fanQty: 1, fanAirFlow: 176400, fanPower: 30, pumpFlow: 204.48, pumpPower: 4, pipeDN: "300mm", ammonia: 313, shipWeight: 11160, operWeight: 14980, A: 4261, B: 3607, H: 4912 },
        { model: "ATC-XE665E-1g", heatRejection: 2864, fanQty: 2, fanAirFlow: 92880, fanPower: 7.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 296, shipWeight: 13065, operWeight: 18525, A: 7366, B: 2991, H: 4632 },
        { model: "ATC-666E-1g", heatRejection: 2869, fanQty: 2, fanAirFlow: 83340, fanPower: 11, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 273, shipWeight: 10445, operWeight: 13925, A: 6401, B: 2578, H: 4032 },
        { model: "ATC-XC669E-1g", heatRejection: 2881, fanQty: 1, fanAirFlow: 191880, fanPower: 30, pumpFlow: 234, pumpPower: 5.5, pipeDN: "300mm", ammonia: 326, shipWeight: 11985, operWeight: 16305, A: 5486, B: 2991, H: 4759 },
        { model: "ATC-675E-1g", heatRejection: 2908, fanQty: 2, fanAirFlow: 106740, fanPower: 15, pumpQty: 2, pumpFlow: 249.84, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 252, shipWeight: 10625, operWeight: 14405, A: 3651, B: 5286, H: 3842 },
        { model: "ATC-682E-1g", heatRejection: 2938, fanQty: 1, fanAirFlow: 201240, fanPower: 18.5, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 271, shipWeight: 10760, operWeight: 15405, A: 5486, B: 3607, H: 4632 },
        { model: "ATC-687E-1g", heatRejection: 2958, fanQty: 2, fanAirFlow: 87840, fanPower: 15, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 270, shipWeight: 10500, operWeight: 13980, A: 6401, B: 2578, H: 4032 },
        { model: "ATC-703E-1g", heatRejection: 3029, fanQty: 2, fanAirFlow: 84960, fanPower: 15, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 323, shipWeight: 11795, operWeight: 15370, A: 6401, B: 2578, H: 4223 },
        { model: "ATC-706E-1g", heatRejection: 3041, fanQty: 2, fanAirFlow: 95580, fanPower: 11, pumpQty: 2, pumpFlow: 249.84, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 312, shipWeight: 12000, operWeight: 15905, A: 3651, B: 5286, H: 4032 },
        { model: "ATC-713E-1g", heatRejection: 3069, fanQty: 1, fanAirFlow: 214200, fanPower: 22, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 271, shipWeight: 10780, operWeight: 15425, A: 5486, B: 3607, H: 4632 },
        { model: "ATC-XC720E-1g", heatRejection: 3101, fanQty: 2, fanAirFlow: 127980, fanPower: 18.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 225, shipWeight: 11555, operWeight: 16885, A: 7366, B: 2991, H: 4416 },
        { model: "ATC-725E-1g", heatRejection: 3123, fanQty: 2, fanAirFlow: 84960, fanPower: 15, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 323, shipWeight: 11795, operWeight: 15370, A: 6401, B: 2578, H: 4223 },
        { model: "ATC-XE742E-1g", heatRejection: 3196, fanQty: 2, fanAirFlow: 90180, fanPower: 7.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 436, shipWeight: 16420, operWeight: 22155, A: 7366, B: 2991, H: 5064 },
        { model: "ATC-746E-1g", heatRejection: 3215, fanQty: 2, fanAirFlow: 103500, fanPower: 15, pumpQty: 2, pumpFlow: 249.84, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 312, shipWeight: 12055, operWeight: 15955, A: 3651, B: 5286, H: 4032 },
        { model: "ATC-747E-1g", heatRejection: 3219, fanQty: 1, fanAirFlow: 195120, fanPower: 18.5, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 336, shipWeight: 12255, operWeight: 17030, A: 5486, B: 3607, H: 4848 },
        { model: "ATC-755E-1g", heatRejection: 3250, fanQty: 2, fanAirFlow: 92340, fanPower: 18.5, pumpFlow: 238.32, pumpPower: 5.5, pipeDN: "300mm", ammonia: 323, shipWeight: 11820, operWeight: 15400, A: 6401, B: 2578, H: 4223 },
        { model: "ATC-XC775E-1g", heatRejection: 3338, fanQty: 2, fanAirFlow: 117000, fanPower: 15, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 296, shipWeight: 13235, operWeight: 18695, A: 7366, B: 2991, H: 4632 },
        { model: "ATC-778E-1g", heatRejection: 3352, fanQty: 2, fanAirFlow: 106740, fanPower: 18.5, pumpQty: 2, pumpFlow: 249.84, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 312, shipWeight: 12085, operWeight: 15985, A: 3651, B: 5286, H: 4032 },
        { model: "ATC-780E-1g", heatRejection: 3360, fanQty: 2, fanAirFlow: 106020, fanPower: 11, pumpQty: 2, pumpFlow: 272.52, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 363, shipWeight: 13635, operWeight: 18160, A: 4261, B: 5286, H: 4185 },
        { model: "ATC-781E-1g", heatRejection: 3363, fanQty: 1, fanAirFlow: 207360, fanPower: 22, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 336, shipWeight: 12280, operWeight: 17050, A: 5486, B: 3607, H: 4848 },
        { model: "ATC-791E-1g", heatRejection: 3407, fanQty: 1, fanAirFlow: 250920, fanPower: 30, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 300, shipWeight: 11950, operWeight: 17165, A: 6096, B: 3607, H: 4632 },
        { model: "ATC-XC804E-1g", heatRejection: 3463, fanQty: 2, fanAirFlow: 126180, fanPower: 18.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 296, shipWeight: 13265, operWeight: 18525, A: 7366, B: 2991, H: 4632 },
        { model: "ATC-805E-1g", heatRejection: 3466, fanQty: 2, fanAirFlow: 106740, fanPower: 18.5, pumpQty: 2, pumpFlow: 249.84, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 371, shipWeight: 13570, operWeight: 17580, A: 3651, B: 5286, H: 4223 },
        { model: "ATC-806E-1g", heatRejection: 3472, fanQty: 1, fanAirFlow: 201240, fanPower: 22, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 401, shipWeight: 13815, operWeight: 18715, A: 5486, B: 3607, H: 5064 },
        { model: "ATC-XE812E-1g", heatRejection: 3497, fanQty: 2, fanAirFlow: 126360, fanPower: 7.5, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 333, shipWeight: 15995, operWeight: 24030, A: 11036, B: 2991, H: 4289 },
        { model: "ATC-816E-1g", heatRejection: 3516, fanQty: 1, fanAirFlow: 222840, fanPower: 22, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 373, shipWeight: 13550, operWeight: 18895, A: 6096, B: 3607, H: 4848 },
        { model: "ATC-827E-1g", heatRejection: 3563, fanQty: 1, fanAirFlow: 225360, fanPower: 30, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 336, shipWeight: 12350, operWeight: 17125, A: 5486, B: 3607, H: 4848 },
        { model: "ATC-830E-1g", heatRejection: 3574, fanQty: 2, fanAirFlow: 115740, fanPower: 15, pumpQty: 2, pumpFlow: 272.52, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 363, shipWeight: 13690, operWeight: 18215, A: 4261, B: 5286, H: 4185 },
        { model: "ATC-842E-1g", heatRejection: 3626, fanQty: 1, fanAirFlow: 215640, fanPower: 22, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 446, shipWeight: 15430, operWeight: 20920, A: 6096, B: 3607, H: 5064 },
        { model: "ATC-854E-1g", heatRejection: 3678, fanQty: 1, fanAirFlow: 218160, fanPower: 30, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 401, shipWeight: 13890, operWeight: 18790, A: 5486, B: 3607, H: 5064 },
        { model: "ATC-XC855E-1g", heatRejection: 3683, fanQty: 2, fanAirFlow: 124200, fanPower: 18.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 366, shipWeight: 14880, operWeight: 20475, A: 7366, B: 2991, H: 4848 },
        { model: "ATC-865E-1g", heatRejection: 3727, fanQty: 2, fanAirFlow: 123120, fanPower: 18.5, pumpQty: 2, pumpFlow: 272.52, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 363, shipWeight: 13715, operWeight: 18245, A: 4261, B: 5286, H: 4185 },
        { model: "ATC-869E-1g", heatRejection: 3741, fanQty: 1, fanAirFlow: 243360, fanPower: 30, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 373, shipWeight: 13620, operWeight: 18970, A: 6096, B: 3607, H: 4848 },
        { model: "ATC-892E-1g", heatRejection: 3808, fanQty: 1, fanAirFlow: 232200, fanPower: 37, pumpFlow: 272.52, pumpPower: 5.5, pipeDN: "300mm", ammonia: 401, shipWeight: 13895, operWeight: 18795, A: 5486, B: 3607, H: 5064 },
        { model: "ATC-895E-1g", heatRejection: 3840, fanQty: 2, fanAirFlow: 119340, fanPower: 18.5, pumpQty: 2, pumpFlow: 272.52, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 433, shipWeight: 15440, operWeight: 20105, A: 4261, B: 5286, H: 4375 },
        { model: "ATC-XE896E-1g", heatRejection: 3859, fanQty: 2, fanAirFlow: 124380, fanPower: 7.5, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 440, shipWeight: 18525, operWeight: 26770, A: 11036, B: 2991, H: 4632 },
        { model: "ATC-XC897E-1g", heatRejection: 3863, fanQty: 2, fanAirFlow: 122400, fanPower: 18.5, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 436, shipWeight: 16620, operWeight: 22355, A: 7366, B: 2991, H: 5064 },
        { model: "ATC-907E-1g", heatRejection: 3906, fanQty: 1, fanAirFlow: 258840, fanPower: 37, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 373, shipWeight: 13625, operWeight: 18975, A: 6096, B: 3607, H: 4848 },
        { model: "ATC-XC925E-1g", heatRejection: 3984, fanQty: 2, fanAirFlow: 130140, fanPower: 22, pumpQty: 2, pumpFlow: 311.04, pumpPower: 4, pipeDN: "(2×) 300mm", ammonia: 436, shipWeight: 16665, operWeight: 22400, A: 7366, B: 2991, H: 5064 },
        { model: "ATC-926E-1g", heatRejection: 3990, fanQty: 2, fanAirFlow: 125640, fanPower: 22, pumpQty: 2, pumpFlow: 272.52, pumpPower: 2.2, pipeDN: "(2×) 250mm", ammonia: 433, shipWeight: 15485, operWeight: 20150, A: 4261, B: 5286, H: 4375 },
        { model: "ATC-935E-1g", heatRejection: 4028, fanQty: 1, fanAirFlow: 250920, fanPower: 37, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 446, shipWeight: 15510, operWeight: 20995, A: 6096, B: 3607, H: 5064 },
        { model: "ATC-XE947E-1g", heatRejection: 4079, fanQty: 2, fanAirFlow: 122580, fanPower: 7.5, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 546, shipWeight: 20985, operWeight: 29430, A: 11036, B: 2991, H: 4848 },
        { model: "ATC-967E-1g", heatRejection: 4166, fanQty: 1, fanAirFlow: 263880, fanPower: 45, pumpFlow: 317.88, pumpPower: 7.5, pipeDN: "350mm", ammonia: 446, shipWeight: 15600, operWeight: 21085, A: 6096, B: 3607, H: 5064 },
        { model: "ATC-XE984E-1g", heatRejection: 4238, fanQty: 2, fanAirFlow: 142380, fanPower: 11, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 440, shipWeight: 18645, operWeight: 26890, A: 11036, B: 2991, H: 4632 },
        { model: "ATC-XC1011E-1g", heatRejection: 4355, fanQty: 2, fanAirFlow: 171540, fanPower: 18.5, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 333, shipWeight: 16195, operWeight: 24230, A: 11036, B: 2991, H: 4416 },
        { model: "ATC-XC1112E-1g", heatRejection: 4789, fanQty: 2, fanAirFlow: 169020, fanPower: 22, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 440, shipWeight: 18725, operWeight: 26970, A: 11036, B: 2991, H: 4632 },
        { model: "ATC-XC1153E-1g", heatRejection: 4966, fanQty: 2, fanAirFlow: 179460, fanPower: 22, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 440, shipWeight: 18770, operWeight: 27015, A: 11036, B: 2991, H: 4632 },
        { model: "ATC-XE1157E-1g", heatRejection: 4983, fanQty: 2, fanAirFlow: 152280, fanPower: 15, pumpQty: 2, pumpFlow: 635.76, pumpPower: 7.5, pipeDN: "(2×) 300mm", ammonia: 652, shipWeight: 23750, operWeight: 32395, A: 11036, B: 2991, H: 5064 },
        { model: "ATC-XC1210E-1g", heatRejection: 5212, fanQty: 2, fanAirFlow: 176940, fanPower: 22, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 546, shipWeight: 19675, operWeight: 29675, A: 11036, B: 2991, H: 4848 },
        { model: "ATC-XC1222E-1g", heatRejection: 5263, fanQty: 2, fanAirFlow: 197640, fanPower: 22, pumpQty: 2, pumpFlow: 468, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 440, shipWeight: 18915, operWeight: 27160, A: 11036, B: 2991, H: 4632 },
        { model: "ATC-XC1264E-1g", heatRejection: 5444, fanQty: 2, fanAirFlow: 174240, fanPower: 22, pumpQty: 2, pumpFlow: 635.76, pumpPower: 7.5, pipeDN: "(2×) 300mm", ammonia: 652, shipWeight: 23825, operWeight: 32470, A: 11036, B: 2991, H: 5064 },
        { model: "ATC-XC1282E-1g", heatRejection: 5522, fanQty: 2, fanAirFlow: 194760, fanPower: 30, pumpQty: 2, pumpFlow: 545.04, pumpPower: 5.5, pipeDN: "(2×) 300mm", ammonia: 626, shipWeight: 21375, operWeight: 29820, A: 11036, B: 2991, H: 5369 },
        { model: "ATC-XC1340E-1g", heatRejection: 5772, fanQty: 2, fanAirFlow: 191880, fanPower: 30, pumpQty: 2, pumpFlow: 635.76, pumpPower: 7.5, pipeDN: "(2×) 350mm", ammonia: 652, shipWeight: 23970, operWeight: 31635, A: 11036, B: 2991, H: 5064 }
      ],
      correctionTables: { R717: ATCE_CORRECTION_R717, R22_R134A: ATCE_CORRECTION_R22_R134A }
    }
  ]
};

if (typeof module !== "undefined") module.exports = DATABASE;
