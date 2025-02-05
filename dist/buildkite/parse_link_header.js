"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseLinkHeader(header) {
    if (!header) {
        return null;
    }
    const entries = header.split(',').map((p) => p.trim());
    const parsed = {};
    for (const entry of entries) {
        const parts = entry.split(';', 2).map((p) => p.trim());
        const url = parts[0].slice(1, -1);
        const rel = parts[1].replace(/rel="?([^"]+)"?$/, '$1');
        parsed[rel] = url;
    }
    return parsed;
}
exports.default = parseLinkHeader;
//# sourceMappingURL=parse_link_header.js.map