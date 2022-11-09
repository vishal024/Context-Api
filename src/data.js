const explorer = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'public 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'ram.html',
              isFolder: false,
            },
          ],
        },
        {
          name: 'public2',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'index.js',
          isFolder: false,
        },
        {
          name: 'file.js',
          isFolder: false,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: true,
      items: [],
    },
  ],
};
export default explorer;
