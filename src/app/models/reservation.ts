export type Reservation = {
  date: string;
  start_time: string;
  end_time: string;
  service_id: string;
  status: Status;
  optionnal_services?: string[];
};
export enum Status {
  Reserved,
  NotCompleted,
  Confirmed,
  CancelledByUser,
  CancelledByAdmin,
  Conflict,
  Locked,
}
