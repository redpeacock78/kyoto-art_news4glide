/*
Copyright (c) 2020 redpeacock78
This software is released under the MIT License, see LICENSE.
*/

async function main(): Promise<void> {
  const spread_id = "1UbxPew3ki_mlJmU6B0uzU__g02awVu1J5a0kgaSFvC0";
  const spread_id2 = "1869ZqW5nLdvAAtKe1JrZZkCA54NRO9eZTnj0Irt7RVI";

  const sheet_life = sheet(spread_id, "life");
  const sheet_teach = sheet(spread_id, "teach");
  const sheet_event = sheet(spread_id, "event");
  const sheet_emergency = sheet(spread_id, "emergency");
  const sheet_scholarship = sheet(spread_id, "scholarship");
  const sheet_careerdesign = sheet(spread_id, "careerdesign");

  const complate_sheet = sheet(spread_id2, "data");

  const life_data: string[][] = sheet_life.getRange(1, 1, 5, 3).getValues();
  const teach_data: string[][] = sheet_teach.getRange(1, 1, 5, 3).getValues();
  const event_data: string[][] = sheet_event.getRange(1, 1, 5, 3).getValues();
  const emergency_data: string[][] = sheet_emergency
    .getRange(1, 1, 5, 3)
    .getValues();
  const scholarship_data: string[][] = sheet_scholarship
    .getRange(1, 1, 5, 3)
    .getValues();
  const careerdesign_data: string[][] = sheet_careerdesign
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
