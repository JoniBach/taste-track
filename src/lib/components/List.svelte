<script>
    // Import the JSON data

    /**
     * @type {any[]}
     */
    const colorData = [];

    const radius = 150;
    const strokeWidth = 100;
    const centerX = 150;
    const centerY = 150;

    /**
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} radius
     * @param {number} angleInDegrees
     */
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} startAngle
     * @param {number} endAngle
     */
    function describeArc(x, y, radius, startAngle, endAngle) {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        const d = [
            "M",
            start.x,
            start.y,
            "A",
            radius,
            radius,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y,
        ].join(" ");
        return d;
    }
</script>

<svg width="300" height="300" viewBox="0 0 300 300">
    {#each colorData as color, index}
        <path
            d={describeArc(
                centerX,
                centerY,
                radius,
                index * 30,
                (index + 1) * 30
            )}
            fill={`hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`}
            stroke="black"
            stroke-width={strokeWidth}
        />
    {/each}
</svg>
