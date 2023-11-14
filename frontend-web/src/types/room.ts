export type Position = [x: number, y: number, z: number];

export type Rotation = [x: number, y: number, z: number];

export interface Size {
  width: number;
  height: number;
}

export interface MyRoomProps {
  isEditing?: boolean;
  position?: Position;
  rotation?: Rotation;
  userObject: UserObject[];
  thingsObject: ThingsObject[];
  onObjectClick: (objectName: string) => void;
  selectedRoomColor?: string | null;
  roomColor?: string;
  darkMode: boolean;
}

export interface UserObject {
  name: string;
  userObjectId: number;
  objectModelPath: string;
  isWall?: boolean;
  position: Position;
  rotation: Rotation;
  size?: Size;
}

export interface ThingsObject extends UserObject {
  deviceId: number;
}

// 스마트용따로
// export interface UserObjectList {
//   name: string;
//   userObjectId: number;
//   objectId: number;
//   category: string;
//   x: number;
//   y: number;
//   z: number;
//   source: string;
//   isRightWall?: boolean;
//   rotationY?: number;
//   size?: ObjectSize; // 나중엔 필수값으로
// }

export interface MyRoom {
  userObjectList: UserObject;
  userId: string;
  roomColor: string;
  roomModelPath: string;
  roomId?: number;
  nextRoom?: number;
  prevRoom?: number;
}

export interface RoomStyle {
  outerBackgroundColor: string;
  innerBackground: string;
}