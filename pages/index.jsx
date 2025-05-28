import Slider from '@/components/Slider'
import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { FaPlus } from "react-icons/fa6";
import { startOfWeek, addWeeks, subWeeks, addDays, format, addMinutes } from "date-fns";
import { IoIosArrowBack } from "react-icons/io";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { IoIosArrowForward } from "react-icons/io";




const index = () => {

  const [data, setData] = useState([]);
  const [celldata, setcelldata] = useState({
    time: "",
    day: ""
  })

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('bookings')) || [];
    setData(savedData);
     setFormData((prev) => ({
    ...prev,
    date: celldata.day,
    time: celldata.time
  }));
  }, [celldata]);

  function formatTimeString(time) {
  const [h, m] = time.split(":");
  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
}




  function getBookingForSlot(date, time) {
    return data.find((b) => b.date === date && b.time === time);
  }



  function getCurrentWeekDates() {
    const start = new Date();
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(start.setDate(diff));

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return {
        date: date.toISOString().split("T")[0],
        dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
      };
    });
  }



  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const hours = Array.from({ length: 15 }, (_, i) => {
  const hour = i + 6;
  return `${hour.toString().padStart(2, '0')}:00`; 
});
  const weekDates = getCurrentWeekDates();



  const [formData, setFormData] = useState({
    customer: "",
    service: "",
    date: celldata.day,
    time: celldata.time,
    status: "Need Approval",
    deposit: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push(formData);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    setData(bookings)
    alert("Booking saved to localStorage ✅");
    setFormData({
      customer: "",
      service: "",
      date: "",
      time: "",
      status: "Need Approval",
      deposit: "",
    });
  };

  const handleEase = (hours, date) => {
    const formatedDate = formatTimeString(hours)
    setcelldata({
      time: formatedDate,
      day: date
    })
  }


  return (
    <>
    <Head>
      <title>BookT-HomePage</title>
    </Head>
      <div className='flex'>
        <Slider className='min-w-96' />
        <main className='w-full bg-white' >
          <div id='Upper-Layer' className='flex  justify-between align-middle items-center' >

            <form className='min-w-full'>
              <label for="search" class="mb-2 text-sm font-medium  sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50  dark:placeholder-gray-400 dark:text-white  border-x-0 border-y-1" placeholder="Search" required />

              </div>
            </form>




          </div>
          <div className='flex mb-4 justify-between mt-4 mx-2' >
            <h1 className='font-bold'>
              Bestillinger
            </h1>
            <div className='flex gap-2 items-center justify-end'>


              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    type="button"
                    className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Ny Booking <span className="mx-2"><FaPlus /></span>
                  </button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Add Booking</AlertDialogTitle>
                    <AlertDialogDescription>
                      Fill in the booking details below:
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  {/* Booking Form */}
                  <form className="space-y-4">
                    <input
                      type="text"
                      name="customer"
                      placeholder="Customer Name"
                      className="w-full border rounded p-2"
                      value={formData.customer}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="service"
                      placeholder="Service"
                      className="w-full border rounded p-2"
                      value={formData.service}
                      onChange={handleChange}
                    />
                    <input
                      type="date"
                      name="date"
                      className="w-full border rounded p-2"
                      value={formData.date}
                      onChange={handleChange}
                    />
                    <input
                      type="time"
                      name="time"
                      className="w-full border rounded p-2"
                      value={formData.time}
                      onChange={handleChange}
                    />
                    <select
                      name="status"
                      className="w-full border rounded p-2"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="Need Approval">Need Approval</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="In Progress">In Progress</option>
                    </select>
                    <input
                      type="number"
                      name="deposit"
                      placeholder="Deposit (optional)"
                      className="w-full border rounded p-2"
                      value={formData.deposit}
                      onChange={handleChange}
                    />
                  </form>

                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                      Save Booking
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>


            </div>
          </div>
          <div className='flex justify-between items-center mx-4'>
            <div className="flex">
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Daglig visning</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ugentlig</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Manedlig</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ">Liste</button>
            </div>

            <div className="flex gap-4">
              <form className="max-w-sm mx-auto">

                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option defaultValue>Alle tjanester</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              <form className="max-w-sm mx-auto">

                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option defaultValue>Alle stabe</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>

            </div>

          </div>
          <div className='mt-5 flex items-center gap-2'>
            <span className='flex items-center font-bold text-xl mx-3 mt-4'>
              Week of {format(currentWeekStart, "MMM d")} –{" "}
              {format(addDays(currentWeekStart, 6), "MMM d")}
              <div className='flex items-center mx-4'>
                <button
                  type="button"
                  onClick={() => setCurrentWeekStart(subWeeks(currentWeekStart, 1))}
                  className="text-black bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <IoIosArrowBack />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentWeekStart(addWeeks(currentWeekStart, 1))}
                  className="text-black bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <IoIosArrowForward />
                </button>

              </div>
            </span>

          </div>

          <div className="mt-4">
            {
              data && (
                <div className="grid grid-cols-8 border">
                  <div className="bg-gray-100 p-2 font-bold">Time</div>
                  {weekDates.map((d) => (
                    <div key={d.value} className="bg-gray-100 p-2 font-bold text-center">
                      {d.date}<br />{d.dayName}
                    </div>
                  ))}

                  {hours.map((hour) => (
                    <React.Fragment key={hour}>
                      <div className="border-t p-2 text-sm font-medium bg-white">{hour}</div>
                      {weekDates.map((day) => {
                        const booking = getBookingForSlot(day.date, hour);

                        return (
                          <div key={day.value + hour} className="border h-20 p-1 relative">
                            {booking ? (
                              <div className="bg-blue-500 text-white text-xs rounded p-2 shadow">
                                <div className="font-bold">{booking.customer}</div>
                                <div className="text-[11px]">{booking.service}</div>
                                <div className="text-[10px]">
                                  {booking.status === "Confirmed" ? "✔️"
                                    : booking.status === "In Progress" ? "⏳"
                                      : "❌"}
                                </div>
                              </div>
                            ) :
                              <AlertDialog>
                                <AlertDialogTrigger asChild>

                                  <span className="mx-2 cursor-pointer" onClick={() => handleEase(hour, day.date)} ><FaPlus /></span>
                                </AlertDialogTrigger>

                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Add Booking</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Fill in the booking details below:
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>

                                  {/* Booking Form */}
                                  <form className="space-y-4">
                                    <input
                                      type="text"
                                      name="customer"
                                      placeholder="Customer Name"
                                      className="w-full border rounded p-2"
                                      value={formData.customer}
                                      onChange={handleChange}
                                    />
                                    <input
                                      type="text"
                                      name="service"
                                      placeholder="Service"
                                      className="w-full border rounded p-2"
                                      value={formData.service}
                                      onChange={handleChange}
                                    />
                                    <input
                                      type="date"
                                      name="date"
                                      className="w-full border rounded p-2"
                                      value={formData.date}
                                      onChange={handleChange}
                                    />
                                    <input
                                      type="time"
                                      name="time"
                                      className="w-full border rounded p-2"
                                      value={formData.time}
                                      onChange={handleChange}
                                    />
                                    <select
                                      name="status"
                                      className="w-full border rounded p-2"
                                      value={formData.status}
                                      onChange={handleChange}
                                    >
                                      <option value="Need Approval">Need Approval</option>
                                      <option value="Confirmed">Confirmed</option>
                                      <option value="In Progress">In Progress</option>
                                    </select>
                                    <input
                                      type="number"
                                      name="deposit"
                                      placeholder="Deposit (optional)"
                                      className="w-full border rounded p-2"
                                      value={formData.deposit}
                                      onChange={handleChange}
                                    />
                                  </form>

                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleSubmit}>
                                      Save Booking
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            }
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              )
            }



          </div>

        </main>
      </div>
    </>
  )
}

export default index