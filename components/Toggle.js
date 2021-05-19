import { useState } from "react";
import { Switch } from "@headlessui/react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

function Toggle() {
  const [enabled, setEnabled] = useState(false);

  if (process.browser) {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-400" : "bg-gray-400"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}

export default Toggle;
