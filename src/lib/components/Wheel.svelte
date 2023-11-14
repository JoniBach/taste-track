<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    export let data;

    let svgElement;

    onMount(() => {
        console.log(data);
        createSunburst(data);
    });

    function createSunburst(data) {
        const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, 10));

        const width = 800;
        const radius = width / 2;

        // Prepare the layout.
        const partition = (data) =>
            d3.partition().size([2 * Math.PI, radius])(
                d3
                    .hierarchy(data)
                    .sum((d) => d.value)
                    .sort((a, b) => b.value - a.value)
            );

        const arc = d3
            .arc()
            .startAngle((d) => d.x0)
            .endAngle((d) => d.x1)
            .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius / 2)
            .innerRadius((d) => d.y0)
            .outerRadius((d) => d.y1 - 1);

        const svg = d3
            .select(svgElement)
            .attr("viewBox", `${-radius} ${-radius} ${width} ${width}`)
            .style("width", "100%")
            .style("height", "auto");

        const root = partition(data);

        // Create the SVG container.

        // Add an arc for each element, with a title for tooltips.
        svg.append("g")
            .attr("fill-opacity", 0.6)
            .selectAll("path")
            .data(root.descendants().filter((d) => d.depth))
            .join("path")
            .attr("fill", (d) => {
                const opacity = (d.depth / 10) * 1.8;
                function removeOutsideParentheses(str) {
                    const match = str.match(/\(([^)]+)\)/);
                    return match ? match[1] : str;
                }
                if (d.depth === 1) return color(d.data.name);
                while (d.depth > 2) d = d.parent;
                return `rgba(${removeOutsideParentheses(color(d.data.name))}, ${
                    1 - opacity
                })`;
            })
            .attr("d", arc)
            .append("title")
            .text(
                (d) =>
                    `${d
                        .ancestors()
                        .map((d) => d.data.name)
                        .reverse()
                        .join(", ")}\n${d.data.definition}\n\n${
                        d.data.explanation
                    }`
            );

        // Add a label for each element.
        svg.append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .selectAll("text")
            .data(
                root
                    .descendants()
                    .filter(
                        (d) =>
                            d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10
                    )
            )
            .join("text")
            .attr("transform", function (d) {
                const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
                const y = (d.y0 + d.y1) / 2;
                return `rotate(${
                    x - 90
                }) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
            })
            .attr("dy", "0.35em")
            .text((d) => d.data.name);
    }
</script>

<svg bind:this={svgElement} />
