import Header from "./components/header";
import Aside from "./components/aside";
import NewBookings from "./components/newbookings";
import BookingDetails from "./components/bookingDetails";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container flex gap-2">
        <Aside />
        <div>
          <NewBookings />
          <BookingDetails />
        </div>
      </div>
    </>
  );
}

export default App;
