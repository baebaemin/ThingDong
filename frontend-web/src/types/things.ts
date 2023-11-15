export interface ThingsModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThingsStatus {
  deviceId: string;
  smartThingsStatus: boolean;
}

export interface ThingsCommands {
  component: string;
  capability: string;
  command: string;
  arguments: any[];
}

export interface ToggleThingsStatus {
  commands: ThingsCommands[];
}

export interface ThingsPageProps {
  category : string;
  deviceId : string;
  label : string;
  status : 'ON' | 'OFF' | 'OFFLINE' | 'ONLINE' | 'OPEN' | 'CLOSED';
  ownerId: string;
  temperature : number;
  humidity: number;
  hsl : {h: "", s : "", l: ""};
  img : string;
}

export interface ThingsPageData {
  devices: ThingsPageProps[];
  locationId: string;
  errorMessage: string;
}