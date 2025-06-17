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
      el.setValue(placeholder, {
        silenceNotifications: true,
      });
    }

    const onFocus = () => {
      if (Latex.toggleDispLines(el.value, false) === placeholder) {
        el.setValue("", {
          silenceNotifications: true,
        });
      }
    };
    const onBlur = () => {
      if (!Latex.toggleDispLines(el.value, false)) {
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
