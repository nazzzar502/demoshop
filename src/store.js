import { writable } from 'svelte/store';




export const cartProducts = writable([]);
export const activeCategoryId = writable();
export const category = writable([
    {
        name: "Products for testing",
        description: " This is just  for debugging",
        id: 43241,
        userId: 221,
        products: [{
            name: `Testing Data Product2`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 2123,
            userId: 112,
        },
        {
            name: `Testing Data Product3`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 31231,
            userId: 112,
        },
        {
            name: `Testing Data Product4`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 4213123,
            userId: 112,
        },
        {
            name: `Testing Data Product5`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 5213123,
            userId: 112,
        },
        ]
    },
    {
        name: "Some additional  stuff",
        description: " This is just another products list for debugging",
        id: 34233,
        userId: 221,
        products: [{
            name: `Testing Data Product6`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 31231,
            userId: 112,
        },
        {
            name: `Testing Data Product7`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 72342356123123,
            userId: 112,
        },
        {
            name: `Testing Data Product8`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 8123858562345123,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 911246756812233123,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 9324233432546575668,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 91323245634645223,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 911121231231231233454,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 913213123423467,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 23122131231,
            userId: 112,
        },
        ]
    },
    {
        name: "Products for debugging",
        description: " Some plceholder text for debugging",
        id: 334233,
        userId: 221,
        products: [{
            name: `Testing Data Product6`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 589475,
            userId: 112,
        },
        {
            name: `Testing Data Product7`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 5894755623,
            userId: 112,
        },
        {
            name: `Testing Data Product8`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556233235,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556231233235,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556238432,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556235767890,
            userId: 112,
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 5894755623368341234,
            userId: 112,
        },
        ]
    },
])

export const box = writable([
    {
        name: `Testing Data Product3`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 1,
        userId: 112,

    },
    {
        name: `Testing Data Product2`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 2,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 3,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 4,
        userId: 112,

    },
    {
        name: `Testing Data Product1 with no user`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 5,
        userId: 1132,

    },
    {
        name: `Testing Data Product with no user`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 6,
        userId: 1123,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 7,
        userId: 112,

    },
    {
        name: `Testing Data Product3`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 8,
        userId: 112,

    },
    {
        name: `Testing Data Product2`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 9,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 10,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 11,
        userId: 112,

    },
    {
        name: `Testing Data Product1 with no user`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 12,
        userId: 1132,

    },
    {
        name: `Testing Data Product with no user`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 13,
        userId: 1123,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 14,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 15,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 16,
        userId: 112,

    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 17,
        userId: 112,

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



