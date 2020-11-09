function sort_date(a: string[], b: string[]): 0 | 1 | -1 {
  const a_date: Date = new Date(
    Utilities.formatDate(new Date(a[2]), "JST", "yyyy/MM/dd")
  );
  const b_date: Date = new Date(
    Utilities.formatDate(new Date(b[2]), "JST", "yyyy/MM/dd")
  );
  if (a_date > b_date) {
    return -1;
  } else if (a_date < b_date) {
    return 1;
  } else {
    return 0;
  }
}
