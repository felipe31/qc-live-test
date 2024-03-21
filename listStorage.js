import { open } from "node:fs/promises";

let listA = [1, 2, 3, 4];

const PAGE_SIZE = 2;
export async function getListPage(page) {
  const fd = await open("bigList.txt");

  const start = page * PAGE_SIZE;
  const end = page * PAGE_SIZE + PAGE_SIZE - 1;

  let i = 0;
  for await (const line of fd.readLines()) {
    // console.log(line);
    if (i >= start) {
      console.log("-> ", line);
    }
    if (i >= end) break;
    i++;
  }

  //   const reader = fd.createReadStream({ start, end });
  //   reader.on("data", function (chunk) {
  //     console.log(chunk.toString());
  //   });
}
