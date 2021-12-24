import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Switch from "@mui/material/Switch";
// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#06b6d4",
//     },
//   },
// });

function Navbar() {
  const [enabled, setEnabled] = useState(false);

  if (process.browser) {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      className="flex mt-5 mx-2 items-center absolute right-0"
    >
      <SunIcon className="h-5" />
      <div className="items-center">
        <Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
      </div>
      <MoonIcon className="h-5" />
    </div>
  );
}

export default Navbar;
