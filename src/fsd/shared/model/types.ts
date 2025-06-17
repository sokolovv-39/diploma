type BaseSidebarItem = {
  text: string;
  id: string;
};

type LatexItem = BaseSidebarItem & {
  latex: string;
  isCalcAvail: boolean;
  nested?: never;
};

type NestedItem = BaseSidebarItem & {
  latex?: never;
  isCalcAvail?: never;
  nested: SidebarItemsType;
};

export type SidebarItem = LatexItem | NestedItem;
export type SidebarItemsType = SidebarItem[];
