// undirected path
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    console.log(graph)
    return hasPath(graph, nodeA, nodeB, new Set())
}


// make graph from edges
const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [ a, b ] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}


const hasPath = (graph, src, dst, visited) => {
    if (visited.has(src)) return false
    if (src === dst) return true
    
    visited.add(src)

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) === true) return true
    }
    return false
}



// main
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

console.log(undirectedPath(edges, 'i', 'l'))
