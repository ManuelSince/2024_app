"use client";

import type { ReactElement } from "react";
import { useState, useEffect, useRef } from "react";
import { Calendar } from "~/components/ui/calendar";
import Modal from "~/app/_components/modal";
import { reservations } from "./ressources";

import {
  calculatexAxisSteps,
  convertStrTimeToMinutes,
  getHoursAndMinutesFromMinutes,
  getTicksfromMinutes,
  getTickIndexFromMinutes,
} from "~/utils/timelineCalculus";
import { convertUtcToDateFormatStr } from "~/utils/date";
import type { Center } from "~/app/models/center";
import type { Service } from "~/app/models/service";
import type { Reservation } from "~/app/models/reservation";
import { Status } from "~/app/models/reservation";
const ModalService = (props: {
  isOpen: boolean;
  service: Service;
}): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [service, setService] = useState<Service>({} as Service);
  useEffect(() => {
    setOpen(props.isOpen);
    setService(props.service);
  }, [props.isOpen, props.service]);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const modalRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    //const node = modalRef?.current as ChildNode | null;
    if (
      modalRef.current &&
      !modalRef?.current?.contains(event.target ?? null)
    ) {
      setOpen(false);
    }
  };
  return <Modal isOpen={open} service={service} />;
};
const ServiceTimeLine = (props: {
  service: Service;
  reservations: Reservation[];
  ticks: number;
  min: [number, number];
}): ReactElement => {
  const { service, reservations, ticks, min } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex shrink-0 items-center  border-b px-4 py-1">
      <div className="flex w-[200px] shrink-0 justify-start whitespace-nowrap">
        {service?.marketing_name}
      </div>
      <ModalService isOpen={isOpen} service={service} />
      {Array.from({ length: ticks }).map((_, idx) => (
        <div key={idx} className="flex w-[50px] -translate-y-3 px-2">
          {/* <div className={`${idx % 4 === 0 ? "" : ""}`}>
            {idx % 4 === 0 ? "|" : ""}
          </div> */}
          <div className={`translate-y-3 py-1 ${idx % 4 === 0 ? "" : ""}`}>
            {``}
          </div>
          <div
            className={`relative flex h-[60px] w-[60px] -translate-x-[10px] translate-y-3 items-center justify-center ${idx % 4 === 0 ? "" : ""}`}
          >
            {reservations
              .filter((resa) => resa.service_id === service.id)
              .map((resa, index) => {
                const startTime = `${resa.start_time}`;
                const endTime = `${resa.end_time}`;
                const start = convertStrTimeToMinutes(startTime);
                const end = convertStrTimeToMinutes(endTime);
                console.log(getTicksfromMinutes(end - start));
                const startTick = getTickIndexFromMinutes(
                  convertStrTimeToMinutes(min[0] + ":" + min[1]),
                  start,
                );
                const endTick = getTickIndexFromMinutes(
                  convertStrTimeToMinutes(min[0] + ":" + min[1]),
                  end,
                );
                // console.log(startTick);
                // console.log(endTick);
                if (idx >= startTick && idx < endTick) {
                  return (
                    <span
                      key={index}
                      className={`h-[50px] w-[50px] place-content-center justify-self-center text-black ${resa.status === Status.Confirmed ? "bg-lime-400" : resa.status === Status.Reserved ? "bg-yellow-500" : "bg-red-400"}`}
                      onClick={() => {
                        setIsOpen(false);
                        setIsOpen(!isOpen);
                      }}
                    >
                      {""}
                    </span>
                  );
                } else return null;
              })}
          </div>
        </div>
      ))}
    </div>
  );
};
const TimeLineHeader = (props: {
  ticks: number;
  min: [number, number];
}): ReactElement => {
  const { ticks } = props;
  return (
    <div className="">
      <div className="flex w-full items-center justify-center">
        <h1 className="font-2xl py-5 text-xl">timeline</h1>
      </div>

      <div className="flex shrink-0 items-center border-b border-t px-4 py-1">
        <div className="flex w-[200px] shrink-0 justify-start whitespace-nowrap ">
          {ticks}
        </div>
        {Array.from({ length: ticks }).map((tick, idx) => (
          <div key={idx} className="flex w-[50px] -translate-y-3 px-2">
            <div className={`${idx % 4 === 0 ? "" : ""}`}>
              {idx % 4 === 0 ? "|" : ""}
            </div>
            <div
              className={`w-[60px] -translate-x-[14px] translate-y-3 py-1 ${idx % 4 === 0 ? "" : ""}`}
            >
              {`${idx % 4 === 0 ? `${props.min[0] + idx / 4}H` : `${props.min[1] + (idx % 4) * 15}`}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeLine = ({ center }: { center: Center }): ReactElement => {
  const [minMax, setMinMax] = useState<[number, number]>([0, 24]);
  const [ticks, setTicks] = useState<number>(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [resas, setResas] = useState<Reservation[]>([]);
  const handleDate = (d: Date) => {
    setDate(d);
  };
  useEffect(() => {
    const [xAxisTicks, min, max] = calculatexAxisSteps(center.services);
    setTicks(xAxisTicks ?? 0);
    // console.log(xAxisTicks);
    // console.log(getHoursAndMinutesFromMinutes(min ?? 0));
    // console.log(getHoursAndMinutesFromMinutes(max ?? 0));
    // alert(`${xAxisTicks} ${min} ${max}`);
    setMinMax([min ?? 0, max ?? 24]);

    const resasToday = reservations.filter((resa) => {
      // console.log(resa.date);
      return (
        resa.date.trim() == convertUtcToDateFormatStr(date ?? new Date()).trim()
      );
    });
    setResas(resasToday);
    // console.log(convertUtcToDateFormatStr(date ?? new Date()));
    // console.log(resas);
  }, [center, date]);

  return (
    <div>
      <div className="w-full overflow-x-auto px-5 text-xs">
        <div>
          {
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => handleDate(d ?? new Date())}
                className="rounded-md border"
              />
            </div>
          }
        </div>
        <div className="" id="timeline-header">
          {minMax[0] !== 0 && (
            <TimeLineHeader
              ticks={ticks * 4}
              min={getHoursAndMinutesFromMinutes(minMax[0])}
            />
          )}
        </div>
        <div id="timeline-body">
          {/* create the y center's services each services as a marketing_name */}
          {center?.services.map((service, idx) => {
            return (
              minMax[0] !== 0 && (
                <ServiceTimeLine
                  service={service}
                  reservations={resas}
                  min={getHoursAndMinutesFromMinutes(minMax[0])}
                  ticks={ticks * 4}
                  key={idx}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { TimeLine };
