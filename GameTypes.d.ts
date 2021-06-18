export interface GameState {
  garden: Garden;
  globalScore: number;
  players: Array<Player>;
  gardenDimension: number;
}

export interface Garden extends Array<Line> {}

export interface Line extends Array<Parcel> {}

export interface Parcel {
  plant: Plant;
  soilQualityPercentage: number;
  parcelHistory: ParcelHistory;
}

export interface ParcelHistory {
  totalExpenses: number;
  playerInteraction: {
    [key: string]: number;
  };
}

export interface Player {
  name: string;
  score: number;
  contributionRatio: number;
  scoreIncrease: number;
  bestScoreIncrease: number;
  agency: string;
}

export interface PlayerAction {
  playerName: string;
  action: Action;
}

export type PlayerActionList = Array<PlayerAction>;

export interface Action {
  action: ActionTypes;
  column: number;
  line: number;
  plantType?: PlantTypes;
}

export interface Plant {
  age: number;
  plantType: PlantTypes;
  growth: Growth;
  plantFamily: PlantFamilies;
}

export type PlantTypes =
  | "CARROT"
  | "CAULIFLOWER"
  | "BROCCOLI"
  | "CELERY"
  | "ARTICHOKE"
  | "EGGPLANT"
  | "ENDIVE"
  | "FENNEL"
  | "POTATO"
  | "PEPPER"
  | "CABBAGE"
  | "CORN"
  | "RADISH"
  | "WHEAT"
  | "TOMATO"
  | (string & {});

export type PlantFamilies =
  | "APIACEAE"
  | "ASTERACEAE"
  | "SOLANACEAE"
  | "POACEAE"
  | "CRUCIFER"
  | (string & {});

export type Growth = "GROWING" | "READY" | "DEAD" | (string & {});

export type ActionTypes = "plant" | "harvest" | "fetilize" | (string & {});

export type PlantTypeList = Array<PlantType>;

export interface PlantType {
  plantName: PlantTypes;
  plantFamily: PlantFamilies;
  nutrientNeed: NeededNutriments;
  points: number;
  turnToBeReady: number;
  turnToDie: number;
  readyImg: string;
}

export type NeededNutriments = "LOW" | "MEDIUM" | "HIGH" | (string & {});

export interface PlantFamilyMap {
  [key: PlantFamilies]: Array<PlantType>;
}
