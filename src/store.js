import { writable } from 'svelte/store';


export const activeTab = writable();

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
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem varius augue fermentum congue. Aenean pharetra suscipit tortor, vitae semper massa efficitur vitae. Nunc eget dolor at leo tristique pretium ac id purus. In dignissim dolor nec lectus ultricies, a scelerisque augue efficitur. Quisque ultricies malesuada aliquet. Sed pulvinar tincidunt leo, vel vehicula urna feugiat eu. Phasellus pulvinar libero leo, eget bibendum turpis iaculis sit amet. Duis sit amet orci est.

            Duis imperdiet ut massa in sodales. Praesent vitae libero sed nisi rutrum sagittis quis et turpis. Donec vestibulum nisi quis lacus ultrices, in auctor sem facilisis. Fusce a placerat diam, ut malesuada tortor. Sed bibendum egestas nunc, suscipit imperdiet purus ornare dictum. Integer accumsan ac sem non ultrices. Phasellus accumsan, erat eget volutpat cursus, quam enim gravida purus, non commodo justo nunc ac nulla. Sed vitae tristique ante, quis ultrices arcu. Nam semper nulla et porta interdum.
            
            Sed malesuada justo neque, in faucibus mi accumsan sed. Fusce egestas arcu ac dolor ultrices scelerisque. Cras lacinia nunc eu enim sollicitudin, vel suscipit nisi ornare. Donec venenatis turpis in tortor consectetur venenatis. Aliquam tempus a metus non tempus. Nulla eget malesuada nisl, eget rutrum urna. Nunc nec convallis sem. Aenean pretium, sem sed molestie auctor, dolor augue viverra nulla, aliquet vestibulum ex enim vel leo. Vestibulum faucibus turpis sit amet placerat tincidunt. Morbi fermentum feugiat lorem, id pulvinar justo semper eget.
            
            Integer ex tortor, lobortis ut sodales vitae, gravida sit amet sem. Ut consectetur, purus vitae porttitor porta, felis turpis sollicitudin tellus, accumsan pellentesque lacus turpis vel magna. Nunc consectetur urna eu augue laoreet mollis. Aenean nec convallis ipsum. Quisque porta dolor erat, vel eleifend velit vestibulum vitae. Sed congue quam quis ex euismod, ut lacinia augue gravida. Quisque sollicitudin eu nisl venenatis pellentesque. Quisque ipsum eros, ultrices vel ultricies et, efficitur ut sapien. Aenean congue erat ut metus eleifend, id fermentum tortor mattis. Cras dignissim sagittis accumsan. Cras suscipit laoreet posuere. Nam sagittis ultricies turpis, nec maximus nisl. Proin a lobortis mauris.`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 2123,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product3`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 31231,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product4`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 4213123,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product5`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 5213123,
            userId: 112,
            rating: Math.random() * 1000
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
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product7`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 72342356123123,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product8`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 8123858562345123,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 911246756812233123,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 9324233432546575668,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 91323245634645223,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 911121231231231233454,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 913213123423467,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 23122131231,
            userId: 112,
            rating: Math.random() * 1000
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
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product7`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 5894755623,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product8`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556233235,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556231233235,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556238432,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 58947556235767890,
            userId: 112,
            rating: Math.random() * 1000
        },
        {
            name: `Testing Data Product9`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
            shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            imageSource: `none`,
            id: 5894755623368341234,
            userId: 112,
            rating: Math.random() * 1000
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



