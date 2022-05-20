import { writable } from 'svelte/store';




export const cartProducts = writable([]);


export const box = writable([
    {
        name: `Testing Data Product3`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 112,
        userId: 112
    },
    {
        name: `Testing Data Product2`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 223,
        userId: 112
    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 41,
        userId: 112
    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 31,
        userId: 112
    },
    {
        name: `Testing Data Product1 with no user`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 11,
        userId: 1132
    },
    {
        name: `Testing Data Product with no user`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 21,
        userId: 1123
    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 2221,
        userId: 112
    },
]);

export const users = writable([
    {
        name: `Testing Data User`,
        email: `nazzzar502@gmail.com`,
        password: `gOrgeFrom91Gu-ngle`,
        id: 112,
        admin: true,
    }

]);

export const currentUser = writable({});
export const session = writable(false);

function Cart(id, userId, cartPoducts) {
    id = id;
    userId = userId;
    cartPoducts = cartPoducts;
};



