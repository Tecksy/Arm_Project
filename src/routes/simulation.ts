import {resolution} from './config.json'
export function setupGrid(simulation : CanvasRenderingContext2D, height : number, width : number) {
    simulation.translate(0.5,0.5);
    for (let i = 0; i < height; i+=resolution) {
        for (let j = 0; j < width; j+=resolution) {
            simulation.rect(i, j, resolution, resolution);
            simulation.stroke();
        }
    }
}