<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    /**
     * @type {any}
     */
    export let data;

    /**
     * @type {SVGSVGElement}
     */
    let svgElement;

    onMount(() => {
        console.log(data);
        createSunburst(data);
    });

    /**
     * @param {any} data
     */
    function createSunburst(data) {
        const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, 10));

        const width = 800;
        const radius = width / 2;

        // Prepare the layout.
        const partition = (/** @type {any} */ data) =>
            d3.partition().size([2 * Math.PI, radius])(
                d3
                    .hierarchy(data)
                    .sum((/** @type {{ value: any; }} */ d) => d.value)
                    .sort(
                        (
                            /** @type {{ value: number; }} */ a,
                            /** @type {{ value: number; }} */ b
                        ) => b.value - a.value
                    )
            );

        const arc = d3
            .arc()
            .startAngle((/** @type {{ x0: any; }} */ d) => d.x0)
            .endAngle((/** @type {{ x1: any; }} */ d) => d.x1)
            .padAngle((/** @type {{ x1: number; x0: number; }} */ d) =>
                Math.min((d.x1 - d.x0) / 2, 0.005)
            )
            .padRadius(radius / 2)
            .innerRadius((/** @type {{ y0: any; }} */ d) => d.y0)
            .outerRadius((/** @type {{ y1: number; }} */ d) => d.y1 - 1);

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
            .data(
                root
                    .descendants()
                    .filter((/** @type {{ depth: any; }} */ d) => d.depth)
            )
            .join("path")
            .attr(
                "fill",
                (
                    /** @type {{ depth: number; data: { name: any; }; parent: any; }} */ d
                ) => {
                    const opacity = (d.depth / 10) * 1.8;
                    /**
                     * @param {string} str
                     */
                    function removeOutsideParentheses(str) {
                        const match = str.match(/\(([^)]+)\)/);
                        return match ? match[1] : str;
                    }
                    if (d.depth === 1) return color(d.data.name);
                    while (d.depth > 2) d = d.parent;
                    return `rgba(${removeOutsideParentheses(
                        color(d.data.name)
                    )}, ${1 - opacity})`;
                }
            )
            .attr("d", arc)
            .append("title")
            .text(
                (
                    /** @type {{ ancestors: () => any[]; data: { definition: any; explanation: any; }; }} */ d
                ) =>
                    `${d
                        .ancestors()
                        .map(
                            (/** @type {{ data: { name: any; }; }} */ d) =>
                                d.data.name
                        )
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
                        (
                            /** @type {{ depth: any; y0: any; y1: any; x1: number; x0: number; }} */ d
                        ) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10
                    )
            )
            .join("text")
            .attr(
                "transform",
                function (
                    /** @type {{ x0: any; x1: any; y0: any; y1: any; }} */ d
                ) {
                    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
                    const y = (d.y0 + d.y1) / 2;
                    return `rotate(${x - 90}) translate(${y},0) rotate(${
                        x < 180 ? 0 : 180
                    })`;
                }
            )
            .attr("dy", "0.35em")
            .text((/** @type {{ data: { name: any; }; }} */ d) => d.data.name);
    }
</script>

<svg bind:this={svgElement} />
