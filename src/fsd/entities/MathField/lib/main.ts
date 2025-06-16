import { Latex } from "@/fsd/shared";
import { MathfieldElement } from "mathlive";
import { RefObject, useEffect } from "react";

export function useCustomPlaceholder(
  placeholder: string,
  mathRef: RefObject<MathfieldElement | null>
) {
  useEffect(() => {
    const el = mathRef.current;
    if (!el) return;

    if (!Latex.toggleDispLines(el.value, false)) {
      console.log("set initial value");
      el.setValue(placeholder, {
        silenceNotifications: true,
      });
    }

    const onFocus = () => {
      console.log("onFocus");
      console.log(Latex.toggleDispLines(el.value, false));
      console.log(placeholder);
      if (Latex.toggleDispLines(el.value, false) === placeholder) {
        console.log("onFocus setValue");
        el.setValue("", {
          silenceNotifications: true,
        });
      }
    };
    const onBlur = () => {
      console.log("onBlur");
      console.log("onBlur el.value", el.value);
      console.log(
        "onBlur el.value after toggleDispLines",
        Latex.toggleDispLines(el.value, false)
      );
      if (!Latex.toggleDispLines(el.value, false)) {
        console.log("onBlue setValue");
        el.setValue(placeholder, {
          silenceNotifications: true,
        });
      }
    };

    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);

    return () => {
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
    };
  }, [mathRef.current]);
}
