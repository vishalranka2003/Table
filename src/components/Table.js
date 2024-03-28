import React from "react";
import TableRow from "./TableRow"; // assuming TableRow component is in a separate file

const Table = () => {
  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="flex font-bold border border-red-500"></div>

      {/* Table Rows */}
      <TableRow
        title="SRIDEVI"
        jodi="248-43-490"
        startTime="11:35 AM"
        endTime="12:35 PM"
      />
      <TableRow
        title="KALYAN MORNING"
        jodi="589-20-280"
        startTime="11:00 AM"
        endTime="12:02 PM"
      />
      <TableRow
        title="PADMAVATI"
        jodi="330-62-336"
        startTime="11:40 AM"
        endTime="12:42 PM"
      />
      <TableRow
        title="MADHURI"
        jodi="344-16-268"
        startTime="11:45 AM"
        endTime="12:45 PM"
      />
      <TableRow
        title="SRIDEVI MORNING"
        jodi="289-90-389"
        startTime="09:30 AM"
        endTime="10:30 AM"
      />
      <TableRow
        title="MAHARANI"
        jodi="267-51-489"
        startTime="12:15 PM"
        endTime="01:15 PM"
      />
      <TableRow
        title="MUMBAI MORNING"
        jodi="120-32-345"
        startTime="01:30 PM"
        endTime="02:30 PM"
      />
      <TableRow
        title="PRABHAT"
        jodi="580-39-469"
        startTime="01:30 PM"
        endTime="03:00 PM"
      />
      <TableRow
        title="KARNATAKA DAY"
        jodi="157-32-246"
        startTime="10:00 AM"
        endTime="11:00 AM"
      />
      <TableRow
        title="TIME BAZAR MORNING"
        jodi="149-48-116"
        startTime="10:00 AM"
        endTime="11:00 AM"
      />
    </div>
  );
};

export default Table;
