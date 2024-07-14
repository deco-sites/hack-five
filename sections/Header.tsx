type Type = "dark" | "light";

export interface Nav {
  navigation?: {
    label?: string;
    url?: string;
  }[];
}

export const ColorType: Record<Type, string> = {
  dark: "base-content",
  light: "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  background: "bg-",
  color: "text-",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
    "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
    "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Haader({
  navigation = [
    { label: "Home", url: "/" },
    { label: "About us", url: "/" },
    { label: "Princing", url: "/" },
    { label: "Contact", url: "/" },
  ],
}: Nav) {
  return (
    <nav class="w-full py-2 bg-black">
      <div class="flex gap-8 justify-center items-center text-white w-full px-4">
        {navigation.map((link) => (
          <a class="hover:opacity-80 transition duration-300 ease-in-out font-bold" href={link.url}>{link.label}</a>
        ))}
      </div>
    </nav>
  );
}
