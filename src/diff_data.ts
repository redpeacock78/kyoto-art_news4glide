function diff_data(
  first_data: string[][],
  second_data: string[][]
): string[][] {
  const first_url: string[] = first_data.map((i: string[]): string => {
    return i[1];
  });
  const second_url: string[] = second_data.map((i: string[]): string => {
    return i[1];
  });

  const url_diff: string[] = second_url.filter(
    (i: string): boolean => first_url.indexOf(i) == -1
  );

  const diff = [];
  for (let i = 0; i < url_diff.length; i++) {
    const num: number = second_url.indexOf(url_diff[i]);
    diff[i] = second_data[num];
  }

  return diff;
}
