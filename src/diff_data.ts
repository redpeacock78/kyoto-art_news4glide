function diff_data(
  first_data: string[][],
  second_data: string[][]
): string[][] {
  const first_tit: string[] = first_data.map((i: string[]): string => {
    return i[0];
  });
  const second_tit: string[] = second_data.map((i: string[]): string => {
    return i[0];
  });

  const tit_diff: string[] = second_tit.filter(
    (i: string): boolean => first_tit.indexOf(i) == -1
  );

  const diff = [];
  for (let i = 0; i < tit_diff.length; i++) {
    const num: number = second_tit.indexOf(tit_diff[i]);
    diff[i] = second_data[num];
  }

  return diff;
}
