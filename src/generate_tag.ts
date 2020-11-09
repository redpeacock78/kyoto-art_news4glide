function generate_tag<T extends string>({ URL }: { URL: T }): T {
  const regex = /life|teaching|event|post|scholarship|careerdesign/;
  const genre = String(URL.match(regex));
  if (genre === "life") {
    return "生活" as T;
  } else if (genre === "teaching") {
    return "学習" as T;
  } else if (genre === "event") {
    return "イベント・プロジェクト" as T;
  } else if (genre === "post") {
    return "緊急" as T;
  } else if (genre === "scholarship") {
    return "奨学金" as T;
  } else if (genre === "careerdesign") {
    return "キャリアデザイン" as T;
  } else {
    return " " as T;
  }
}
