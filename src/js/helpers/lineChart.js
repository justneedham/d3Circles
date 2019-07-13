import * as d3 from 'd3';

export const draw = (data) => {

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = window.innerHeight - margin.top - margin.bottom;

    const n = 21;
    const xScale = d3.scaleLinear().range([0, width]).domain([0, n - 1]);
    const yScale = d3.scaleLinear().range([0, height]).domain([0, 1]);
    const line = d3.line()
        .x((d, i) => { return xScale(i); })
        .y((d, i) => { return yScale(d.y); })
        // .curve(d3.curveMonotoneX)

    const dataSetOne = d3.range(n).map((d) => { return { y: d3.randomUniform(0.5)() }; });
    const dataSetTwo = d3.range(n).map((d) => { return { y: d3.randomUniform(0.5, 1)() }; });
    console.log(dataSetOne)

    const svg = d3.select('.lineChart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ")")
        .call(d3.axisBottom(xScale));

    svg.append('g')
        .attr('class', 'y axis')
        .call(d3.axisLeft(yScale));

    svg.append('rect')
        .attr('class', 'highlight')
        .attr('height', height)
        .attr('width', 1)
        .attr('transform', `translate(${xScale(10)}, 0)`)


    svg.append('path')
        .datum(dataSetOne)
        .attr('class', 'line1')
        .attr('d', line);

    svg.append('path')
        .datum(dataSetTwo)
        .attr('class', 'line2')
        .attr('d', line);

    svg.selectAll('.dot')
        .data(dataSetOne)
        .enter()
        .append('circle')
        .attr('class', 'dot1')
        .attr('cx', (d, i) => { return xScale(i); })
        .attr('cy', (d) => { return yScale(d.y); })
        .attr('r', 5);

    svg.selectAll('.dot')
        .data(dataSetTwo)
        .enter()
        .append('circle')
        .attr('class', 'dot2')
        .attr('cx', (d, i) => { return xScale(i); })
        .attr('cy', (d) => { return yScale(d.y); })
        .attr('r', 5);


};
