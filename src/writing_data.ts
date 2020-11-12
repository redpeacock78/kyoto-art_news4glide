async function writing_data(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  data: string[][],
  origin_data?: string[][]
): Promise<void> {
  const original_data: string[][] = origin_data || null;
  const write_complate_data: string[][] =
    original_data === null
      ? (await generate_data<string[][]>(data)).slice(0, 500)
      : (await generate_data<string[][]>(data))
          .concat(origin_data)
          .sort(sort_date)
          .slice(0, 500);
  const row: number = write_complate_data.length;
  const col: number = write_complate_data[0].length;

  sheet.getRange(2, 1, row, col).setValues(write_complate_data);
}
