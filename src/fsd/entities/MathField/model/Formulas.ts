import { SidebarItemsType } from "@/fsd/shared";

export const formulas: SidebarItemsType = [
  {
    id: "Form-factor",
    text: "Фактор формы",
    latex: "f:=\\frac{l_{d}}{h_{\\text{ср}}}",
  },
  {
    text: "Средняя толщина полосы",
    id: "Form-factor",
    latex: "h_\\text{ср}:=\\frac{h_0+h_1}{2}  ",
  },
  {
    text: "Форма в плане",
    id: "Form-factor",
    latex: "m:=\\frac{b_\\text{ср}}{l_\\text{d}}",
  },
  {
    text: "Высотная деформация",
    id: "Form-factor",
    nested: [
      {
        text: "Абсолютное обжатие",
        id: "Form-factor",
        latex: "\\Delta h := h_0 - h_1",
      },
      {
        text: "Истинное относительное обжатие",
        id: "Form-factor",
        latex: "e_h:=\\ln{\\frac{h_0}{h_1}}",
      },
      {
        text: "Условное относительное обжатие",
        id: "Form-factor",
        latex: "\\epsilon:=\\frac{\\delta h}{h_0}",
      },
      {
        text: "Коэффициент обжатия (обратный)",
        id: "Form-factor",
        latex: "\\eta=\\frac{h_1}{h_0}.",
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
        latex: "\\Delta b:=b_1-b_0",
      },
      {
        text: "Истинное относительное уширение",
        id: "Form-factor",
        latex: "e_b=\\ln{\\frac{b_1}{b_0}",
      },
      {
        text: "Условное относительное уширение",
        id: "Form-factor",
        latex: "Ϛ:=\\frac{\\Delta b}{b_0}",
      },
      {
        text: "Коэффициент уширения",
        id: "Form-factor",
        latex: "\\xi:=\\frac{b_1}{b_0}",
      },
      {
        text: "Величина поперечной деформации",
        id: "Form-factor",
        latex: "a:=\\frac{\\Delta b}{\\Delta h}",
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
        latex: "\\Delta l := l_1 - l_0",
      },
      {
        text: "Истинное относительное удлинение",
        id: "Form-factor",
        latex: "e_l := \\ln{\\frac{l_1}{l_0}}",
      },
      {
        text: "Условное относительное удлинение",
        id: "Form-factor",
        latex: "\\Theta := \\frac{\\Delta l}{l_0}",
      },
      {
        text: "Коэффициент вытяжки",
        id: "Form-factor",
        latex: "\\lambda := \\frac{l_1}{l_0}",
      },
      {
        text: "Для нескольких проходов",
        id: "Form-factor",
        latex: "\\lambda_\\text{ср}:=\\sqrt[n]{\\lambda_\\sum}",
      },
    ],
  },
  {
    text: "Задача: определить число проходов",
    id: "Form-factor",
    latex: "n:=\\frac{\\ln\\lambda_{\\sum}}{\\ln\\lambda_{\\text{ср}}}",
  },
  {
    text: "Взаимосвязь деформаций",
    id: "Form-factor",
    latex:
      "\\frac{h_{1}}{h_{0}}\\frac{b_{1}}{b_{0}}\\frac{l_{1}}{l_{0}}:=\\eta\\xi\\lambda:=1",
  },
  {
    text: "Формулы для расчета углов захвата",
    id: "Form-factor",
    nested: [
      {
        text: "Угол захвата",
        id: "Form-factor",
        latex: "\\cos\\alpha:=1-\\frac{\\Delta h}{2R}:=1-\\frac{\\Delta h}{D}",
      },
      {
        text: "Половина угла захвата",
        id: "Form-factor",
        latex: "\\sin\\frac{\\alpha}{2}:=\\sqrt\\frac{\\Delta h}{2D}",
      },
      {
        text: "С допущением (в радианах)",
        id: "Form-factor",
        latex: "\\alpha:=\\sqrt{\\frac{\\Delta h}{R}}",
      },
      {
        text: "С допущением (в градусах)",
        id: "Form-factor",
        latex:
          "\\alpha:=\\frac{180}{\\pi}\\sqrt{\\Delta h}{R}:=57,3\\sqrt{\\Delta h}{R}",
      },
      {
        text: "Абсолютное обжатие по углу и диаметру",
        id: "Form-factor",
        latex: "\\Delta h:=D(1-\\cos\\alpha):=D\\alpha^2",
      },
      {
        text: "С пружиной рабочей клети",
        id: "Form-factor",
        nested: [
          {
            text: "Угол захвата",
            id: "Form-factor",
            latex:
              "\\alpha_з:=\\sqrt{\\frac{h_0 - h}{R}}:=\\sqrt{\\Delta h + \\delta}{R}",
          },
          {
            text: "Косинус угла захвата",
            id: "Form-factor",
            latex:
              "\\cos(\\alpha_з):=1-\\frac{h_0 - h}{D}:=1-\\frac{\\Delta h + \\delta}{D}",
          },
          {
            text: "Половина угла захвата",
            id: "Form-factor",
            latex:
              "\\sin(\\frac{\\alpha_з}{2}):=\\sqrt{\\frac{h_0 - h}{2D}}:=\\sqrt{\\frac{\\Delta h + \\delta}{2D}}",
          },
        ],
      },
      {
        text: "Длина очага деформации с учетом угла захвата",
        id: "Form-factor",
        latex: "l_d:=\\sqrt{R\\Deltah}",
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
        latex: "\\nu:=\\frac{\\Delta h_{вн}}{\\Delta h}",
      },
      {
        text: "Длина очага деформации",
        id: "Form-factor",
        latex: "l_{dк}:=l_{d}\\sqrt{1-\\nu}",
      },
      {
        text: "Угол контакта",
        id: "Form-factor",
        latex: "\\alpha_к := \\alpha\\sqrt{1-\\nu}",
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
        latex: "R_с:=R\\frac{1+2cmP}{\\Delta hb_{ср}}",
      },
      {
        text: "Коэффициент m механических свойств матерала валков",
        id: "Form-factor",
        latex: "m:=\\frac{8(1-\\mu^2)}{\\pi E}",
      },
      {
        text: "Угол контакта с уч. сплющивания",
        id: "Form-factor",
        latex: "\\alpha_{с}:=\\sqrt{\\frac{\\Delta h}{R_с}}",
      },
    ],
  },
  {
    text: "Площадь контактной поверхности",
    id: "Form-factor",
    latex: "F_к:=b\\sqrt{R\\Delta h}",
  },
  {
    text: "Среднее контактное давление",
    id: "Form-factor",
    latex: "p_{ср}:=\\frac{P}{F_к}",
  },
  {
    text: "Усилие прокатки",
    id: "Form-factor",
    latex: "P:=p_\\text{ср}F_к",
  },
  {
    text: "Давление по А.И. Целикову",
    id: "Form-factor",
    nested: [
      {
        text: "Усилие прокатки",
        id: "Form-factor",
        latex:
          "\\frac{h_\\gamma}{h_1}:={\\{\\frac{1+\\sqrt{1+(\\delta^2 -1)(\\frac{h_0}{h_1})}}{\\delta + 1}\\}}^{\\frac{1}{\\delta}} \\\\ " +
          "P:=\\sigma_T^*bl_d\\frac{2h_1}{\\Delta h(\\delta -1)}\\frac{h_\\gamma}{h_1}[\\frac{h_\\gamma^\\delta}{h_1}-1]",
      },
      {
        text: "Среднее контактное давление",
        id: "Form-factor",
        latex:
          "\\frac{h_\\gamma}{h_1}:={\\{\\frac{1+\\sqrt{1+(\\delta^2 -1)(\\frac{h_0}{h_1})}}{\\delta + 1}\\}}^{\\frac{1}{\\delta}} \\\\ " +
          "p_{ср}:=\\sigma_T^*\\frac{2h_1}{\\Delta h(\\delta -1)}\\frac{h_\\gamma}{h_1}[\\frac{h_\\gamma^\\delta}{h_1}-1]",
      },
      {
        text: "Учет натяжения",
        id: "Form-factor",
        latex: "p_{ср.н}:=p_{ср}[1-\\frac{q_0+q_q}{2p_{ср}}]",
      },
      {
        text: "Узкие полосы",
        id: "Form-factor",
        latex:
          "n_в:=0,67+0,15\\frac{b_{ср}}{l_d} - 0,017\\frac{b_{ср}^2}{l_d} \\\\ " +
          "p_{ср.у}:=p_{ср}n_в",
      },
    ],
  },
  {
    text: "Давление по А.П. Чекмареву",
    id: "Form-factor",
    nested: [
      {
        text: "Среднее контактное давление",
        id: "Form-factor",
        latex:
          "p_{ср}:=\\sigma_T^*\\{1+\\frac{Rd}{2h_{ср}}[f_\\sigma-\\alpha(\\frac{1}{3}+\\frac{\\alpha}{4f_\\sigma})]\\}",
      },
    ],
  },
];
