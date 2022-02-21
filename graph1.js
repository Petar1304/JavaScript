const depthFirstPrint = (graph, source) => {
    // make a list
    const stack = [ source ]

    // iterate until its not empty
    while (stack.length > 0) {
        // pop last element
        const current = stack.pop();
        // print last element
        console.log(current)
        
        // add all neighbors of current node to stack
        // for (let neighbor of graph[current]) {
        //     stack.push(neighbor)
        // }

        // pexys implementation js expert :)
        for (let i = 0; i < graph[current].length; i++) {
            stack.push(graph[current][i])
        }

    }
}


// recursive depth first algorithm
const depthFirstPrintR = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrintR(graph, neighbor);
    }
}


const breadthFirstPrint = (graph, source) => {
    const queue = [ source ]
    while(queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}


// search if the path beetwen src and dst exists
const search = (graph, src, dst) => {
    const stack = [ src ]
    while(stack.length > 0) {
        let current = stack.pop()
        if (current == dst) {
            console.log('Path exists')
            return
        }
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    console.log("Path doesn't exist")
}


// recursive method
const hasPath = (graph, src, dst) => {
    if (src == dst) return true

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) return true
    }
    return false
}


// breath first search for alorithm
const hasPathBreadthFirst = (graph, src, dst) => {
    const queue = [ src ]

    while (queue.length > 0) {
        const current = queue.shift()

        if (current === dst) return true
        
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}





const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}


// depthFirstPrintR(graph, 'a')
// breathFirstPrint(graph, 'a')

console.log(hasPath(graph, 'c', 'a'))
console.log(hasPathBreadthFirst(graph, 'c', 'a'))