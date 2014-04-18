var makeBinarySearchTree = function(value){
};


function breadthFirstLog(func){

	Enqueue the root node
	Dequeue a node and examine it
	If the element sought is found in this node, quit the search and return a result.
	Otherwise enqueue any successors (the direct child nodes) that have not yet been discovered.
	If the queue is empty, every node on the graph has been examined – quit the search and return "not found".
	If the queue is not empty, repeat from Step 2.

}

	Note: Using a stack instead of a queue would turn this algorithm into a depth-first search.





BFS,
				5
		2				8
	1		3		6		9

enqueue 5					[5]
dequeue 5, check			[]
enqueue 2, 8				[2,8]
dequeue 2, check			[8]
enqueue 1, 3				[8,1,3]
dequeue 8, check			[1,3]
enqueue 6, 9				[1,3,6,9]
dequeue 1, 3, 6, 9

[5,2,8,1,3,6,9]


DFS,
				5
		2				8
	1		3		6		9

stack 	5					[5]
unstack 5					[]
stack 	8, 2 				[8,2]
unstack 2					[8]
stack 	3, 1				[8,3,1]
unstack 1					[8,3]
unstack 3 					[8]
unstack 8					[]
stack 9,6					[9,6]
unstack 6,9					[]

[5,2,1,3,8,6,9]