import React from "react";
import { Link } from "react-router-dom";

const Baner = () => {
  return (
    <div className="w-full bg-black">
      <p className="text-white text-center py-2 font-thin text-sm">
        Sign up and get 20% off to your first order.
        <Link className="font-light underline underline-offset-4"> Sign Up Now</Link>
      </p>
    </div>
  );
};

export default Baner;
