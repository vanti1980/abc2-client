enum ApplicationSpecType {
  'A', // application
  'G' // group
}

enum StatusType {
  'A', // active
  'D' // deleted
}

export interface ExpertRowEntry {
  id: number;
  userId: string;
  name: string;
  email: string;
}

export interface ApplicationRowEntry {
  id: number;
  factsheetLink: string;
  abbr: string;
  name: string;
  version: string;

  expert: {
    businessexpert: ExpertRowEntry;
    owner: ExpertRowEntry;
  };
}

export interface ApplicationRow {
  id: number;
  autoId: string;
  spec: ApplicationSpecType;
  status: StatusType;

  manualEntry: ApplicationRowEntry;
  autoEntry: ApplicationRowEntry;
  zones: Array<string>;
}

export interface Zone {
  id: number;
  datUpd: string;
  usrUpd: string;
  datIns: string;
  usrIns: string;
  name: string;
  status: StatusType;
}
