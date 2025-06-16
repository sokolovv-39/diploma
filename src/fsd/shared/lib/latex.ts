export function toggleDispLines(latex: string) {}

export class Latex {
  static latexSymbols = ["lambda"];
  static excludeSymbols = ["Delta"];

  static symAssign(val: string) {
    let [sym, lowerInd] = val.split("_");
    if (this.excludeSymbols.includes(sym)) return "";
    if (this.latexSymbols.includes(sym)) sym = `\\${sym}`;
    if (lowerInd) lowerInd = `\\text{${lowerInd}}`;
    return [sym, lowerInd].filter(Boolean).join("_").concat(":=");
  }

  static toggleDispLines(val: string, on: boolean) {
    const command = "\\displaylines{";

    if (on) {
      val = "\\displaylines{" + val + "}";
    } else {
      if (val.startsWith(command)) val = val.replace(command, "").slice(0, -1);
    }

    return val;
  }
}
