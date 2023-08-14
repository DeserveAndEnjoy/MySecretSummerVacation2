
/**
 * png-chank-extract / The MIT License (MIT) Copyright (c) 2015 Hugh Kennedy
 * https://github.com/hughsk/png-chunks-extract/
 *
 * @mykeels/steganography / The MIT License (MIT) Copyright (c) 2020 Ikechi Michael
 * https://github.com/mykeels/steganography
*/
/*:
 * @plugindesc Steganography Library Plugin
 * @author Tennana
 *
 * @help 改修済みの画面キャプチャ管理プラグインから、
 * 変数情報埋め込み・復元の為に呼び出す処理をまとめたライブラリプラグインです。
 * 改修済みの画面キャプチャ管理プラグインと一緒にONにしてください。プラグインの順番は影響しません。
 *
 * @mykeels/steganography をベースにツクール向けの改造を施し、
 * @hughsk/png-chunks-extractを呼び出せるよう組み込んでいます。
 * 両ライブラリは共にMITライセンスです。
*/
function r(r) { return r && r.__esModule ? r.default : r } var t = (r, t, e) => { let n; switch (e % 3) { case 0: n = "r"; break; case 1: n = "g"; break; case 2: n = "b" }return 1 & t[n] && (r |= 1 << 7 - e), r }; var e = ({ _index: r, _width: e, _height: n, bitmap: a }) => { let o, i, u, c = []; for (; r < e * n;) { o = 0; for (let n = 0; n < 8; n++)n % 3 == 0 && (u = a._context.getImageData(r % e, Math.floor(r / e), 1, 1).data, i = { r: u[0], g: u[1], b: u[2], a: u[3] }, r++), o = t(o, i, n); if (c.push(o), 1 & i.b) break } return c = new Uint8Array(c), c.buffer }; var n = (r, t, e) => { let n; switch (t % 3) { case 0: n = "r"; break; case 1: n = "g"; break; case 2: n = "b" }return e ? r[n] |= 1 : r[n] &= -2, r }; function a(r, t, e) { const n = r._context.getImageData(t, e, 1, 1).data; return { r: n[0], g: n[1], b: n[2], a: n[3] } } function o(r, t, e, n) { const a = r._context.getImageData(t, e, 1, 1); a.data[0] = n.r, a.data[1] = n.g, a.data[2] = n.b, a.data[3] = n.a, r._context.putImageData(a, t, e) } var i, u, c = (r, { _index: t, _width: e, _batch: i }) => { let u, c, f, h = new Uint8Array(r), d = h.byteLength; for (let r = 0; r < d; r++) { const s = h[r]; for (let r = 0; r < 8; r++)r % 3 == 0 && (u && (o(i, t % e, Math.floor(t / e), u), t++), u = a(i, t % e, Math.floor(t / e))), f = s & 1 << 7 - r ? 1 : 0, u = n(u, r, f); r === d - 1 ? u.b |= 1 : u.b &= -2, o(i, t % e, Math.floor(t / e), u), t++, u = void 0, c = void 0 } }, f = {}; function h(r, t) { for (var e = function () { return r[t++] }, n = function () { var r = new Uint8Array(4); return r = r.map(e).reverse(), new Int32Array(r.buffer)[0] }, a = n(), o = "", i = 0; i < 4; i++)o += String.fromCharCode(r[t++]); var u = r.slice(t, t + a), c = f.buf(r.slice(t - 4, t + a)); t += a; var h = n(); if (c !== h) throw new Error("CRC values for " + o + " header do not match, PNG file is likely corrupted"); return { length: a, chunkType: o, data: u, crc: h } } u = function (r) { r.version = "1.2.2"; var t = function () { for (var r = 0, t = new Array(256), e = 0; 256 != e; ++e)r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = 1 & (r = e) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1) ? -306674912 ^ r >>> 1 : r >>> 1, t[e] = r; return "undefined" != typeof Int32Array ? new Int32Array(t) : t }(), e = function (r) { var t = 0, e = 0, n = 0, a = "undefined" != typeof Int32Array ? new Int32Array(4096) : new Array(4096); for (n = 0; 256 != n; ++n)a[n] = r[n]; for (n = 0; 256 != n; ++n)for (e = r[n], t = 256 + n; t < 4096; t += 256)e = a[t] = e >>> 8 ^ r[255 & e]; var o = []; for (n = 1; 16 != n; ++n)o[n - 1] = "undefined" != typeof Int32Array ? a.subarray(256 * n, 256 * n + 256) : a.slice(256 * n, 256 * n + 256); return o }(t), n = e[0], a = e[1], o = e[2], i = e[3], u = e[4], c = e[5], f = e[6], h = e[7], d = e[8], s = e[9], l = e[10], g = e[11], y = e[12], w = e[13], b = e[14]; r.table = t, r.bstr = function (r, e) { for (var n = -1 ^ e, a = 0, o = r.length; a < o;)n = n >>> 8 ^ t[255 & (n ^ r.charCodeAt(a++))]; return ~n }, r.buf = function (r, e) { for (var p = -1 ^ e, v = r.length - 15, m = 0; m < v;)p = b[r[m++] ^ 255 & p] ^ w[r[m++] ^ p >> 8 & 255] ^ y[r[m++] ^ p >> 16 & 255] ^ g[r[m++] ^ p >>> 24] ^ l[r[m++]] ^ s[r[m++]] ^ d[r[m++]] ^ h[r[m++]] ^ f[r[m++]] ^ c[r[m++]] ^ u[r[m++]] ^ i[r[m++]] ^ o[r[m++]] ^ a[r[m++]] ^ n[r[m++]] ^ t[r[m++]]; for (v += 15; m < v;)p = p >>> 8 ^ t[255 & (p ^ r[m++])]; return ~p }, r.str = function (r, e) { for (var n = -1 ^ e, a = 0, o = r.length, i = 0, u = 0; a < o;)(i = r.charCodeAt(a++)) < 128 ? n = n >>> 8 ^ t[255 & (n ^ i)] : i < 2048 ? n = (n = n >>> 8 ^ t[255 & (n ^ (192 | i >> 6 & 31))]) >>> 8 ^ t[255 & (n ^ (128 | 63 & i))] : i >= 55296 && i < 57344 ? (i = 64 + (1023 & i), u = 1023 & r.charCodeAt(a++), n = (n = (n = (n = n >>> 8 ^ t[255 & (n ^ (240 | i >> 8 & 7))]) >>> 8 ^ t[255 & (n ^ (128 | i >> 2 & 63))]) >>> 8 ^ t[255 & (n ^ (128 | u >> 6 & 15 | (3 & i) << 4))]) >>> 8 ^ t[255 & (n ^ (128 | 63 & u))]) : n = (n = (n = n >>> 8 ^ t[255 & (n ^ (224 | i >> 12 & 15))]) >>> 8 ^ t[255 & (n ^ (128 | i >> 6 & 63))]) >>> 8 ^ t[255 & (n ^ (128 | 63 & i))]; return ~n } }, "undefined" == typeof DO_NOT_EXPORT_CRC ? u(f) : u({}), i = { getChunks: function (r) { if (137 !== r[0] && 80 !== r[1] && 78 !== r[2] && 71 !== r[3] && 13 !== r[4] && 10 !== r[5] && 26 !== r[6] && 10 !== r[7]) throw new Error("Invalid PNG header"); for (var t = 8, e = []; t < r.length;) { var n = h(r, t); e.push(n), t += n.length + 12 } if (e.length < 1 || "IEND" !== e[e.length - 1].chunkType) throw new Error(".png file ended prematurely: no IEND header was found"); return e }, toPNG: function (r) { var t = function (r) { return r.charCodeAt(0) }, e = function (r) { var t = new Int32Array(1); return t[0] = r, new Int8Array(t.buffer).reverse() }; r.map((function (r) { r.length = r.data.length; var e = new Uint8Array(4 + r.length); e.set(Uint8Array.from(r.chunkType.split("").map(t))), e.set(r.data, 4), r.crc = f.buf(e) })); var n = 8, a = 0, o = function (r, t) { return (r = r.length + 12 || r) + t.length + 12 }; n += r.reduce(o); var i, u, c = new Uint8Array(n); c.set([137, 80, 78, 71, 13, 10, 26, 10], a), a += 8; for (var h = 0; h < r.length; h++) { var d = r[h]; c.set((i = d, u = void 0, (u = new Uint8Array(12 + i.data.length)).set(e(i.length)), u.set(Uint8Array.from(i.chunkType.split("").map(t)), 4), u.set(i.data, 8), u.set(e(i.crc), 8 + i.data.length), u), a), a += o(0, d) } return c } }; const d = new TextEncoder, s = new TextDecoder; function l(r) { return d.encode(r).buffer } var g = { digUp: r => new Promise((async (t, n) => { const a = r.width, o = r.height, i = e({ _index: 0, _width: a, _height: o, bitmap: r }); try { const r = function (r) { return s.decode(r) }(i), e = JSON.parse(r), a = l(e.text), o = await crypto.subtle.digest("sha-1", a), u = window.btoa(o); e.hash === u ? t(e.text) : n(new Error("could not verify Shasum")) } catch (r) { n(new Error("Could not decrypt message")) } })), digUpChunk: t => { const e = r(i).getChunks(t).find((r => "msCp" === r.chunkType)); if (!e) return; const n = s.decode(e.data); try { return JSON.parse(n) } catch (r) { return void console.warn(r) } }, embed: (r, t) => new Promise((async (e, n) => { const a = l(t), o = await crypto.subtle.digest("sha-1", a), i = JSON.stringify({ text: t, hash: window.btoa(o) }, null, 2), u = r.width, f = r; c(l(i), { _index: 0, _width: u, _batch: f }), e(r) })), embedChunk: (t, e) => { const n = JSON.stringify(e), a = r(i).getChunks(new Uint8Array(t)); return a.splice(a.length - 1, 0, { chunkType: "msCp", data: d.encode(n) }), r(i).toPNG(a) }, bufferToBinaryString: function (r) { let t = ""; for (let e = 0; e < r.byteLength; e += 1024)t += String.fromCharCode.apply(null, new Uint8Array(r.slice(e, e + 1024))); return t } }; window.SteganographyLibrary = g;
