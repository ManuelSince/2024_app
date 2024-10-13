"use client";
import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import type { Service } from "~/app/models/service";
const cleanUp = (service: Service) => {
  // console.log(service.marketing_name);
};
const Modal = (props: { isOpen: boolean; service: Service }): ReactElement => {
  const { isOpen, service } = props;
  const [showModal, setShowModal] = useState(false);
  const [space, setSpace] = useState<Service>({});
  useEffect(() => {
    setShowModal(isOpen);
    setSpace(service);
    return cleanUp(service);
  }, [isOpen, service]);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                  <h3 className="font=semibold text-3xl text-blue-900">
                    {space.marketing_name}
                  </h3>
                  <button
                    className="float-right border-0 bg-transparent text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 block h-6 w-6 rounded-full bg-gray-400 py-0 text-xl text-black">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <h1>Hello from modal</h1>
                </div>
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-yellow-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-yellow-700"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
