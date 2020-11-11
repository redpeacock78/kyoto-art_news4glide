async function generate_data<T extends string[][]>(all_data: T): Promise<T> {
  const all_tit: string[] = all_data.map((i: string[]): string => {
    return i[0];
  });
  const all_url: string[] = all_data.map((i: string[]): string => {
    return i[1];
  });
  const all_date: string[] = all_data.map((i: string[]): string => {
    return i[2];
  });
  const all_tag: string[] = all_url.map((i: string): string => {
    return generate_tag<string>({ URL: i });
  });

  const all_desc: string[] = [];
  for (let i = 0; i < all_url.length; i++) {
    all_desc[i] = await generate_description<string>({ URL: all_url[i] });
    Utilities.sleep(1000);
  }
  const all_img: string[] = [];
  for (let i = 0; i < all_tit.length; i++) {
    const tit_encode: string = encodeURIComponent(
      all_tit[i].replace(/\,/g, "%2C").replace(/\//g, "%2F")
    );
    all_img[i] = await generate_img<string>({ title: tit_encode });
    Utilities.sleep(1000);
  }

  const add_all_data: string[][] = [];
  for (let i = 0; i < all_tit.length; i++) {
    add_all_data[i] = [
      all_tit[i],
      all_url[i],
      all_date[i],
      all_desc[i],
      all_img[i],
      all_tag[i],
    ];
  }

  return add_all_data.sort(sort_date).slice(0, 500) as T;
}
