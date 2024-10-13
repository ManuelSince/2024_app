import { Status } from "~/app/models/reservation";
export const center = {
  id: "3264-762",
  marketing_name: "Wojo Gaité Montparnasse",
  services: [
    {
      id: "3456",
      marketing_name: "Bureau 2 places",
      opening_hours: {
        morning_start: "8:12",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3457",
      marketing_name: "Bureau 7 places",
      opening_hours: {
        morning_start: "8:12",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3458",
      marketing_name: "Coworking 20 places",
      opening_hours: {
        morning_start: "8:12",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3459",
      marketing_name: "Salle de réunion 12 places",
      opening_hours: {
        morning_start: "8:00",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3460",
      marketing_name: "Bureau 1 place",
      opening_hours: {
        morning_start: "8:12",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3470",
      marketing_name: "Bureau 6 places",
      opening_hours: {
        morning_start: "8:12",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3480",
      marketing_name: "Coworking 35 places",
      opening_hours: {
        morning_start: "8:05",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "17:15",
      },
    },
    {
      id: "3481",
      marketing_name: "Salle de réunion 16 places",
      opening_hours: {
        morning_start: "8:12",
        morning_end: "12:30",
        afternoon_start: "13:00",
        afternoon_end: "19:00",
      },
    },
  ],
};

export const reservations = [
  {
    date: "2024-09-18",
    start_time: "8:45",
    end_time: "10:00",
    service_id: "3480",
    status: Status.Confirmed,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "11:00",
    end_time: "13:45",
    service_id: "3481",
    status: Status.NotCompleted,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "8:45",
    end_time: "10:30",
    service_id: "3481",
    status: Status.Confirmed,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "10:45",
    end_time: "12:15",
    service_id: "3456",
    status: Status.NotCompleted,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "8:00",
    end_time: "10:00",
    service_id: "3456",
    status: Status.Confirmed,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "13:30",
    end_time: "15:30",
    service_id: "3456",
    status: Status.Confirmed,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "13:30",
    end_time: "15:30",
    service_id: "3470",
    status: Status.Confirmed,
    optionnal_services: [],
  },
  {
    date: "2024-09-18",
    start_time: "8:00",
    end_time: "17:30",
    service_id: "3458",
    status: Status.Reserved,
    optionnal_services: [],
  },
];
