import { SidebarItemsType } from "@/fsd/shared";

export const formulas: SidebarItemsType = [
  {
    id: "Form-factor",
    text: "Фактор формы",
    latex: "f\\coloneq\\frac{l_{d}}{h_{\\text{ср}}}",
  },
  {
    text: "Средняя толщина полосы",
    id: "Form-factor",
    latex: "h_\\text{ср}\\coloneq\\frac{h_0+h_1}{2}  ",
  },
  {
    text: "Форма в плане",
    id: "Form-factor",
    latex: "m\\coloneq\\frac{b_\\text{ср}}{l_\\text{d}}",
  },
  {
    text: "Высотная деформация",
    id: "Form-factor",
    nested: [
      {
        text: "Абсолютное обжатие",
        id: "Form-factor",
        latex: "\\Delta h \\coloneq h_0 - h_1",
      },
      {
        text: "Истинное относительное обжатие",
        id: "Form-factor",
        latex: "e_h\\coloneq\\ln{\\frac{h_0}{h_1}}",
      },
      {
        text: "Условное относительное обжатие",
        id: "Form-factor",
        latex: "\\epsilon\\coloneq\\frac{\\delta h}{h_0}",
      },
      {
        text: "Коэффициент обжатия (обратный)",
        id: "Form-factor",
        latex: "\\eta\\coloneq\\frac{h_1}{h_0}.",
      },
    ],
  },
  {
    text: "Поперечная деформация",
    id: "Form-factor",
    nested: [
      {
        text: "Абсолютное уширение",
        id: "Form-factor",
        latex: "\\Delta b\\coloneq b_1-b_0",
      },
      {
        text: "Истинное относительное уширение",
        id: "Form-factor",
        latex: "e_b\\coloneq\\ln{\\frac{b_1}{b_0}",
      },
      {
        text: "Условное относительное уширение",
        id: "Form-factor",
        latex: "Ϛ\\coloneq\\frac{\\Delta b}{b_0}",
      },
      {
        text: "Коэффициент уширения",
        id: "Form-factor",
        latex: "\\xi\\coloneq\\frac{b_1}{b_0}",
      },
      {
        text: "Величина поперечной деформации",
        id: "Form-factor",
        latex: "a\\coloneq\\frac{\\Delta b}{\\Delta h}",
      },
    ],
  },
  {
    text: "Продольная деформация",
    id: "Form-factor",
    nested: [
      {
        text: "Абсолютное удлинение",
        id: "Form-factor",
        latex: "\\Delta l \\coloneq l_1 - l_0",
      },
      {
        text: "Истинное относительное удлинение",
        id: "Form-factor",
        latex: "e_l \\coloneq \\ln{\\frac{l_1}{l_0}}",
      },
      {
        text: "Условное относительное удлинение",
        id: "Form-factor",
        latex: "\\Theta \\coloneq \\frac{\\Delta l}{l_0}",
      },
      {
        text: "Коэффициент вытяжки",
        id: "Form-factor",
        latex: "\\lambda \\coloneq \\frac{l_1}{l_0}",
      },
      {
        text: "Для нескольких проходов",
        id: "Form-factor",
        latex: "\\lambda_\\text{ср}\\coloneq\\sqrt[n]{\\lambda_\\sum}",
      },
    ],
  },
  {
    text: "Задача: определить число проходов",
    id: "Form-factor",
    latex: "n\\coloneq\\frac{\\ln\\lambda_{\\sum}}{\\ln\\lambda_{\\text{ср}}}",
  },
  {
    text: "Взаимосвязь деформаций",
    id: "Form-factor",
    latex:
      "\\frac{h_{1}}{h_{0}}\\frac{b_{1}}{b_{0}}\\frac{l_{1}}{l_{0}}:=\\eta\\xi\\lambda\\coloneq1",
  },
  {
    text: "Формулы для расчета углов захвата",
    id: "Form-factor",
    nested: [
      {
        text: "Угол захвата",
        id: "Form-factor",
        latex:
          "\\cos\\alpha\\coloneq 1-\\frac{\\Delta h}{2R}\\coloneq 1-\\frac{\\Delta h}{D}",
      },
      {
        text: "Половина угла захвата",
        id: "Form-factor",
        latex: "\\sin\\frac{\\alpha}{2}\\coloneq\\sqrt\\frac{\\Delta h}{2D}",
      },
      {
        text: "С допущением (в радианах)",
        id: "Form-factor",
        latex: "\\alpha\\coloneq\\sqrt{\\frac{\\Delta h}{R}}",
      },
      {
        text: "С допущением (в градусах)",
        id: "Form-factor",
        latex:
          "\\alpha\\coloneq\\frac{180}{\\pi}\\sqrt{\\Delta h}{R}\\coloneq 57,3\\sqrt{\\Delta h}{R}",
      },
      {
        text: "Абсолютное обжатие по углу и диаметру",
        id: "Form-factor",
        latex: "\\Delta h\\coloneq D(1-\\cos\\alpha)\\coloneq D\\alpha^2",
      },
      {
        text: "С пружиной рабочей клети",
        id: "Form-factor",
        nested: [
          {
            text: "Угол захвата",
            id: "Form-factor",
            latex:
              "\\alpha_з\\coloneq\\sqrt{\\frac{h_0 - h}{R}}\\coloneq\\sqrt{\\Delta h + \\delta}{R}",
          },
          {
            text: "Косинус угла захвата",
            id: "Form-factor",
            latex:
              "\\cos(\\alpha_з)\\coloneq 1-\\frac{h_0 - h}{D}\\coloneq 1-\\frac{\\Delta h + \\delta}{D}",
          },
          {
            text: "Половина угла захвата",
            id: "Form-factor",
            latex:
              "\\sin(\\frac{\\alpha_з}{2})\\coloneq\\sqrt{\\frac{h_0 - h}{2D}}\\coloneq\\sqrt{\\frac{\\Delta h + \\delta}{2D}}",
          },
        ],
      },
      {
        text: "Длина очага деформации с учетом угла захвата",
        id: "Form-factor",
        latex: "l_d\\coloneq\\sqrt{R\\Deltah}",
      },
    ],
  },
  {
    text: "Внеконтактная деформация",
    id: "Form-factor",
    nested: [
      {
        text: "Высотная утяжка",
        id: "",
        latex: "\\nu\\coloneq\\frac{\\Delta h_{вн}}{\\Delta h}",
      },
      {
        text: "Длина очага деформации",
        id: "Form-factor",
        latex: "l_{dк}\\coloneql_{d}\\sqrt{1-\\nu}",
      },
      {
        text: "Угол контакта",
        id: "Form-factor",
        latex: "\\alpha_к \\coloneq \\alpha\\sqrt{1-\\nu}",
      },
    ],
  },
  {
    text: "Сплющивание валков",
    id: "Form-factor",
    nested: [
      {
        text: "Радиус кривизны сплющенной поверхности валков",
        id: "Form-factor",
        latex: "R_с\\coloneq R\\frac{1+2cmP}{\\Delta hb_{ср}}",
      },
      {
        text: "Коэффициент m механических свойств матерала валков",
        id: "Form-factor",
        latex: "m\\coloneq\\frac{8(1-\\mu^2)}{\\pi E}",
      },
      {
        text: "Угол контакта с уч. сплющивания",
        id: "Form-factor",
        latex: "\\alpha_{с}\\coloneq\\sqrt{\\frac{\\Delta h}{R_с}}",
      },
    ],
  },
  {
    text: "Площадь контактной поверхности",
    id: "Form-factor",
    latex: "F_к\\coloneq b\\sqrt{R\\Delta h}",
  },
  {
    text: "Среднее контактное давление",
    id: "Form-factor",
    latex: "p_{ср}\\coloneq\\frac{P}{F_к}",
  },
  {
    text: "Усилие прокатки",
    id: "Form-factor",
    latex: "P\\coloneq p_\\text{ср}F_к",
  },
  {
    text: "Давление по А.И. Целикову",
    id: "Form-factor",
    nested: [
      {
        text: "Усилие прокатки",
        id: "Form-factor",
        isCalcAvail: false,
        latex:
          "\\frac{h_\\gamma}{h_1}\\coloneq {\\{\\frac{1+\\sqrt{1+(\\delta^2 -1)(\\frac{h_0}{h_1})}}{\\delta + 1}\\}}^{\\frac{1}{\\delta}} \\\\ " +
          "P\\coloneq\\sigma_T^*bl_d\\frac{2h_1}{\\Delta h(\\delta -1)}\\frac{h_\\gamma}{h_1}[\\frac{h_\\gamma^\\delta}{h_1}-1]",
      },
      {
        text: "Среднее контактное давление",
        isCalcAvail: false,
        id: "Form-factor",
        latex:
          "\\frac{h_\\gamma}{h_1}\\coloneq {\\{\\frac{1+\\sqrt{1+(\\delta^2 -1)(\\frac{h_0}{h_1})}}{\\delta + 1}\\}}^{\\frac{1}{\\delta}} \\\\ " +
          "p_{ср}\\coloneq\\sigma_T^*\\frac{2h_1}{\\Delta h(\\delta -1)}\\frac{h_\\gamma}{h_1}[\\frac{h_\\gamma^\\delta}{h_1}-1]",
      },
      {
        text: "Учет натяжения",
        isCalcAvail: false,
        id: "Form-factor",
        latex: "p_{ср.н}\\coloneq p_{ср}[1-\\frac{q_0+q_q}{2p_{ср}}]",
      },
      {
        text: "Узкие полосы",
        isCalcAvail: false,
        id: "Form-factor",
        latex:
          "n_в\\coloneq 0,67+0,15\\frac{b_{ср}}{l_d} - 0,017\\frac{b_{ср}^2}{l_d} \\\\ " +
          "p_{ср.у}\\coloneq p_{ср}n_в",
      },
    ],
  },
  {
    text: "Давление по А.П. Чекмареву",
    id: "Form-factor",
    nested: [
      {
        text: "Среднее контактное давление",
        isCalcAvail: false,
        id: "Form-factor",
        latex:
          "p_{ср}\\coloneq\\sigma_T^*\\{1+\\frac{Rd}{2h_{ср}}[f_\\sigma-\\alpha(\\frac{1}{3}+\\frac{\\alpha}{4f_\\sigma})]\\}",
      },
    ],
  },
];
