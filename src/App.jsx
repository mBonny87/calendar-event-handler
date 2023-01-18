import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./App.css";
import { useFullCalendar } from "./useFullCalendar";

function App() {
  const [data, loading] = useFullCalendar();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={data}
      eventTimeFormat={{
        hour: "numeric",
        minute: "2-digit",
        meridiem: "short",
      }}
      // eventClick={(a) => console.log(a)}
      // eventDisplay={"block"}
    />
  );
}

export default App;
