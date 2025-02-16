import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Rating from "./Rating";
import ThankYou from "./ThankYou";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rating setRating={setRating} />} />
        <Route
          path="/thank-you"
          element={rating ? <ThankYou rating={rating} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
