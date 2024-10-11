import { defineStore } from "pinia";

export const useTicketStore = defineStore("TicketStore", () => {
  const tickets = ref([
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "مالی",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652654,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "پشتیبانی",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652655,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "مدیریت",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652656,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "تیم محصول",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652657,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "تیم فنی",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652658,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "در انتظار بررسی",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652659,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "بسته شد",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652660,
    },
    {
      cafeId: 9787,
      name: "کافه جابری",
      status: "حذف شده",
      date: "۱۴۰۳/۰۵/۲۲",
      time: "۱۴:۳۳",
      ticketId: 989652652661,
    },
  ]);
  const getTickets = computed(() => {
    return tickets.value;
  });

  return {
    getTickets,
  };
});
