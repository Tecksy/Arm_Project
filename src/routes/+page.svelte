<script lang="ts"> 
    import { setupGrid } from "./simulation";
    import Site from "./site.svelte";
    import { onMount } from "svelte";
    let maxHeight : number, maxWidth : number;

    onMount(() => {
        maxWidth = window.innerWidth;
        maxHeight = window.innerHeight;
        if (maxHeight === undefined || maxWidth === undefined) throw Error;
        const simulation : HTMLCanvasElement = document.querySelector('#simulation')!;
        const simulationContext = simulation.getContext("2d")!;

        simulationContext.imageSmoothingEnabled = false;
        simulation.height = maxHeight;
        simulation.width = maxWidth;

        setupGrid(simulationContext, maxHeight, maxWidth);
    });
</script>
<canvas id="simulation"></canvas>
<style> 
    /* #simulation {
        width: 100%;
        height: 100%;
    } */
</style>