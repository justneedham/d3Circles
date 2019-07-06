import * as d3 from 'd3';

export const draw = (data) => {
    const w = 535;
    const h = 250;
    const svg = d3.select('.barChart')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

    svg.selectAll('rect.colorBar')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', () => {
            return w / data.length;
        })
        .attr('height', (d) => {
            return d * 2;
        })
        .attr('x', (d, i) => {
            return i * (w / data.length);
        })
        .attr('y', (d) => {
            return h - d * 2;
        })
        .attr('fill', 'orange');
};
