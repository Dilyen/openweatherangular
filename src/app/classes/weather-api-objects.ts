import { Climate } from "./climate";
import { Cloud } from "./cloud";
import { Coordinate } from "./coordinate";
import { Main } from "./main";
import { Weather } from "./weather";
import { Wind } from "./wind";

export interface WeatherApiObjects {
    coord: Coordinate;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Cloud;
    dt: number;
    sys: Climate;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
