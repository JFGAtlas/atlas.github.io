declare module 'lunar-javascript' {
  export const Solar: {
    fromDate(date: Date): {
      getLunar(): {
        getEightChar(): {
          getYear(): string;
          getMonth(): string;
          getDay(): string;
          getTime(): string;
        };
      };
    };
  };
}
