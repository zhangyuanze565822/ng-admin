export interface headerItemType {
  colLabel?: string;
  formatter?: (t: any) => any;
  colValueKey: string;
  colWidth: string | null;
  colType: string;//"normal" |"action"|"blank_link" |"router_link"|"index";
  blank_link_path?: any;
  router_link_path?: any;
  actionList?: Array<btnObjType>
}

export interface btnObjType {
  btn_type?: string;
  btn_text: string;
  btn_color?: string | null;
}
