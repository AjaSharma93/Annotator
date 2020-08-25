export interface NavItem {
    displayName: string;
    disabled?: boolean;
    // iconName: string;
    route?: string;
    type?:string;
    children?: NavItem[];
  }
  