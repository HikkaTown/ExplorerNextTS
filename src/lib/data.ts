export const catalogModel = [
  {
    fileName: "folder1",
    type: "folder",
    content: [
      {
        fileName: "subFolder",
        type: "folder",
        content: [
          {
            fileName: "subFolder",
            type: "folder",
            content: [
              { fileName: "subFile3", type: "file", content: null },
              { fileName: "subFile4", type: "file", content: null },
            ],
          },
          { fileName: "subFile3", type: "file", content: null },
          { fileName: "subFile4", type: "file", content: null },
        ],
      },
      { fileName: "subFile", type: "file", content: null },
      { fileName: "subFile2", type: "file", content: null },
    ],
  },
  { fileName: "file1", type: "file", content: null },
  { fileName: "file2", type: "file", content: null },
];
