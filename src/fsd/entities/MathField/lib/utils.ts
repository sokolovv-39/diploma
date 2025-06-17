import { ComputeEngine } from "@cortex-js/compute-engine";

export function getUninitSyms(ce: ComputeEngine, formula: string): string[] {
  const boxedFormula = ce.parse(formula.split("\\coloneq")[1]);
  const symbols = boxedFormula.symbols;

  const uninitialized = [];

  for (const sym of symbols) {
    if (!ce.lookupSymbol(sym)?.value) uninitialized.push(sym);
  }

  return uninitialized;
}
