/*
Copyright (c) 2020 redpeacock78
This software is released under the MIT License, see LICENSE.
*/

async function main(): Promise<void> {
  const spread_id = "1UbxPew3ki_mlJmU6B0uzU__g02awVu1J5a0kgaSFvC0";
  const spread_id2 = "1869ZqW5nLdvAAtKe1JrZZkCA54NRO9eZTnj0Irt7RVI";

  const complate_sheet = sheet(spread_id2, "data");

  const life_data: string[][] = sheet(spread_id, "life")
    .getRange(1, 1, 5, 3)
    .getValues();
  const teach_data: string[][] = sheet(spread_id, "teach")
    .getRange(1, 1, 5, 3)
    .getValues();
  const event_data: string[][] = sheet(spread_id, "event")
    .getRange(1, 1, 5, 3)
    .getValues();
  const emergency_data: string[][] = sheet(spread_id, "emergency")
    .getRange(1, 1, 5, 3)
    .getValues();
  const scholarship_data: string[][] = sheet(spread_id, "scholarship")
    .getRange(1, 1, 5, 3)
    .getValues();
  const careerdesign_data: string[][] = sheet(spread_id, "careerdesign")
    .getRange(1, 1, 5, 3)
    .getValues();

  const last_low: number = complate_sheet.getLastRow();
  const read_complate_data: string[][] = complate_sheet
    .getRange(2, 1, last_low, 6)
    .getValues();

  const all_data: string[][] = life_data.concat(
    teach_data,
    event_data,
    emergency_data,
    scholarship_data,
    careerdesign_data
  );

  if (last_low === 1) {
    writing_data(complate_sheet, all_data);
  } else {
    const diff = diff_data(read_complate_data, all_data.sort(sort_date));
    if (diff.length > 0) {
      writing_data(complate_sheet, diff, read_complate_data);
    }
  }
}
