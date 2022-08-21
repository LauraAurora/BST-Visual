import { findRenderedComponentWithType } from "react-dom/test-utils";
import BinaryNode from "./BinaryNode";

class BinaryTree {
    constructor() {
        this.root = null;
    }
}

add(data) 
{
    const newNode = new BinaryNode(data);
    if(!this.root)
    {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode)
    }
}

insertNode(node, newNode) 
{
    if(newNode.data < node.data)
    {
        if(node.left === null)
        {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if(node.right === null)
        {
            node.right = newNode;
        } else {
            this.insertNode(this.right, newNode);
        }
    }
}

remove(data)
{
    this.root = this.removeNode(this.root, data);
}

removeNode(node, data)
{
    if(node == null)
        return null;

    if(node.data === data)
    {
        //If the 'target node' has no children
        if(node.left == null && node.right == null)
        {
            return null;
        } 

        //If the 'target node' has one child
        if(node.left == null)
        {
            return node.right;
        } else if (node.right == null) {
            return node.left;
        }

        const temp = node.right;
        while(temp.left !== null)
        {
            temp = temp.left;
        }

        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data);
        return node;
    } else if(node.data > data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
}

findMin()
{
    let current = this.root;
    while(current.left !== null)
        current = current.left;
    
    return current.data;
}

findMax()
{
    let current = this.root;
    while(current.right !== null)
        current = current.right;
    
    return current.data;
}

rootNode()
{
    return this.root;
}

preOrder(node)
{
    if(node === null)
        return;
    
    //console.log(node.data);
    fn(node);
    this.preOrder(node.left);
    this.preOrder(node.right);
}

inOrder(node)
{
    if(node === null)
        return;
    
    this.inOrder(node.left);
    //console.log(node.data);
    fn(node);
    this.inOrder(node.right);
}

postOrder(node)
{
    if(node === null)
        return;
    
    this.postOrder(node.left);
    this.postOrder(node.right);
    //console.log(node.data);
    fn(node);
}

export default BinaryTree;
//Used to export a single class, function or primitive from a script file.
//Further explanation needed.