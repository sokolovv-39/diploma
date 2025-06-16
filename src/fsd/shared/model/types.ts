type BaseSidebarItem = {
  text: string;
  id: string;
};

type LatexItem = BaseSidebarItem & {
  latex: string;
  nested?: never;
};

type NestedItem = BaseSidebarItem & {
  latex?: never;
  nested: SidebarItemsType;
};

export type SidebarItem = LatexItem | NestedItem;
export type SidebarItemsType = SidebarItem[];
