import {
  Action,
  GameState,
  PlantFamilyMap,
  PlantTypeList,
  PlantTypes,
  PlayerActionList,
} from "./GameTypes";

function requestFetch(path: string): Promise<{}>;
function requestPost(path: string, data: string): Promise<void>;

export function fetchGameState(): Promise<GameState>;
export function fetchActionList(): Promise<PlayerActionList>;
export function fetchPlants(): Promise<PlantTypeList>;
export function fetchFamilies(): Promise<PlantFamilyMap>;

function doAction(action: Action): Promise<void>;

export function plant(
  line: number,
  column: number,
  plantType: PlantTypes
): Promise<void>;
export function harvest(line: number, column: number): Promise<void>;
export function fertilize(line: number, column: number): Promise<void>;

export default {
  fetchGameState,
  fetchActionList,
  fetchPlants,
  fetchFamilies,
  plant,
  harvest,
  fertilize,
};
