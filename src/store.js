import { writable } from 'svelte/store';

export const box = writable([
    {
        name: `Testing Data Product3`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 1
    },
    {
        name: `Testing Data Product2`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 2
    },
    {
        name: `Testing Data Product1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet lacus suscipit tincidunt. Proin ut diam nec lectus porttitor fringilla. Etiam tincidunt dolor eget nibh tristique sodales. Integer in dui vitae nunc placerat scelerisque vitae sed tellus. Pellentesque ut lacinia est. Suspendisse nec leo maximus, venenatis lorem vel, egestas lectus`,
        imageSource: `none`,
        id: 3
    }
]);

