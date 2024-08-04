import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section id="clients" className="flex justify-center items-center">
      <div className="flex flex-wrap w-full">
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className="flex flex-1 sm:min-w-[192px] min-w-[120px] m-5"
            >
              <img
                src={client.logo}
                className="sm:w-[192px] w-[100px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
