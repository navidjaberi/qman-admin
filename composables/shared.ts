export const useShared = () => {
  const { showAlert } = useAlert();

  const header = useState(
    "header",
    (): {
      title: string;
      hasBack: boolean;
      hideActions: boolean;
      hideBottomNav: boolean;
      customBackPath: string;
    } => {
      return {
        title: "test",
        hasBack: false,
        hideActions: false,
        hideBottomNav: false,
        customBackPath: "",
      };
    }
  );

  const years = Array.from({ length: 100 }, (_, i) => 1400 - i);
  const months = [
    { text: "فروردین", value: 1 },
    { text: "اردیبهشت", value: 2 },
    { text: "خرداد", value: 3 },
    { text: "تیر", value: 4 },
    { text: "مرداد", value: 5 },
    { text: "شهریور", value: 6 },
    { text: "مهر", value: 7 },
    { text: "آبان", value: 8 },
    { text: "آذر", value: 9 },
    { text: "دی", value: 10 },
    { text: "بهمن", value: 11 },
    { text: "اسفند", value: 12 },
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handelFiltersForQuery = (filters: any) => {
    if (!filters) return "";
    let filter = "";
    if (Object.keys(filters).length > 0) {
      for (const [key, value] of Object.entries(filters)) {
        filter += `${key}=${value}&`;
      }
    }
    return filter;
  };
  const copyToClipboard = (value: string) => {
    if (!value) return;
    // with navigators
    navigator.clipboard.writeText(value);
    showAlert({
      message: "کپی شد",
      color: "success",
    });
  };
  // convert to persian time and date
  const toPersianDate = (date: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("fa-IR");
  };
  const toPersianTime = (date: string) => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("fa-IR");
  };

  // find index
  const findIndex = (array: any[], value: any) => {
    return array.findIndex((item) => item === value);
  };
  const amountOptionMask = {
    preProcess: (val: string) => {
      val.replace(/[$,]/g, "");
    },
    postProcess: (val: any) => {
      if (!val) return "";

      const sub = 3 - (val.includes(".") ? val.length - val.indexOf(".") : 0);

      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      })
        .format(val)
        .slice(0, sub ? -sub : undefined);
    },
  };
  // slice string replace with ...
  const sliceString = (str: string = "", length: number = 40) => {
    if (!str) return "";
    if (str.length > length) {
      return str.slice(0, length) + "...";
    }
    return str;
  };
  // /convert phone number if persian to english
  const convertPersianNumberToEnglish = (str: string) => {
    if (!str) return "";
    return str
      .replace(/۰/g, "0")
      .replace(/۱/g, "1")
      .replace(/۲/g, "2")
      .replace(/۳/g, "3")
      .replace(/۴/g, "4")
      .replace(/۵/g, "5")
      .replace(/۶/g, "6")
      .replace(/۷/g, "7")
      .replace(/۸/g, "8")
      .replace(/۹/g, "9");
  };
  //"chat.text.replace(/\n/g, '<br />')" next line
  const replaceNewLine = (str: string) => {
    if (!str) return "";
    return str.replace(/\n/g, "<br />");
    //sample : <p v-html="replaceNewLine(chat.text)"></p>
  };

  // convert this 2024-08-07T13:22:13.000000Z to ۱۴۲۰/۱۰/۲۰ | ۱۷:۳۰
  const toPersianDateTime = (date: string) => {
    if (!date) return "";
    const newDate = new Date(date);
    const persianDate = newDate.toLocaleDateString("fa-IR");
    const persianTime = newDate.toLocaleTimeString("fa-IR");
    return `${persianDate} | ${persianTime}`;
  };
  function generatePersianNumArray(start: number, end: number, text?: string) {
    const result = [];
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    for (let i = start; i <= end; i++) {
      let persianNumber = String(i)
        .split("")
        .map((digit) => persianDigits[Number(digit)])
        .join("");
      if (text) {
        result.push( persianNumber + '' + text);
      } else {
        result.push(persianNumber);
      }
    }
    return result;
  }
  function useToEnglishDigits(str: string | number): string {
    var e = "۰".charCodeAt(0);
    str = str.toString().replace(/[۰-۹]/g, function (t: string): any {
      return t.charCodeAt(0) - e;
    });
    e = "٠".charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t: string): any {
      return t.charCodeAt(0) - e;
    });
    return str;
  }
  return {
    header,
    years,
    months,
    days,
    handelFiltersForQuery,
    copyToClipboard,
    toPersianDate,
    toPersianTime,
    findIndex,
    amountOptionMask,
    sliceString,
    convertPersianNumberToEnglish,
    replaceNewLine,
    toPersianDateTime,
    generatePersianNumArray,
    useToEnglishDigits
  };
};
