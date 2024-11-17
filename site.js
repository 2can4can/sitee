document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const startTraversalButton = document.getElementById('startTraversal');

    // DOM Traversal function
    function traverseDOM(node) {
        if (!node) return;

        const content = node.nodeName.toLowerCase() +
            (node.textContent.trim() ? `: ${node.textContent.trim().slice(0, 30)}...` : '');

        // Display current node content in the output area
        output.textContent = `Current node: ${content}`;
        console.log(content);

        // Continue traversal
        setTimeout(() => {
            if (node.firstElementChild) {
                traverseDOM(node.firstElementChild);
            } else if (node.nextElementSibling) {
                traverseDOM(node.nextElementSibling);
            } else {
                let parent = node.parentElement;
                while (parent && !parent.nextElementSibling) {
                    parent = parent.parentElement;
                }
                if (parent) traverseDOM(parent.nextElementSibling);
            }
        }, 1000);
    }

    startTraversalButton.addEventListener('click', () => {
        output.textContent = 'Starting traversal...';
        traverseDOM(document.body);
    });
});
